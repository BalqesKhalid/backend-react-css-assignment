import aspire_logo from '../aspire_logo.svg';
import React, { Component } from 'react';
import '../css/header.css';


class App_header extends Component {
    render() {
        return (
            <div className='App-header'>
                <div style={{justifyContent: "left"}}>
                <img src={aspire_logo} id="logo" alt="aspire-logo" />
                </div>
                <div id="text" style={{justifyContent: "right"}}>
                    <p >
                        NodeJS study plan
                    </p>
                </div>
            </div>
        );
    }
}

export default App_header;