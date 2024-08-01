import React, { useState } from 'react';
import './register.css';
import NavBar from './Components/NavBar';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  // State to store form data
  const [formData, setFormData] = useState({
    name_with_initials: '',
    address: '',
    index_number: '',
    faculty: '',
    academic_year: '',
    birthday: '',
    department: '',
    phone_number: '',
    nic_number: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleRegister = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/register-hostel', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        navigate("/Pages/DetailPage");
      } else {
        alert(data.message || 'Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An unexpected error occurred');
    }
  };

  return (
    <div className="Register">
      <NavBar />
      <div className="homeContent">
        <div className='registerHead'>
          <h1>REGISTER</h1>
          <p>Add your correct information for each point</p>
        </div>
        <div className='registerForm'>
          <div className='registerImage'></div>
          <div className='registerInputs'>
            <label>Name With Initials</label>
            <input
              type="text"
              name="name_with_initials"
              value={formData.name_with_initials}
              onChange={handleChange}
            />
            <div className='registerDouble'>
              <div className='registerCOntainer'>
                <label>Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
              <div className='registerCOntainer'>
                <label>Index Number</label>
                <input
                  type="text"
                  name="index_number"
                  value={formData.index_number}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='registerDouble'>
              <div className='registerCOntainer'>
                <label>Faculty</label>
                <input
                  type="text"
                  name="faculty"
                  value={formData.faculty}
                  onChange={handleChange}
                />
              </div>
              <div className='registerCOntainer'>
                <label>Academic Year</label>
                <input
                  type="text"
                  name="academic_year"
                  value={formData.academic_year}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='registerDouble'>
              <div className='registerCOntainer'>
                <label>BirthDay</label>
                <input
                  type="date"
                  name="birthday"
                  value={formData.birthday}
                  onChange={handleChange}
                  style={{ color: 'white', filter: 'revert(100%)' }}
                />
              </div>
              <div className='registerCOntainer'>
                <label>Department</label>
                <input
                  type="text"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='registerDouble'>
              <div className='registerCOntainer'>
                <label>Phone Number</label>
                <input
                  type="text"
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={handleChange}
                />
              </div>
              <div className='registerCOntainer'>
                <label>NIC Number</label>
                <input
                  type="text"
                  name="nic_number"
                  value={formData.nic_number}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='registerButton' onClick={handleRegister}>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
