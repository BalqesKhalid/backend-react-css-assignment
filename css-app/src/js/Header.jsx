import aspire_logo from '../aspire_logo.svg';
import epic_logo from '../EPIC_Logo.svg';
import React, { Component } from 'react';
import '../css/header.css';


class Header extends Component {
    render() {
        return (
            <div className='App-header'>
                <img className='image' src={aspire_logo} alt="aspire-logo" />
                <img className='image' src={epic_logo} alt="EPIC Academy" />

                <p className='text'>
                    NodeJS study plan
                </p>
            </div>
        );
    }
}

export default Header;