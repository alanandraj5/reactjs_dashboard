import React, {Component} from 'react';

// import GoogleChart from './GoogleChart';
// import DashboardAreaChart from './AreaChart';
import Orders from './Orders';
import Products from './Products';
import BarChartDashboard from './BarChartDashboard';
import PieChartDashboard from './PieChartDashboard';
import AreaChartDashboard from './AreaChartDashboard';
import LineChartDashboard from './LineChartDashboard';
import '../css/Dashboard.css';




class Dashboard extends Component {

    render() {
        return (
            <div id="dashboard">
                <div className="container-fluid">

                    <div className="row">
                        <div className="col-md-8 product">
                            <AreaChartDashboard />
                        </div>

                        <div className="col-md-4">
                            <PieChartDashboard />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-8">
                            <Orders />
                        </div>

                        <div className="col-md-4">
                            <BarChartDashboard />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-8 product">
                            <Products />
                        </div>

                        <div className="col-md-4">
                            <LineChartDashboard />
                        </div>
                    </div>

                </div>
            </div>
        )
    }

}

export default Dashboard;