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
    try {
      const formDataToSend = new FormData();
      
      // Append form data
      Object.keys(formData).forEach(key => formDataToSend.append(key, formData[key]));
      
      // Append image file if available
      if (image) {
        formDataToSend.append('image', image);
      }

      const response = await fetch('http://localhost:8000/api/register-hostel', {
        method: 'POST',
        body: formDataToSend, // FormData will handle the content type
      });

      if (!response.ok) {
        // Log response for debugging
        const errorText = await response.text();
        console.error('Server returned an error:', errorText);
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Registration successful:', data);
      // Handle successful registration (e.g., navigate to another page)
      navigate('/success'); // Replace with your success page route

    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
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
          <div className='registerImage'>
            <label htmlFor="imageUpload" className="imageUploadLabel">Upload Image</label>
            <input
              id="imageUpload"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: 'none' }}
            />
          </div>
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
