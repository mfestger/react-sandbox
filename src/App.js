import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        }

componentWillMount() {
    this.setState({
        message: "I am being rendered!"
})
}

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Hello, World</h2>
        </div>
        <p className="App-intro">
            {this.state.message}
        </p>
      </div>
    );
  }
}

export default App;
