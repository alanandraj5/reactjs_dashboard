import React, {Component} from 'react';

// Custom components
import SideMenu from './SideMenu';
import Content from './Content';

class App extends Component {
    render() {
        return(
            <div>
                <SideMenu />
                <Content />
            </div>
        )
    }
}

export default App;