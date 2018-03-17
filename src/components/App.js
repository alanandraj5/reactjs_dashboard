import React, {Component} from 'react';

// Custom components
import SideMenu from './SideMenu';
import Dashboard from './Dashboard';

class App extends Component {
    render() {
        return(
            <div>
                <SideMenu />
                <Dashboard />
            </div>
        )
    }
}

export default App;