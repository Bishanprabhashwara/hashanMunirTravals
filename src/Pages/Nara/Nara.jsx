import React, { useState, useEffect, useRef } from 'react';
import './Nara.css';
import kyotoebird from '../../assets/images/9b.jpg';
import todaiimg from '../../assets/images/todai.jpg';
import { Typewriter } from 'react-simple-typewriter';
import cimg from '../../assets/images/7c.jpg';
import kinkakujiimg from '../../assets/images/6764.jpg';
import iwatayamaiimg from '../../assets/images/museums03.jpg';
import otagiimg from '../../assets/images/Mango.jpg';
import tenryujiimg from '../../assets/images/Kofukuji-Octagonal-Hall.jpg';
import Card from '../../Component/Card/Card';
import BookNow from '../BookNow/BookNow';
function Nara() {
    const handleDone = () => {
        console.log('Done after 5 loops!');
    }

    

    const items = [
        "Marvel at the grandeur of Todai-ji Temple, home to the world's largest bronze statue of the Buddha Vairocana, a testament to Japan's rich religious heritage.",
        "Admire the impressive architecture of the Daibutsuden (Great Buddha Hall), one of the largest wooden structures in the world.",
        "Experience the serene and spiritual atmosphere of Todai-ji Temple, a UNESCO World Heritage site with profound historical significance.",
        "Explore the surrounding Nara Park, where friendly deer roam freely, adding a unique charm to your visit to Todai-ji."
    ];

    const items2 = [
        "Wander through the expansive Nara Park, home to hundreds of freely roaming, friendly deer that are considered national treasures.",
        "Experience the unique interaction with the park's deer, who will bow to visitors in exchange for special deer crackers.",
        "Explore the historical and cultural sites within Nara Park, including Todai-ji Temple and Kasuga Taisha Shrine.",
        "Enjoy the serene natural beauty of the park, with its picturesque landscapes, ponds, and seasonal cherry blossoms."
    ];

    const items3 = [
        "Marvel at the striking five-story pagoda of Kofuku-ji Temple, an iconic symbol of Nara and a testament to ancient Japanese architecture.",
        "Stroll through the temple grounds, where history and spirituality intertwine amid the beautifully preserved structures.",
        "Discover the rich cultural heritage of Kofuku-ji Temple, once the family temple of the powerful Fujiwara clan.",
        "Visit the National Treasure Museum within the temple complex, housing an impressive collection of Buddhist art and artifacts."
    ];
    
    

    const items4 = [
        "Explore the renowned Nara National Museum, a treasure trove of Japanese Buddhist art and artifacts.",
        "Immerse yourself in the rich history and culture of Japan through the museum's extensive collection of sculptures, paintings, and ceremonial objects.",
        "Discover the intricate details of ancient relics and learn about their historical significance and artistic merit.",
        "Stroll through the museum's serene gardens, providing a peaceful backdrop to your cultural journey."
    ];
    

    const items5 = [
        "Step into the sacred grounds of Kofuku-ji Temple, a treasure trove of historical significance and spiritual serenity.",
        "Stroll along the temple's peaceful pathways, surrounded by ancient pagodas and statues that echo the legacy of Japan's rich cultural heritage.",
        "Contemplate the harmony between architecture and history as you admire the temple's exquisite structures framed by the natural beauty of the surrounding landscape.",
        "Experience moments of introspection and reverence within the temple's revered halls, resonating with centuries of spiritual devotion and artistic excellence.",
    ];
    
    

    const items6 = [
        "Discover the lush paradise of Mango Botanical Garden, nestled amidst the vibrant landscapes of tropical flora.",
        "Marvel at the diverse array of mango species, each tree offering a unique glimpse into the world of this beloved fruit.",
        "Wander through the verdant pathways of the garden, where the scent of mango blossoms fills the air with a sense of serene tranquility.",
        "Reflect on the wonders of nature as you immerse yourself in the peaceful ambiance and botanical beauty of Mango Botanical Garden.",
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
                        words={['Nara']}
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
                <button type="button" className="btn btn-outline-success earlyBirdbutton" onClick={() => openModal('Nara')}>Book Now</button>
            </div>
            <div className='earlyBirdadd'>
            <p className='earlyBirdadd'>Immerse in Nara's historical splendor, a serene retreat in Japan.</p>
            <p className='earlyBirdadd'>Embark on a guided journey through Nara's ancient wonders.</p>
            <p className='earlyBirdadd'>Explore the rich history and culture woven into Nara's landscapes.</p>
            <p className='earlyBirdadd'>Savor the tranquility of Nara's picturesque settings with our knowledgeable guide.</p>
            <p className='earlyBirdadd'>Experience Nara's beauty and charm at your own pace with our expert team.</p>

            </div>

            <div className='card' style={{ width: '90%', margin:'5%'}}>
                <p className='FushimiInariShrine'>Unveil the Majesty of Todai-ji Temple: A Revered Journey through Nara's Historic Marvel</p>
                <Card imageUrl={todaiimg}
                description={items} />
            </div>

            <div className='card' style={{ width: '90%', margin:'5%'}}>
                <p className='FushimiInariShrine'>Discover the Serenity of Nara Park Temple: A Tranquil Oasis in the Heart of Japan</p>
                <Card imageUrl={cimg}
                description={items2} />
            </div>

            <div className='card' style={{ width: '90%', margin:'5%'}}>
                <p className='FushimiInariShrine'>Explore the Timeless Beauty of Kofuku-ji: A Symbol of Grace and History in Nara</p>
                <Card imageUrl={kinkakujiimg}
                description={items3} />
            </div>

            <div className='card' style={{ width: '90%', margin:'5%'}}>
                <p className='FushimiInariShrine'>Embark on a Cultural Journey at the Nara National Museum: Where History and Art Unfold</p>
                <Card imageUrl={iwatayamaiimg}
                description={items4} />
            </div>

            <div className='card' style={{ width: '90%', margin:'5%'}}>
                <p className='FushimiInariShrine'>Experience the Splendor of Kofuku-ji: A Beacon of Buddhist Heritage in Nara</p>
                <Card imageUrl={tenryujiimg}
                description={items5} />
            </div>

            <div className='card' style={{ width: '90%', margin:'5%'}}>
                <p className='FushimiInariShrine'>Immerse Yourself in Nature's Diversity at the Mango Botanical Garden: A Haven of Tropical Beauty</p>
                <Card imageUrl={otagiimg}
                description={items6} />
            </div>

            
        
            
        
        <div className='earlyBirdbutton'>
            <button type="button" className="btn btn-outline-success earlyBirdbuttonbottom" onClick={() => openModal('Nara')}>Book Now</button>
        </div>
        {modalData.isVisible && <BookNow onClose={closeModal} plane={modalData.plane} />}

        </div>
        
        </> 
    );
}

export default Nara;
