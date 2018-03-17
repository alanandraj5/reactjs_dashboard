import React, {Component} from 'react';

import {BarChart} from 'react-easy-chart';

const BarCharts = () => {
    return (
        <div>
            <BarChart
                axes
                colorBars
                height={300}
                width={300}
                data={[
                    { x: 'A', y: 20, color: '#00bcd4'},
                    { x: 'B', y: 30, color: '#2196f3'},
                    { x: 'C', y: 40, color: '#da91e6'},
                    { x: 'D', y: 20, color: '#00bcd4'},
                    { x: 'E', y: 40, color: '#2196f3'},
                    { x: 'F', y: 25, color: '#da91e6'},
                ]}
            />
        </div>
    )
};

export default BarCharts;