import React, { Component } from 'react';
import './App.css';
import Snowflake from './features/Snowflake'
import {Stage, Layer} from 'react-konva'

var snowString = "";

/*
for(var i = 0; i < 200; i++){
  snowString += "<Snowflake />" + "\n"   
  <React.Fragment>{snowString}</React.Fragment>
}
*/
for(var i = 0; i < 200; i++){
  React.createElement(Snowflake, null)
}

class App extends Component {
  render() {
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake /><Snowflake />
        </Layer>
      </Stage>
    );
  }
}

export default App;
