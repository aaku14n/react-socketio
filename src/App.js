import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { subscribeToTimer , submessage ,sendMessage} from './api';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timestamp: 'no timestamp yet',
      message:'You havnt enter any thing'
    };
    subscribeToTimer((err, timestamp) => this.setState({ 
      timestamp 
    }));
    submessage((err, message) =>{
      console.log(message);
      this.setState({message})
    })

  }
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="App">
      <p className="App-intro">
      This is the timer value: {this.state.timestamp}
      </p>
    </div>
    <div className="message">
      <input type="text" onChange={e=>{sendMessage(e.target.value)}}/> <br />
      {this.state.message}
      </div>
      </div>
    );
  }
}

export default App;
