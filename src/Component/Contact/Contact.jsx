import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <>
        
        
        <form action="mailto:your-email@example.com" method="post" enctype="text/plain">
        <fieldset className="contact-fieldset">
        <div><h1>Contact Us</h1></div>
            <div className='contactRadio'>
            <p>Describe your party </p>
                <input type='radio'  name='party' value='Solo Traveler' className='form-check-input'/> Solo Traveler <br/>
                <input type='radio'  name='party' value='Couple' className='form-check-input'/>Couple <br/>
                <input type='radio' name='party' value='Family' className='form-check-input'/>Family <br/>
                <input type='radio' name='party'  value='Group of friends' className='form-check-input'/>Group of friends <br/>
                <input type='radio'  name='party' value='Other' className='form-check-input'/>Other
            </div>
            <div className='contacttime'>
                <p>arrival time</p>
                <input type='date' name='arrival' className='form-control mb-2 mr-sm-2 contacttime'/><br/>
                <p>departure time</p>
                <input type='date' name='departure' className='form-control mb-2 mr-sm-2 contacttime'/>
            </div>
            <div className='contactother'>
                <p>Any thing else you can share to help us better plan your time</p>
                <textarea name='comments' className='form-control contacttextarea' rows={10}  ></textarea>
            </div>

            <div className='contactsubmit'>
            <button type="submit" class="btn btn-primary contactbutton">Submit</button>
            
            </div>
           </fieldset>
        </form>
        
    </>
    
  )
}

export default Contact