import React from "react";
import './login.css';
import logo from '../assets/susl_logo_transparent1.png';
import NavBar from "./Components/NavBar";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const handleSignupClick = () => {
        navigate("/Pages/Signup");
    }

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
                            <input className="loginInput" placeholder="Enter your email" />
                        </div>
                        <div className="signPassword">
                            <label>Password</label>
                            <input className="loginInput" placeholder="Enter your password" type="password" />
                        </div>
                        <label>
                            Or create a new account from <span onClick={handleSignupClick}>here</span>
                        </label>
                        <button className="login_home">Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
