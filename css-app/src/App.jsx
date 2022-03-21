import './App.css';
import AppHeader from './js/app_header';
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
    <div class='roadmap'>
      <div className='header'>
        <AppHeader />
      </div>
      <div className='roadmap_root'>
        <Root_course />

      </div>

      <div className='down_arrow'>
        <img src={down_arrow} alt='down arrow' />
      </div>

      <div className='level1'>
        <Java_script_101 />
        <img src={left_arrow} alt='left arrow' />
        <Sql_script_101 />
      </div>
      <div className='down_arrow'>
        <img src={down_arrow} alt='down arrow' />
      </div>
      <div className='level2'>
        <Nodejs_script_201 />
      </div>
      <div className='down_arrow'>
        <img src={down_arrow} alt='down arrow' />
      </div>
      <div className='level3'>
        <Grapgql_script_302 />
      </div>

      <div className='additionals'>
        <img className='image' src={sub_break_line} alt='break line' />
        <p className='text'>Additional Courses</p>
        <img className='image' src={sub_break_line} alt='break line' />
      </div>
      <div className='additionals'>
        <Agile_course />
        <Git_course />
        <Jira_course />
      </div>
      <br/>
      <br/>
      <div className='footer'>
        <Footer />
      </div>

    </div>
  );
}

export default App;
