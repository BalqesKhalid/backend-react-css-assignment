import React, { Component } from 'react';
import logo from '../../icons-cources/nodejs.svg'
import '../../css/green_box.css';

class Nodejs_script_201 extends Component {
    render() {
        return (

            <div className='green_box'>

                <div className='first_row'>
                    <div>
                        <img className='image' src={logo} img="NodeJS logo" />
                        <div className='duration'>
                            <p className='hours'>64 Hours</p>
                            <p className='days'>(10 Days)</p>
                        </div>
                        <div className='title'>
                            <p className='first'>NodeJS</p>
                            <p className='last'>JS 201</p>
                        </div>
                    </div>
                </div>
                <div>
                    <p className='full_course_name_part1'>Full course name</p>
                    <p className='full_course_name_part2'>The complete Node.js Developer <br />Course (3rd Edition)</p>
                </div>
            </div>
        );
    }
}

export default Nodejs_script_201;