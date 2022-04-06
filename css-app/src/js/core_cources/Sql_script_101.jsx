import React, { Component } from 'react';
import logo from '../../icons-cources/sql.svg'
import '../../css/green_box.css';

function Sql_script_101() {
    return (


        <div className='green_box'>
            <div className='row1column1'>
                <img className='image' src={logo} img="SQL Logo" />
                <div className='firstrow_tiltle'>
                    <p className='first'>SQL</p>
                    <br />
                    <p className='last'>SQL 101</p>
                </div>
                <div className='firstrow_duraion'>
                    <p className='hours'>8 Hours</p>
                    <p className='days'>(1 Days)</p>
                </div>
            </div>
            <div className='course_full_name'>
                <p className='full_course_name_part1'>Full course name</p>
                <p className='full_course_name_part2'>Learning SQL</p>
            </div>
        </div>

    );
}

export default Sql_script_101;