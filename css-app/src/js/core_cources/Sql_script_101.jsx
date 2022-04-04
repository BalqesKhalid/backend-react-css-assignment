import React, { Component } from 'react';
import logo from '../../icons-cources/sql.svg'
import '../../css/green_box.css';

class Sql_script_101 extends Component {
    render() {
        return (


            <div className='green_box'>
                <div className='row1column1'>
                    <img className='image' src={logo} img="SQL Logo" />
                    <div className='firstrow_tiltle'>
                        <p className='first'>SQL</p>
                        <br />
                        <p className='last'>SQL 101</p>
                    </div>
                    <p className='hours'>8 Hours</p>
                    <p className='days'>(1 Days)</p>
                </div>

                <p className='full_course_name_part1'>Full course name</p>
                <p className='full_course_name_part2'>Learning SQL</p>
            </div>

        );
    }
}

export default Sql_script_101;