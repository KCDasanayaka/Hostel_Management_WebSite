import React from "react";
import './login.css';
import logo from '../assets/susl_logo_transparent1.png';
import NavBar from "./Components/NavBar";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();
    const handleSignupClick = () => {
        navigate("/Pages/Login");
    }

    return (
        <div>
            <div className="login">
                <NavBar />
                <div className="homeContent" style={{padding:'5%'}}>
                    <div className="homeTop">
                        <img src={logo} alt="SUSL Logo" />
                    </div>
                    <div className="loginCenter">
                        <h1 style={{fontSize:'60px'}}>Create an Account</h1>
                        <div className="loginForm" style={{maxWidth:'550px'}}>
                            <div className="loginFormLabel" style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                                <div className="signUpPassword">
                                    <label>Username</label>
                                    <input className="loginInput" placeholder="enter your username" /></div>
                                <div className="signUpPassword">    
                                <label>Email</label>
                                <input className="loginInput" placeholder="enter your email" /></div>
                            </div>
                            <div className="loginFormLabel1" style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                                <div className="signUpPassword" style={{display:'flex',flexDirection:'row', alignItems:'flex-start'}}>
                                   <label>Password</label>
                                   <input className="loginInput" placeholder="enter your password" type="password" />   
                                </div>
                                <div className="signUpPassword">
                                  <label>Confirm Password</label>
                                  <input className="loginInput" placeholder="confirm your password" type="password" />  
                                </div>
                                
                            </div>
                            <label>
                                Or Already have an account, Login <span style={{ color: '#FF6B00', cursor: 'pointer' }} onClick={handleSignupClick}>here</span>
                            </label>
                            <button className="login_home">
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
