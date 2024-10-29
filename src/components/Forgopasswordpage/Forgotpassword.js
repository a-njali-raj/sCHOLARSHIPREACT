import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Forgotpassword.css';

function Forgotpassword() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [message, setMessage] = useState('');
  const [showToaster, setShowToaster] = useState(false);
  const [toasterType, setToasterType] = useState('');
  const navigate = useNavigate();

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

    if (emailError) return;

    try {
      const response = await axios.post('http://localhost:8080/api/users/forgotpassword', { email });
      setMessage(response.data.message);
      setEmail('');
      setToasterType('success');
      setShowToaster(true);


      setTimeout(() => {
        setShowToaster(false);
        const resetLink = response.data.resetLink;
        if (resetLink) {
          navigate(`/resetpassword?token=${resetLink.split('token=')[1]}`);
        }
      }, 2000);
    } catch (error) {
      setMessage(error.response?.data.message || 'Failed to send email.');
      setToasterType('error');
      setShowToaster(true);
      setTimeout(() => setShowToaster(false), 3000);
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
