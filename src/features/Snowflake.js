import React, {Component} from 'react';
//import {Circle} from 'react-shapes';
import windowSize from 'react-window-size';
import {Circle, Rect} from 'react-konva';

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
  console.log(window.innerWidth);

class Snowflake extends Component{
    constructor(props) {
        super(props);
        this.state = { x: Math.random() * window.innerWidth, y: Math.random() * window.innerWidth, radius: getRandomArbitrary(5, 10)}
      }

      handleEvent = () => {
          console.log(this.props)   
      }

      componentDidMount(){
          this.timerID = setInterval(
              () => this.fall(),
              1
          );
      }

      componentWillUnmount() {
        
      }

      fall(){
        this.setState({  
            x: getRandomArbitrary(this.state.x-1, this.state.x+1),
            y: this.state.y+1,
            radius: this.state.radius
        })
      }

    render(){
        return(
            <Circle x = {this.state.x} y = {this.state.y} radius = {this.state.radius} fill = {'white'} stroke = {'black'} strokeWidth = {4} />
        )
    }
}


export default Snowflake


