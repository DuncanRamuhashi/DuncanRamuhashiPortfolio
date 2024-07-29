import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CoverSetter from './CoverSetter';
import AboutPage from './AboutPage';
import ExWork from './ExWork';
import Activity from './Activity';
import Work from './Work';
import ContactPage from './ContactPage';
import FooterPage from './FooterPage';

import Projects from './Projects';
function App() {
  

  return (
    <>
    
        <Router>
           <Routes>
        
             <Route path="/projects" element={<Projects />} />
             
        
           <Route 
          path="*" 
          element={
            <>
              <CoverSetter />
              <section id="AboutPage"><AboutPage /></section>
              <section id="ExWork"><ExWork /></section>
              <section id="Activity"><Activity /></section>
              <section id="Work"><Work /></section>
              <section id="ContactPage"><ContactPage /></section>
              <section id="FooterPage"><FooterPage /></section> 
            </>
          } 
        />
      </Routes>
    </Router>
    </>
  );
}

export default App
