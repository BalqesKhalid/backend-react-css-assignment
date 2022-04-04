import React, { Component } from 'react';
import logo from '../../icons-cources/git.svg'

function Git_course () {
        return (
            <div className='blue_box'>

                <img className='image' src={logo} />
                <p className='title'>git</p>

                <p className='courseType_part1'>Course type </p>
                <p className='courseType_part2'>Online Session </p>
                <p className='hours_number'>4<br />Hours</p>

            </div>
        );
}

export default Git_course;