import React from 'react'
// import { Link } from 'react-router-dom';
import './Welcome.css';
function Welcome() {
  return (
    <div className='welcome-container'>
    <h1>Unlock Your Future: Scholarships Await!</h1> 

    <div className="button-group">
      <a href="login" className="btn">Login</a>
      <a href="register" className="btn">Register</a>
    </div>

    <div className="scholarship-notes">
      <div className="note-box">
        <p><strong>Merit-Based Scholarships:</strong> Awarded to students with exceptional academic achievements. Apply now to receive financial aid!</p>
      </div>
      <div className="note-box">
        <p><strong>Need-Based Scholarships:</strong> Available for students facing financial challenges. Secure your future with our support!</p>
      </div>
      <div className="note-box">
        <p><strong>Sports Scholarships:</strong> If you excel in sports, you can qualify for scholarships that recognize your athletic talent!</p>
      </div>
    </div>
  </div>
    

  )
}

export default Welcome
