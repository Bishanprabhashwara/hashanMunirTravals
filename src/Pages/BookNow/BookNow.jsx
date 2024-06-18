import React,{useState} from 'react'
import Modal from 'react-modal';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './BookNow.css'
import booknowimg from '../../assets/images/booknowimg.jpg';


Modal.setAppElement('#root');

const BookNow = ({ onClose,plane }) => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        startDate: null,
        endDate: null,
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleStartDateChange = (date) => {
        setFormData({
          ...formData,
          startDate: date,
        });
      };
    
      const handleEndDateChange = (date) => {
        setFormData({
          ...formData,
          endDate: date,
        });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        const mailtoLink = `mailto:your-email@example.com?subject=Contact Form Submission&body=
          Plane: ${plane}%0D%0A
          Name: ${formData.name}%0D%0A
          Email: ${formData.email}%0D%0A
          Start Date: ${formData.startDate ? formData.startDate.toISOString().split('T')[0] : ''}%0D%0A
          End Date: ${formData.endDate ? formData.endDate.toISOString().split('T')[0] : ''}%0D%0A
          Comments: ${formData.comments}`;
        window.location.href = mailtoLink;
      };

    return (
        <div style={modalStyle}>
          
        
        
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="section-title text-title px-3">Contact Us</h6>
                <h1 className="gallery-title">Ready to explore {plane}</h1>
                <h5 className="mb-5 gallery-title">Contact us and let's start your adventure!</h5>
            </div>
            <div class="row booknowback">
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
                </div>
        <button onClick={onClose} className='BK-closeButton btn btn-outline-danger'>Close</button>
      </div>
    );
    
  };

  const modalStyle = {
    zIndex:10,
    position: 'fixed',
    top: '55%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    zIndex: 1000,
    maxWidth: '100%', // Adjust maximum width according to your preference
    height:'90%',
    width: 'auto', // Set width to auto for responsiveness
    maxHeight: '100%', // Adjust maximum height according to your preference
    overflowY: 'auto',
  };

export default BookNow