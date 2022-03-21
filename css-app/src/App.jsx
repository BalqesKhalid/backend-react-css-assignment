import './App.css';
import AppHeader from './js/app_header';
import Root_course from './js/core_cources/nodejs_root';
import Java_script_101 from './js/core_cources/Java_script_101';
import Sql_script_101 from './js/core_cources/Sql_script_101';
import Nodejs_script_201 from './js/core_cources/Nodejs_script_201';
import Grapgql_script_302 from './js/core_cources/Grapgql_script_302';
import Agile_course from './js/additional_cources/Agile_course';
import Git_course from './js/additional_cources/Git_course';
import Jira_course from './js/additional_cources/Jira_course';

function App() {
  return (
    <div >
      <AppHeader />
      <Root_course />
      <div style={{ width: "100%", display: "flex" }}>

        <Java_script_101 />
        <Sql_script_101 />
        <Nodejs_script_201 />
        <Grapgql_script_302 />
      </div>
      <div style={{ width: "100%", display: "flex" }}>
        <Agile_course />
        <Git_course />
        <Jira_course/>
      </div>
    </div>
  );
}

export default App;
