import React from 'react';
import './App.css';
import AppHeader from './js/Header';
import Root_course from './js/core_cources/Nodejs_root';
import CoreCorse from './js/core_cources/CoreCorse';
import AdditionalCourse from './js/additional_cources/AdditionalCourse';
import Footer from './js/Footer';
import left_arrow from './icons-cources/left_arrow.svg'
import down_arrow from './icons-cources/down_arrow.svg'
import sub_break_line from './icons-cources/sub_break_line.svg'
/*logo*/
import jira_logo from './icons-cources/jira.svg'
import agile_logo from './icons-cources/agile.svg'
import git_logo from './icons-cources/git.svg'

import CoreCorcesUtil from './CoreCorcesUtil';
import AdditionalCorcesUtil from './AdditionalCorcesUtil';





function App() {
  return (
    <body class='roadmap'>
      <header className='header'>
        <AppHeader />
      </header>

      <div className='roadmap_root'>
        <Root_course />
      </div>

      <div className='down_arrow1'>
        <img src={down_arrow} alt='down arrow' />
      </div>

      {/*Level 1*/}

      <div className='level1'>
        <div className='level1_col1'>
          <CoreCorse details={CoreCorcesUtil.getCourseByCode('JS 101')}/>
        </div>
        <div className='level1_col2'>
          <img src={left_arrow} alt='right arrow' />
        </div>
        <div className='level1_col3'>
        <CoreCorse details={CoreCorcesUtil.getCourseByCode('SQL 101')}/>
        </div>
      </div>
      {/*arrow 2*/}
      <div className='down_arrow2'>
        <img src={down_arrow} alt='down arrow' />
      </div>
      {/*Level 2*/}
      <div className='level2'>
        <CoreCorse details={CoreCorcesUtil.getCourseByCode('JS 201')}/>
      </div>
      {/*arrow 3*/}
      <div className='down_arrow3'>
        <img src={down_arrow} alt='down arrow' />
      </div>
      {/*Level 3*/}
      <div className='level3'>
      <CoreCorse details={CoreCorcesUtil.getCourseByCode('JS 302')}/>
      </div>

      <div className='additionals'>
        <div className='additionals_part1'>
          <img className='image1' src={sub_break_line} alt='break line' />
          <p className='text'>Additional Courses</p>
          <img className='image2' src={sub_break_line} alt='break line' />
        </div>
        <div className='additionals_part2'>

          <div style={{ gridColumn: '1' }}>
            <AdditionalCourse details={AdditionalCorcesUtil.getCourseByCode('JIRA')} logo={jira_logo}/>
          </div>
          <div style={{ gridColumn: '2' }}>
       
          <AdditionalCourse details={AdditionalCorcesUtil.getCourseByCode('git')}  logo={git_logo}/>
          </div>

          <div style={{ gridColumn: '3' }}>
         
          <AdditionalCourse details={AdditionalCorcesUtil.getCourseByCode('Agile')}  logo={agile_logo}/>
          </div>

        </div>

      </div>

      <footer className='footer'>
        <Footer />
      </footer>
    </body >
  );

}

export default App;
