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
      <div className='intro row'>
        <div className='col-lg-6 col-md-12 col-sm-12' >
          <img src={heroimg} className='introImg'/>
        </div>
        <div className='col-lg-6 col-md-12 col-sm-12'>
          <h1 className='heroH1'>Kyoto Tour Itinerary</h1>
        </div>
        
      </div>
    </div>
    </>
  )
}

export default Hero