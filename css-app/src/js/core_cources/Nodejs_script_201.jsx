import React, { Component } from 'react';
import logo from '../../icons-cources/javascript.svg'
import '../../css/green_box.css';

class Nodejs_script_201 extends Component {
    render() {
        return (
            <div className='green_box'>
                <div className='green_box_part1'>
                    <img src={logo} img="Java script" />
                    <div style={{ display: "inline" }}>
                        <p className='title1'>NodeJS </p>
                        <p className='title2'>JS 201</p>

                    </div>                    

                </div>
                <div style={{ display: "inline" , justifyContent:"right" }}>
                        <p className='tiltle3'>64 Hours</p>
                        <p className='transparent_title'>(10 Days)</p>
                    </div>
                <div>
                    <p className='transparent_title'>Full course name</p>
                    <p className='title3'>The complete Node.js Developer <br/>Course (3rd Edition)</p>
                </div>
            </div>
        );
    }
}

export default Nodejs_script_201;