import React from 'react';
import './register.css';
import NavBar from './Components/NavBar';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate=useNavigate();
  const handleRegister = ()=>{
      navigate("/Pages/DetailPage")
  }

  return (
    <div className="Register" >
      <NavBar />
      <div className="homeContent" >
        <div className='registerHead'>
          <h1>REGISTER</h1>
          <p>Add your correct information for each point</p>
        </div>
        <div className='registerForm'>
          <div className='registerImage'></div>
          <div className='registerInputs'>
            <label>Name With Initials</label>
            <input type="text"></input>
            <div className='registerDouble'>
              <div className='registerCOntainer'>
                <label>Address</label>
                <input type="text"></input>
              </div>
              <div className='registerCOntainer'>
                <label>Index Number</label>
                <input type="text"></input>
              </div>
            </div>
            <div className='registerDouble'>
              <div className='registerCOntainer'>
                <label>Faculty</label>
                <input type="text"></input>
              </div>
              <div className='registerCOntainer'>
                <label>Academic Year</label>
                <input type="text"></input>
              </div>
            </div>
            <div className='registerDouble'>
              <div className='registerCOntainer'>
                <label>BirthDay</label>
                <input type="date" style={{color:'white', filter:'revert(100%)'}}></input>
              </div>
              <div className='registerCOntainer'>
                <label>Department</label>
                <input type="text"></input>
              </div>
            </div>
            <div className='registerDouble'>
              <div className='registerCOntainer'>
                <label>Phone Number</label>
                <input type="text"></input>
              </div>
              <div className='registerCOntainer'>
                <label>NIC Number</label>
                <input type="text"></input>
              </div>
            </div>
            <div className='registerButton' onClick={handleRegister}>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register;
