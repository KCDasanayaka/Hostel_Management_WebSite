import React from 'react';
import './register.css';
import NavBar from './Components/NavBar';

const Register = () => {
  return (
      
    <div className="Register">
        <NavBar/>
        <div className="homeContent">
            <div className='registerHead'>
                <h1>Register</h1>
                <p>Add your correct information for each point</p>
            </div>
            <div className='registerForm'>
              <div className='registerImage'>
                
              </div>
              <div className='registerInputs'>
                <label>Name With Initials</label>
                <input ></input>
                <div className='registerDouble'>
                  <div className='registerCOntainer'>
                    <label>Address</label>
                    <input ></input>
                  </div>
                  <div className='registerCOntainer'>
                    <label>Index Number</label>
                    <input ></input>
                  </div>
                </div>
                <div className='registerDouble'>
                  <div className='registerCOntainer'>
                    <label>Faculty</label>
                    <input ></input>
                  </div>
                  <div className='registerCOntainer'>
                    <label>Academic Year</label>
                    <input ></input>
                  </div>
                </div>
                <div className='registerDouble'>
                  <div className='registerCOntainer'>
                    <label>BirthDay</label>
                    <input ></input>
                  </div>
                  <div className='registerCOntainer'>
                    <label>Department</label>
                    <input ></input>
                  </div>
                </div>
                <div className='registerDouble'>
                  <div className='registerCOntainer'>
                    <label>Phone Number</label>
                    <input ></input>
                  </div>
                  <div className='registerCOntainer'>
                    <label>NIC NUmber</label>
                    <input ></input>
                  </div>
                </div>
                <div className='registerButton'>
                  <button>Submit</button>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Register;
