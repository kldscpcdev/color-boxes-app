import React, { Component } from 'react';
import Box from "./Box";
import "./BoxContainer.css";

class BoxContainer extends Component {
    static defaultProps = {
        numBoxes: 45,
        allColors: ['#dcdae4','#d94a34','#5c0b0c','#e54b30','#3f5450','#a2816c','#f0c3c4','#e1e9d8','#dccc83','#b7ba9c']
    }
    render () {
       const boxes = Array.from({length: this.props.numBoxes}).map(
           () => (<Box colors={this.props.allColors}/>)
       );
        return <div className="BoxContainer">{boxes}</div>;
    }
}

export default BoxContainer;