import React, { Component } from 'react';
import './App.css';
import NewTasks from './Components/NewTasks'
import Lists from './Components/Lists'

class App extends Component{
  constructor(){
    super()
    this.state={
      taskArray: [],
    }

    this.AddTask = this.AddTask.bind(this)
  }

  AddTask(task){
    this.setState({
      taskArray: [...this.state.taskArray, task]
    })

  }

  render(){
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <NewTasks AddTask={this.AddTask}/>
        <Lists taskArray={this.state.taskArray}/> 
      </div>
    )
  }
}

export default App;