import React, { Component } from 'react';
import TaskItem from './TaskItem';

class TaskList extends Component{
    render(){
      const {tasks} = this.props;
      const tasksElement = tasks.map( (task,index)=>{
        return <TaskItem
            key={task.id}
            index={index}
            task={task}
            onDelete = {this.props.onDelete}
            // onUpdate={this.props.onUpdate}
             />
      })
        return(
            <table className="table table-hover table-bordered text-center">
                <thead>
                  <tr>
                    <th>Vị trí</th>
                    <th>Trường Dữ Liệu</th>
                    <th>Tiêu Đề</th>
                    <th>Loại dữ liệu</th>
                    <th> </th>
                  </tr>
                </thead>
                <tbody>
                    {tasksElement}
                </tbody>
              </table>
        )
    }
}
export default TaskList;