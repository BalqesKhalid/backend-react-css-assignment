import React, { Component } from 'react';
import '../css/footer.css'
class Footer extends Component {
    render() {
        return (
            <div className='box'>
                
                <div className='green'>
                    <p className='text'>Mandatory</p>

                </div>

                <div className='orange'>
                    <p className='text'>Optional</p>

                </div>

                <div className='blue'>
                    <p className='text'>Additional Courses</p>
                </div>

            </div>
        );
    }
}

export default Footer;