import React, { Component } from 'react';
import TaskList from './component/TaskList';
import Control from './component/Control'


class CustomerForms extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,

      tasks:[]
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }
  componentWillMount(){
    if(localStorage && localStorage.getItem('tasks')){
        let tasks = JSON.parse(localStorage.getItem('tasks'));
        this.setState({
            tasks: tasks
        })
    }
  }
  random(){
    return Math.floor( (1+Math.random()) * 0x10000).toString(16).substring(1);
  }
  generateID(){
      return this.random() + this.random() + "-" + this.random()
      + this.random() + "-" +this.random() + "-" 
      + this.random() + this.random() + "=" +this.random()
  } 
  onChange = (data) =>{
    const {tasks} = this.state;
    if(data.id === ""){
      data.id = this.generateID();
      tasks.push(data);
    }
    this.setState({
      tasks:tasks
    })
    localStorage.setItem('tasks',JSON.stringify(tasks))

  }
  onDelete = (id) =>{
    let {tasks} =  this.state;
    let index = this.findIndex(id);
    if(index !== -1 ){
      tasks.splice(index,1)
      this.setState({
          tasks: tasks
      });
      localStorage.setItem('tasks', JSON.stringify(tasks))
    }
   
  }
  findIndex = (id) =>{
    let {tasks} = this.state;
    let result = -1;
    tasks.forEach( (task,index) =>{
      if(task.id === id){
        result = index;
      }
    });
    return result;
  } 
  render() {
    const {tasks} = this.state;

    return (
      <div className="animated fadeIn">
        .<div className="container">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12"> 
                <TaskList
                  tasks={tasks}
                  onDelete = {this.onDelete}
                  onUpdate = {this.onUpdate} />
            </div>
         </div>
                <Control 
                onChange ={this.onChange} />
      </div>
    );
  }
}

export default CustomerForms;
