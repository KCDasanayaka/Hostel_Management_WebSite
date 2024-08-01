// NavBar.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../../assets/susl_logo_transparent1.png';
import './NavBar.css';

const NavBar = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");

  useEffect(() => {
    // Retrieve user info from local storage
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setUserName(user.name);
    }
  }, []);

  const handleJoinClick = () => {
    if (userName) {
      // Optionally handle user profile or logout logic
    } else {
      navigate("/Pages/Login");
    }
  };

  const handleHomeBack = () => {
    navigate("/Pages/Home");
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate("/Pages/Login");
  };

  return (
    <div className="navBar">
      <div className="leftNavBar">
        <img src={logo} alt="SUSL Logo" className="navLogo" />
        <p onClick={handleHomeBack}>
          <span>Hostel Management System</span><br />
          Sabaragamuwa University of Sri Lanka
        </p>
      </div>
      <div className="rightNavBar">
        <button className="navButton" onClick={handleJoinClick}>
          {userName ? userName : "Join"}
        </button>
      </div>
    </div>
  );
};

export default NavBar;
