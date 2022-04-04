import React, { Component } from 'react';
import logo from '../../icons-cources/nodejs.svg'
import '../../css/green_box.css';

class Nodejs_script_201 extends Component {
    render() {
        return (

            <div className='green_box'>

                <img className='image' src={logo} img="NodeJS logo" />

                <p className='first'>NodeJS</p>
                <p className='last'>JS 201</p>
                <p className='hours'>64 Hours</p>
                <p className='days'>(10 Days)</p>
                <p className='full_course_name_part1'>Full course name</p>
                <p className='full_course_name_part2'>The complete Node.js Developer <br />Course (3rd Edition)</p>
            </div>
        );
    }
}

export default Nodejs_script_201;