import React, {Component} from 'react';
import '../css/SideNavbar.css';

class SideMenu extends Component {
    render() {
        return(
            <div>
                <nav className="navbar navbar-default side-navbar">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#side-navbar-menu">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                    <div id="side-navbar-menu" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="#"><span className="glyphicon glyphicon-cloud"></span> Dashboard</a></li>
                            <li><a href="#"><span className="glyphicon glyphicon-cloud"></span> Reports</a></li>
                            <li><a href="#"><span className="glyphicon glyphicon-cloud"></span> Archive</a></li>
                            <li><a href="#"><span className="glyphicon glyphicon-cloud"></span> Social</a></li>
                            <li><a href="#"><span className="glyphicon glyphicon-cloud"></span> Users</a></li>
                            <li><a href="#"><span className="glyphicon glyphicon-cloud"></span> Documents</a></li>
                            <li><a href="#"><span className="glyphicon glyphicon-cloud"></span> Favorites</a></li>
                            <li><a href="#"><span className="glyphicon glyphicon-cloud"></span> Tools</a></li>
                            <li><a href="#"><span className="glyphicon glyphicon-cloud"></span> Settings</a></li>
                        </ul>

                        <form className="navbar-form" role="search">
                            <div className="form-group">
                                <input type="text" className="form-control" />
                            </div>
                        </form>

                    </div>
                </nav>
            </div>
        )
    }
}

export default SideMenu;