import React, { useState } from 'react';
import axios from 'axios';
import '../assets/Forgotpassword.css';

function Forgotpassword() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [message, setMessage] = useState('');
  const [showToaster, setShowToaster] = useState(false); // State for controlling toaster visibility
  const [toasterType, setToasterType] = useState(''); // Type of toaster (success or error)

  const handleEmailChange = (event) => {
    const emailValue = event.target.value;
    const emailPattern = /^(?!.*\.\.)[a-zA-Z0-9._%-]+@[a-zA-Z]+(\.[a-zA-Z]{2,})+$/;
    setEmail(emailValue);

    if (!emailPattern.test(emailValue)) {
      setEmailError('Invalid email format');
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (emailError) {
      return; 
    }

    try {
      const response = await axios.post('http://localhost:8080/api/users/forgotpassword', {
        email,
      });

      setMessage(response.data.message);
      setEmail('');
      setToasterType('success'); // Set toaster type to success
      setShowToaster(true); // Show the toaster
      setTimeout(() => setShowToaster(false), 3000); // Hide toaster after 3 seconds
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message || 'Failed to send email.');
        setToasterType('error'); // Set toaster type to error
      } else {
        console.error('Error:', error);
        setMessage('An unexpected error occurred. Please try again later.');
        setToasterType('error'); // Set toaster type to error
      }
      setShowToaster(true); // Show the toaster
      setTimeout(() => setShowToaster(false), 3000); // Hide toaster after 3 seconds
    }
  };

  return (
    <div className="background">
      <div className="forgot-container">
        <h2 className="forgot-password-header">Forgot Password?</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input 
              type="email" 
              id="email" 
              placeholder="Enter email" 
              value={email}
              onChange={handleEmailChange}
              required
            />
            {emailError && <span className="error-message">{emailError}</span>}
          </div>
          
          <button type="submit" className="forg-btn">Submit</button>
        </form>

        {showToaster && (
          <div className={`toaster ${toasterType}`}>
            {message}
          </div>
        )}
      </div>
    </div>
  );
}

export default Forgotpassword;
