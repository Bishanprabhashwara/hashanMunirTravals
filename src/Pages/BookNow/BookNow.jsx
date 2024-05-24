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
          <div className='booknow-header'>
            <h2>Book Now</h2> 
            <h2>{plane}</h2>
            <p>Ready to explore Japan? Contact us and let's start your adventure!</p>
          </div>
        
        
        <form onSubmit={handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td>
                  <label>Plane:</label>
                </td>
                <td>
                  <input
                    type="text"
                    name="plane"
                    value={plane}
                    onChange={handleInputChange}
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Name:</label>
                </td>
                <td>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Email:</label>
                </td>
                <td>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Start Date:</label>
                </td>
                <td>
                  <DatePicker
                    selected={formData.startDate}
                    onChange={handleStartDateChange}
                    selectsStart
                    startDate={formData.startDate}
                    endDate={formData.endDate}
                    dateFormat="yyyy/MM/dd"
                    placeholderText="Select a start date"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>End Date:</label>
                </td>
                <td>
                  <DatePicker
                    selected={formData.endDate}
                    onChange={handleEndDateChange}
                    selectsEnd
                    startDate={formData.startDate}
                    endDate={formData.endDate}
                    minDate={formData.startDate}
                    dateFormat="yyyy/MM/dd"
                    placeholderText="Select an end date"
                  />
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <textarea
                    name='comments'
                    className='form-control contacttextarea'
                    rows={10}
                    
                    value={formData.comments}
                    onChange={handleInputChange}
                  placeholder='Any Other Requests'></textarea>
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <button type="submit" className='btn btn-outline-success'>Submit</button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
        <button onClick={onClose} className='BK-closeButton btn btn-outline-danger'>Close</button>
      </div>
    );
    
  };

  const modalStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    zIndex: 1000,
    width: '50%', // Increase the width
    maxHeight: '80%',
    overflowY: 'auto',
  };

export default BookNow