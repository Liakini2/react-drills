import React, { Component } from 'react';
import './App.css';
import ChildComponent from './Components/ChildComponent'

class App extends Component{
  render(){
    return (
      <div className="App">
        <ChildComponent url={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWe0N1sEYGKiSzDugXYdriO1IikKwzNsaMSQ&usqp=CAU'} urltwo={'https://pics.me.me/programmers-while-coding-ndianfunnypcture-com-indtan-m-indian-oindianfunnypicture-com-i-dont-35571594.png'}/>
      </div>
    );
  }
}

export default App;
