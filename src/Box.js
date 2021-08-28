import React, { Component } from 'react';
import "./Box.css";

class Box extends Component {
    render () {
        return <div className={`Box-box ${this.props.class}`}></div>
    }
}

export default Box;