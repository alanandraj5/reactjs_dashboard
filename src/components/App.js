import React, {Component} from 'react';

// Custom components
import SideMenu from './SideMenu';
import Twitter from './Twitter';
import Dashboard from './Dashboard';

class App extends Component {
    render() {
        return(
            <div>
                <SideMenu />
                <Twitter />
            </div>
        )
    }
}

export default App;