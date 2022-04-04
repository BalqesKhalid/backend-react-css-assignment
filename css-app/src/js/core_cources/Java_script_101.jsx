import React, { Component } from 'react';
import logo from '../../icons-cources/javascript.svg'
import '../../css/green_box.css';

function Java_script_101() {
        return (
            <div className='green_box'>

                <div className='row1column1'>
                    <img className='image' src={logo} img="Java script" />
                    <div className='firstrow_tiltle'>
                        <p className='first'>Javascript</p>
                        <br />
                        <p className='last'>JS 101</p>
                    </div>
                    <p className='hours'>50 Hours</p>
                    <p className='days'>(8 Days)</p>
                </div>

                <div className='course_full_name'>
                    <p className='full_course_name_part1'>Full course name</p>
                    <p className='full_course_name_part2'>The Modern Javascript <br /> Bootcamp</p>
                </div>
            </div>
        );
    
}

export default Java_script_101;