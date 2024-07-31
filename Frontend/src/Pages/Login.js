import React, { useState } from 'react';
import './login.css';
import logo from '../assets/susl_logo_transparent1.png';
import NavBar from "./Components/NavBar";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'; // Import toast for notifications

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                toast.success(data.message); // Show success message
                // Redirect or handle success
            } else {
                toast.error(data.message); // Show error message
            }
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
                                placeholder="Enter your email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
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
                            Or create a new account from <span onClick={() => navigate("/Pages/Signup")}>here</span>
                        </label>
                        <button className="login_home" onClick={handleLogin}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
