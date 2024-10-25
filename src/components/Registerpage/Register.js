import React, { useState } from 'react';
import './Register.css';
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom';


const Register = () => {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    phonenumber: '',
    dob: '',
    addressLine: '',
    city: '',
    state: '',
    postalCode: '',
    gradeOrYearLevel: '',
    gpaScore: '',
    gwaPercentile: '',
    expectedGraduationDate: '',
    schoolName: '',
    department: '',
    password: ''
  });

  const [formErrors, setFormErrors] = useState({
    fnameError: '',
    lnameError: '',
    emailError: '',
    phoneError: '',
    dobError: '',
    addressError: '' ,
    cityError: '',
    stateError: '',
    postalCodeError: '',
    schoolNameError:'',
    departmentError: '',
    validatePassword:''
    });

  const validateFname = (value) => {
    if (!value) {
      setFormErrors((prevErrors) => ({ ...prevErrors, fnameError: 'First name is required.' }));
    } else if (value.length < 4) {
      setFormErrors((prevErrors) => ({ ...prevErrors, fnameError: 'First name must be at least 4 characters long.' }));
    } else if (!/^[a-zA-Z]+$/.test(value)) {
      setFormErrors((prevErrors) => ({ ...prevErrors, fnameError: 'First name must contain only letters.' }));
    } else {
      setFormErrors((prevErrors) => ({ ...prevErrors, fnameError: '' }));
    }
  };

  
  const validateLname = (value) => {
    if (!value) {
      setFormErrors((prevErrors) => ({ ...prevErrors, lnameError: 'Last name is required.' }));
    } else if (!/^[a-zA-Z]+$/.test(value)) {
      setFormErrors((prevErrors) => ({ ...prevErrors, lnameError: 'Last name must contain only letters.' }));
    } else {
      setFormErrors((prevErrors) => ({ ...prevErrors, lnameError: '' }));
    }
  };
  
  
  const validateAddress = (value) => {
    const addressPattern = /^[a-zA-Z][a-zA-Z\s]*(\d{0,4})?$/; // Starts with a letter, allows up to 4 digits, and allows spaces
  
    if (!value) {
      setFormErrors((prevErrors) => ({ ...prevErrors, addressError: 'Address is required.' }));
    } else if (!addressPattern.test(value) || (value.match(/ /g) || []).length > 5) {
      setFormErrors((prevErrors) => ({ ...prevErrors, addressError: 'Address must start with a letter, allow up to 4 digits, and a maximum of 5 spaces.' }));
    } else {
      setFormErrors((prevErrors) => ({ ...prevErrors, addressError: '' }));
    }
  };
 
 
  const validateCity = (value) => {
    const cityPattern = /^[a-zA-Z\s]*$/; 
  
    if (!value) {
      setFormErrors((prevErrors) => ({ ...prevErrors, cityError: 'City is required.' }));
    } else if (!cityPattern.test(value) || (value.match(/ /g) || []).length > 2) {
      setFormErrors((prevErrors) => ({ ...prevErrors, cityError: 'City can only contain letters and up to 2 spaces.' }));
    } else {
      setFormErrors((prevErrors) => ({ ...prevErrors, cityError: '' }));
    }
  };
  
  
  const validateState = (value) => {
    const statePattern = /^[a-zA-Z\s]*$/; // Allows only letters and spaces
  
    if (!value) {
      setFormErrors((prevErrors) => ({ ...prevErrors, stateError: 'State is required.' }));
    } else if (!statePattern.test(value) || (value.match(/ /g) || []).length > 2) {
      setFormErrors((prevErrors) => ({ ...prevErrors, stateError: 'State can only contain letters and up to 2 spaces.' }));
    } else {
      setFormErrors((prevErrors) => ({ ...prevErrors, stateError: '' }));
    }
  };
  
  
  
  const handleEmailChange = (emailValue) => {
    const emailPattern = /^(?!.*\.\.)[a-zA-Z0-9._%-]+@[a-zA-Z]+(\.[a-zA-Z]{2,})+$/;
    setFormData((prevData) => ({ ...prevData, email: emailValue }));

    if (!emailPattern.test(emailValue)) {
      setFormErrors((prevErrors) => ({ ...prevErrors, emailError: 'Invalid email format' }));
    } else {
      setFormErrors((prevErrors) => ({ ...prevErrors, emailError: '' }));
    }
  };

  
  
  
  const handlePhoneChange = (phoneValue) => {
    setFormData((prevData) => ({ ...prevData, phone: phoneValue }));

    if (!phoneValue) {
      setFormErrors((prevErrors) => ({ ...prevErrors, phoneError: 'Phone number is required.' }));
    } else if (!/^\d{10}$/.test(phoneValue)) {
      setFormErrors((prevErrors) => ({ ...prevErrors, phoneError: 'Phone number must be 10 digits long and cannot contain letters or special characters.' }));
    } else {
      setFormErrors((prevErrors) => ({ ...prevErrors, phoneError: '' }));
    }
  };

  
  
  const handleDobChange = (dobValue) => {
    setFormData((prevData) => ({ ...prevData, dob: dobValue }));

    if (!dobValue) {
      setFormErrors((prevErrors) => ({ ...prevErrors, dobError: 'Date of birth is required.' }));
    } else {
      setFormErrors((prevErrors) => ({ ...prevErrors, dobError: '' }));
    }
  };
  
  
  
  const validatePostalCode = (value) => {
    const postalCodePattern = /^\d{6}$/; 
  
    if (!value) {
      setFormErrors((prevErrors) => ({ ...prevErrors, postalCodeError: 'Postal code is required.' }));
    } else if (!postalCodePattern.test(value)) {
      setFormErrors((prevErrors) => ({ ...prevErrors, postalCodeError: 'Postal code must be exactly 6 digits and contain no letters or spaces.' }));
    } else {
      setFormErrors((prevErrors) => ({ ...prevErrors, postalCodeError: '' }));
    }
  };
  
  
  
  const validateYearOrGradeLevel = (value) => {
    const yearOrGradePattern = /^(Grade \d+|Year \d+)$/; 
  
    if (!value) {
      setFormErrors((prevErrors) => ({ ...prevErrors, yearOrGradeLevelError: 'Grade or Year Level is required.' }));
    } else if (!yearOrGradePattern.test(value)) {
      setFormErrors((prevErrors) => ({ ...prevErrors, yearOrGradeLevelError: 'Grade or Year Level must be in format "Grade X" or "Year Y".' }));
    } else {
      setFormErrors((prevErrors) => ({ ...prevErrors, yearOrGradeLevelError: '' }));
    }
  };

  
  
  const validateGpaScore = (value) => {
    const gpaValue = parseFloat(value); 
  
    if (!value) {
      setFormErrors((prevErrors) => ({ ...prevErrors, gpaScoreError: 'GPA Score is required.' }));
    } else if (isNaN(gpaValue) || gpaValue < 0.0 || gpaValue > 4.0) {
      setFormErrors((prevErrors) => ({ ...prevErrors, gpaScoreError: 'Invalid GPA score. Must be between 0.0 and 4.0.' }));
    } else {
      setFormErrors((prevErrors) => ({ ...prevErrors, gpaScoreError: '' }));
    }
  };
  
  
  
  const validateGwaPercentile = (value) => {
    const gwaValue = parseFloat(value); 
  
    if (!value) {
      setFormErrors((prevErrors) => ({ ...prevErrors, gwaPercentileError: 'GWA Percentile is required.' }));
    } else if (isNaN(gwaValue) || gwaValue < 50 || gwaValue > 100) {
      setFormErrors((prevErrors) => ({ ...prevErrors, gwaPercentileError: 'Invalid GWA Percentile. Must be between 50 and 100.' }));
    } else {
      setFormErrors((prevErrors) => ({ ...prevErrors, gwaPercentileError: '' }));
    }
  };
  
  
  
  
  const validateSchoolName = (value) => {
    if (!value) {
      setFormErrors((prevErrors) => ({ ...prevErrors, schoolNameError: 'School name is required.' }));
    } else if (!/^[a-zA-Z\s]+$/.test(value)) {
      setFormErrors((prevErrors) => ({ ...prevErrors, schoolNameError: 'School name must contain only letters and spaces.' }));
    } else {
      setFormErrors((prevErrors) => ({ ...prevErrors, schoolNameError: '' }));
    }
  };
  
  
  
  
  const validateDepartment = (value) => {
    if (!value) {
      setFormErrors((prevErrors) => ({ ...prevErrors, departmentError: 'Department is required.' }));
    } else if (!/^[a-zA-Z\s]+$/.test(value)) {
      setFormErrors((prevErrors) => ({ ...prevErrors, departmentError: 'Department must contain only letters and spaces.' }));
    } else {
      setFormErrors((prevErrors) => ({ ...prevErrors, departmentError: '' }));
    }
  };
  
  
  
  const validatePassword = (value) => {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}/;
    if (!value) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        passwordError: 'Password is required.',
      }));
    } else if (!passwordPattern.test(value)) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        passwordError:
          'Password must be 8-20 characters long, include at least one lowercase letter, one uppercase letter, one number, and one special character.',
      }));
    } else {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        passwordError: '',
      }));
    }
  };
  
  
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

  

    if (name === 'fname') validateFname(value);
    if (name === 'lname') validateLname(value);
    if (name === 'email') handleEmailChange(value);
    if (name === 'phonenumber') handlePhoneChange(value);
    if (name === 'dob') handleDobChange(value);
    if (name === 'addressLine') validateAddress(value);
    if (name === 'city') validateCity(value);
    if (name === 'state') validateState(value);
    if (name === 'postalCode') validatePostalCode(value);
    if (name === 'gradeOrYearLevel') validateYearOrGradeLevel(value);
    if (name === 'gpaScore') validateGpaScore(value);
    if (name === 'gwaPercentile') validateGwaPercentile(value);
    if (name === 'schoolName') validateSchoolName(value);
    if (name === 'department') validateDepartment(value);
    if (name === 'password') validatePassword(value);


  };
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const hasErrors = Object.values(formErrors).some((error) => error !== '');
    if (hasErrors) {
        alert('Please fix the errors before submitting the form.');
        return;
    }

    try {
        const response = await axios.post('http://localhost:8080/api/users/register', formData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        console.log('Registration successful!', response.data);

        navigate('/login', {
            state: { successMessage: 'Registration successful! Please log in.' } 
        });
    } catch (error) {
        if (error.response) {
            console.error('Registration failed:', error.response.data);
            alert('Registration failed: ' + error.response.data.message);
        } else {
            console.error('Error:', error.message);
            alert('An error occurred: ' + error.message);
        }
    }
};

  return (
    <div className="background">
      <div className="reg-container">
        <div className="form-card">
          <div className="form-header">
            <h3>REGISTER!</h3>
          </div>
          <div className="form-body">
    

          <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fname">First Name</label>
                  <input
                    type="text"
                    id="fname"
                    name="fname"
                    placeholder="Enter first name"
                    value={formData.fname}
                    onChange={handleChange}
                  />
                  {formErrors.fnameError && (
                    <div className="error-message">{formErrors.fnameError}</div>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="lname">Last Name</label>
                  <input
                    type="text"
                    id="lname"
                    name="lname"
                    placeholder="Enter last name"
                    value={formData.lname}
                    onChange={handleChange}
                  />
                  {formErrors.lnameError && (
                    <div className="error-message">{formErrors.lnameError}</div>
                  )}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {formErrors.emailError && <span className="error-message">{formErrors.emailError}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="phonenumber">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phonenumber"
                    placeholder="Enter phone number"
                    value={formData.phonenumber}
                    onChange={handleChange}
                  />
                  {formErrors.phoneError && (
                    <div className="error-message">{formErrors.phoneError}</div>
                  )}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="dob">Date of Birth</label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                />
                {formErrors.dobError && (
                  <div className="error-message">{formErrors.dobError}</div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="addressLine">Address</label>
                <input
                  type="text"
                  id="address"
                  name="addressLine"
                  placeholder="Enter address"
                  value={formData.addressLine}
                  onChange={handleChange}
                />
                {formErrors.addressError && (
                  <div className="error-message">{formErrors.addressError}</div>
                )}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="Enter city"
                    value={formData.city}
                    onChange={handleChange}
                  />
                  {formErrors.cityError && (
                  <div className="error-message">{formErrors.cityError}</div>
                )}
                </div>
                <div className="form-group">
                  <label htmlFor="state">State</label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    placeholder="Enter state"
                    value={formData.state}
                    onChange={handleChange}
                  />
                   {formErrors.stateError && (
                  <div className="error-message">{formErrors.stateError}</div>
                )}
                </div>
                <div className="form-group">
                  <label htmlFor="postalCode">Postal Code</label>
                  <input
                    type="text"
                    id="postalCode"
                    name="postalCode"
                    placeholder="Enter postal code"
                    value={formData.postalCode}
                    onChange={handleChange}
                  />
                  {formErrors.postalCodeError && (<div className="error-message">{formErrors.postalCodeError}</div>)}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="gradeOrYearLevel">Grade/Year Level</label>
                  <input
                    type="text"
                    id="YearOrGradeLevel"
                    name="gradeOrYearLevel"
                    placeholder="Enter your Grade or Year Level"
                    value={formData.gradeOrYearLevel}
                    onChange={handleChange}
                  />
                  {formErrors.yearOrGradeLevelError && (<div className="error-message">{formErrors.yearOrGradeLevelError}</div>)}
                </div>
                <div className="form-group">
                  <label htmlFor="gpaScore">GPA Score</label>
                  <input
                    type="number"
                    id="gpaScore"
                    name="gpaScore"
                    placeholder="Enter GPA score"
                    value={formData.gpaScore}
                    onChange={handleChange}
                  />
                  {formErrors.gpaScoreError && (<div className="error-message">{formErrors.gpaScoreError}</div>)}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="gwaPercentile">GWA Percentile</label>
                  <input
                    type="number"
                    id="gwaPercentile"
                    name="gwaPercentile"
                    placeholder="Enter GWA percentile"
                    value={formData.gwaPercentile}
                    onChange={handleChange}
                  />
                   {formErrors.gwaPercentileError && (<div className="error-message">{formErrors.gwaPercentileError}</div>)}
                </div>
                <div className="form-group">
                  <label htmlFor="expectedGraduationDate">Expected Graduation Date</label>
                  <input
                    type="date"
                    id="expectedGraduationDate"
                    name="expectedGraduationDate"
                    value={formData.expectedGraduationDate}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-row">
  <div className="form-group">
    <label htmlFor="schoolName">School Name</label>
    <input
      type="text"
      id="schoolName"
      name="schoolName"
      placeholder="Enter school name"
      value={formData.schoolName}
      onChange={handleChange}
    />
     {formErrors.schoolNameError && (<div className="error-message">{formErrors.schoolNameError}</div>)}
  </div>

  <div className="form-group">
    <label htmlFor="department">Department</label>
    <input
      type="text"
      id="department"
      name="department"
      placeholder="Enter department"
      value={formData.department}
      onChange={handleChange}
    />
     {formErrors.departmentError && (<div className="error-message">{formErrors.departmentError}</div>)}
  </div>
</div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={handleChange}
                />
                {formErrors.passwordError && (<div className="error-message">{formErrors.passwordError}</div>)}
              </div>

              <div className="regbutton-container">
              <button type="submit" className="reg-btn" onClick={handleSubmit}>Register</button>
  </div>
  <div className="login-link">
    <p>Already have an account? <a href="/login">Login</a></p>
  </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
