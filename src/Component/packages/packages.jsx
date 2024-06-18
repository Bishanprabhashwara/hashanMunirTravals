import React,{useState} from 'react'
import  './packages.css'
import BookNow from '../../Pages/BookNow/BookNow';
import Kyoto from '../../assets/images/KiyomizuKyoto.jpg'
import Higashiyama from '../../assets/images/Higashiyama.jpg'
import Sorasak from '../../assets/images/sorasak-_UIN-pFfJ7c-unsplash.jpg'
import Vip from '../../Pages/VIP/VIP';
import EarlyBirdTour from '../../Pages/EarlyBirdTour/EarlyBirdTour';
import Ordinary from '../../Pages/Ordinary/Ordinary';

function Packages() {
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

      const [modalData2, setModalData2] = useState({
        isVisible: false,
        plane: ''
      });
    
      const openModal2 = (plane) => {
        setModalData2({
          isVisible: true,
          plane
        });
      };
    
      const closeModal2 = () => {
        setModalData2({
          isVisible: false,
          plane: ''
        });
      };

      const [modalData3, setModalData3] = useState({
        isVisible: false,
        plane: ''
      });
    
      const openModal3 = (plane) => {
        setModalData2({
          isVisible: true,
          plane
        });
      };
    
      const closeModal3 = () => {
        setModalData3({
          isVisible: false,
          plane: ''
        });
      };

      const [modalData4, setModalData4] = useState({
        isVisible: false,
        plane: ''
      });
    
      const openModal4 = (plane) => {
        setModalData4({
          isVisible: true,
          plane
        });
      };
    
      const closeModal4 = () => {
        setModalData4({
          isVisible: false,
          plane: ''
        });
      };
  return (
    <div class="container-xxl py-5">
        <div class="container">
            <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 class="section-title text-center text-title px-3">Packages</h6>
                <h1 class="mb-5">Awesome Packages</h1>
            </div>
            <div class="row g-4 justify-content-center">
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="package-item card-package">
                        <div class="overflow-hidden img-package-div">
                            <img class="img-fluid img-fluid-package" src={ Kyoto } alt="" />
                        </div>
                        <div class="d-flex border-bottom">
                            <small class="flex-fill text-center border-end py-2"><i class="fa fa-map-marker-alt me-2 icon-package"></i>Early Bird Tour</small>
                            <small class="flex-fill text-center border-end py-2"><i class="fa fa-calendar-alt me-2 icon-package"></i>Early Birds Tours</small>
                            <small class="flex-fill text-center py-2"><i class="fa fa-user me-2 icon-package"></i>Sample</small>
                        </div>
                        <div class="text-center p-4">
                            <h3 class="mb-0">$149.00</h3>
                            <div class="mb-3">
                                <small class="fa fa-star icon-package"></small>
                                <small class="fa fa-star icon-package"></small>
                                <small class="fa fa-star icon-package"></small>
                                <small class="fa fa-star icon-package"></small>
                                <small class="fa fa-star icon-package"></small>
                            </div>
                            <p>Visit two of the most famous places in Japan, the Fushimi Inari Shrine and the Kiyomizu Temple, Beat the crowds with a 6 o'clock start</p>
                            <div class="d-flex justify-content-center mb-2">
                                <a  class="btn-sm px-3 btn-packages" onClick={() => openModal3('Early Bird Tour')}>Read More</a>
                                <a className="btn-sm px-3 btn-packages" onClick={() => openModal('Early Bird Tour')}>Book Now</a>

                                {/* <a href="#" class="btn btn-sm btn-primary px-3 border-end btn-packages">Read More</a>
                                <a href="#" class="btn btn-sm btn-primary px-3 btn-packages">Book Now</a> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div class="package-item card-package">
                        <div class="overflow-hidden img-package-div">
                            <img class="img-fluid img-fluid-package" src={ Higashiyama } alt="" />
                        </div>
                        <div class="d-flex border-bottom">
                            <small class="flex-fill text-center border-end py-2"><i class="fa fa-map-marker-alt icon-package me-2"></i>VIP</small>
                            <small class="flex-fill text-center border-end py-2"><i class="fa fa-calendar-alt icon-package me-2"></i>VIP</small>
                            <small class="flex-fill text-center py-2"><i class="fa fa-user icon-package me-2"></i>Sample</small>
                        </div>
                        <div class="text-center p-4">
                            <h3 class="mb-0">$139.00</h3>
                            <div class="mb-3">
                                <small class="fa fa-star icon-package"></small>
                                <small class="fa fa-star icon-package"></small>
                                <small class="fa fa-star icon-package"></small>
                                <small class="fa fa-star icon-package"></small>
                                <small class="fa fa-star icon-package"></small>
                            </div>
                            <p>Design a custom travel plan based on your travel style preferences. Tailor your itinerary to match your interests and maximize your experience.</p>
                            <div class="d-flex justify-content-center mb-2">
                                <a  class="btn-sm px-3 btn-packages" onClick={() => openModal2('VIP')}>Read More</a>
                                <a className="btn-sm px-3 btn-packages" onClick={() => openModal('VIP')}>Book Now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div class="package-item card-package">
                        <div class="overflow-hidden img-package-div">
                            <img class="img-fluid img-fluid-package" src={ Sorasak } alt=""/>
                        </div>
                        <div class="d-flex border-bottom">
                            <small class="flex-fill text-center border-end py-2"><i class="fa fa-map-marker-alt icon-package me-2"></i>Ordinary</small>
                            <small class="flex-fill text-center border-end py-2"><i class="fa fa-calendar-alt icon-package me-2"></i>Sample</small>
                            <small class="flex-fill text-center py-2"><i class="fa fa-user icon-package me-2"></i>Sample</small>
                        </div>
                        <div class="text-center p-4">
                            <h3 class="mb-0">$189.00</h3>
                            <div class="mb-3">
                                <small class="fa fa-star icon-package"></small>
                                <small class="fa fa-star icon-package"></small>
                                <small class="fa fa-star icon-package"></small>
                                <small class="fa fa-star icon-package"></small>
                                <small class="fa fa-star icon-package"></small>
                            </div>
                            <p>Design a custom travel plan based on your travel style preferences. Tailor your itinerary to match your interests and maximize your experience.</p>
                            <div class="d-flex justify-content-center mb-2">
                                <a  class="btn-sm px-3 border-end btn-packages" onClick={() => openModal4('Ordinary')}>Read More</a>
                                <a className='btn-sm px-3 btn-packages' onClick={() => openModal('Ordinary')}>Book Now</a>
                            </div>
                            {modalData.isVisible && <BookNow onClose={closeModal} plane={modalData.plane} />}
                            {modalData2.isVisible && <Vip onClose={closeModal2} plane={modalData2.plane} />}
                            {modalData3.isVisible && <EarlyBirdTour onClose={closeModal3} plane={modalData3.plane} />}
                            {modalData4.isVisible && <Ordinary onClose={closeModal4} plane={modalData4.plane} />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Packages