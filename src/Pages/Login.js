import React from "react";
import './login.css';
import logo from '../assets/susl_logo_transparent1.png';
import NavBar from "./Components/NavBar";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const handleSignupClick = () => {
        navigate("/Pages/Signup");
    }

    return (
        <div>
            <div className="login">
                <NavBar />
                <div className="homeContent">
                    <div className="homeTop">
                        <img src={logo} alt="SUSL Logo" />
                    </div>
                    <div className="loginCenter">
                        <h1>Welcome Back</h1>
                        <div className="loginForm">
                            <div className="loginFormLabel">
                                <label>Email</label>
                                <input className="loginInput" placeholder="enter your email" />
                            </div>
                            <div className="loginFormLabel">
                                <label>Password</label>
                                <input className="loginInput" placeholder="enter your password" type="password" />
                            </div>
                            <label>
                                Or Create new account from <span style={{ color: '#000000', cursor: 'pointer' }} onClick={handleSignupClick}>here</span>
                            </label>
                            <button className="login_home">
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
