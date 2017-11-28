// src/App/App.js
import React, { Component } from 'react';
import './App.css';
import Heroes from '../Heroes/Heroes';

const title = 'Tour of Heroes';

class App extends Component {
  render() {
    return (<div><h1>{title}</h1><Heroes /></div>);
  }
}

export default App;
