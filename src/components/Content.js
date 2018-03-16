import React, {Component} from 'react';

import '../css/Content.css'

class Content extends Component {

    render() {
        return (
            <div id="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-8">
                            <h2>Area chart</h2>
                        </div>

                        <div className="col-md-4">
                            <h2>Circle Chart</h2>
                        </div>
                    </div>

                </div>
            </div>
        )
    }

}

export default Content;