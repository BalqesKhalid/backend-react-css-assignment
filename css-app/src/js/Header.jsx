import aspire_logo from '../aspire_logo.svg';
import React, { Component } from 'react';
import '../css/header.css';


class Header extends Component {
    render() {
        return (
            <div className='App-header'>
                <img src={aspire_logo} alt="aspire-logo" />

                <p className='text'>
                    NodeJS study plan
                </p>
            </div>
        );
    }
}

export default Header;