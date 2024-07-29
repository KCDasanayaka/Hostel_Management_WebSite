import React from "react";
import './detailPage.css';
import logo from '../assets/susl_logo_transparent1.png';
import NavBar from "./Components/NavBar";
import { useNavigate } from "react-router-dom";

const DetailPage = () => {
  const navigate= useNavigate();
  const handleClickRoom = () =>{
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
        <div className="DetailLeft">
          <h2 className="Owner">Mr. S.A.K.C.Dasanayaka,</h2>
          <ul>
            <li><span>Hostel Name: </span> Venura Hostel</li>
            <li><span>Amout of studets: </span> 112</li>
            <li><span>Time Duration: </span> 6 Month</li>
            <li><span>Amount of rooms: </span> 18</li>
            <li><span>Location: </span> Venura Hostel, Sinharaja Boy's Hostel,Balangoda</li>
          </ul>
          <p>
          You’ve selected the hostel below for the specified time period. To confirm your choice and secure your stay, please click the "Hostel Registration" button above.
          <br/><br/><span style={{fontSize:'13px', lineHeight:'0.5px'}}>
          Important: If you choose not to register, your selection will be removed from the future hostel list. Don’t miss out on securing your preferred accommodation!</span>
          </p>
        </div>
        <div className="DetailCenter">
          <button className="Detail_home" onClick={handleClickRoom}>
            Hostel Registation
          </button>
        </div>
      </div>
    </div>
  </div>
  );
  
}

export default DetailPage;
