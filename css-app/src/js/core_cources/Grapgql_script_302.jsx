import React, { Component } from 'react';
import logo from '../../icons-cources/javascript.svg'
import '../../css/green_box.css';

class Grapgql_script_302 extends Component {
    render() {
        return (
            <div className='green_box'>
                <div className='green_box_part1'>
                    <img src={logo} img="Java script" />
                    <div style={{ display: "inline" }}>
                        <p className='title1'>GraphQL </p>
                        <p className='title2'>JS 302</p> 
                    </div>                    

                </div>
                <div style={{ display: "inline" , justifyContent:"right" }}>
                        <p className='tiltle3'>40 Hours</p>
                        <p className='transparent_title'>(6 Days)</p>
                    </div>
                <div>
                    <p className='transparent_title'>Full course name</p>
                    <p className='title3'>Practical GraphQL: Become a <br/>GraphQL Ninja</p>
                </div>
            </div>
        );
    }
}

export default Grapgql_script_302;