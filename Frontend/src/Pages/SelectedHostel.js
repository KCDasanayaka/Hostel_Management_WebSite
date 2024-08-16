import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './availableHostel.css';
import NavBar from './Components/NavBar';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../assets/susl_logo_transparent1.png';

function SelectedHostel() {
  const { department } = useParams(); // Get department from the URL
  const [availableHostels, setAvailableHostels] = useState([]);
  const [loading, setLoading] = useState(true); // Add a loading state

  useEffect(() => {
  console.log('Department:', department);  // Add this to confirm the department value
  
  const fetchHostels = async () => {
    try {
      const response = await fetch(`http://localhost:8000/api/hostels/${department}`);
      if (!response.ok) {
        throw new Error('Failed to fetch hostels');
      }
      const data = await response.json();
      console.log('Fetched hostels:', data);  // Log data to ensure it's being fetched
      setAvailableHostels(data);
    } catch (error) {
      console.error('Error fetching hostels:', error);
      toast.error('Error fetching hostels');
    } finally {
      setLoading(false);
    }
  };

  fetchHostels();
}, [department]);


  if (loading) {
    return <p>Loading hostels...</p>; // Show a loading message while fetching
  }

  return (
    <div className='Register'>
      <NavBar />
      <div className="homeContent">
        <div className="homeTop">
          <img src={logo} alt="SUSL Logo" />
        </div>
        <div className='AvailableView'>
          {availableHostels.length > 0 ? (
            availableHostels.map((hostel, index) => (
              <div className='availableOne' key={index}>
                <p className='faculty'>{hostel.faculty}</p>
                <p className='department'>{hostel.department}</p>
                <p className='academic-year'>{hostel.academic_year}</p>
                <p className='hostel'>{hostel.hostel_name}</p>
                <p className='room-count'>{hostel.room_count}</p>
              </div>
            ))
          ) : (
            <p>No hostels available for this department.</p>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default SelectedHostel;
