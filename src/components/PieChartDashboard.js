import React, {Component} from 'react';

import {Legend, PieChart, ToolTip} from 'react-easy-chart';

class PieChartDashboard extends Component {

    constructor(props) {
        super(props);
    }

    mouseOverHandler(d, e) {
        this.setState({
            showToolTip: true,
            top: e.y,
            left: e.x,
            value: d.value,
            key: d.data.key});
    }

    mouseMoveHandler(e) {
        if (this.state.showToolTip) {
            this.setState({top: e.y, left: e.x});
        }
    }

    mouseOutHandler() {
        this.setState({showToolTip: false});
    }

    createTooltip() {
        if (this.state.showToolTip) {
            return (
                <ToolTip
                    top={this.state.top}
                    left={this.state.left}
                >
                    The value of {this.state.key} is {this.state.value}
                </ToolTip>
            );
        }
        return false;
    }


    render() {
        return (
            <div>


                <PieChart
                    data={[
                      { key: 'A', value: 100, color: '#A185FD' },
                      { key: 'B', value: 200, color: '#31A3D7' },
                      { key: 'C', value: 50, color: '#0277DA' }
                    ]}
                    size={200}
                    innerHoleSize={150}
                    mouseOverHandler={this.mouseOverHandler.bind(this)}
                    mouseOutHandler={this.mouseOutHandler.bind(this)}
                    mouseMoveHandler={this.mouseMoveHandler.bind(this)}
                    padding={10}
                    styles={this.styles}
                />


                <Legend
                    data={pieDataCustom}
                    dataId={'key'}
                    config={config}
                    styles={customStyle}
                />

            </div>
        )
    }
}

const pieDataCustom = [
    {key: 'New Customers', value: 100, color: '#A185FD'},
    {key: 'Sales', value: 200, color: '#31A3D7'},
    {key: 'Refound', value: 50, color: '#0277DA'}
];

const config = [
    {color: '#A185FD'},
    {color: '#31A3D7'},
    {color: '#0277DA'}
];

/* default component styles */
const defaultStyles = {
    '.legend': {
        'list-style': 'none',
        margin: 0,
        padding: 0
    },
    '.legend li': {
        display: 'block',
        lineHeight: '24px',
        marginRight: '24px',
        marginBottom: '6px',
        paddingLeft: '24px',
        position: 'relative'
    },
    '.legend li.horizontal': {
        display: 'inline-block'
    },
    '.legend .icon': {
        width: '12px',
        height: '12px',
        background: 'red',
        borderRadius: '6px',
        position: 'absolute',
        left: '0',
        top: '50%',
        marginTop: '-6px'
    }
};

/* example override */
const customStyle = {
    '.legend': {
        backgroundColor: '#2F3239',
        fontSize: '0.8em',
        maxWidth: '300px',
        padding: '12px'
    }
};

export default PieChartDashboard;