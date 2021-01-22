import React, {Component} from 'react'

class NewTask extends Component{
    constructor(){
        super()
        this.state={
            input: ''
        }
        this.AddTaskTwo = this.AddTaskTwo.bind(this)
    }

    UpdateUserInput(value){
        this.setState({
            input: `${value}`
        })
    }

    AddTaskTwo(){
        this.props.AddTask(this.state.input)
        this.setState({
            input: ''
        })

    }

    render(){
        return(
            <div>
                <input
                value={this.state.input}
                onChange={(e)=>{this.UpdateUserInput(e.target.value)}} 
                placeHolder='Enter new task'/>
                <button onClick={this.AddTaskTwo}>Add Task</button>
            </div>
        )
    }
}

export default NewTask