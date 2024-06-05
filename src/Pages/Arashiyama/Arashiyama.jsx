import React, { useState, useEffect, useRef } from 'react';
import './Arashiyama.css';
import kyotoebird from '../../assets/images/arashiyama.jpg';
import banbooforestimg from '../../assets/images/banbooforest.jpg';
import { Typewriter } from 'react-simple-typewriter';
import okochisansoimg from '../../assets/images/okochisanso.jpg';
import kinkakujiimg from '../../assets/images/kinkakuji.jpg';
import iwatayamaiimg from '../../assets/images/iwatayama.jpg';
import otagiimg from '../../assets/images/otagi.jpg';
import tenryujiimg from '../../assets/images/tenryuji.jpg';
import Card from '../../Component/Card/Card';
import BookNow from '../BookNow/BookNow';
function Arashiyama() {
    const handleDone = () => {
        console.log('Done after 5 loops!');
    }

    

    const items = [
        "Wander through the tranquil paths of Arashiyama Bamboo Forest, a natural wonder that epitomizes Kyoto's serene beauty.",
        "Capture breathtaking photos of towering bamboo stalks as sunlight filters through the dense canopy.",
        "Discover the cultural and historical significance of Arashiyama, a place deeply rooted in Japanese tradition.",
        "Explore the nearby Tenryu-ji Temple and other historic sites that add to the enchanting ambiance of the forest.",
    ];

    const items2 = [
        "Discover the historic Okochi Sanso Villa, a stunning example of traditional Japanese architecture and gardens.",
        "Experience the tranquility of the villa's meticulously maintained gardens and tea houses.",
        "Learn about the life and legacy of Denjiro Okochi, the famous actor who created this serene retreat.",
        "Enjoy panoramic views of Kyoto and the surrounding mountains from the villa's scenic viewpoints.",
    ];

    const items3 = [
        "Bask in the shimmering brilliance of the Golden Pavilion, a dazzling symbol of opulence and tranquility.",
        "Follow the winding paths through meticulously manicured gardens, each step revealing a new facet of natural beauty.",
        "Pause to contemplate the reflections of the Golden Pavilion shimmering upon the tranquil waters of Kyoko-chi Pond.",
        "Immerse yourself in the serenity of the surrounding forest, where ancient trees whisper tales of centuries past.",
    ];
    

    const items4 = [
        "Ascend the scenic slopes to Iwatayama Monkey Park, a sanctuary where nature and primates harmonize.",
        "Greet the playful residents of the park as they roam freely amidst lush foliage and panoramic views of Kyoto.",
        "Marvel at the intimate interactions between humans and macaques, observing their social dynamics and natural behaviors.",
        "Indulge in the tranquility of the surroundings, where the calls of monkeys mingle with the rustle of leaves in the gentle breeze.",
    ];
    

    const items5 = [
        "Step into the sacred grounds of Tenryu-ji Temple, renowned for its elegant simplicity and profound tranquility.",
        "Stroll along the temple's serene pathways, enveloped by meticulously manicured gardens and ancient trees.",
        "Contemplate the harmony between architecture and nature as you admire the temple's graceful buildings framed by lush greenery.",
        "Experience moments of introspection and reverence within the temple's hallowed halls, resonating with centuries of spiritual devotion.",
    ];
    

    const items6 = [
        "Discover the hidden gem of Otagi Nenbutsu-ji Temple, nestled amidst the serene landscapes of Kyoto.",
        "Marvel at the whimsical charm of over 1,200 stone statues, each with its own unique expression and story to tell.",
        "Wander through the tranquil grounds of the temple, where centuries-old sculptures beckon with a sense of quiet contemplation.",
        "Reflect on the teachings of Buddhism as you immerse yourself in the peaceful ambiance and intricate artistry of Otagi Nenbutsu-ji.",
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
                <p className='ArashiyamaTourp'>
                    <Typewriter
                        words={['Arashiyama']}
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
                <button type="button" className="btn btn-outline-success earlyBirdbutton" onClick={() => openModal('Arashiyama')}>Book Now</button>
            </div>
            <div className='earlyBirdadd'>
                <p className='earlyBirdadd'>Immerse in Arashiyama's natural splendor, a serene retreat in Japan.</p>
                <p className='earlyBirdadd'>Embark on a guided journey through Arashiyama's scenic wonders.</p>
                <p className='earlyBirdadd'>Explore the rich history and culture woven into Arashiyama's landscapes.</p>
                <p className='earlyBirdadd'>Savor the tranquility of Arashiyama's picturesque settings with our knowledgeable guide.</p>
                <p className='earlyBirdadd'>Experience Arashiyama's beauty and charm at your own pace with our expert team.</p>
            </div>

            <div className='card' style={{ width: '90%', margin:'5%'}}>
                <p className='FushimiInariShrine'>Unveil the Tranquility of Arashiyama Bamboo Forest: A Serene Passage through Kyoto's Natural Wonder</p>
                <Card imageUrl={banbooforestimg}
                description={items} />
            </div>

            <div className='card' style={{ width: '90%', margin:'5%'}}>
                <p className='FushimiInariShrine'>Explore the Tranquil Beauty of Okochi Sanso Garden: A Delightful Retreat in Kyoto's Scenic Hideaway</p>
                <Card imageUrl={okochisansoimg}
                description={items2} />
            </div>

            <div className='card' style={{ width: '90%', margin:'5%'}}>
                <p className='FushimiInariShrine'>Behold the Radiance of Kinkakuji Temple: A Glimpse into Kyoto's Golden Splendor</p>
                <Card imageUrl={kinkakujiimg}
                description={items3} />
            </div>

            <div className='card' style={{ width: '90%', margin:'5%'}}>
                <p className='FushimiInariShrine'>Embrace the Charm of Iwatayama Monkey Sanctuary: A Natural Haven in Kyoto's Heart</p>
                <Card imageUrl={iwatayamaiimg}
                description={items4} />
            </div>

            <div className='card' style={{ width: '90%', margin:'5%'}}>
                <p className='FushimiInariShrine'>Discover the Serenity of Tenryu-ji Temple: A Tranquil Oasis Amidst Kyoto's Spiritual Landscape</p>
                <Card imageUrl={tenryujiimg}
                description={items5} />
            </div>

            <div className='card' style={{ width: '90%', margin:'5%'}}>
                <p className='FushimiInariShrine'>Unveil the Whimsy of Otagi Nenbutsu-ji Temple: A Tranquil Haven in Kyoto's Cultural Tapestry</p>
                <Card imageUrl={otagiimg}
                description={items6} />
            </div>

        <div className='earlyBirdbutton'>
            <button type="button" className="btn btn-outline-success earlyBirdbuttonbottom" onClick={() => openModal('Arashiyama')}>Book Now</button>
        </div>
        {modalData.isVisible && <BookNow onClose={closeModal} plane={modalData.plane} />}
        
        </div>
        
        </> 
    );
}

export default Arashiyama;
