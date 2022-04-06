import React, { Component } from 'react';
import logo from '../../icons-cources/nodejs.svg'
import '../../css/green_box.css';

function Nodejs_script_201() {
    return (

        <div className='green_box'>
            <div className='row1column1'>
                <img className='image' src={logo} img="NodeJS logo" />
                <div className='firstrow_tiltle'>
                    <p className='first'>NodeJS</p>
                    <br />
                    <p className='last'>JS 201</p>
                </div>
                <div className='firstrow_duraion'>
                    <p className='hours'>64 Hours</p>
                    <p className='days'>(10 Days)</p>
                </div>
            </div>
            <div className='course_full_name'>
                <p className='full_course_name_part1'>Full course name</p>
                <p className='full_course_name_part2'>The complete Node.js Developer <br />Course (3rd Edition)</p>
            </div>
        </div>
    );
}

export default Nodejs_script_201;