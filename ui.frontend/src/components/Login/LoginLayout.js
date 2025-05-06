import React from 'react';
import './LoginComponent.css'; // Reuse same CSS file

const LoginLayout = ({ children }) => {
    return (
        <div className="login-page">
            <header className="login-header">
                <img src="/assets/honda-logo.png" alt="Honda Logo" className="honda-logo" />
                <h2>Interactive Network</h2>
            </header>

            <div className="login-content">
                <div className="login-form-container">{children}</div>
                <div className="login-side-image">
                    <img src="/assets/login-side.jpg" alt="Login Visual" />
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

export default LoginLayout;
