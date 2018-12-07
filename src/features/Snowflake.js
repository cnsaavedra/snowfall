import React, {Component} from 'react';
//import {Circle} from 'react-shapes';
import windowSize from 'react-window-size';
import {Circle, Rect} from 'react-konva';

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

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
              60
          );
      }

      componentWillUnmount() {
        
      }

      fall(){
        this.setState({  
            x: this.state.x,
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


