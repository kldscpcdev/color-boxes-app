import React, { Component } from 'react';
import Box from "./Box";

class Picker extends Component {
    constructor(props){
        super(props);
        this.state ={
            boxColorClass: `Box-box-cinnabar`
        };
        this.handleClick = this.handleClick.bind(this);
    }
    colorClick() {
        this.setState({boxColorClass: `Box-box-sandal`} );
    }

    handleClick(e) {
        this.colorClick();
    }
    render () {
        return <div onClick={this.handleClick}><Box class={this.state.boxColorClass}/></div>
    }
}

export default Picker;