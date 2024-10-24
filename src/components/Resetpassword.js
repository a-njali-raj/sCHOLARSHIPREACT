import React, { useState } from 'react';
import '../assets/Resetpassword.css'; // Make sure to create this CSS file

function Resetpassword() {
  const [newPassword, setNewPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');


  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}/;

  const handlePasswordChange = (event) => {
    const password = event.target.value;
    setNewPassword(password);


    if (!passwordPattern.test(password)) {
      setPasswordError('Password must be at least 8 characters long, contain a special character, and have at least one uppercase letter.');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (passwordError) {
      return; 
    }
    console.log('New Password:', newPassword);
    // Handle the password reset logic here
  };

  return (
    <div className="background">
      <div className="reset-container"> {/* Changed class name here */}
        <h2 className="forgot-password-header">Reset Password</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="new-password">New Password</label>
            <input 
              type="password" 
              id="new-password" 
              placeholder="Enter new password" 
              value={newPassword}
              onChange={handlePasswordChange}
              required
            />
            {passwordError && <span className="error-message">{passwordError}</span>}
          </div>
          
          <button type="submit" className="btn">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Resetpassword;
