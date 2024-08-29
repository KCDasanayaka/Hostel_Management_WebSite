import React from "react";
import './home.css';
import logo from '../assets/susl_logo_transparent1.png';
import NavBar from "./Components/NavBar";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate= useNavigate();
  const handleClickRegister = () =>{
    navigate("/Pages/Register")
  }
   const handleClickMyRoom = () =>{
    navigate("/Pages/RoomSelection")
   }

  return(
    <div className="home">
    <NavBar/>
    <div className="homeContent">
      <div className="homeTop">
        <img src={logo} alt="SUSL Logo" /> 
      </div>
      <div className="homeChanges">
        <div className="homeLeft">
          <h2>Welcome to Sabaragamuwa University Hostel Management system</h2>
          <p>Welcome to Sabaragamuwa University's Hostel Management System, your gateway to seamless accommodation solutions. 
            Designed to simplify the complexities of hostel life, this system offers an intuitive platform for students to easily manage their room allocations, view available hostels, and stay updated on campus housing matters. 
            With a focus on efficiency and convenience, our system ensures a hassle-free experience from registration to room selection, all while fostering a vibrant and well-organized student community. 
            Explore the future of student housing with cutting-edge technology that puts your needs first.</p>
        </div>
        <div className="homeCenter">
          <button className="login_home" onClick={handleClickRegister}>
            Register
          </button>
          <button className="login_home" onClick={handleClickMyRoom}>
            My Room
          </button>
        </div>
      </div>
    </div>
  </div>
  );
  
}

export default Home;
