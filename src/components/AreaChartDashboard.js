import React, {Component} from 'react';

import {AreaChart} from 'react-easy-chart';
import '../css/AreaChartDashboard.css';

class AreaChartDashboard extends Component {
    render() {
        return (
            <div>
                <AreaChart
                    axes
                    xTicks={5}
                    yTicks={3}
                    grid
                    areaColors={['#575080', '#2D6BB2', '#575080', '#2D6BB2']}
                    margin={{top: 10, right: 10, bottom: 50, left: 50}}
                    axisLabels={{x: 'My x Axis', y: 'My y Axis'}}
                    width={550}
                    height={250}
                    data={[
                              [
                                { x: 0, y: 0 },
                                { x: 0.4, y: 6 },
                                { x: 0.6, y: 5.5 },
                                { x: 1.2, y: 14 },
                                { x: 2, y: 10 },
                                { x: 2.6, y: 20 },
                                { x: 3, y: 0 }
                              ],
                               [
                                { x: 0, y: 0 },
                                { x: 0.6, y: 18 },
                                { x: 1, y: 4 },
                                { x: 1.4, y: 16 },
                                { x: 1.6, y: 6 },
                                { x: 2.0, y: 14 },
                                { x: 3, y: 0 }
                              ],
                              [
                                { x: 0, y: 0 },
                                { x: 0.2, y: 16 },
                                { x: 0.8, y: 2 },
                                { x: 1.2, y: 6 },
                                { x: 1.6, y: 8 },
                                { x: 2.4, y: 20 },
                                { x: 3, y: 0 }
                              ]
                        ]}
                />
            </div>
        )
    }
}



export default AreaChartDashboard;