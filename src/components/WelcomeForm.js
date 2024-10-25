import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function WelcomeForm() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); 
  const navigate = useNavigate(); 


  useEffect(() => {
    const auth = localStorage.getItem('isAuthenticated');
    if (auth) {
      setIsAuthenticated(true); 
    } else {
      navigate('/login'); 
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated'); 
    setIsAuthenticated(false); 
    navigate('/login'); 
  };

 
  if (!isAuthenticated) {
    return null; 
  }

  return (
    <div>
      <h1>Welcome!</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default WelcomeForm;
