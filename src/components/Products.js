import React, {Component} from 'react';

import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../css/Products.css';

class Products extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="product">
                <CircularProgressbar className = "bar1" percentage={90} initialAnimation counterClockwise strokeWidth = {10}
                                     textForPercentage = {(pct) => "450"}/>
                <CircularProgressbar className = "bar2" percentage={60} initialAnimation counterClockwise strokeWidth = {10}
                                     textForPercentage = {(pct) => "657"}/>
                <CircularProgressbar className = "bar3" percentage={20} initialAnimation counterClockwise strokeWidth = {10}
                                     textForPercentage = {(pct) => "1.2k"}/>
                <CircularProgressbar className = "bar4" percentage={80} initialAnimation counterClockwise strokeWidth = {10}
                                     textForPercentage = {(pct) => "1.8k"}/>
                <CircularProgressbar className = "bar5" percentage={10} initialAnimation counterClockwise strokeWidth = {10}
                                     textForPercentage = {(pct) => "2.4k"}/>
            </div>
        )
    }
}

export default Products;