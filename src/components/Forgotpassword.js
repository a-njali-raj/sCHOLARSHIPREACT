import React, { useState } from 'react';
import '../assets/Forgotpassword.css';

function Forgotpassword() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

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

  const handleSubmit = (event) => {
    event.preventDefault();

    if (emailError) {
      return; // Don't submit if there's an error
    }

    // Handle the email submission here
    console.log('Email:', email);
  };

  return (
    <div className="background">
      <div className="forgot-container"> {/* Changed class name here */}
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
          
          <button type="submit" className="btn">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Forgotpassword;
