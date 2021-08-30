import React, { Component } from 'react';
import Box from "./Box";

class Picker extends Component {
    render () {
        const classes = [
            {id: 1, class:'Box-box-mischka'},
            {id: 2, class:'Box-box-valencia'},
            {id: 3, class:'Box-box-maroon-oak'},
            {id: 4, class:'Box-box-cinnabar'},
            {id: 5, class:'Box-box-mineral-green'},
            {id: 6, class:'Box-box-sandal'},
            {id: 7, class:'Box-box-beauty-bush'},
            {id: 8, class:'Box-box-periglacial-blue'},
            {id: 9, class:'Box-box-calico'},
            {id: 10, class:'Box-box-eagle'},
        ]
        return <div className="Box-container">
           <Box />
            </div>
    }
}

export default Picker;