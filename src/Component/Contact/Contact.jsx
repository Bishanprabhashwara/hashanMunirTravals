import React from 'react'
import './Contact.css'

import imgleft from '../../assets/images/welcome.jpg';

function Contact() {
  return (
    <>
        {/* <form action="mailto:your-email@example.com" method="post" enctype="text/plain">
        <fieldset className="contact-fieldset">
        <div><h1>Ready to explore Japan? Contact us and let's start your adventure!</h1></div>
            <div className='contactRadio'>
            <p>Describe your party </p>
                <input type='radio'  name='party' value='Solo Traveler' className='form-check-input'/> Solo Traveler <br/>
                <input type='radio'  name='party' value='Couple' className='form-check-input'/>Couple <br/>
                <input type='radio' name='party' value='Family' className='form-check-input'/>Family <br/>
                <input type='radio' name='party'  value='Group of friends' className='form-check-input'/>Group of friends <br/>
                <input type='radio'  name='party' value='Other' className='form-check-input'/>Other
            </div>
            <br/>
            
            <div class="form-floating mb-3">
                <input type="text" class="form-control " name='name' style={{ width: '50%' ,marginLeft:'10%' }} id="floatingInput" placeholder="Name"/>
                <label for="floatingInput" style={{marginLeft:'10%' }}>Name</label>
            </div>


            <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" name='email' style={{ width: '50%',marginLeft:'10%'  }} placeholder="name@example.com"/>
                <label for="floatingInput" style={{marginLeft:'10%' }}>Email address</label>
            </div>
            
            <div className='contacttime'>
                <p>arrival time</p>
                <input type='date' name='arrival' className='form-control mb-2 mr-sm-2 ' style={{ width: '50%' }}/><br/>
                <p>departure time</p>
                <input type='date' name='departure' className='form-control mb-2 mr-sm-2 ' style={{ width: '50%' }}/>
            </div>

            <div class="form-floating">
                <textarea className="form-control" name='comments' placeholder="Leave a comment here" id="floatingTextarea2" style={{height: '200px',width:'60%',marginLeft:'10%',marginTop:'5%'}}></textarea>
                <label for="floatingTextarea2" style={{marginLeft:'10%' }}>Comments</label>
            </div>

            <div className='contactsubmit'>
            <button type="submit" class="btn btn-primary contactbutton">Submit</button>
            
            </div>
           </fieldset>
        </form> */}

<div class="parallax-content contact-content mt-5" id="contact-us">
        <div class="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="section-title text-title px-3">Contact Us</h6>
                <h1 className="gallery-title">Ready to explore Japan</h1>
                <h5 className="mb-5 gallery-title">Contact us and let's start your adventure!</h5>
            </div>
            <div class="row contact-div">
                <div class="col-md-6 contact-form">
                    <form action="mailto:your-email@example.com" method="post" enctype="text/plain">
                        <fieldset className="contact-fieldset">
                            <div className="d-flex name">
                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control " name='name' style={{ width: '110%' }} id="floatingInput" placeholder="Name"/>
                                    <label for="floatingInput" style={{ }}>First Name</label>
                                </div>
                                
                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control " name='name' style={{ width: '110%' ,marginLeft:'23%' }} id="floatingInput" placeholder="Name"/>
                                    <label for="floatingInput" style={{marginLeft:'23%' }}>Last Name</label>
                                </div>
                            </div>


                            <div class="form-floating mb-3">
                                <input type="email" class="form-control" id="floatingInput" name='email' style={{ width: '100%'}} placeholder="name@example.com"/>
                                <label for="floatingInput" style={{ }}>Email address</label>
                            </div>

                            <div className='contactRadio'>
                                <div><h6>Describe your party </h6></div>
                                <div className='radio-btn'>
                                    <input type='radio'  name='party' value='Solo Traveler' className='form-check-input'/> Solo Traveler
                                    <input type='radio'  name='party' value='Couple' className='form-check-input'/>Couple
                                    <input type='radio' name='party' value='Family' className='form-check-input'/>Family
                                    <input type='radio' name='party'  value='Group of friends' className='form-check-input'/>Group of friends
                                    <input type='radio'  name='party' value='Other' className='form-check-input'/>Other
                                </div>
                            </div>
                            
                            <div className='contacttime d-flex gap-5'>
                                <div>
                                    <h6>Arrival time</h6>
                                    <input type='date' name='arrival' className='form-control mb-1 mr-sm-2 ' style={{ width: '100%' }}/>
                                </div>
                      
                            </div>
                            <div className='contacttime d-flex gap-5'>
                         
                                <div>
                                    <h6>Departure time</h6>
                                    <input type='date' name='departure' className='form-control mb-1 mr-sm-2 ' style={{ width: '100%' }}/>
                                </div>
                            </div>

                            <div class="form-floating">
                                <textarea className="form-control" name='comments' placeholder="Leave a comment here" id="floatingTextarea2" style={{height: '200px',width:'100%',marginTop:'5%'}}></textarea>
                                <label for="floatingTextarea2" style={{ }}>Comments</label>
                            </div>

                            <div className='contactsubmit d-flex gap-3'>
                                <button type="submit" class="btn-all contactbutton py-2 px-4">Submit</button>
                                <button type="reset" class="btn-all contactbutton py-2 px-4">Reset</button>
                            </div>
                        </fieldset>
                        </form>
                </div>
                <div class="col-md-6">
                    <div class="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d417837.9288617217!2d135.38920121438568!3d35.097750033070504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6001a8d6cd3cc3f1%3A0xc0961d366bbb1d3d!2sKyoto%2C%20Japan!5e0!3m2!1sen!2slk!4v1716906869524!5m2!1sen!2slk" width="100%" height="590" frameborder="0"  allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    
  )
}

export default Contact