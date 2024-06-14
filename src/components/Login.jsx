import React, { useState } from 'react';
import './Login.css';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPrompt, setShowPrompt] = useState(true);

  const handleLogin = () => {
    // Dummy login logic
    if (username === 'malaka' && password === '1234') {
      
      onLogin();
    } else {
      
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      {showPrompt && (
        <p>
          Welcome to the login page!
          Please enter your credentials below. (Default username: "malaka", password: "1234")
        </p>
      )}
      {error && <p className="error">{error}</p>}
      <div className="input-group">
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;

