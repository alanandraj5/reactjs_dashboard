import React, {Component} from 'react';

import GoogleChart from './GoogleChart';
import DashboardAreaChart from './AreaChart';
import Orders from './Orders';
import BarChartDashboard from './BarChartDashboard';
import '../css/Dashboard.css'

class Dashboard extends Component {

    render() {
        return (
            <div id="dashboard">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-8">
                            <Orders />
                        </div>

                        <div className="col-md-4">
                            <BarChartDashboard />
                        </div>
                    </div>

                </div>
            </div>
        )
    }

}

export default Dashboard;