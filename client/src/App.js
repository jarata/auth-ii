import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavLink from "react-router-dom/es/NavLink";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav>
            <NavLink to={}></NavLink>
            <NavLink to={}></NavLink>
          </nav>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div>
          <Route path={} component={} />
          <Route path={} component={} />
        </div>
      </div>
    );
  }
}

export default App;
