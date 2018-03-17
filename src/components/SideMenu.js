import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Dashboard from './Dashboard';
import Reports from './Reports';
import Archive from './Archive';
import Social from './Social';
import Users from './Users';
import Documents from './Documents';
import Favorites from './Favorites';
import Tools from './Tools';
import Settings from './Settings';
import '../css/SideNavbar.css';

class SideMenu extends Component {

    handleMenuClick = (event) => {

        event.preventDefault();

        let ul = document.getElementById('menu-list');
        let items = ul.getElementsByTagName('li');
        let element;
        for (let i = 0; i < items.length; ++i) {
            element = items[i];
            // element.classList.remove('active');
            element.removeAttribute('class');
        }

        let currentElement = event.currentTarget;
        currentElement.className = currentElement.className + ' active';

        let currentComponentId = currentElement.dataset.id;
        let currentComponent = null;
        switch (currentComponentId) {
            case 'dashboard':
                currentComponent = <Dashboard/>;
                break;
            case 'reports':
                currentComponent = <Reports/>;
                break;
            case 'archive':
                currentComponent = <Archive/>;
                break;
            case 'social':
                currentComponent = <Social/>;
                break;
            case 'users':
                currentComponent = <Users/>;
                break;
            case 'documents':
                currentComponent = <Documents/>;
                break;
            case 'favorites':
                currentComponent = <Favorites/>;
                break;
            case 'tools':
                currentComponent = <Tools/>;
                break;
            case 'settings':
                currentComponent = <Settings/>;
                break;
            default:
                currentComponent = <h2>Page Not Found</h2>;
                break;

        }

        ReactDOM.render(currentComponent, document.getElementById('content-area'));

    };

    render() {
        return(
            <div id="side-menu">
                <nav className="navbar navbar-default side-navbar">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#side-navbar-menu">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                    <div id="side-navbar-menu" className="navbar-collapse collapse">
                        <ul id="menu-list" className="nav navbar-nav">
                            <li onClick={this.handleMenuClick} className="active" data-id="dashboard">
                                <a><span className="glyphicon glyphicon-dashboard"></span> Dashboard</a>
                            </li>
                            <li onClick={this.handleMenuClick} data-id="reports">
                                <a><span className="glyphicon glyphicon-stats"></span> Reports</a>
                            </li>
                            <li onClick={this.handleMenuClick} data-id="archive">
                                <a><span className="glyphicon glyphicon-eye-open"></span> Archive</a>
                            </li>
                            <li onClick={this.handleMenuClick} data-id="social">
                                <a><span className="glyphicon glyphicon-tint"></span> Social</a>
                            </li>
                            <li onClick={this.handleMenuClick} data-id="users">
                                <a><span className="glyphicon glyphicon-user"></span> Users</a>
                            </li>
                            <li onClick={this.handleMenuClick} data-id="documents">
                                <a><span className="glyphicon glyphicon-duplicate"></span> Documents</a>
                            </li>
                            <li onClick={this.handleMenuClick} data-id="favorites">
                                <a><span className="glyphicon glyphicon-star"></span> Favorites</a>
                            </li>
                            <li onClick={this.handleMenuClick} data-id="tools">
                                <a><span className="glyphicon glyphicon-wrench"></span> Tools</a>
                            </li>
                            <li onClick={this.handleMenuClick} data-id="settings">
                                <a><span className="glyphicon glyphicon-cog"></span> Settings</a>
                            </li>
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