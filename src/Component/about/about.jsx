import React from 'react';
import './about.css';

import imgleft from '../../assets/images/welcome.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function about() {
  return (

    <div class="container-xxl py-5">
        <div class="container">
            <div class="row g-5">
                <div class="col-lg-6 wow fadeInUp about-left" data-wow-delay="0.1s" >
                    <div class="position-relative h-100">
                        <img class="img-fluid w-100 h-100 about-img" src={ imgleft } alt="" />
                    </div>
                </div>
                <div class="col-lg-6 wow fadeInUp about-right" data-wow-delay="0.3s">
                    <h6 class="section-title-about text-start text-title pe-3">About Us</h6>
                    <h1 class="mb-4">Welcome to <span class="text-title">Alpha Tours</span></h1>
                    <p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                    <p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                    <div class="row gy-2 gx-4 mb-4">
                        <div class="col-sm-6">
                            <p class="mb-0"><i class="fa fa-arrow-right text-title me-2"></i>First Class Flights</p>
                        </div>
                        <div class="col-sm-6">
                            <p class="mb-0"><i class="fa fa-arrow-right text-title me-2"></i>Handpicked Hotels</p>
                        </div>
                        <div class="col-sm-6">
                            <p class="mb-0"><i class="fa fa-arrow-right text-title me-2"></i>5 Star Accommodations</p>
                        </div>
                        <div class="col-sm-6">
                            <p class="mb-0"><i class="fa fa-arrow-right text-title me-2"></i>Latest Model Vehicles</p>
                        </div>
                        <div class="col-sm-6">
                            <p class="mb-0"><i class="fa fa-arrow-right text-title me-2"></i>150 Premium City Tours</p>
                        </div>
                        <div class="col-sm-6">
                            <p class="mb-0"><i class="fa fa-arrow-right text-title me-2"></i>24/7 Service</p>
                        </div>
                    </div>
                    <a class="btn-about btn-all py-3 px-5 mt-2" href="">Read More</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default about