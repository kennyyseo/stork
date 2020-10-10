import React, { Component } from 'react';
import './App.css';
import { Route, NavLink } from "react-router-dom";

class App extends Component {
  state = {
    names: [],
  };

  render() {
    return (
      <div className="App">
        <header className='App-header'>
          Stork
          <nav>
            <NavLink exact to='/'>
              Names List
            </NavLink>
            &nbsp;&nbsp;&nbsp;
            <NavLink exact to='/add'>
              Add A Name
            </NavLink>
          </nav>
        </header>
      </div>
    );
  }
}

export default App;
