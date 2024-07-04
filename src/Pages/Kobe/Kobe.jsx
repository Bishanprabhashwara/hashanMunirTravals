import React, { useState, useEffect, useRef } from 'react';
import kyotoebird from '../../assets/images/Kobe-Japan-port-skyline-at-twilight.jpg';
import todaiimg from '../../assets/images/herbgardens_1.jpg';
import { Typewriter } from 'react-simple-typewriter';
import cimg from '../../assets/images/12644851733_4c52c80c6b_b.jpg';
import kinkakujiimg from '../../assets/images/M_00107_001.jpg';
import iwatayamaiimg from '../../assets/images/Rokko.jpg';
import otagiimg from '../../assets/images/Mango.jpg';
import tenryujiimg from '../../assets/images/hyogo-chinatown-streets-by-night-in-kobe-27913.jpg';
import Card from '../../Component/Card/Card';
import BookNow from '../BookNow/BookNow';
function Kobe() {
    const handleDone = () => {
        console.log('Done after 5 loops!');
    }

    

    const items = [
        "Discover the lush landscapes of Nunobiki Herb Garden, home to over 200 varieties of herbs and flowers.",
        "Marvel at the stunning panoramic views of Kobe and the surrounding areas from the garden's scenic paths.",
        "Relax in the herbal foot baths, where soothing aromas provide a tranquil escape.",
        "Wander through the Glasshouse, a beautiful greenhouse showcasing tropical plants and a charming café.",
        "Immerse yourself in the seasonal beauty of the garden, with vibrant blooms in spring and colorful foliage in autumn."
    ];
    

    const items2 = [
        "Explore the vibrant Kobe Harborland, a lively waterfront area filled with shopping, dining, and entertainment.",
        "Enjoy a scenic harbor cruise, offering stunning views of the city skyline and the iconic Kobe Port Tower.",
        "Stroll through Meriken Park, home to contemporary sculptures and the Kobe Maritime Museum.",
        "Indulge in diverse cuisines at the many restaurants, ranging from traditional Japanese to international dishes.",
        "Experience the lively nightlife with illuminated ferris wheels, live performances, and beautiful waterfront lights."
    ];
    

    const items3 = [
        "Take a breathtaking ride on the Kobe Ropeway, offering aerial views of Kobe city and the lush Nunobiki Herb Garden.",
        "Marvel at the stunning seasonal landscapes, from spring cherry blossoms to vibrant autumn leaves.",
        "Relax at the top station with terraces offering panoramic views of the city and Osaka Bay.",
        "Explore the nearby Nunobiki Waterfall, a beautiful natural attraction just a short walk from the ropeway stations.",
        "Visit the Herb Garden shops and cafés, where you can purchase aromatic herbal products and enjoy refreshments."
    ];
    
    

    const items4= [
        "Ascend Mount Rokko for spectacular views of Kobe city, Osaka Bay, and the surrounding mountains.",
        "Explore the Rokko Garden Terrace, a charming complex with shops, restaurants, and observation decks.",
        "Hike the numerous trails through lush forests, offering serene natural beauty and fresh mountain air.",
        "Visit the Rokko Alpine Botanical Garden, home to a diverse collection of alpine plants and flowers.",
        "Enjoy winter activities at the Rokko Snow Park, a popular destination for skiing and snowboarding."
    ];
    
    

    const items5 = [
        "Wander through Kobe's vibrant Chinatown, known as Nankinmachi, bustling with colorful shops and street food stalls.",
        "Savor authentic Chinese cuisine, from dim sum and dumplings to flavorful street snacks.",
        "Experience the lively atmosphere during festivals, with traditional lion dances and cultural performances.",
        "Shop for unique souvenirs, including Chinese crafts, herbal medicines, and imported goods.",
        "Admire the traditional Chinese architecture and vibrant decorations that adorn the streets of Nankinmachi."
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
                        words={['Kobe Tours']}
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
                <button type="button" className="btn btn-outline-success earlyBirdbutton" onClick={() => openModal('Kobe')}>Book Now</button>
            </div>
            <div className='earlyBirdadd'>
            <p className='earlyBirdadd'>Immerse in Kobe's historical splendor, a vibrant city in Japan.</p>
            <p className='earlyBirdadd'>Embark on a guided journey through Kobe's modern and ancient wonders.</p>
            <p className='earlyBirdadd'>Explore the rich history and culture woven into Kobe's urban landscapes.</p>
            <p className='earlyBirdadd'>Savor the tranquility of Kobe's picturesque settings with our knowledgeable guide.</p>
            <p className='earlyBirdadd'>Experience Kobe's beauty and charm at your own pace with our expert team.</p>

            </div>

            <div className='card' style={{ width: '90%', margin:'5%'}}>
            <p className='FushimiInariShrine'>Unveil the Beauty of Nunobiki Herb Garden: A Serene Journey through Kobe's Floral Paradise</p>

                <Card imageUrl={todaiimg}
                description={items} />
            </div>

            <div className='card' style={{ width: '90%', margin:'5%'}}>
            <p className='FushimiInariShrine'>Unveil the Excitement of Kobe Harborland: A Vibrant Journey through Kobe's Waterfront Wonderland</p>

                <Card imageUrl={cimg}
                description={items2} />
            </div>

            <div className='card' style={{ width: '90%', margin:'5%'}}>
            <p className='FushimiInariShrine'>Unveil the Views from Kobe Ropeway: A Scenic Journey through Kobe's Aerial Pathways</p>

                <Card imageUrl={kinkakujiimg}
                description={items3} />
            </div>

            <div className='card' style={{ width: '90%', margin:'5%'}}>
            <p className='FushimiInariShrine'>Unveil the Majesty of Mount Rokko: A Scenic Journey through Kobe's Mountain Retreat</p>

                <Card imageUrl={iwatayamaiimg}
                description={items4} />
            </div>

            <div className='card' style={{ width: '90%', margin:'5%'}}>
            <p className='FushimiInariShrine'>Unveil the Vibrancy of Kobe Chinatown: A Cultural Journey through Kobe's Exotic Quarter</p>

                <Card imageUrl={tenryujiimg}
                description={items5} />
            </div>

            

            
        
            
        
        <div className='earlyBirdbutton'>
            <button type="button" className="btn btn-outline-success earlyBirdbuttonbottom" onClick={() => openModal('Kobe')}>Book Now</button>
        </div>
        {modalData.isVisible && <BookNow onClose={closeModal} plane={modalData.plane} />}

        </div>
        
        </> 
    );
}

export default Kobe;
