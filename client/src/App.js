import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import { runInThisContext } from 'vm';

//Component Imports
import { PlayersComponent } from "./components/PlayersComponent";

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: "Hi",
      players: null
    }
  }

  componentDidMount() {
    axios.get("http://localhost:5000/api/players")
    .then(res => {
      this.setState({players: res.data});
    })
    .catch(err => console.log("Error:", err))
  }

  render() {
    if (this.state.players === null) {return <div>Loading</div>}
    else {
    return(
      <div className="app">
        <h1>{this.state.title}</h1>
        <PlayersComponent players={this.state.players}/>
      </div>
    )
    }
  } 
}

export default App;
