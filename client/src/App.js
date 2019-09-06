import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: "Hi"
    }
  }

  render() {
    return(
      <div>
        <h1>{this.state.title}</h1>
      </div>
    )
    
  } 
}

export default App;
