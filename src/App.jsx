import React from 'react';
import Header from './Header.jsx'
import About from './About.jsx'
import Skills from './Skills.jsx'
import Projects from './Projects.jsx'
import More from './More.jsx'
import Particle from './Particle.jsx';
import {BrowserRouter}from 'react-router-dom';
function App(){
    return(
      <BrowserRouter>
        <Header/>
        <About/>
        <Skills/>
        <Projects/>
        <More/>
        <Particle/>
      </BrowserRouter>
    );
}
export default App;