import React, { Component } from 'react';
import './App.css';
import Snowflake from './features/Snowflake'

class App extends Component {
  render() {
    return (
      <div className="App" id="fakingcanvas">
            <div className="App-intro">
              <Snowflake />
            </div>
      </div>
    );
  }
}

export default App;
