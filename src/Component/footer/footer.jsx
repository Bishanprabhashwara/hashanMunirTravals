import React from 'react'
import './footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

import img1 from '../../assets/images/footer-img-1.jpg'
import img2 from '../../assets/images/footer-img-2.jpg';
import img3 from '../../assets/images/footer-img-3.jpg';
import img4 from '../../assets/images/footer-img-4.jpg';
import img5 from '../../assets/images/footer-img-5.jpg';
import img6 from '../../assets/images/footer-img-6.jpg';

function footer() {
  return (
    <>
        <div className="container-fluid bg-footer text-light footer pt-5 mt-5 wow fadeIn">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-3 col-md-6">
                        <h4 className="text-white mb-3">Sections</h4>
                        <a className="btn btn-link" href=""><span><FontAwesomeIcon icon={faAngleRight} className='btn-link-span'/></span>About Us</a>
                        <a className="btn btn-link" href=""><span><FontAwesomeIcon icon={faAngleRight} className='btn-link-span'/></span>Contact Us</a>
                        <a className="btn btn-link" href=""><span><FontAwesomeIcon icon={faAngleRight} className='btn-link-span'/></span>Privacy Policy</a>
                        <a className="btn btn-link" href=""><span><FontAwesomeIcon icon={faAngleRight} className='btn-link-span'/></span>Terms & Condition</a>
                        <a className="btn btn-link" href=""><span><FontAwesomeIcon icon={faAngleRight} className='btn-link-span'/></span>FAQs & Help</a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h4 className="text-white mb-3">Contact</h4>
                        <p className="mb-2"><FontAwesomeIcon icon={faMapMarkerAlt} className="me-3" />Jpan Jpan, Jpan Jpan, Jpan</p>
                        <p className="mb-2"><FontAwesomeIcon icon={faPhoneAlt} className="me-3" />+00 000 000 000</p>
                        <p className="mb-2"><FontAwesomeIcon icon={faEnvelope} className="me-3" />info@example.com</p>
                        <div className="d-flex pt-2">
                            <a className="btn btn-outline-light btn-social" href=""><FontAwesomeIcon icon={faFacebookF} className="me-3" id='footer-icon-socialmedia'/></a>
                            <a className="btn btn-outline-light btn-social" href=""><FontAwesomeIcon icon={faInstagram} className="me-3" id='footer-icon-socialmedia'/></a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h4 className="text-white mb-3">Gallery</h4>
                        <div className="row g-2 pt-2">
                            <div className="col-4">
                                <img className="img-fluid bg-light p-1 img-footer" src={ img1 } alt=""/>
                            </div>
                            <div className="col-4">
                                <img className="img-fluid bg-light p-1 img-footer" src={ img2 } alt=""/>
                            </div>
                            <div className="col-4">
                                <img className="img-fluid bg-light p-1 img-footer" src={ img3 } alt=""/>
                            </div>
                            <div className="col-4">
                                <img className="img-fluid bg-light p-1 img-footer" src={ img4 } alt=""/>
                            </div>
                            <div className="col-4">
                                <img className="img-fluid bg-light p-1 img-footer" src={ img5 } alt=""/>
                            </div>
                            <div className="col-4">
                                <img className="img-fluid bg-light p-1 img-footer" src={ img6 } alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h4 className="text-white mb-3">Inquary</h4>
                        <p>Quick inquary.</p>
                        <div className="position-relative mx-auto div-abc" style={{ maxwidth: '400px' }}>
                            <input className="form-control border-primary w-100 py-3 ps-4 pe-5" type="text" placeholder="Your inquary"/>
                            <button type="button" className="btn-footer btn-all py-2 position-absolute top-0 end-0 mt-2 me-2">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default footer