import React from 'react';
import PropTypes from 'prop-types';

const Signup = () => {
    return (
      <div className="main-container-bg-pic">
        <div className="main-container-overlay">
          <div className="main-container-wrapper">
            <div className="signup-wrapper">
              <div className="signup-title">
                Asaga
              </div>
              <div className="signup-slogan">
                Sign up to pray at your favorite temple.
              </div>
              <input
                type="text"
                className="signup-email"
                placeholder="email"/>
              <input
                type="text"
                className="signup-fullname"
                placeholder="fullname"/>
              <input
                type="text"
                className="signup-username"
                placeholder="username"/>
              <input
                type="password"
                className="signup-password"
                placeholder="password"/>
              <div
                type="button"
                className="signup-button">
                Sign Up
              </div>
              <div
                className="signup-login-account">
                Have an account?&nbsp;
                <span
                  onClick={() => this.redirectLogin()}
                  className="signup-login-text">
                Log In
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Signup;
