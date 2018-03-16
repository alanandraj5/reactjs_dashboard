import React, {Component} from 'react';
import '../css/SideNavbar.css';

class SideMenu extends Component {

    handleMenuClick = (event) => {

        event.preventDefault();

        let ul = document.getElementById("menu-list");
        let items = ul.getElementsByTagName("li");
        let element;
        for (let i = 0; i < items.length; ++i) {
            element = items[i];
            element.classList.remove("active");
        }

        let currentElement = event.currentTarget;
        currentElement.className = currentElement.className + " active";

    };

    handleClick = (e) => {
        e.preventDefault();
        window.ee = e;
        console.log(e);
    };

    onItemClick = (event) => {
        event.preventDefault();
        console.log(event.currentTarget.dataset.id);
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
                            <li onClick={this.handleMenuClick} data-id="dashboard" className="active">
                                <a href="#"><span className="glyphicon glyphicon-cloud"></span> Dashboard</a>
                            </li>
                            <li onClick={this.handleMenuClick} data-id="reports">
                                <a href="#"><span className="glyphicon glyphicon-cloud"></span> Reports</a>
                            </li>
                            <li onClick={this.handleMenuClick} data-id="archive">
                                <a href="#"><span className="glyphicon glyphicon-cloud"></span> Archive</a>
                            </li>
                            <li onClick={this.handleMenuClick} data-id="social">
                                <a href="#"><span className="glyphicon glyphicon-cloud"></span> Social</a>
                            </li>
                            <li onClick={this.handleMenuClick} data-id="users">
                                <a href="#"><span className="glyphicon glyphicon-cloud"></span> Users</a>
                            </li>
                            <li onClick={this.handleMenuClick} data-id="documents">
                                <a href="#"><span className="glyphicon glyphicon-cloud"></span> Documents</a>
                            </li>
                            <li onClick={this.handleMenuClick} data-id="favorites">
                                <a href="#"><span className="glyphicon glyphicon-cloud"></span> Favorites</a>
                            </li>
                            <li onClick={this.handleMenuClick} data-id="tools">
                                <a href="#"><span className="glyphicon glyphicon-cloud"></span> Tools</a>
                            </li>
                            <li onClick={this.handleMenuClick} data-id="settings">
                                <a href="#"><span className="glyphicon glyphicon-cloud"></span> Settings</a>
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