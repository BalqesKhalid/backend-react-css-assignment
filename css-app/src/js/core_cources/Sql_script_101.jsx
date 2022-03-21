import React, { Component } from 'react';
import logo from '../../icons-cources/sql.svg'
import '../../css/green_box.css';

class Sql_script_101 extends Component {
    render() {
        return (


            <div className='green_box'>

                <div className='first_row'>
                    <div>
                        <img className='image' src={logo} img="SQL Logo" />
                        <div className='duration'>
                            <p className='hours'>8 Hours</p>
                            <p className='days'>(1 Days)</p>
                        </div>
                        <div className='title'>
                            <p className='first'>SQL</p>
                            <p className='last'>SQL 101</p>
                        </div>
                    </div>
                </div>
                <div>
                    <p className='full_course_name_part1'>Full course name</p>
                    <p className='full_course_name_part2'>Learning SQL</p>
                </div>
            </div>

        );
    }
}

export default Sql_script_101;