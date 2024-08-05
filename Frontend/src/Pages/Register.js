import React, { useState } from 'react';
import './register.css';
import NavBar from './Components/NavBar';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const navigate = useNavigate();

  
  // State to store form data
  const [formData, setFormData] = useState({
    name_with_initials: '',
    email: '', // Allow email to be manually entered
    address: '',
    index_number: '',
    faculty: '',
    academic_year: '',
    birthday: '',
    department: '',
    phone_number: '',
    nic_number: '',
  });
  const [image, setImage] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle image file selection
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  // Handle form submission
  const handleRegister = async () => {
    // Validation checks
    if (!formData.name_with_initials || !formData.email || !formData.address) {
      toast.error('Please fill in all required fields.');
      return;
    }

    try {
      const formDataToSend = new FormData();
      Object.keys(formData).forEach(key => formDataToSend.append(key, formData[key]));
      
      if (image) {
        formDataToSend.append('image', image);
      }

      const response = await fetch('http://localhost:8000/api/register-hostel', {
        method: 'POST',
        body: formDataToSend, // Send FormData object directly
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Server returned an error:', errorText);
        toast.error(`Error: ${errorText}`);
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Registration successful:', data);
      toast.success('Registration successful!');
      navigate('/success');

    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      toast.error('There was a problem with the fetch operation.');
    }
  };

  return (
    <div className="Register">
      <NavBar />
      <div className="homeContent">
        <div className="registerHead">
          <h1>REGISTER</h1>
          <p>Add your correct information for each point</p>
        </div>
        <div className="registerForm">
          <div className="registerImage">
            <label htmlFor="imageUpload" className="imageUploadLabel">Upload Image</label>
            <input
              id="imageUpload"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: 'none' }}
            />
          </div>
          <div className="registerInputs">
            <div className="registerDouble">
              <div className="registerContainer">
                <label>Name With Initials</label>
                <input
                  type="text"
                  name="name_with_initials"
                  value={formData.name_with_initials}
                  onChange={handleChange}
                />
              </div>
              <div className="registerContainer">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="registerDouble">
              <div className="registerContainer">
                <label>Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
              <div className="registerContainer">
                <label>Index Number</label>
                <input
                  type="text"
                  name="index_number"
                  value={formData.index_number}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="registerDouble">
              <div className="registerContainer">
                <label>Faculty</label>
                <input
                  type="text"
                  name="faculty"
                  value={formData.faculty}
                  onChange={handleChange}
                />
              </div>
              <div className="registerContainer">
                <label>Academic Year</label>
                <input
                  type="text"
                  name="academic_year"
                  value={formData.academic_year}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="registerDouble">
              <div className="registerContainer">
                <label>BirthDay</label>
                <input
                  type="date"
                  name="birthday"
                  value={formData.birthday}
                  onChange={handleChange}
                  style={{ color: 'white', filter: 'revert(100%)' }}
                />
              </div>
              <div className="registerContainer">
                <label>Department</label>
                <input
                  type="text"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="registerDouble">
              <div className="registerContainer">
                <label>Phone Number</label>
                <input
                  type="text"
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={handleChange}
                />
              </div>
              <div className="registerContainer">
                <label>NIC Number</label>
                <input
                  type="text"
                  name="nic_number"
                  value={formData.nic_number}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="registerButton" onClick={handleRegister}>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
