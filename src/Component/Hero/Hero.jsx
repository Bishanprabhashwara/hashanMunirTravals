import React from 'react'
import Video from '../HeroVideo/Video'
import Navbar from '../Navbar/Navbar'
import heroimg from '../../assets/images/Untitled-2-removebg-preview.png'
import './Hero.css'


function Hero() {
  return (
    <>
    {/* <div className="nav-hero">
      <Navbar/>
    </div>
    <div className='herointro'>
      <p className='intro'><img src={heroimg} className='introImg'/>
      <p className='heroH1'>Discover Japan Where tradition meets innovation</p></p>
    </div>
    <Video className="heroVideo"/>  */}
    <Video className="heroVideo"/> 
    <div className="nav-hero">
      <Navbar/>
    </div>
    <div className='herointro'>
      <div className='intro'>
        <img src={heroimg} className='introImg'/>
        <p className='heroH1'>Discover Japan Where tradition meets innovation</p>
      </div>
    </div>
    </>
  )
}

export default Hero