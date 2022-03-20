import React, { Component } from 'react';
import logo from '../../icons-cources/javascript.svg'
import '../../css/green_box.css';

class Java_script_101 extends Component {
    render() {
        return (
            <div className='green_box'>
                <div className='green_box_part1'>
                    <img src={logo} img="Java script" />
                    <div style={{ display: "inline" }}>
                        <p className='title1'>Javascript </p>
                        <p className='title2'>JS 101</p>
                    </div>                    

                </div>
                <div style={{ display: "inline" , justifyContent:"right" }}>
                        <p className='tiltle3'>50 Hours</p>
                        <p className='transparent_title'>(8 Days)</p>
                    </div>
                <div>
                    <p className='transparent_title'>Full course name</p>
                    <p className='title3'>The Modern Javascript <br/> Bootcamp</p>
                </div>
            </div>
        );
    }
}

export default Java_script_101;