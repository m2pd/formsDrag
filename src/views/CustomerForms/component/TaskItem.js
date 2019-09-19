import React, { Component } from 'react';

class TaskItem extends Component{

    onDelete = () =>{
        this.props.onDelete(this.props.task.id)
    }
    // onUpdate =() =>{
    //     this.props.onUpdate(this.props.task.id)
    // }
    render(){
        const {task, index} = this.props;
        return(
            <tr>
                    <td>{index+1}</td>
                    <td>{task.dataField}</td>
                    <td>{task.name}</td>    
                    <td>Một Dòng(textbox)</td>
                    <td>
                        <button
                         className="btn btn-warning"
                                type="button"
                                >
                          <span className="fas fa-user-cog" ></span>Sữa
                        </button> 
                        &nbsp;
                        
                        <button 
                          className="btn btn-danger" 
                          type="button"
                          onClick={this.onDelete}>                    
                          <span className="fas fa-user-trash"
                                 ></span>Xóa
                        </button> 
                    </td>
            </tr>
            
        
        );
    }
}
export default TaskItem;