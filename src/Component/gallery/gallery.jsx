import React from 'react'
import './gallery.css'

import Kyoto from '../../assets/images/KiyomizuKyoto.jpg'
import Higashiyama from '../../assets/images/Higashiyama.jpg'
import Sorasak from '../../assets/images/sorasak-_UIN-pFfJ7c-unsplash.jpg'
import img1 from '../../assets/images/IMG_3518.JPG'

function Gallery() {
  return (
    <div className="container-xxl py-5 destination">
        <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="section-title bg-white text-center text-primary px-3">Gallery</h6>
                <h1 className="mb-5">Favouirt Galary</h1>
            </div>
            <div className="row g-3">
                <div className="col-lg-7 col-md-6">
                    <div className="row g-3">
                        <div className="col-lg-12 col-md-12 wow zoomIn" data-wow-delay="0.1s">
                            <div className="position-relative d-block overflow-hidden img-div">
                                <img className="img-fluid" src={ Kyoto } alt="" />
                                {/* <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">30% OFF</div> */}
                                <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">Kyoto</div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.3s">
                            <div className="position-relative d-block overflow-hidden img-div">
                                <img className="img-fluid" src={ Higashiyama } alt="" />
                                {/* <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">25% OFF</div> */}
                                <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">Higashiyama</div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.5s">
                            <div className="position-relative d-block overflow-hidden img-div" href="">
                                <img className="img-fluid" src={ Sorasak } alt="" />
                                {/* <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">35% OFF</div> */}
                                <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">Sorasak</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 col-md-6 wow zoomIn img-height-div img-div " data-wow-delay="0.7s">
                    <div className="position-relative d-block h-100 overflow-hidden" href="">
                        <img className="img-fluid position-absolute w-100 h-100 img-height hero-toriigates" src={ img1 } alt="" />
                        {/* <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">20% OFF</div> */}
                        <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2 ">torii gates</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Gallery