import React, { useState, useEffect } from "react";
import './Signup.css';
import logo from '../assets/susl_logo_transparent1.png';
import NavBar from "./Components/NavBar";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  const handleSignupClick = () => {
    navigate("/Pages/Login");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (user && email && pass1 && pass2) {
      fetch('http://localhost:8000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: user,
          email: email,
          pass1: pass1,
          pass1_confirmation: pass2, // Ensure the backend expects this
        }),
      })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'Registration successful') {
          setMsg(data.message);
          setError("");
          toast.success(data.message); // Show success toast

          // Navigate to login page after 2 seconds
          setTimeout(() => {
            navigate("/Pages/Login");
          }, 2000);
        } else if (data.errors) {
          setError(Object.values(data.errors).join(" "));
          setMsg("");
          toast.error(Object.values(data.errors).join(" ")); // Show error toast
        } else {
          setMsg("Registration failed.");
          toast.error("Registration failed."); // Show error toast
        }
      })
      .catch(error => {
        console.error('Error:', error);
        setMsg("Error connecting to the server.");
        toast.error("Error connecting to the server."); // Show error toast
      });
    } else {
      setMsg("");
      if (!user) setError("Username cannot be left blank.");
      else if (!email) setError("Email cannot be left blank.");
      else if (!pass1) setError("Password cannot be left blank.");
      else if (pass2 !== pass1) setError("Passwords do not match.");
    }
  };

  return (
    <div>
      <div className="login">
        <NavBar />
        <div className="homeContent" style={{ padding: '5%' }}>
          <div className="homeTop">
            <img src={logo} alt="SUSL Logo" />
          </div>
          <div className="loginCenter">
            <h1>Create an Account</h1>
            <form className="signupForm" onSubmit={handleFormSubmit}>
              <div className="loginFormLabel1">
                <p className="signupMsg">
                  {msg ? <span className="success">{msg}</span> : <span className="error">{error}</span>}
                </p>
                <div className="signUpPassword">
                  <label>Username</label>
                  <input
                    className="loginInput"
                    placeholder="Enter your username"
                    type="text"
                    name="user"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                  />
                </div>
                <div className="signUpPassword">
                  <label>Email</label>
                  <input
                    className="loginInput"
                    placeholder="Enter your email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="loginFormLabel1">
                <div className="signUpPassword">
                  <label>Password</label>
                  <input
                    className="loginInput"
                    placeholder="Enter your password"
                    type="password"
                    name="pass1"
                    value={pass1}
                    onChange={(e) => setPass1(e.target.value)}
                  />
                </div>
                <div className="signUpPassword">
                  <label>Confirm Password</label>
                  <input
                    className="loginInput"
                    placeholder="Confirm your password"
                    type="password"
                    name="pass2"
                    value={pass2}
                    onChange={(e) => setPass2(e.target.value)}
                  />
                </div>
              </div>
              <label>
                Or already have an account? Login <span onClick={handleSignupClick}>here</span>
              </label>
              <button className="login_home" type="submit">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
