import React from 'react';
import PropTypes from 'prop-types';

class Login extends React.Component{
  constructor(props) {
    super(props);
  }

  signup() {
    this.props.history.push('/')
  }

  home() {
    this.props.history.push('/home')
  }

  render() {
    return (
      <div className="main-container-bg-pic">
        <div className="main-container-overlay">
          <div className="main-container-wrapper">
            <div className="login-wrapper">
              <div className="login-title">
                Asaga
              </div>
              <input
                type="text"
                className="login-username"
                placeholder="username"/>
              <input
                type="password"
                className="login-password"
                placeholder="password"/>
              <div onClick={() => this.home()}
                type="button"
                className="login-button">
                Log In
              </div>
              <div
                className="login-signup-forgot-password">
                Forgot your password?
              </div>
              <div
                className="login-signup-account">
                Don't have an account?&nbsp;
                <span onClick={() => this.signup()}
                  className="login-signup-text">
                Sign up
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Login;
