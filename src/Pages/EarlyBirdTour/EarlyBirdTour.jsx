import React, { useState, useEffect } from 'react';
import './EarlyBirdTour.css';
import kyotoebird from '../../assets/images/sorasak-_UIN-pFfJ7c-unsplash.jpg';
import FushimiInariShrineimg from '../../assets/images/IMG_3518.JPG';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import KiyomizuKyotoimg from '../../assets/images/KiyomizuKyoto.jpg';

function EarlyBirdTour() {
    const handleDone = () => {
        console.log('Done after 5 loops!');
      }

      const [currentIndex, setCurrentIndex] = useState(0);
      const items = [
          "Discover the splendor of Fushimi Inari, Japan's top sightseeing destination, renowned for its thousands of vibrant red torii gates.",
          "Capture those breathtaking shots of the corridor of gates devoid of any other visitors!",
          "Explore the Shinto belief system and its significance to Japanese culture and national identity."
      ];
  
      useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                if (prevIndex < items.length - 1) {
                    return prevIndex + 1;
                } else {
                    clearInterval(interval);
                    return prevIndex;
                }
            });
        }, 1000); // Change interval time as needed

        return () => clearInterval(interval);
    }, [items.length]);
  

  return (
    <div>
        <div>
            <img src={kyotoebird} className='kyotoEbirdimg' alt="Kyoto Early Bird Tour" />
            <p className='EarlyBirdTourp'>
                <Typewriter
                words={['Early Bird Tour']}
                loop={Infinity}
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={2000}
                onLoopDone={handleDone}
                
                />
            </p>
      </div>
      <br/>

      <div>
         <button type="button" class="btn btn-outline-success earlyBirdbutton">Book Now</button>
      </div>
      <div className='earlyBirdadd'>
        <p className='earlyBirdadd'>Experience the magic of Kyoto before the crowds</p>
        <p className='earlyBirdadd'>Join our Early Bird tour to visit two iconic spots</p>
        <p className='earlyBirdadd'>Immerse yourself in local history and customs</p>
        <p className='earlyBirdadd'>Enjoy the tranquility of the morning with our knowledgeable guide</p>
        <p className='earlyBirdadd'>Explore Kyoto comfortably and learn along the way</p>
      </div>
      <div className='FushimiInariShrine'>
            <p className='FushimiInariShrine'>Witness the mesmerizing sea of vibrant red torii gates at Fushimi Inari Shrine</p>
            <img src={FushimiInariShrineimg} className='FushimiInariShrine'  />
            <div className='FushimiInariShrineulposition'>
            <div className='FushimiInariShrineul'>
                <ul>
                    {items.slice(0, currentIndex + 1).map((item, index) => (
                        <li key={index} className="slide-in">
                            <p>{item}</p>
                        </li>
                    ))}
                </ul>
            </div>
            </div>
            
      </div>

      <div className='Kiyomizu'>
        <p className='FushimiInariShrine'>Discover Kiyomizu Kyoto's timeless treasure.</p>
        <img src={KiyomizuKyotoimg} className='Kiyomizu'  />
      </div>
    </div>
  );
}

export default EarlyBirdTour;
