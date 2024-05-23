import React, { useState, useEffect, useRef } from 'react';
import './EarlyBirdTour.css';
import kyotoebird from '../../assets/images/sorasak-_UIN-pFfJ7c-unsplash.jpg';
import FushimiInariShrineimg from '../../assets/images/IMG_3518.JPG';
import { Typewriter } from 'react-simple-typewriter';
import KiyomizuKyotoimg from '../../assets/images/KiyomizuKyoto.jpg';
import Higashiyamaimg from '../../assets/images/Higashiyama.jpg';

function EarlyBirdTour() {
    const handleDone = () => {
        console.log('Done after 5 loops!');
    }

    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentIndex2, setCurrentIndex2] = useState(0);
    const [currentIndex3, setCurrentIndex3] = useState(0);

    const items = [
        "Discover the splendor of Fushimi Inari, Japan's top sightseeing destination, renowned for its thousands of vibrant red torii gates.",
        "Capture those breathtaking shots of the corridor of gates devoid of any other visitors!",
        "Explore the Shinto belief system and its significance to Japanese culture and national identity."
    ];

    const items2 = [
        "Explore Japan's renowned Kiyomizu-dera Temple, a UNESCO World Heritage site, before the tour buses arrive",
        "Take in the sweeping views of Kyoto as the city begins to awaken.",
        "Discover Buddhism and its influence on Japanese culture and society.",
        "Visit the renowned Jishu Love Shrine and wish for success in your romantic endeavors!"
    ];

    const items3 = [
        "Wander through the historic lanes of Sannenzaka and Ninenzaka, marveling at their preserved charm.",
        "Experience the allure of the cobblestone pathways without the bustling crowds.",
        "Witness the majestic Yasaka Pagoda in all its splendor.",
        "Pause for a delightful cup of coffee at a renowned local cafe.",
        "Ready for more Kyoto adventures? Join us for another exciting Kyoto Fun Tour!"
    ];

    const fushimiInariRef = useRef(null);
    const kiyomizuRef = useRef(null);
    const hakoneRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        if (entry.target === fushimiInariRef.current) {
                            const interval = setInterval(() => {
                                setCurrentIndex((prevIndex) => {
                                    if (prevIndex < items.length - 1) {
                                        return prevIndex + 1;
                                    } else {
                                        clearInterval(interval);
                                        return prevIndex;
                                    }
                                });
                            }, 1000);
                        } else if (entry.target === kiyomizuRef.current) {
                            const interval2 = setInterval(() => {
                                setCurrentIndex2((prevIndex) => {
                                    if (prevIndex < items2.length - 1) {
                                        return prevIndex + 1;
                                    } else {
                                        clearInterval(interval2);
                                        return prevIndex;
                                    }
                                });
                            }, 1000);
                        } else if (entry.target === hakoneRef.current) {
                            const interval3 = setInterval(() => {
                                setCurrentIndex3((prevIndex) => {
                                    if (prevIndex < items3.length - 1) {
                                        return prevIndex + 1;
                                    } else {
                                        clearInterval(interval3);
                                        return prevIndex;
                                    }
                                });
                            }, 1000);
                        }
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (fushimiInariRef.current) {
            observer.observe(fushimiInariRef.current);
        }

        if (kiyomizuRef.current) {
            observer.observe(kiyomizuRef.current);
        }

        if (hakoneRef.current) {
            observer.observe(hakoneRef.current);
        }

        return () => {
            if (fushimiInariRef.current) {
                observer.unobserve(fushimiInariRef.current);
            }
            if (kiyomizuRef.current) {
                observer.unobserve(kiyomizuRef.current);
            }
            if (hakoneRef.current) {
                observer.unobserve(hakoneRef.current);
            }
        };
    }, [items.length, items2.length, items3.length]);

    return (
       <>
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
            <br />
            <div>
                <button type="button" className="btn btn-outline-success earlyBirdbutton">Book Now</button>
            </div>
            <div className='earlyBirdadd'>
                <p className='earlyBirdadd'>Experience the magic of Kyoto before the crowds</p>
                <p className='earlyBirdadd'>Join our Early Bird tour to visit two iconic spots</p>
                <p className='earlyBirdadd'>Immerse yourself in local history and customs</p>
                <p className='earlyBirdadd'>Enjoy the tranquility of the morning with our knowledgeable guide</p>
                <p className='earlyBirdadd'>Explore Kyoto comfortably and learn along the way</p>
            </div>
            
            <div className='FushimiInariShrine' ref={fushimiInariRef}>
                <p className='FushimiInariShrine'>Witness the mesmerizing sea of vibrant red torii gates at Fushimi Inari Shrine</p>
                <img src={FushimiInariShrineimg} className='FushimiInariShrine' alt="Fushimi Inari Shrine" />
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
            
            <div className='Kiyomizu' ref={kiyomizuRef}>
                <p className='FushimiInariShrine'>Discover Kiyomizu Kyoto's timeless treasure.</p>
                <img src={KiyomizuKyotoimg} className='Kiyomizu' alt="Kiyomizu Kyoto" />
                <div className='Kiyomizuul'>
                    <ul>
                        {items2.slice(0, currentIndex2 + 1).map((item, index) => (
                            <li key={index} className="slide-in">
                                <p>{item}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
                     
            {/* <div className='Kiyomizu' ref={kiyomizuRef}>
                <p className='FushimiInariShrine'>Discover Kiyomizu Kyoto's timeless treasure.</p>
                <img src={KiyomizuKyotoimg} className='Kiyomizu' alt="Kiyomizu Kyoto" />
                <div className='Kiyomizuul'>
                    <ul>
                        {items2.slice(0, currentIndex2 + 1).map((item, index) => (
                            <li key={index} className="slide-in">
                                <p>{item}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div> */}
            
            <div className='Higashiyama' ref={hakoneRef}>
                <p className='FushimiInariShrine'>Stroll along the tranquil pathways of Higashiyama, exploring its serene streets.</p>
                <img src={Higashiyamaimg} className='Higashiyama' alt="Higashiyama" />
                <div className='Higashiyamaul'>
                    <ul>
                        {items3.slice(0, currentIndex3 + 1).map((item, index) =>(
                            <li key={index} className="slide-in">
                            <p>{item}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div> 
        
        <div className='earlyBirdbottom'>
            <button type="button" className="btn btn-outline-success earlyBirdbuttonbottom">Book Now</button>
        </div>


        </div>
        
        </> 
    );
}

export default EarlyBirdTour;
