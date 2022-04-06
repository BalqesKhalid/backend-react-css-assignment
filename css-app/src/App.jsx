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

import backgroundImg from './background.svg'
const sql_101_course = {
  'shortTitle' :'SQL',
  'code':'SQL 101',
  'durationByDays':1,
  'durationByhours':8,
  'fullTitle': ['Learning SQL']
};

const js_101_course = {
  'shortTitle' :'Javascript',
  'code':'JS 101',
  'durationByDays':8,
  'durationByhours':50,
  'fullTitle': ['The Modern Javascript', 'Bootcamp']
};

const grapgQl_302_course = {
  'shortTitle' :'GraphQL',
  'code':'JS 302',
  'durationByDays':6,
  'durationByhours':40,
  'fullTitle': ['Practical GraphQL: Become a','GraphQL Ninja']
};
const nodeJs_201_course = {
  'shortTitle' :'NodeJS',
  'code':'JS 201',
  'durationByDays':10,
  'durationByhours':64,
  'fullTitle': ['The complete Node.js Developer ','Course (3rd Edition)']
};


const agile_course = {
  'shortTitle' :'Agile',
  'hours':4,
  'type':'Online Session'  
};
const jira_course = {
  'shortTitle' :'JIRA',
  'hours':4,
  'type':'Online Session'  
};
const git_course = {
  'shortTitle' :'git',
  'hours':4,
  'type':'Online Session'  
};

function App() {
  return (
    <body class='roadmap' style={{backgroundImage: `url(${backgroundImg})`}}>
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
          <CoreCorse details={js_101_course}/>
        </div>
        <div className='level1_col2'>
          <img src={left_arrow} alt='right arrow' />
        </div>
        <div className='level1_col3'>
          <CoreCorse details={sql_101_course}/>
        </div>
      </div>
      {/*arrow 2*/}
      <div className='down_arrow2'>
        <img src={down_arrow} alt='down arrow' />
      </div>
      {/*Level 2*/}
      <div className='level2'>
        <CoreCorse details={nodeJs_201_course}/>
      </div>
      {/*arrow 3*/}
      <div className='down_arrow3'>
        <img src={down_arrow} alt='down arrow' />
      </div>
      {/*Level 3*/}
      <div className='level3'>
      <CoreCorse details={grapgQl_302_course}/>
      </div>

      <div className='additionals'>
        <div className='additionals_part1'>
          <img className='image1' src={sub_break_line} alt='break line' />
          <p className='text'>Additional Courses</p>
          <img className='image2' src={sub_break_line} alt='break line' />
        </div>
        <div className='additionals_part2'>

          <div style={{ gridColumn: '1' }}>
            <AdditionalCourse details={jira_course} logo={jira_logo}/>
          </div>
          <div style={{ gridColumn: '2' }}>
       
          <AdditionalCourse details={git_course} logo={git_logo}/>
          </div>

          <div style={{ gridColumn: '3' }}>
         
          <AdditionalCourse details={agile_course} logo={agile_logo}/>
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
