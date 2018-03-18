import React, {Component} from 'react';

import {AreaChart} from 'react-easy-chart';
const $ = require('jquery');

class AreaCharts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            areaChartWidth: 550
        }
    }

    componentDidMount = () => {
        $('#area-chart').find('.tick').find('text').attr('fill', '#fff');
    };

    render() {
        // let that = this;
        // let windowWidth = $(window).width();
        //
        // if (parseInt(windowWidth) < 420) {
        //     that.setState({areaChartWidth: 350});
        // }
        //
        // $(window).resize(function(){
        //     let w = $(this).width();
        //     if (parseInt(w) < 420) {
        //         // that.setState({areaChartWidth: 350});
        //     } else {
        //         // that.setState({areaChartWidth: 450});
        //     }
        // });

        return (
            <div id="area-chart">
                <h5>Monthly Summary</h5>
                <AreaChart
                    axes
                    xTicks={20}
                    yTicks={3}
                    grid
                    areaColors={['#575080', '#2D6BB2', '#575080', '#2D6BB2']}
                    // margin={{top: 10, right: 10, bottom: 50, left: 50}}
                    // width={this.state.areaChartWidth}
                    width={600}
                    height={270}
                    data={[
                        [
                            { x: 0, y: 0 },
                            { x: 1, y: 7 },
                            { x: 2, y: 14 },
                            { x: 3, y: 21 },
                            { x: 4, y: 30 },
                            { x: 5, y: 7 },
                            { x: 6, y: 14 },
                            { x: 7, y: 21 },
                            { x: 8, y: 14 },
                            { x: 9, y: 25 },
                            { x: 10, y: 20 },
                            { x: 11, y: 15 },
                            { x: 12, y: 10 },
                            { x: 13, y: 5 },
                            { x: 14, y: 10 },
                            { x: 15, y: 15 },
                            { x: 16, y: 20 },
                            { x: 17, y: 15 },
                            { x: 18, y: 10 },
                            { x: 19, y: 5 },
                            { x: 20, y: 0 }
                        ]
                    ]}
                />
            </div>
        )
    }
}

export default AreaCharts;