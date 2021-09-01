import React, { Component } from 'react';
import "./Box.css";
import {choice} from "./helpers";

class Box extends Component {
    constructor(props){
        super(props);
        this.state ={
            boxColor: choice(this.props.colors)
        };
        this.handleClick = this.handleClick.bind(this);
    }

      colorSet() {
          let newColor;
          do { newColor = choice(this.props.colors) } while (newColor === this.state.boxColor)
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