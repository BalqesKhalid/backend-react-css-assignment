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
          <Java_script_101 />
        </div>
        <div className='level1_col2'>
          <img src={left_arrow} alt='right arrow' />
        </div>
        <div className='level1_col3'>
          <Sql_script_101 />
        </div>
      </div>
      {/*arrow 2*/}
      <div className='down_arrow2'>
        <img src={down_arrow} alt='down arrow' />
      </div>
      {/*Level 2*/}
      <div className='level2'>
        <Nodejs_script_201 />
      </div>
      {/*arrow 3*/}
      <div className='down_arrow3'>
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

          <div style={{ gridColumn: '1' }}>
            <Jira_course />
          </div>
          <div style={{ gridColumn: '2' }}>
            <Git_course />
          </div>

          <div style={{ gridColumn: '3' }}>
            <Agile_course />
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
