import React, { useState } from 'react';
import './LoginComponent.css'; // Optional: for styling
import { MapTo } from '@adobe/cq-react-editable-components';

const LoginComponent = (props) => {
    const [dealerNumber, setDealerNumber] = useState('');
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log({ dealerNumber, userId, password, rememberMe });
    };

    return (
        <div className="login-container">
            <h2>Interactive Network</h2>
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
    );
};

// 🔗 Correctly map to AEM component resource type
export default LoginComponent;