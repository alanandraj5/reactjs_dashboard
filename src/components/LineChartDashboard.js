import React, {Component} from 'react';

import {LineChart} from 'react-easy-chart';

class LineChartDashboard extends Component {
    render() {
        return (
            <div>
                <LineChart
                    axes
                    grid
                    xTicks={5}
                    yTicks={3}
                    margin={{top: 10, right: 10, bottom: 50, left: 50}}
                    axisLabels={{x: 'My x Axis', y: 'My y Axis'}}
                    width={250}
                    height={250}
                    data={[
                      [
                        { x: 0, y: 0 },
                        { x: 0.4, y: 2 },
                        { x: 0.8, y: 1 },
                        { x: 1.2, y: 3 },
                        { x: 1.4, y: 2 },
                        { x: 2, y: 10 }
                      ]
                    ]}
                />

            </div>
        )
    }
}

export default LineChartDashboard;