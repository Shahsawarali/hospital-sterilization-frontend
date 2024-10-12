// LoginPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './LoginPage.css';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [department, setDepartment] = useState('Operation Theater Staff');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (login(username, password, department)) {
      // Redirect based on department
      if (department === 'Operation Theater Staff') {
        navigate('/ot-dashboard');
      } else if (department === 'Counter Staff') {
        navigate('/counter-dashboard');
      } else if (department === 'Sterilization Staff') {
        navigate('/sterilization-dashboard');
      }
    } else {
      setError('Invalid login credentials');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        {error && <div className="error-message">{error}</div>}
        <label>Username/Email:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>Select Department:</label>
        <select value={department} onChange={(e) => setDepartment(e.target.value)}>
          <option>Operation Theater Staff</option>
          <option>Counter Staff</option>
          <option>Sterilization Staff</option>
        </select>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
