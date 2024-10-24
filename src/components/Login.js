import React, { Component } from 'react';
import '../assets/Login.css';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      emailError: '',
      passwordError: '',
      isButtonDisabled: true,
    };
  }

  handleEmailChange = (event) => {
    const email = event.target.value;
    const emailPattern = /^(?!.*\.\.)[a-zA-Z0-9._%-]+@[a-zA-Z]+(\.[a-zA-Z]{2,})+$/;
    this.setState({ email }, () => {
      if (!emailPattern.test(email)) {
        this.setState({ emailError: 'Invalid email format' }, this.updateButtonState);
      } else {
        this.setState({ emailError: '' }, this.updateButtonState);
      }
    });
  };

  handlePasswordChange = (event) => {
    const password = event.target.value;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}/;
    this.setState({ password }, () => {
      if (!passwordPattern.test(password)) {
        this.setState({
          passwordError: 'Password must be 8-20 characters, include at least one uppercase letter, one number, and one special character.'
        }, this.updateButtonState);
      } else {
        this.setState({ passwordError: '' }, this.updateButtonState);
      }
    });
  };

  updateButtonState = () => {
    const { email, password, emailError, passwordError } = this.state;
    const isButtonDisabled = !email || !password || emailError || passwordError;
    this.setState({ isButtonDisabled });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password, emailError, passwordError } = this.state;

    // Prevent form submission if there are validation errors
    if (emailError || passwordError || !email || !password) {
      console.log("Validation failed. Form not submitted.");
      return;
    }

    // Simulating form submission without backend connection
    console.log('Email:', email);
    console.log('Password:', password);
  };

  render() {
    const { email, password, emailError, passwordError, isButtonDisabled } = this.state;

    return (
      <div className="background">
        <div className="log-container">
          <div className="form-wrapper">
            <div className="form-card">
              <div className="form-header">
                <h3>Login</h3>
              </div>
              <div className="form-body">
                <form onSubmit={this.handleSubmit}>
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
                    <button
                      type="submit"
                      className="btn"
                      disabled={isButtonDisabled}
                    >
                      Login
                    </button>
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
