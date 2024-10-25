import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import './Resetpassword.css';

function Resetpassword() {
  const [newPassword, setNewPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [token, setToken] = useState(null);
  const [showToast, setShowToast] = useState(false); 
  const [toastMessage, setToastMessage] = useState('');
  const navigate = useNavigate(); 

  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}/;

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const resetPasswordToken = urlParams.get('token');
    setToken(resetPasswordToken);
  }, []);

  const handlePasswordChange = (event) => {
    const password = event.target.value;
    setNewPassword(password);

    if (!passwordPattern.test(password)) {
      setPasswordError('Password must be at least 8 characters long, contain a special character, and have at least one uppercase letter.');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (passwordError || !token) {
      return;
    }

    try {
      await axios.post('http://localhost:8080/api/users/resetpassword', {
        resetPasswordToken: token,
        newPassword: newPassword,
      });

      setToastMessage("Password successfully reset. You can log in now.");
      setShowToast(true);

    
      navigate('/login', { state: { successMessage: "Password reset successfully!" } });
    } catch (error) {
      console.error(error.response ? error.response.data.error : "Error resetting password");
      setToastMessage(error.response ? error.response.data.error : "Error resetting password");
      setShowToast(true);
    }
  };

  return (
    <div className="background">
      <div className="reset-container">
        <h2 className="forgot-password-header">Reset Password</h2>
        {showToast && (
          <div className="toast success">{toastMessage}</div>
        )}
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
