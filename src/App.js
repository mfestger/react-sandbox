import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        }

componentWillMount() {
    this.setState({
        message1: "Welcome to Mike's first React page.",
        message2: "Let's try some things."
})
}

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

        </div>
          <p className="App-intro">
              <h2>Hello, World</h2>
              {this.state.message1}
          </p>
          <p className="App-intro">
              {this.state.message2}
          </p>
          <img id="dumb-meme" src="http://i.imgur.com/OnyPiye.png" alt="so dumb"/>
      </div>
    );
  }
}

export default App;
