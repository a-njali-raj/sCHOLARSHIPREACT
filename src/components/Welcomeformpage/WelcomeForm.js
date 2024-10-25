
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './WelcomeForm.css'; 

function WelcomeForm() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem('isAuthenticated');
    if (auth) {
      setIsAuthenticated(true);
      const userInfoFromStorage = JSON.parse(localStorage.getItem('userInfo'));
      setUserInfo(userInfoFromStorage);
    } else {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userInfo'); 
    setIsAuthenticated(false);
    navigate('/login');
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    
   
    <div className="welcomeform-container">
    <h1 className="welcomeform-title">Hi {userInfo.fname} ! Claim Your Scholarship</h1>

    <div className="user-info-box">
      <p className="welcomeform-element">Name: {userInfo.fname} {userInfo.lname}</p>
      <p className="welcomeform-element">Email: {userInfo.email}</p>
      <p className="welcomeform-element">Date of Birth: {userInfo.dob}</p>
      <p className="welcomeform-element">Phone Number: {userInfo.phonenumber}</p>
    </div>
    <button className="logout-button" onClick={handleLogout}>Logout</button>
  </div>
  
      );
    }

export default WelcomeForm;
