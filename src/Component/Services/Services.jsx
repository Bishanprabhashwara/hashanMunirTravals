import React from 'react'
import './Services.css'
import YasakaShrine from '../../assets/images/YasakaShrine.JPG'
import image2 from '../../assets/images/IMG_4631.JPG'
import Contact from '../Contact/Contact'

function Services() {
  return (
    <>
    
    <div className='services'>
    <h1>Plans</h1>
      <div>
      
        <div>
          <img src={YasakaShrine} className='YasakaShrineimg'/>
          <div className='YasakaShrineinfo'>
          <h1><a href='/earlybirdtour' className='earlybirda'>Early Bird Tour </a></h1>
          <br/>
            <ul>
              <li>Visit two of the most famous places in Japan, the Fushimi Inari Shrine and the Kiyomizu Temple</li>
              <li>Beat the crowds with a 6 o'clock start </li>
              <li>Choose from a private tour or a small group tour with a maximum of eight participants</li>
              <li>From 9,500 yen / person ($65 USD)</li>
            </ul>
            <div className='YasakaShrinebutton'><button className='btn btn-outline-success YasakaShrinebutton'>Book Now</button></div>
          </div>
          
        </div>
        
        
      </div>
      {/* --------------------------------------------------------------------- */}
      
      <div className='vip'>
      
        <div >
          <img src={image2} className='image2'/>
          <div className='YasakaShrineinfo'>
          <h1><a href='#' className='earlybirda'>VIP Tours  </a></h1>
          <br/>
            <ul>
              <li>Visit two of the most famous places in Japan, the Fushimi Inari Shrine and the Kiyomizu Temple</li>
              <li>Beat the crowds with a 6 o'clock start </li>
              <li>Choose from a private tour or a small group tour with a maximum of eight participants</li>
              <li>From 9,500 yen / person ($65 USD)</li>
            </ul>
            <div className='YasakaShrinebutton'><button className='btn btn-outline-success YasakaShrinebutton'>Book Now</button></div>
          </div>
          
        </div>
        
        
      </div>
      {/* --------------------------------------------------------------------- */}
      
      <div className='NightWalk'>
      
        <div >
          <img src={image2} className='image2'/>
          <div className='YasakaShrineinfo'>
          <h1><a href='#' className='earlybirda'> Gion Tours</a></h1>
          <br/>
            <ul>
              <li>Visit two of the most famous places in Japan, the Fushimi Inari Shrine and the Kiyomizu Temple</li>
              <li>Beat the crowds with a 6 o'clock start </li>
              <li>Choose from a private tour or a small group tour with a maximum of eight participants</li>
              <li>From 9,500 yen / person ($65 USD)</li>
            </ul>
            <div className='YasakaShrinebutton'><button className='btn btn-outline-success YasakaShrinebutton'>Book Now</button></div>
          </div>
          
        </div>

      </div>
      
      <div className='contactservice'>
      
       <Contact />
      </div>
      
    </div>
    </>
  )
}

export default Services