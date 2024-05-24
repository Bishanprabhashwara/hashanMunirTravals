import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <>
        
        
        <form action="mailto:your-email@example.com" method="post" enctype="text/plain">
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
        </form>
        
    </>
    
  )
}

export default Contact