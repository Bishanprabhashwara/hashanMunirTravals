import React from 'react'
import './Home.css'

import Navbar from '../../Component/Navbar/Navbar'
import Hero from '../../Component/Hero/Hero'
import About from '../../Component/about/about'
import Gallery from '../../Component/gallery/gallery';
import Packages from '../../Component/packages/packages';
import Process from '../../Component/process/process';
import Contact from '../../Component/Contact/Contact';
import Footer from '../../Component/footer/footer';


function Home() {
  return (
    <>
      {/* <Navbar/> */}
      <Hero/>
      <div className='homeservices'>
        <About/>
        <Gallery/>
        <Packages/>
        <Process/>
        <Contact/>
        <Footer/>
      </div>
    </>
  )
}

export default Home