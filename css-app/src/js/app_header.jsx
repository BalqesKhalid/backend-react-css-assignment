import aspire_logo from '../aspire_logo.svg';
import React, { Component } from 'react';
import '../css/header.css';


class app_header extends Component {
    render() {
        return (
            <div className='App-header'>
                <img src={aspire_logo} id="logo" alt="aspire-logo" />
                <div id="text">
                    <p >
                        NodeJS study plan
                    </p>
                    <div>
                        <p>Total Training Duration:</p>
                        <p>163 Hours (24 Days)</p>

                    </div>
                </div>

            </div>
        );
    }
}

export default app_header;