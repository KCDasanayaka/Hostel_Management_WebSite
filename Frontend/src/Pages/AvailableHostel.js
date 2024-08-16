import React, { useState, useEffect } from 'react';
import './availableHostel.css';
import NavBar from './Components/NavBar';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../assets/susl_logo_transparent1.png';

const Register = () => {
  const [formData, setFormData] = useState({
    faculty: '',
    room_count: '',
    academic_year: '',
    department: '',
    hostel: '',
  });

  const [availableHostels, setAvailableHostels] = useState([]);

  const facultyOptions = [
    { value: "Computing", label: "Computing" },
    { value: "Management", label: "Management" },
    { value: "Agri", label: "Agri" },
    { value: "Applied", label: "Applied" },
    { value: "Tech", label: "Tech" },
    { value: "Social", label: "Social" }
  ];

  const academic_yearOptions = [
    { value: "19/20", label: "19/20" },
    { value: "20/21", label: "20/21" },
    { value: "21/22", label: "21/22" },
    { value: "22/23", label: "22/23" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/Hostel-Details', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        toast.error('Error: ' + (errorData.message || 'Failed to save hostel details'));
        return;
      }

      const result = await response.json();
      toast.success('Hostel details saved successfully!');
      setAvailableHostels([...availableHostels, result.data]);

      setFormData({
        faculty: '',
        room_count: '',
        academic_year: '',
        department: '',
        hostel: '',
      });
    } catch (error) {
      console.error('Error during the fetch operation:', error);
      toast.error(`Error: ${error.message}`);
    }
  };

  const fetchHostels = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/Hostel-Details');
      if (!response.ok) {
        throw new Error('Failed to fetch hostels');
      }
      const data = await response.json();
      setAvailableHostels(data);
    } catch (error) {
      console.error('Error fetching hostels:', error);
      setAvailableHostels([]);  // Set to empty array on error
    }
  };

  useEffect(() => {
    fetchHostels();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/api/Hostel-Details/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const errorData = await response.json();
        toast.error('Error: ' + (errorData.message || 'Failed to delete hostel'));
        return;
      }

      toast.success('Hostel deleted successfully!');
      setAvailableHostels(availableHostels.filter(hostel => hostel.id !== id));
    } catch (error) {
      console.error('Error during the fetch operation:', error);
      toast.error(`Error: ${error.message}`);
    }
  };

  return (
    <div className="Register">
      <NavBar />
      <div className="homeContent">
        <div className="homeTop">
          <img src={logo} alt="SUSL Logo" />
        </div>
        <div className="registerHead">
          <h1>Hostel Details</h1>
          <p>Add current hostel details for each batch</p>
        </div>
        <div className="registerForm">
          <div className="registerInputs">
            <div className="registerDouble">
              <div className="registerContainer">
                <label>Faculty</label>
                <select
                  name="faculty"
                  value={formData.faculty}
                  onChange={handleChange}
                >
                  <option value="" disabled>Select Faculty</option>
                  {facultyOptions.map((faculty, index) => (
                    <option key={index} value={faculty.value}>{faculty.label}</option>
                  ))}
                </select>
              </div>
              <div className="registerContainer">
                <label>Academic Year</label>
                <select
                  name="academic_year"
                  value={formData.academic_year}
                  onChange={handleChange}
                >
                  <option value="" disabled>Select Academic Year</option>
                  {academic_yearOptions.map((academic_year, index) => (
                    <option key={index} value={academic_year.value}>{academic_year.label}</option>
                  ))}
                </select>
              </div>
              <div className="registerContainer">
                <label>Hostel</label>
                <input
                  type="text"
                  name="hostel"
                  value={formData.hostel}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="registerDouble" style={{ justifyContent: 'center' }}>
              <div className="registerContainer">
                <label>Department</label>
                <input
                  type="text"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  style={{ textTransform: 'uppercase' }}
                />
              </div>
              <div className="registerContainer">
                <label>Available Room Count</label>
                <input
                  type="text"
                  name="room_count"
                  value={formData.room_count}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="registerButton" onClick={handleRegister}>
              <button>Submit</button>
            </div>
          </div>
        </div>
        <div className='AvailableView'>
          {availableHostels.map((hostel) => (
            <div className='availableOne' key={hostel.id}>
              <p className='faculty'>{hostel.faculty}</p>
              <p className='department'>{hostel.department}</p>
              <p className='academic-year'>{hostel.academic_year}</p>
              <p className='hostel'>{hostel.hostel_name}</p>
              <p className='room-count'>{hostel.room_count}</p>
              <button className='availableDelete' onClick={() => handleDelete(hostel.id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
