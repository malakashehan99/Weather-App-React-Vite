import React, { useState } from 'react';
import styles from './Login.module.css'; 
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
    <div className={styles.loginContainer}>
      {showPrompt && (
        <React.Fragment>
          <p className={styles.welcomeMessage}>
            Welcome to the login page!
          </p>
          <p className={styles.instructions}>
            Please enter your credentials below.
          </p>
          <p className={styles.credentials}>
            (Default username: "malaka", password: "1234")
          </p>
        </React.Fragment>
      )}
      {error && <p className={styles.error}>{error}</p>}
      <div className={styles.inputGroup}>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className={styles.loginButton} onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;



