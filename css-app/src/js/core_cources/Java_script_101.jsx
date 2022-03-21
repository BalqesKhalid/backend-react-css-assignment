import React, { Component } from 'react';
import logo from '../../icons-cources/javascript.svg'
import '../../css/green_box.css';

class Java_script_101 extends Component {
    render() {
        return (
            <div className='green_box'>

                <div className='first_row'>
                    <div>
                        <img className='image' src={logo} img="Java script" />
                        <div className='duration'>
                            <p className='hours'>50 Hours</p>
                            <p className='days'>(8 Days)</p>
                        </div>
                        <div className='title'>
                        <p className='first'>Javascript </p>
                        <p className='last'>JS 101</p>
                        </div>
                    </div>
                </div>
                <div>
                    <p>Full course name</p>
                    <p>The Modern Javascript <br /> Bootcamp</p>
                </div>
            </div>
        );
    }
}

export default Java_script_101;