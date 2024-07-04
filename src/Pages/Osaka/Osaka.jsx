import React, { useState, useEffect, useRef } from 'react';
import kyotoebird from '../../assets/images/Sakuraco_osaka6-1.jpg';
import todaiimg from '../../assets/images/castle-5476737_1280.jpg';
import { Typewriter } from 'react-simple-typewriter';
import cimg from '../../assets/images/osaka-dotonbori-214427.jpg';
import kinkakujiimg from '../../assets/images/a285f2ec747f49aef68a0d4426d34713.jpg';
import iwatayamaiimg from '../../assets/images/universal.jpg';
import otagiimg from '../../assets/images/Mango.jpg';
import tenryujiimg from '../../assets/images/54a16ec0-04bf-11e8-ae89-06326e701dd4.jpeg';
import Card from '../../Component/Card/Card';
import BookNow from '../BookNow/BookNow';
function Osaka() {
    const handleDone = () => {
        console.log('Done after 5 loops!');
    }

    

    const items = [
        "Discover the historic grandeur of Osaka Castle, a symbol of Osaka's rich heritage and architectural splendor.",
        "Marvel at the panoramic views from the castle grounds, offering glimpses of Osaka's modern skyline and lush gardens.",
        "Immerse yourself in the castle's storied past through exhibitions and artifacts that reflect Japan's feudal history.",
        "Explore the serene Nishinomaru Garden surrounding the castle, renowned for its cherry blossoms in spring.",
        "Experience traditional performances and cultural events that highlight the castle's significance in Japanese history."
     ];
    

    const items2 = [
        "Explore the vibrant Dotonbori Market, a culinary paradise in Osaka known for its diverse street food and fresh seafood.",
    "Savor local specialties like takoyaki and okonomiyaki from bustling food stalls that line the lively streets.",
    "Experience the iconic sights of Dotonbori, including the illuminated signs and the famous Glico Running Man billboard.",
    "Shop for unique souvenirs and trendy fashion items at the eclectic shops and boutiques scattered throughout the area.",
    "Enjoy the energetic nightlife with bars, clubs, and entertainment venues that cater to locals and tourists alike."
];
    

    const items3 = [
       "Immerse yourself in the wonders of Osaka Aquarium Kaiyukan, one of Japan's largest and most impressive aquariums.",
    "Marvel at the diverse marine life showcased in its enormous tanks, including whale sharks and manta rays.",
    "Explore themed exhibits that recreate various ocean habitats, from the Pacific Ocean to the Antarctic region.",
    "Experience interactive displays and educational programs that highlight conservation efforts and marine biology.",
    "Enjoy panoramic views of Osaka Bay from the aquarium's observation decks, offering a unique perspective of the city."
    ];
    
    

    const items4= [
      "Step into the magic of Universal Studios Japan, where fantasy and adventure come to life in themed attractions and shows.",
    "Experience thrilling rides based on blockbuster movies and beloved characters, from Harry Potter to Jurassic Park.",
    "Explore themed lands like The Wizarding World of Harry Potter and Minion Park, each offering immersive experiences.",
    "Enjoy live entertainment, parades, and seasonal events that bring Hollywood's magic to Osaka.",
    "Indulge in diverse dining options and souvenir shopping throughout the park, catering to all ages and tastes."

    ];
    
    

    const items5 = [
        "Ascend the Osaka Ferris Wheel for breathtaking views of the city skyline and Osaka Bay, day or night.",
        "Marvel at the illuminated cityscape from the observation capsules, offering panoramic vistas in every direction.",
        "Experience the romantic atmosphere during evening rides, ideal for couples seeking a memorable moment.",
        "Learn about Osaka's landmarks and history through informative audio guides available during the ride.",
        "Capture stunning photographs of Osaka's iconic landmarks, including Osaka Castle and the Umeda Sky Building."
    
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
                        words={['Osaka Tours']}
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
                <button type="button" className="btn btn-outline-success earlyBirdbutton" onClick={() => openModal('Osaka')}>Book Now</button>
            </div>
            <div className='earlyBirdadd'>
                <p className='earlyBirdadd'>Immerse in Osaka's historical splendor, a vibrant city in Japan.</p>
                <p className='earlyBirdadd'>Embark on a guided journey through Osaka's modern and ancient wonders.</p>
                <p className='earlyBirdadd'>Explore the rich history and culture woven into Osaka's urban landscapes.</p>
                <p className='earlyBirdadd'>Savor the tranquility of Osaka's picturesque settings with our knowledgeable guide.</p>
                <p className='earlyBirdadd'>Experience Osaka's beauty and charm at your own pace with our expert team.</p>

            </div>

            <div className='card' style={{ width: '90%', margin:'5%'}}>
            <p className='FushimiInariShrine'>Discover the Grandeur of Osaka Castle: A Journey through Osaka's Historic Heart</p>


                <Card imageUrl={todaiimg}
                description={items} />
            </div>

            <div className='card' style={{ width: '90%', margin:'5%'}}>
            <p className='FushimiInariShrine'>Savor the Flavors of Dotonbori Market: A Culinary Journey through Osaka's Bustling Food Scene</p>


                <Card imageUrl={cimg}
                description={items2} />
            </div>

            <div className='card' style={{ width: '90%', margin:'5%'}}>
            <p className='FushimiInariShrine'>Immerse in Wonder at Osaka Aquarium: A Marine Journey through Osaka's Underwater World</p>


                <Card imageUrl={kinkakujiimg}
                description={items3} />
            </div>

            <div className='card' style={{ width: '90%', margin:'5%'}}>
            <p className='FushimiInariShrine'>Experience Magic at Universal Studios Japan: A Journey through Osaka's Premier Theme Park</p>


                <Card imageUrl={iwatayamaiimg}
                description={items4} />
            </div>

            <div className='card' style={{ width: '90%', margin:'5%'}}>
            <p className='FushimiInariShrine'>Soar Above Osaka's Skyline at the Ferris Wheel: A Panoramic Journey through the City's Heights</p>

                <Card imageUrl={tenryujiimg}
                description={items5} />
            </div>

            

            
        
            
        
        <div className='earlyBirdbutton'>
            <button type="button" className="btn btn-outline-success earlyBirdbuttonbottom" onClick={() => openModal('Osaka')}>Book Now</button>
        </div>
        {modalData.isVisible && <BookNow onClose={closeModal} plane={modalData.plane} />}

        </div>
        
        </> 
    );
}

export default Osaka;
