import React from 'react'
import  './process.css'

function Process() {
  return (
    <div class="container-xxl py-5">
        <div class="container">
            <div class="text-center pb-4 wow fadeInUp" data-wow-delay="0.1s">
                <h6 class="section-title text-center text-title px-3">Process</h6>
                <h1 class="mb-5">3 Easy Steps</h1>
            </div>
            <div class="row gy-5 gx-4 justify-content-center">
                <div class="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="position-relative border-process pt-5 pb-4 px-4">
                        <div class="d-inline-flex align-items-center justify-content-center bg-icon-process rounded-circle position-absolute top-0 start-50 translate-middle shadow icon-div">
                            {/* <i class="fa fa-globe fa-3x text-white icon-process"></i> */}
                            {/* <i class="fa fa-solid fa-location-dot fa-3x text-white icon-process"></i> */}
                            <i class="fa-solid fa-map-location-dot fa-3x text-white icon-process"></i>
                        </div>
                        <h5 class="mt-4">Choose A Destination</h5>
                        <hr class="w-25 mx-auto bg-hr mb-1" />
                        <hr class="w-50 mx-auto bg-hr mt-0" />
                        <p class="mb-0">Tempor erat elitr rebum clita dolor diam ipsum sit diam amet diam eos erat ipsum et lorem et sit sed stet lorem sit</p>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp" data-wow-delay="0.3s">
                    <div class="position-relative border-process pt-5 pb-4 px-4">
                        <div class="d-inline-flex align-items-center justify-content-center bg-icon-process rounded-circle position-absolute top-0 start-50 translate-middle shadow icon-div">
                        <i class="fa-solid fa-envelope-open-text fa-3x text-white icon-process"></i>
                        </div>
                        <h5 class="mt-4">Contact Us</h5>
                        <hr class="w-25 mx-auto bg-hr mb-1" />
                        <hr class="w-50 mx-auto bg-hr mt-0" />
                        <p class="mb-0">Tempor erat elitr rebum clita dolor diam ipsum sit diam amet diam eos erat ipsum et lorem et sit sed stet lorem sit</p>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp" data-wow-delay="0.5s">
                    <div class="position-relative border-process pt-5 pb-4 px-4">
                        <div class="d-inline-flex align-items-center justify-content-center bg-icon-process rounded-circle position-absolute top-0 start-50 translate-middle shadow icon-div">
                            {/* <i class="fa fa-plane fa-3x text-white icon-process"></i> */}
                            <i class="fa fa-solid fa-shoe-prints fa-3x text-white icon-process"></i>
                        </div>
                        <h5 class="mt-4">Happy Journey</h5>
                        <hr class="w-25 mx-auto bg-hr mb-1" />
                        <hr class="w-50 mx-auto bg-hr mt-0" />
                        <p class="mb-0">Tempor erat elitr rebum clita dolor diam ipsum sit diam amet diam eos erat ipsum et lorem et sit sed stet lorem sit</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Process