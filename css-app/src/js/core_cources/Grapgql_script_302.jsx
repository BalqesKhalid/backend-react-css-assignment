import React, { Component } from 'react';
import logo from '../../icons-cources/graphql.svg'
import '../../css/green_box.css';

class Grapgql_script_302 extends Component {

    render() {
        return (

            <div className='green_box'>
                <div className='row1column1'>
                    <img className='image' src={logo} alt="graphQl logo" />
                    <div className='firstrow_tiltle'>
                        <p className='first'>GraphQL</p>
                        <br />
                        <p className='last'>JS 302</p>
                    </div>
                    <p className='hours'>40 Hours</p>
                    <p className='days'>(6 Days)</p>
                </div>
                <div className='course_full_name'>
                    <p className='full_course_name_part1'>Full course name</p>
                    <p className='full_course_name_part2'>Practical GraphQL: Become a <br />GraphQL Ninja</p>
                </div>
            </div>
        );
    }
}

export default Grapgql_script_302;