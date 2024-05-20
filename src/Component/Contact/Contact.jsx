import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <>
        <div>Contact</div>
        
        <form>
            
            <div className='contactRadio'>
            <p>Describe your party </p>
                <input type='radio'  name='party' className='form-check-input'/> Solo Traveler <br/>
                <input type='radio'  name='party' className='form-check-input'/>Couple <br/>
                <input type='radio' name='party' className='form-check-input'/>Family <br/>
                <input type='radio' name='party' className='form-check-input'/>Group of friends <br/>
                <input type='radio'  name='party' className='form-check-input'/>Other
            </div>
            <div className='contacttime'>
                <p>arrival time</p>
                <input type='date' name='arrival' className='form-control mb-2 mr-sm-2 contacttime'/><br/>
                <p>departure time</p>
                <input type='date' name='departure' className='form-control mb-2 mr-sm-2 contacttime'/>
            </div>
            <div className='contactother'>
                <p>Any thing else you can share to help us better plan your time</p>
                <textarea className='form-control contacttextarea'  ></textarea>
            </div>

            <div className='contactsubmit'>
            <button type="submit" class="btn btn-primary contactbutton">Submit</button>
            </div>

        </form>

    </>
    
  )
}

export default Contact