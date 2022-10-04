
// import './App.css';
import './App.scss';
 import Header from './components/Header';

import Main from './components/Main';
import Section from './components/Section';

import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contacts';
import Stat from './components/Stat';
import Github from './components/Github';

function App() {
  return (
    <div className="App">
      
      <Header/>


    <Main/>
    <Section/>
    <Skills/>
  
    <Project/>
    <Github/>
    <Stat/>
    <Contact/>

    </div>
  );
}

export default App;
