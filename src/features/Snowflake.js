import React, {Component} from 'react';
import {Circle} from 'react-shapes';

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

class Snowflake extends Component{

    
    constructor(props) {
        super(props);
        this.state = { x: 0, y:0}
      }

      handleEvent = () => {
          console.log(this.props)
      }

      componentDidMount(){
          this.setState({  
              x: getRandomArbitrary(0, screen.width),
              y: getRandomArbitrary(0, screen.height)
          })
      }

    render(){
        return(
            <div className="Snowflake">
                <Circle r={10} fill={{color:'#FFFFFF'}} stroke={{color:'#E65243'}} strokeWidth={0} />
            </div>
        )
    }
}


export default Snowflake


