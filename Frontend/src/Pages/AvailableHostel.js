import React, { useState, useEffect } from 'react';
import './availableHostel.css';
import NavBar from './Components/NavBar';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../assets/susl_logo_transparent1.png';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    faculty: '',
    roomCount: '',
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

  const academic_yearOptions= [
    { value: "19/20", label:"19/20"},
    { value: "20/21", label:"20/21"},
    { value: "21/22", label:"21/22"},
    { value: "22/23", label:"22/23"},
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async () => {
    console.log('Sending data:', formData);

    try {
      const response = await fetch('http://localhost:8000/api/Hostel-Details', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('Response:', response);

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error Data:', errorData);
        throw new Error('Fetch error');
      }

      const result = await response.json();
      console.log('Result:', result);
      toast.success('Hostel list update successful!');
      setAvailableHostels([...availableHostels, result.data]);

      // Reset form data after successful submission
      setFormData({
        faculty: '',
        roomCount: '',
        academic_year: '',
        department: '',
        hostel: '',
      });
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      toast.error(`Error: ${error.message}`);
    }
  };

  const handleDelete = async (department) => {
    try {
      const response = await fetch(`http://localhost:8000/api/Hostel-Details/${department}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete');
      }

      toast.success('Hostel deleted successfully!');
      // Remove the deleted hostel from the availableHostels state
      setAvailableHostels(availableHostels.filter(hostel => hostel.department !== department));
    } catch (error) {
      console.error('Error deleting hostel:', error);
      toast.error('Error deleting hostel');
    }
  };

  useEffect(() => {
    // Fetch existing hostel data when component mounts
    const fetchHostels = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/Hostel-Details');
        const data = await response.json();
        setAvailableHostels(data);
      } catch (error) {
        console.error('Error fetching hostels:', error);
      }
    };

    fetchHostels();
  }, []);

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
            <div className="registerDouble" style={{justifyContent:'center'}}>
              <div className="registerContainer">
                <label>Department</label>
                <input
                  type="text"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                />
              </div>
              <div className="registerContainer">
                <label>Available Room Count</label>
                <input
                  type="text"
                  name="roomCount"
                  value={formData.roomCount}
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
          {availableHostels.map((hostel, index) => (
            <div className='availableOne' key={index}>
              <p className='faculty'>{hostel.faculty}</p>
              <p className='department'>{hostel.department}</p>
              <p className='academic-year'>{hostel.academic_year}</p>
              <p className='hostel'>{hostel.hostel_name}</p>
              <p className='room-count'>{hostel.room_count}</p>
              <button className='availableDelete' onClick={() => handleDelete(hostel.department)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
