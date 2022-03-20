import React, { Component } from 'react';
import logo from '../../icons-cources/javascript.svg'
import '../../css/green_box.css';

class Sql_script_101 extends Component {
    render() {
        return (
            <div className='green_box'>
                <div className='green_box_part1'>
                    <img src={logo} img="Java script" />
                    <div style={{ display: "inline" }}>
                        <p className='title1'>SQL </p>
                        <p className='title2'>SQL 101</p>

                    </div>                    

                </div>
                <div style={{ display: "inline" , justifyContent:"right" }}>
                        <p className='tiltle3'>8 Hours</p>
                        <p className='transparent_title'>(1 Days)</p>
                    </div>
                <div>
                    <p className='transparent_title'>Full course name</p>
                    <p className='title3'>Learning SQL</p>
                </div>
            </div>
        );
    }
}

export default Sql_script_101;