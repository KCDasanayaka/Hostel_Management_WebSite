import './login.css';
import logo from '../assets/susl_logo_transparent1.png';
import NavBar from "./Components/NavBar";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const Login = () => {
    const navigate = useNavigate();
    const [ID, setID] = useState("");  // Using ID for email or Register ID
    const [password, setPassword] = useState("");
  
    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/AdminLogin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: ID, password }),  // Ensure you send the correct data
            });
    
            console.log('Response:', response);  // Log the full response object
    
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Login failed');
            }
    
            const data = await response.json();
            toast.success(data.message);
            localStorage.setItem('user', JSON.stringify(data.user));
            navigate("/Pages/Home");
        } catch (error) {
            console.error('Error:', error);
            toast.error("An error occurred. Please try again.");
        }
    };
    
    return (
        <div className="login">
            <NavBar />
            <div className="homeContent">
                <div className="homeTop">
                    <img src={logo} alt="SUSL Logo" />
                </div>
                <div className="loginCenter">
                    <h1>Welcome Back</h1>
                    <div className="loginForm">
                        <div className="signPassword">
                            <label>Email</label>
                            <input
                                className="loginInput"
                                placeholder="Enter your Email"
                                type="text"  // Corrected the input type to "text"
                                value={ID}
                                onChange={(e) => setID(e.target.value)}
                            />
                        </div>
                        <div className="signPassword">
                            <label>Password</label>
                            <input
                                className="loginInput"
                                placeholder="Enter your password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <label>
                            Or create a new account from <span onClick={() => navigate("/Pages/AdminReg")}>here</span>
                        </label>
                        <button className="login_home" onClick={handleLogin}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
