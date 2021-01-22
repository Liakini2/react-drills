import React, {Component} from 'react'
import ToDo from './ToDo'

class List extends Component{
    render(){
        let taskArray = this.props.taskArray.map((element, index)=>{
            return <ToDo key={index} task={element} />
        })
        return(
            <div>
                {taskArray}
            </div>
        )
    }
}

export default List