import React, {Component} from 'react';

import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import GradientSVG from './GradientSVG';

import '../css/Products.css';

class Products extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="product">
                <CircularProgressbar className = "bar1" percentage={80} initialAnimation counterClockwise strokeWidth = {10}
                                     textForPercentage = {(pct) => "450"}/>
                <CircularProgressbar className = "bar2" percentage={60} initialAnimation counterClockwise strokeWidth = {10}
                                     textForPercentage = {(pct) => "657"}/>
                <CircularProgressbar className = "bar3" percentage={80} initialAnimation counterClockwise strokeWidth = {10}
                                     textForPercentage = {(pct) => "1.2k"}/>
                <CircularProgressbar className = "bar4" percentage={60} initialAnimation counterClockwise strokeWidth = {10}
                                     textForPercentage = {(pct) => "1.8k"}/>
                <CircularProgressbar className = "bar5" percentage={70} initialAnimation counterClockwise strokeWidth = {10}
                                     textForPercentage = {(pct) => "2.4k"}/>
                <GradientSVG startColor="#D4E6F1" endColor="#5DADE2" idCSS="bar1" rotation="90" />
                <GradientSVG startColor="#7FB3D5" endColor="#3498DB" idCSS="bar2" rotation="90" />
                <GradientSVG startColor="#F2F3F4" endColor="#C39BD3" idCSS="bar3" rotation="90" />
                <GradientSVG startColor="#958CB6" endColor="#3817AF" idCSS="bar4" rotation="90" />
                <GradientSVG startColor="#7FB3D5" endColor="#3498DB" idCSS="bar5" rotation="90" />
            </div>
        )
    }
}

export default Products;