import './App.css';
import AppHeader from './js/app_header';
import Root_course from './js/core_cources/nodejs_root';
import Java_script_101 from './js/core_cources/Java_script_101';
function App() {
  return (
    <div >
      <AppHeader />
      <div >
      <Root_course />
      <Java_script_101/>
      </div>
      </div>    
  );
}

export default App;
