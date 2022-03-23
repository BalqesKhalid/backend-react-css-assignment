import React, { Component } from 'react';
import logo from '../../icons-cources/agile.svg'
import '../../css/blue_box.css'

class Agile_course extends Component {
    render() {
        return (
            <div className='blue_box'>
                <div className='first_row'>
                    <img className='image' src={logo} />
                    <p className='title'>Agile</p>

                </div>
                <div className='second_row'>
                    <div className='type'>
                        <p className='courseType_part1'>Course type </p>
                        <p className='courseType_part2'>Online Session </p>
                    </div>
                    <p className='hours_number'>4<br />Hours</p>
                </div>

            </div>
        );
    }
}

export default Agile_course;