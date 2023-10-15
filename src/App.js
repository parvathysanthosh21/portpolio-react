import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Nav from './components/Nav';
import Project from './components/Project';
import Skill from './components/Skill';
import { createContext, useState } from 'react';
import ReactSwitch from 'react-switch';
 



function App() {
   const ThemeContext = createContext(null)
const [theme, setTheme] = useState("light")

  const toggleTheme = () =>{
    setTheme((curr)=>(curr==="light" ? "dark" : "light"))
  }
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>

    <div id={theme} className="App">
     <Nav />
     <div className='switch mt-3 me-3'>
          <ReactSwitch onChange={toggleTheme} checked={theme ==="dark"}/>
          </div>
     <Home/>
     <About/>
     <Skill/>
     <Project/>
     <Contact/>
     <Footer/>
     
    
    </div>
    </ThemeContext.Provider>

  );
}

export default App;