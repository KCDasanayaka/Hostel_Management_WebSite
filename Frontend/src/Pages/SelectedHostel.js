import React, { useEffect, useState } from 'react';
import './availableHostel.css';
import NavBar from './Components/NavBar';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../assets/susl_logo_transparent1.png';

function SelectedHostel() {
  const [availableHostels, setAvailableHostels] = useState([]);
  const [filteredHostels, setFilteredHostels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchDepartment, setSearchDepartment] = useState('');
  const [searchAcademicYear, setSearchAcademicYear] = useState('');

  const academic_yearOptions = [
    { value: "19/20", label: "19/20" },
    { value: "20/21", label: "20/21" },
    { value: "21/22", label: "21/22" },
    { value: "22/23", label: "22/23" },
  ];

  useEffect(() => {
    const fetchHostels = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/hostels');
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(`Failed to fetch hostels: ${errorData.error}`);
        }
        const data = await response.json();
        console.log('Fetched hostels:', data);
        setAvailableHostels(data);
        setFilteredHostels(data); // Initially, display all hostels
      } catch (error) {
        console.error('Error fetching hostels:', error);
        toast.error(`Error fetching hostels: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchHostels();
  }, []);

  // Filter the hostels whenever the search criteria change
  useEffect(() => {
    const filtered = availableHostels.filter(hostel => 
      (searchDepartment === '' || hostel.department.toLowerCase().includes(searchDepartment.toLowerCase())) &&
      (searchAcademicYear === '' || hostel.academic_year === searchAcademicYear)
    );
    setFilteredHostels(filtered);
  }, [searchDepartment, searchAcademicYear, availableHostels]);

  if (loading) {
    return <p>Loading hostels...</p>;
  }

  return (
    <div className='Register'>
      <NavBar />
      <div className="homeContent">
        <div className="homeTop">
          <img src={logo} alt="SUSL Logo" />
        </div>
        <div className='AvailableView'>
          <div className='searchBar'>
            <div className='depSearch'>
              <input 
                className='searchBar01'
                placeholder='Add your department'
                value={searchDepartment}
                onChange={(e) => setSearchDepartment(e.target.value)}
              />
            </div>
            <div className='depSearch'>
              <select
                name="academic_year"
                value={searchAcademicYear}
                onChange={(e) => setSearchAcademicYear(e.target.value)}
              >
                <option value="" disabled>Select Academic Year</option>
                {academic_yearOptions.map((academic_year, index) => (
                  <option key={index} value={academic_year.value}>{academic_year.label}</option>
                ))}
              </select>
            </div>
          </div>
          {filteredHostels.length > 0 ? (
            filteredHostels.map((hostel, index) => (
              <div className='availableOne' key={index}>
                <p className='faculty'>{hostel.faculty}</p>
                <p className='department'>{hostel.department}</p>
                <p className='academic-year'>{hostel.academic_year}</p>
                <p className='hostel'>{hostel.hostel_name}</p>
                <p className='room-count'>{hostel.room_count}</p>
              </div>
            ))
          ) : (
            <p>No hostels available.</p>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default SelectedHostel;
