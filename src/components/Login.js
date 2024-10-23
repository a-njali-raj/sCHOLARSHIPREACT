import React, { Component } from 'react';
import './Login.css';


export default class Login extends Component {
  render() {
    return (
      <div className="background">
        <div className="container">
          <div className="form-wrapper">
            <div className="form-card">
              <div className="form-header">
                <h3>Login</h3>
              </div>
              <div className="form-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email"id="email"name="email"placeholder="Enter email"required/>
                  </div>

                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password"id="password"name="password"placeholder="Enter password"required/>
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
