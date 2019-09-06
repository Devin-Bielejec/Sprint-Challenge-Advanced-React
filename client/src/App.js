import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import { runInThisContext } from 'vm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: "Hi",
      players: [{name: "Devin", country: "USA"}]
    }
  }

  componentDidMount() {
    axios.get("http://localhost:5000/api/players")
    .then(res => {
      console.log(res.data);
      this.setState({players: res.data});
    })
    .catch(err => console.log("Error:", err))
  }

  render() {
    return(
      <div>
        <h1>{this.state.title}</h1>
        <h2>{this.state.players[0].name}</h2>
      </div>
    )
    
  } 
}

export default App;
