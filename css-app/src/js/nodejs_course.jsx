import React, { Component } from 'react';
import logo from '../icons-cources/nodejs'

class nodejs_course extends Component {
    render() {
        return (
            <div>
                <img src={logo}  />
                <div >
                <p >
                Full course name
                The complete Node.js 
                Developer Course (3rd Edition)
                </p>
                <p>Topic</p>
                <p>NodeJS</p>
                <p>Content Duration</p>
                <p>35 Hours</p>
                </div>
                <a href='https://www.udemy.com/course/the-complete-nodejs-developer-course-2/'>Go to course ></a>
            </div>
        );
    }
}

export default nodejs;