import aspire_logo from '../aspire_logo.svg';
import React, { Component } from 'react';
import '../css/header.css';


class app_footer extends Component {
    render() {
        return (
            <div >
               <div><p>Mandatory</p></div>
               <div><p>Optional</p></div>
               <div><p>Additional Courses</p></div>
            </div>
        );
    }
}

export default app_footer;