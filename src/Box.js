import React, { Component } from 'react';
import "./Box.css";
import {choice} from "./helpers";

class Box extends Component {
    static defaultProps = {
        allColors: ['#dcdae4','#d94a34','#5c0b0c','#e54b30','#3f5450','#a2816c','#f0c3c4','#e1e9d8','#dccc83','#b7ba9c']
    }
    constructor(props){
        super(props);
        this.state ={
            boxColor: choice(this.props.allColors)
        };
        this.handleClick = this.handleClick.bind(this);
    }

      colorSet() {
          let newColor;
          do { newColor = choice(this.props.allColors) } while (newColor === this.state.boxColor)
            this.setState({boxColor: newColor} );
    }

    handleClick(e) {
        this.colorSet();
    }
    render(){
        return (<div className={`Box-box`} style={{backgroundColor: this.state.boxColor}} onClick={this.handleClick}></div>)
    }
}

export default Box;