import React from 'react';
import './Register.css';
const RegistrationForm = () => {
  return (
    <div className="background">
      <div className="container">
        <div className="form-card">
          <div className="form-header">
            <h3>REGISTER!</h3>
          </div>
          <div className="form-body">
            <form>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fname">First Name</label>
                  <input type="text" id="fname" placeholder="Enter first name" />
                </div>
                <div className="form-group">
                  <label htmlFor="lname">Last Name</label>
                  <input type="text" id="lname" placeholder="Enter last name" />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" placeholder="Enter email" />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" placeholder="Enter phone number" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="dob">Date of Birth</label>
                <input type="date" id="dob" />
              </div>

              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input type="text" id="address" placeholder="Enter address" />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="city">City</label>
                  <input type="text" id="city" placeholder="Enter city" />
                </div>
                <div className="form-group">
                  <label htmlFor="state">State</label>
                  <input type="text" id="state" placeholder="Enter state" />
                </div>
                <div className="form-group">
                  <label htmlFor="postalCode">Postal Code</label>
                  <input type="text" id="postalCode" placeholder="Enter postal code" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="YearOrGradeLevel">Grade/Year Level</label>
                  <input type="text" id="YearOrGradeLevel" placeholder="Enter your Grade or Year Level" />
                </div>
                <div className="form-group">
                  <label htmlFor="gpaScore">GPA Score</label>
                  <input type="number" id="gpaScore" placeholder="Enter GPA score" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="gwaPercentile">GWA Percentile</label>
                  <input type="number" id="gwaPercentile" placeholder="Enter GWA percentile" />
                </div>

                <div className="form-group">
                  <label htmlFor="expectedGraduationDate">Expected Graduation Date</label>
                  <input type="date" id="expectedGraduationDate" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="schoolName">School Name</label>
                  <input type="text" id="schoolName" placeholder="Enter school name" />
                </div>
                <div className="form-group">
                  <label htmlFor="department">Department</label>
                  <input type="text" id="department" placeholder="Enter department" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="Enter password" />
              </div>

              <div class="button-container">
        <button class="btn">Register</button>
    </div>


              <div class="login-link">
        <p>Already have an account? <a href="login">Login here</a></p>
    </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
