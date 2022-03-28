import React, { Component } from 'react';
import logo from '../../icons-cources/git.svg'

class Git_course extends Component {
    render() {
        return (
            <div className='blue_box'>

                <img className='image' src={logo} />
                <p className='title'>JIRA</p>

                <p className='courseType_part1'>Course type </p>
                <p className='courseType_part2'>Online Session </p>
                <p className='hours_number'>4<br />Hours</p>

            </div>
        );
    }
}

export default Git_course;