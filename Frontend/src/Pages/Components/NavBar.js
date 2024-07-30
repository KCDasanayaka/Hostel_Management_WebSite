import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from '../../assets/susl_logo_transparent1.png';
import './NavBar.css';

const NavBar = () => {
  const navigate = useNavigate();

  const handleJoinClick = () => {
    navigate("/Pages/Login");
  };
  const handleHomeBack= () => {
    navigate("/Pages/Home");
  }

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
        <button className="navButton" onClick={handleJoinClick}>Join</button>
      </div>
    </div>
  );
}

export default NavBar;
