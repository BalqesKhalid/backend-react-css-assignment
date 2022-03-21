import React, { Component } from 'react';
import logo from '../../icons-cources/graphql.svg'
import '../../css/green_box.css';

class Grapgql_script_302 extends Component {
    render() {
        return (

            <div className='green_box'>

                <div className='first_row'>
                    <div>
                        <img className='image' src={logo} alt="graphQl logo" />
                        <div className='duration'>
                            <p className='hours'>40 Hours</p>
                            <p className='days'>(6 Days)</p>
                        </div>
                        <div className='title'>
                            <p className='first'>GraphQL</p>
                            <p className='last'>JS 302</p>
                        </div>
                    </div>
                </div>
                <div>
                    <p className='full_course_name_part1'>Full course name</p>
                    <p className='full_course_name_part2'>Practical GraphQL: Become a <br />GraphQL Ninja</p>
                </div>
            </div>
        );
    }
}

export default Grapgql_script_302;