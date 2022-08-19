import logo from './logo.svg';
import './App.css';
import Profile from './PortfolioContainer/Home/Profile';
 import Header from './components/Header';

import Main from './components/Main';
import Section from './components/Section';
import Work from './components/Work';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contacts';

function App() {
  return (
    <div className="App">
      
      <Header/>


    <Main/>
    <Section/>
    <Skills/>
  
    <Project/>
    <Contact/>

    </div>
  );
}

export default App;
