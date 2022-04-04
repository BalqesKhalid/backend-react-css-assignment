import React, { Component } from 'react';
import logo from '../../icons-cources/javascript.svg'
import '../../css/green_box.css';

class Java_script_101 extends Component {
    render() {
        return (
            <div className='green_box'>

                <img className='image' src={logo} img="Java script" />
                <p className='first'>Javascript</p>
                <p className='last'>JS 101</p>
                <p className='hours'>50 Hours</p>
                <p className='days'>(8 Days)</p>

                <p className='full_course_name_part1'>Full course name</p>
                <p className='full_course_name_part2'>The Modern Javascript <br /> Bootcamp</p>
            </div>
        );
    }
}

export default Java_script_101;