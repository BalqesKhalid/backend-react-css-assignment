import './App.css';
import AppHeader from './js/Header';
import Root_course from './js/core_cources/Nodejs_root';
import Java_script_101 from './js/core_cources/Java_script_101';
import Sql_script_101 from './js/core_cources/Sql_script_101';
import Nodejs_script_201 from './js/core_cources/Nodejs_script_201';
import Grapgql_script_302 from './js/core_cources/Grapgql_script_302';
import Agile_course from './js/additional_cources/Agile_course';
import Git_course from './js/additional_cources/Git_course';
import Jira_course from './js/additional_cources/Jira_course';
import Footer from './js/Footer';
import left_arrow from './icons-cources/left_arrow.svg'
import down_arrow from './icons-cources/down_arrow.svg'

import sub_break_line from './icons-cources/sub_break_line.svg'
function App() {
  return (
    <body class='roadmap'>
      <header>
        <AppHeader />
      </header>
      <center>
        <div className='roadmap_root'>
          <Root_course />
        </div>

        <div className='down_arrow'>
          <img src={down_arrow} alt='down arrow' />
        </div>

        {/*Level 1*/}

        <div className='level1'>
          <Java_script_101 />
          <div className='left_arrow'>
            <img src={left_arrow} alt='down arrow' />
          </div>
          <Sql_script_101 />
        </div>

        {/*arrow 1*/}
        <div className='down_arrow'>
          <img src={down_arrow} alt='down arrow' />
        </div>
        {/*Level 2*/}
        <div className='level2'>
          <Nodejs_script_201 />
        </div>
        {/*arrow 1*/}
        <div className='down_arrow'>
          <img src={down_arrow} alt='down arrow' />
        </div>
        {/*Level 3*/}
        <div className='level3'>
          <Grapgql_script_302 />
        </div>
        <div className='additionals'>
          <div className='additionals_part1'>
            <img className='image1' src={sub_break_line} alt='break line' />
            <p className='text'>Additional Courses</p>
            <img className='image2' src={sub_break_line} alt='break line' />
          </div>
          <div className='additionals_part2'>
            <Agile_course />
            <Git_course />
            <Jira_course />
          </div>
        </div>
        <br />
        <br />
        <div className='footer'>
          <Footer />
        </div>
      </center>
    </body>
  );
}

export default App;
