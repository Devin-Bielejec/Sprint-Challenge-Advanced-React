import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: "Hi"
    }
  }

  componentDidMount() {
    axios.get("http://localhost:5000/api/players")
    .then(res => console.log(res.data))
    .catch(err => console.log("Error:", err))
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
