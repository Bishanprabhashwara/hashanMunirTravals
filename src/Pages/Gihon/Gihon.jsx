import React, { useState, useEffect, useRef } from 'react';
import './Gihon.css';
import kyotoebird from '../../assets/images/sorasak-_UIN-pFfJ7c-unsplash.jpg';
import FushimiInariShrineimg from '../../assets/images/214176.jpg';
import { Typewriter } from 'react-simple-typewriter';
import KiyomizuKyotoimg from '../../assets/images/kyoto-yasaka-shrine-209092.jpg';
import Higashiyamaimg from '../../assets/images/free-photo-of-kyomizudera.jpeg';
import kenninjiimg from '../../assets/images/awp1hgvrw7r7lzo62hnu.jpg';
import Card from '../../Component/Card/Card';
import BookNow from '../BookNow/BookNow';
function Gihon() {
    const handleDone = () => {
        console.log('Done after 5 loops!');
    }

    

    const items = [
        "Experience the majestic beauty of Yasaka Pagoda, a quintessential symbol of Kyoto's rich cultural heritage.",
        "Capture stunning photographs of the iconic five-story pagoda against the serene Kyoto skyline.",
        "Learn about the historical and spiritual significance of Yasaka Pagoda in Japanese culture and traditions."
    ];

    const items2 = [
        "Discover the historic Yasaka Shrine, a vibrant and culturally significant site in the heart of Kyoto.",
        "Experience the tranquility of the shrine grounds before the crowds arrive.",
        "Learn about Shinto practices and their impact on Japanese culture and daily life.",
        "Visit the famous dance stage and immerse yourself in the shrine's rich festival traditions."
    ];

    const items3 = [
        "Stroll through the ancient pathways leading to Kiyomizu Temple, immersed in centuries of spiritual history.",
        "Feel the sacred aura as you ascend the temple's stone steps, leading to its majestic wooden architecture.",
        "Marvel at the panoramic views of Kyoto cityscape from the temple's famous wooden terrace, suspended over the hillside.",
        "Discover the intricate details of Kiyomizu Temple's architecture, reflecting traditional Japanese craftsmanship.",
        "Conclude your visit with a moment of reflection in the temple's serene gardens, surrounded by nature's tranquility."
    ];
    

    const items4 = [
        "Enter the serene grounds of Kenninji Temple, where tranquility and history converge.",
        "Admire the timeless beauty of the temple's architecture, featuring intricate wooden carvings and elegant gardens.",
        "Explore the inner sanctums of Kenninji, where ancient Buddhist teachings come to life in vibrant artwork and sacred relics.",
        "Participate in a traditional tea ceremony, experiencing the meditative ritual of preparing and savoring matcha in a serene tatami room.",
        "Reflect on the Zen philosophy permeating Kenninji's atmosphere, finding inner peace amidst the hustle and bustle of modern life."
    ];
    

    

    const [modalData, setModalData] = useState({
        isVisible: false,
        plane: ''
      });
    
      const openModal = (plane) => {
        setModalData({
          isVisible: true,
          plane
        });
      };
    
      const closeModal = () => {
        setModalData({
          isVisible: false,
          plane: ''
        });
      };

    return (
       <>
        <div>
            <div>
                <img src={kyotoebird} className='kyotoEbirdimg' alt="Kyoto Early Bird Tour" />
                <p className='gihonTourp'>
                    <Typewriter
                        words={[' Gion']}
                        loop={Infinity}
                        typeSpeed={100}
                        deleteSpeed={50}
                        delaySpeed={2000}
                        onLoopDone={handleDone}
                    />
                </p>
            </div>
            <br />
            <div className='earlyBirdbutton'>
                <button type="button" className="btn btn-outline-success earlyBirdbutton" onClick={() => openModal('gihon')}>Book Now</button>
            </div>
            <div className='earlyBirdadd'>
                <p className='earlyBirdadd'>Experience the enchanting charm of Gion, Kyoto's historic geisha district</p>
                <p className='earlyBirdadd'>Join our guided tour to explore two iconic landmarks in Gion</p>
                <p className='earlyBirdadd'>Dive into the rich history and vibrant traditions of the area</p>
                <p className='earlyBirdadd'>Enjoy the serene ambiance of Gion with our expert guide</p>
                <p className='earlyBirdadd'>Discover the beauty and culture of Gion at a leisurely pace</p>

            </div>

            <div className='card' style={{ width: '90%', margin:'5%'}}>
                <p className='FushimiInariShrine'>Discover the Mystique of Yakasa Pagoda: A Timeless Journey through Kyoto's Iconic Landmark</p>
                <Card imageUrl={FushimiInariShrineimg}
                description={items} />
            </div>

            <div className='card' style={{ width: '90%', margin:'5%'}}>
                <p className='FushimiInariShrine'>Exploring Yasaka Shrine: Kyoto's Gateway to Tradition and Tranquility</p>
                <Card imageUrl={KiyomizuKyotoimg}
                description={items2} />
            </div>

            <div className='card' style={{ width: '90%', margin:'5%'}}>
                <p className='FushimiInariShrine'>Discover the Tranquil Elegance of Kenninji Temple: Kyoto's Zen Masterpiece</p>
                <Card imageUrl={kenninjiimg}
                description={items3} />
            </div>

            <div className='card' style={{ width: '90%', margin:'5%'}}>
                <p className='FushimiInariShrine'>Experience the Serenity of Kiyomizu Temple: Kyoto's Majestic Mountain Sanctuary</p>
                <Card imageUrl={Higashiyamaimg}
                description={items4} />
            </div>

        <div className='earlyBirdbutton'>
            <button type="button" className="btn btn-outline-success earlyBirdbuttonbottom" onClick={() => openModal('gihon')}>Book Now</button>
        </div>
        {modalData.isVisible && <BookNow onClose={closeModal} plane={modalData.plane} />}
        
        </div>
        
        </> 
    );
}

export default Gihon;
