import React from 'react';
import './about.css';

import imgleft1 from '../../assets/images/welcome.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function about() {
  return (
      <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6">
                        <div className="row g-4 about-img-container">
                            <div className="col-6 text-start about-img-1">
                                <img className="img-fluid rounded w-100 wow zoomIn about-img-1" data-wow-delay="0.1s" src={ imgleft1 }/>
                            </div>
                            <div className="col-6 text-start about-img-2">
                                <img className="img-fluid rounded w-75 wow zoomIn about-img-2" data-wow-delay="0.3s" src={ imgleft1 } style={{ margintop: '25%' }}/>
                            </div>
                            <div className="col-6 text-end about-img-3">
                                <img className="img-fluid rounded w-75 wow zoomIn about-img-3" data-wow-delay="0.5s" src={ imgleft1 }/>
                            </div>
                            <div className="col-6 text-end about-img-4">
                                <img className="img-fluid rounded w-100 wow zoomIn about-img-4" data-wow-delay="0.7s" src={ imgleft1 }/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <h5 className="section-title ff-secondary text-start text-primary fw-normal">About Us</h5>
                        <h1 className="mb-4">Welcome to <FontAwesomeIcon icon="utensils" className="text-primary me-2 about-icon" />Tour Alpha</h1>
                        <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.</p>
                        <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                        <div className="row g-4 mb-4">
                            <div className="col-sm-6">
                                <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                                    <h1 className="flex-shrink-0 display-5 text-primary mb-0" data-toggle="counter-up">15</h1>
                                    <div className="ps-4">
                                        <p className="mb-0">Years of</p>
                                        <h6 className="text-uppercase mb-0">Experience</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                                    <h1 className="flex-shrink-0 display-5 text-primary mb-0" data-toggle="counter-up">50</h1>
                                    <div className="ps-4">
                                        <p className="mb-0">Popular</p>
                                        <h6 className="text-uppercase mb-0">Master Chefs</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="btn btn-primary py-3 px-5 mt-2" href="">Read More</a>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default about