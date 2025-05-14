import React, { useState, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import '../styles/Login.css';

const Login = ({ setIsAuthenticated }) => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const { darkMode } = useContext(ThemeContext);

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation
    if (credentials.email === 'doctor@mediconnect.com' && credentials.password === 'password123') {
      setIsAuthenticated(true);
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className={`login-container ${darkMode ? 'dark' : ''}`}>
      <div className="login-card">
        <div className="login-header">
          <h2>MediConnect</h2>
          <p>Doctor Portal</p>
        </div>
        <form onSubmit={handleSubmit}>
          {error && <div className="error-message">{error}</div>}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder='Enter Your E-Mail ID: '
              id="email"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder='Enter Your Password: '
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Sign In
          </button>
        </form>
        <div className="login-footer">
          <p>Forgot password?</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
