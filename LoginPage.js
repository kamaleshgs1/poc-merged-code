import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Logintable.css';

const LoginPage = () => {
  const users = {
    manufacturer: { username: 'manufactureruser', password: 'password' },
    wholesaler: { username: 'wholesaleruser', password: 'wholesalerpassword' },
    retailer: { username: 'retaileruser', password: 'retailerpassword' },
    consumer: { username: 'consumeruser', password: 'consumerpassword' },
  };

  const [username, setUsername] = useState('');
  const [userRole, setUserRole] = useState('manufacturer');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleUserRoleChange = (e) => {
    setUserRole(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const navigate = useNavigate();

  const handleLogin = () => {
    if (users[userRole] && password === users[userRole].password) {
      navigate('/InputPage'); 
    } else {
      console.log('Invalid credentials');
    }
  };

  const forgotPassword = () => {
    // Implementation for handling forgotten passwords
  };

  return (
    <div className="page-container"> 
    <div className="container"> 
      <div className="logo"> 
        <img 
          src="https://www.gs1india.org/wp-content/uploads/2022/06/logo-600x402-1-600x402.png" 
          alt="DataKart" 
        /> 
      </div> 

      <div className="login-container"> 
        <div className="login-form"> 
          <div className="login-heading">DataKart Login</div>
    <form onSubmit={handleLogin}>
    <div className="form-group"> 
                <label htmlFor="userRole">User Role:</label> 
                <select 
                  id="userRole" 
                  name="userRole" 
                  required 
                  value={userRole} 
                  onChange={handleUserRoleChange} 
                > 
                  <option value="manufacturer">Manufacturer</option> 
                  <option value="wholesaler">Wholesaler</option> 
                  <option value="retailer">Retailer</option> 
                  <option value="consumer">Consumer</option> 
                </select> 
              </div> 
 
              <div className="form-group"> 
                <label htmlFor="username">Username:</label> 
                <input 
                  type="text" 
                  id="username" 
                  name="username" 
                  required 
                  value={username} 
                  onChange={handleUsernameChange} 
                /> 
              </div> 
 
              <div className="form-group"> 
                <label htmlFor="password">Password:</label> 
                <input 
                  type="password" 
                  id="password" 
                  name="password" 
                  required 
                  value={password} 
                  onChange={handlePasswordChange} 
                /> 
              </div> 
      <button type="submit">Login</button>
    </form>

    <div className="forgot-password"> 
              <button type="button" onClick={forgotPassword}> 
                Forgot Password 
              </button> 
            </div> 
          </div> 
        </div> 
      </div> 
    </div> 
  ); 
}; 
export default LoginPage;


