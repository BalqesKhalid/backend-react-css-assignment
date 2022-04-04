import React, { Component } from 'react';

import logo from '../../icons-cources/nodejs.svg';
import '../../css/nodejs_root.css';

class Nodejs_root extends Component {
    render() {
        return (
           
                <div className='root_box'>
                    <div className='root_part1_border'>
                        <img src={logo} alt='nodeJs' />
                        <p className='tilte'>NodeJS</p>
                    </div>
                    <div className='root_part2_border'>
                        <p style={{ fontSize: "16px" }}>Total Training Duration:</p>
                        <p style={{ fontSize: "19px" }}>163 Hours (24 Days)</p>
                    </div>
                </div>
            
        );
    }
}

export default Nodejs_root;