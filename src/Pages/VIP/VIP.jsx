import React, { useState } from 'react';
import Modal from 'react-modal';
import './VIP.css';
import vipimg from '../../assets/images/145.jpg';
import BookNow from '../BookNow/BookNow';
import { Link } from 'react-router-dom';

Modal.setAppElement('#root');

const modalStyle2 = {
    zIndex: 10,
    position: 'fixed',
    top: '53.5%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    width: '80%', // Adjust maximum width according to your preference
    maxWidth: '100%',
    maxHeight: '100%', // Adjust maximum height according to your preference
    overflowY: 'auto',
    backgroundColor:'#E8ECEF',
    
};

const modalFullScreenStyle = {
    ...modalStyle2,
    position: 'fixed',
    width: '100%',
    height: '100%',
    top: '0',
    left: '0',
    transform: 'none',
    padding: '0',
    boxShadow: 'none',
};

const useResponsiveStyle = () => {
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return isMobile ? modalFullScreenStyle : modalStyle2;
};

const Vip = ({ onClose }) => {
    const modalStyle = useResponsiveStyle();
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
        <div style={modalStyle} className='model2'>
            <div className='row'>
                <div className='col-lg-6 col-md-12 col-sm-12'>
                    <div className='vipimg-container'>
                        <img src={vipimg} className='vipimg' alt='VIP Experience' />
                    </div>
                </div>
                <div className='col-lg-6 col-md-12 col-sm-12'>
                    <br />
                    <h1>Craft  Your Custom Tours with VIP Upgrade Options</h1>
                    <ul className='vipul'>

                        <li><strong>Personalized Itinerary:</strong> Tailored to your travel preferences and interests</li>
                        <li><strong>Hotel Pickup:</strong> Convenient pickup directly from your accommodation</li>
                        <li><strong>Transportation Options:</strong> Choose from a variety of transportation modes to suit your needs</li>
                        <li><strong>Professional Photos:</strong> Get amazing photos taken by your knowledgeable guide</li>
                        <li><strong>VIP Experience Upgrade:</strong>
                            <ul>
                                <li><strong>Chauffeured Vehicle:</strong> Enjoy the comfort of a private vehicle for the entire day</li>
                                <li><strong>Exclusive Activities:</strong> Enhance your experience with unique options such as a traditional tea ceremony or a private audience with a geisha</li>
                            </ul>
                        </li>
                        <li><strong>Pricing:</strong> Starts at &#165;25,000  per group</li>
                    </ul>
                    <p>Places to Visit</p>
                    <Link to="/hashanMunirTravals/gihon">
                        <button className='btn btn-outline-danger'>Gion</button>&nbsp;&nbsp;
                    </Link>
                    <Link to="/hashanMunirTravals/nara">
                        <button className='btn btn-outline-danger'>Nara</button>&nbsp;&nbsp;
                    </Link>
                    <Link to="/hashanMunirTravals/arashiyama">
                        <button className='btn btn-outline-danger'>Arashiyama</button><br />
                    </Link>
                    <a className="btn-sm px-3 btn-packages" onClick={() => openModal('Early Bird Tour')}>Book Now</a>&nbsp;&nbsp;
                    <button onClick={onClose} className='btn btn-outline-danger'>Close</button>
                </div>
            </div>
            {modalData.isVisible && <BookNow onClose={closeModal} plane={modalData.plane} />}
        </div>
    );
};

export default Vip;
