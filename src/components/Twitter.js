import React, {Component} from 'react';

import '../css/Dashboard.css';

import TwitterLogin from 'react-twitter-auth/lib/react-twitter-auth-component.js';




class Twitter extends Component {

    constructor() {
        super();

        this.onFailed = this.onFailed.bind(this);
        this.onSuccess = this.onSuccess.bind(this);
    }

    onSuccess(response) {
        alert(response);

        // response.json().then(body => {
        //     alert(JSON.stringify(body));
        // });
    }

    onFailed(error) {
        // alert(error);
        console.log("\n \n exceptionnnnnnnnnnnnnnnnnnn " + error);
    }


    render() {
        const customHeader = {};
        customHeader['Test'] = 'test-header';

        return (
            <div id="dashboard">

                <button>
                    Activate Lasers
                </button>

                <TwitterLogin loginUrl="http://localhost:3000/api/v1/auth/twitter"
                              onFailure={this.onFailed}
                              onSuccess={this.onSuccess}
                              requestTokenUrl="http://localhost:3000/api/v1/auth/twitter/reverse"
                              showIcon={true}
                              customHeaders={customHeader}/>

                <TwitterLogin loginUrl="http://localhost:3000/api/v1/auth/twitter"
                              onFailure={this.onFailed}
                              onSuccess={this.onSuccess}
                              requestTokenUrl="http://localhost:3000/api/v1/auth/twitter/reverse"
                              showIcon={true}
                              customHeaders={customHeader}>
                    <b>Custom</b> Twitter <i>Login</i> content
                </TwitterLogin>


            </div>
        )
    }

}

export default Twitter;