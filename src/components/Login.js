import React, { Component } from 'react';
import './Login.css';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      emailError: '',
      passwordError: '',
    };
  }

  handleEmailChange = (event) => {
    const email = event.target.value;
    const emailPattern = /^(?!.*\.\.)[a-zA-Z0-9._%-]+@[a-zA-Z]+(\.[a-zA-Z]{2,})+$/;
    this.setState({ email }, () => {
    
      if (!emailPattern.test(email)) {
        this.setState({ emailError: 'Invalid email format' });
      } else {
        this.setState({ emailError: '' });
      }
    });
  };

  handlePasswordChange = (event) => {
    const password = event.target.value;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}/;
    this.setState({ password }, () => {
 
      if (!passwordPattern.test(password)) {
        this.setState({ passwordError: 'Password must be at least 8 characters,a special character and a capital letter' });
      } else {
        this.setState({ passwordError: '' });
      }
    });
  };

  

//   handleSubmit = (event) => {
//     event.preventDefault();
//     const { email, password, emailError, passwordError } = this.state;


//     if (emailError || passwordError) {
//       return; 
//     }


//     console.log('Email:', email);
//     console.log('Password:', password);
//   };

  render() {
    const { email, password, emailError, passwordError } = this.state;

    return (
      <div className="background">
        <div className="container">
          <div className="form-wrapper">
            <div className="form-card">
              <div className="form-header">
                <h3>Login</h3>
              </div>
              <div className="form-body">
              {/* onSubmit={this.handleSubmit} */}
                <form>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter email"
                      value={email}
                      onChange={this.handleEmailChange}
                      required
                    />
                    {emailError && <span className="error-message">{emailError}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Enter password"
                      value={password}
                      onChange={this.handlePasswordChange}
                      required
                    />
                    {passwordError && <span className="error-message">{passwordError}</span>}
                  </div>

                  <div className="form-submit">
                    <button type="submit" className="btn">Login</button>
                  </div>
                </form>
              </div>
              <div className="form-footer">
                <small>Don't have an account? <a href="/register">Sign up</a></small><br />
                <div><small><a href="/forgotpassword">Forgot Password?</a></small></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
