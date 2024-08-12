import React, { useState } from "react";
import './Signup.css';
import logo from '../assets/susl_logo_transparent1.png';
import NavBar from "./Components/NavBar";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const AdminReg = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(""); // Assuming this is the "Register ID"
  const [email, setEmail] = useState("");
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  const handleAdminSignupClick = () => {
    navigate("/Pages/AdminLogin");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (user && email && pass1 && pass2) {
        if (pass1 !== pass2) {
            setError("Passwords do not match.");
            return;
        }

        fetch('http://localhost:8000/api/Adminregister', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                register_id: user,  // Use 'register_id' key as expected by the backend
                email: email,
                pass1: pass1,
                pass1_confirmation: pass2,
            }),
        })
        .then(async (response) => {  // Correctly pass the response here
            const data = await response.json();
            if (response.ok) {
                setMsg(data.message);
                setError("");
                toast.success(data.message);

                setTimeout(() => {
                    navigate("/Pages/AdminLogin");
                }, 2000);
            } else {
                console.error(data.errors);
                setError(data.errors ? JSON.stringify(data.errors) : "Registration failed.");
                toast.error(data.errors ? JSON.stringify(data.errors) : "Registration failed.");
            }
        })
        .catch(error => {
            console.error('Error:', error);
            setMsg("Error connecting to the server.");
            toast.error("Error connecting to the server.");
        });
    } else {
        setMsg("");
        if (!user) toast.error("Register ID cannot be left blank.");
        else if (!email) toast.error("Email cannot be left blank.");
        else if (!pass1) toast.error("Password cannot be left blank.");
        else if (pass2 !== pass1) toast.error("Passwords do not match.");
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
                  <label>Register ID</label>
                  <input
                    className="loginInput"
                    placeholder="Enter your Register ID"
                    type="text"
                    name="ID"
                    value={user} // Use 'user' state for Register ID
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
                Or already have an account? Login <span onClick={handleAdminSignupClick}>here</span>
              </label>
              <button className="login_home" type="submit">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminReg;
