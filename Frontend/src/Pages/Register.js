import React, { useState } from 'react';
import './register.css';
import NavBar from './Components/NavBar';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../assets/susl_logo_transparent1.png';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name_with_initials: '',
    email: '',
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
  const [imageName, setImageName] = useState(null);
  const [isImageUploaded, setIsImageUploaded] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    if (file) {
      setImageName(file.name); // Store the image name
      setIsImageUploaded(true); // Set the state to true after the image is uploaded
    }
  };

  const handleRegister = async () => {
    console.log('Sending data:', formData);
    const formDataObj = new FormData();
    for (const key in formData) {
      formDataObj.append(key, formData[key]);
    }
    if (image) {
      formDataObj.append('image', image);
    }

    try {
      const response = await fetch('http://localhost:8000/api/hostel-register', {
        method: 'POST',
        body: formDataObj,
      });

      console.log('Response:', response);

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error Data:', errorData);
        throw new Error('Fetch error');
      }

      const result = await response.json();
      console.log('Result:', result);
      toast.success('Registration successful!');
      navigate('/some-page');
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
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
          <h1>REGISTER</h1>
          <p>Add your correct information for each point</p>
        </div>
        <div className="registerForm">
          <div className="registerImage">
            <label
              htmlFor="imageUpload"
              className={`imageUploadLabel ${isImageUploaded ? 'labelSmall' : ''}`}
            >
              Upload Image
            </label>
            <input
              id="imageUpload"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: 'none' }}
            />
            {imageName && (
              <div className="imageNameContainer">
                <p className="imageName">{imageName}</p>
              </div>
            )}
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
                <label>Department</label>
                <input
                  type="text"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                />
              </div>
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
