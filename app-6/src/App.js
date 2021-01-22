import React, { Component } from 'react';
import './App.css';
import ToDo from './Components/ToDo'


class App extends Component{
  constructor(){
    super()
    this.state={
      taskArray: [],
      input: '',
    }
    this.AddTask = this.AddTask.bind(this)
  }

  UpdateUserInput(value){
    this.setState({
      input: value
    })
  }

  AddTask(){
    this.setState({
      taskArray: [...this.state.taskArray, ...this.state.input],
      input: ""
    })
  }

  render(){
    let taskArray = this.state.taskArray.map((element, index)=>
    {return <ToDo key={index} task={element}/>
  })


    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <div>

          <input 
          value={this.state.input}
          placeholder='Enter new task'
          onChange={(e)=>{this.UpdateUserInput(e.target.value)}}
          />
          
          <button
          onClick={this.AddTask}>
            Add Task
          </button>
        
        </div>

        <div>
          <br></br>
          {taskArray}
        </div>
      
      </div>
    )
  }
}

export default App;
