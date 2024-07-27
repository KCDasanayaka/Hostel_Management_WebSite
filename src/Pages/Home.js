import React from "react";
import './home.css';
import logo from '../assets/susl_logo_transparent1.png';
import NavBar from "./Components/NavBar";

const Home = () => (
  <div className="home">
    <NavBar/>
    <div className="homeContent">
      <div className="homeTop">
        <img src={logo} alt="SUSL Logo" /> 
      </div>
      <div className="homeChanges">
        <div className="homeLeft">
          <h2>Welcome to Sabaragamuwa University Hostel Management system</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="homeCenter">
          <button className="login_home">
            Register
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
