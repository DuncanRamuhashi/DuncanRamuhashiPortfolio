import { useState } from 'react'

import CoverSetter from './CoverSetter';
import AboutPage from './AboutPage';
import ExWork from './ExWork';
import Activity from './Activity';
import Work from './Work';
import ContactPage from './ContactPage';
import Footer from './Footer';
function App() {
  

  return (
    <>
   
      <CoverSetter/>
      <section id="AboutPage"><AboutPage/></section>
      <section id="ExWork"><ExWork/></section>
      <section id="Activity"> <Activity/></section>
      <section id="Work"><Work/></section>
      <section id="ContactPage"><ContactPage/></section>
      <section id="Footer"><Footer/></section>
     
      
     
      
      
      
    </>
  );
}

export default App
