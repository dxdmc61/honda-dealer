import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MapTo } from '@adobe/aem-react-editable-components';
import './LoginComponent.css';

export const LoginComponentEditConfig = {
  emptyLabel: 'Login Component',
  isEmpty: function (props) {
    return !props || !props.sideImage || !props.headingText || !props.hondaLogo
  },
};

const LoginComponent = (props) => {
  const {
    dealerNumber: initialDealerNumber,
    userId: initialUserId,
    password: initialPassword,
    rememberMe: initialRememberMe,
    cqPath,
    sideImage,
    headingText,
    hondaLogo
  } = props;

  const [dealerNumber, setDealerNumber] = useState(initialDealerNumber || '');
  const [userId, setUserId] = useState(initialUserId || '');
  const [password, setPassword] = useState(initialPassword || '');
  const [rememberMe, setRememberMe] = useState(initialRememberMe || false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ dealerNumber, userId, password, rememberMe });
  };

  if (LoginComponentEditConfig.isEmpty(props)) {
    return null;
  }

  return (
    <div className="login-page" data-cq-path={cqPath}>
      <img src={hondaLogo} alt="Honda Logo" className="honda-logo" />
      <header className="login-header">
        <h2>{headingText}</h2>
      </header>

      <div className="login-content">
        <div className="login-form-container">
          <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit} className="login-form">
              <input
                type="text"
                placeholder="Dealer Number"
                value={dealerNumber}
                onChange={(e) => setDealerNumber(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="User ID"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div className="remember-forgot">
                <label>
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                  />
                  Remember Me
                </label>
                <a href="/forgot-password">Forgot Password?</a>
              </div>
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
        <div className="login-side-image">
          <img src={sideImage} alt="Login Visual" />
        </div>
      </div>

      <footer className="login-footer">
        <p>
          &copy; 2025 American Honda Motor Co., Inc. All information contained herein
          applies to U.S. products only.
        </p>
      </footer>
    </div>
  );
};

LoginComponent.propTypes = {
  dealerNumber: PropTypes.string,
  userId: PropTypes.string,
  password: PropTypes.string,
  rememberMe: PropTypes.bool,
  cqPath: PropTypes.string,
  sideImage: PropTypes.string,
  headingText: PropTypes.string,
  hondaLogo: PropTypes.string
};

MapTo('honda/components/login')(LoginComponent, LoginComponentEditConfig);

export default LoginComponent;
