import React, { useEffect, useState } from "react";
import './Signup.css';
import logo from '../assets/susl_logo_transparent1.png';
import NavBar from "./Components/NavBar";
import { useNavigate } from "react-router-dom";

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

  useEffect(()=> {
    setTimeout(function(){
      setMsg("");
    },15000);
  },[msg]);

  const handleInputChange = (e, type) => {
    setError("");
    switch (type) {
      case "user":
        setUser(e.target.value);
        if (e.target.value === "") {
          setError("Username cannot be left blank.");
        }
        break;
      case "email":
        setEmail(e.target.value);
        if (e.target.value === "") {
          setError("Email cannot be left blank.");
        } else if (!/\S+@\S+\.\S+/.test(e.target.value)) {
          setError("Invalid email format.");
        }
        break;
      case "pass1":
        setPass1(e.target.value);
        if (e.target.value === "") {
          setError("Password cannot be left blank.");
        }
        break;
      case "pass2":
        setPass2(e.target.value);
        if (e.target.value === "") {
          setError("Confirm password cannot be left blank.");
        } else if (e.target.value !== pass1) {
          setError("Passwords do not match.");
        }
        break;
      default:
        break;
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!error && user && email && pass1 && pass2 === pass1) {
      setMsg("Account created successfully!");
      setError("");
      // Perform any other necessary actions such as submitting the data to the server.
    } else {
      setMsg("");
      if (!user) setError("Username cannot be left blank.");
      else if (!email) setError("Email cannot be left blank.");
      else if (!pass1) setError("Password cannot be left blank.");
      else if (pass2 !== pass1) setError("Passwords do not match.");
    }
  };

  function handleSubmit(){
    if(user !== "" && email !== ""  && pass1 !== "" && pass2 !== ""){
       setMsg("success");
    }
    else{
      setError("All field are required!");
    }
  }

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
                <p>
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
                    onChange={(e) => handleInputChange(e, "user")}
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
                    onChange={(e) => handleInputChange(e, "email")}
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
                    onChange={(e) => handleInputChange(e, "pass1")}
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
                    onChange={(e) => handleInputChange(e, "pass2")}
                  />
                </div>
              </div>
              <label>
                Or already have an account? Login <span onClick={handleSignupClick}>here</span>
              </label>
              <button 
                className="login_home" 
                type="submit"
                defaultValue="Submit"
                onClick={handleSubmit}>
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
