import React, { useEffect, useState } from "react";
import './roomSelection.css';
import logo from '../assets/susl_logo_transparent1.png';
import NavBar from "./Components/NavBar";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RoomSelection = () => {
  const navigate = useNavigate();
  const [roomCount, setRoomCount] = useState(0);
  const [hostelName, setHostelName] = useState('');
  const [numbers, setNumbers] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [indexNumber, setIndexNumber] = useState('');
  const [selectedRoomNumber, setSelectedRoomNumber] = useState(null);

  useEffect(() => {
    const storedRoomCount = localStorage.getItem('room_count');
    const storedHostelName = localStorage.getItem('hostel_name');

    if (storedHostelName) {
      setHostelName(storedHostelName);
    } else {
      toast.error("No hostel name found in local storage");
    }

    if (storedRoomCount) {
      setRoomCount(parseInt(storedRoomCount, 10));
      setNumbers(Array.from({ length: parseInt(storedRoomCount, 10) }, (_, i) => i + 1));
    } else {
      toast.error("No room count found in local storage");
    }
  }, []);

  const handleClick = async (number) => {
    setSelectedRoomNumber(number);

    try {
      const response = await fetch(`http://localhost:8000/api/get-room-users?hostel_name=${hostelName}&room_number=${number}`);
      if (!response.ok) {
        throw new Error('Failed to fetch users for this room');
      }

      const usersInRoom = await response.json();
      setUsers(usersInRoom);
    } catch (error) {
      console.error('Error fetching users:', error);
      toast.error('Error fetching users');
    }

    setShowForm(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/api/register-room', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          hostel_name: hostelName,
          room_number: selectedRoomNumber,
          name_with_initials: name,
          index_number: indexNumber,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Failed to register: ${errorData.error}`);
      }

      const result = await response.json();
      toast.success(result.message);

      // Fetch updated users list for the room
      await handleClick(selectedRoomNumber);

      setName('');
      setIndexNumber('');
      setShowForm(false);
    } catch (error) {
      console.error('Error registering user:', error);
      toast.error(`Error: ${error.message}`);
    }
  };

  return (
    <div className="home">
      <NavBar />
      <div className="homeContent">
        <div className="homeTop">
          <img src={logo} alt="SUSL Logo" />
        </div>
        <div className="RoomSelectionLeft">
          <h2 className="Owner">{hostelName}</h2>
          <h4 className="selectionSub">
            Available rooms: {roomCount} - Select Any Room <span>(each box represents one room)</span>
          </h4>
          
          <div className="container">
            <div className="number-grid">
              {numbers.map((number) => (
                <button
                  key={number}
                  className={`number-item ${number === 6 || number === 9 || number === 11 || number === 16 ? 'outline' : ''}`}
                  onClick={() => handleClick(number)}
                >
                  {number}
                </button>
              ))}
            </div>

            {showForm && (
              <div className="form-section">
                <div className="user-list">
                  {users.map((user, index) => (
                    <div key={index} className="user-item">
                      {user.name_with_initials} <br/>{user.index_number}
                    </div>
                  ))}
                </div>
                <form className="user-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="roomTag" htmlFor="hostelName">Hostel Name</label>
                    <input
                      type="text"
                      id="hostelName"
                      value={hostelName}
                      readOnly
                    />
                  </div>
                  <div className="form-group">
                    <label className="roomTag" htmlFor="name">Name With Initials</label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="roomTag" htmlFor="indexNumber">Index Number</label>
                    <input
                      type="text"
                      id="indexNumber"
                      value={indexNumber}
                      onChange={(e) => setIndexNumber(e.target.value)}
                      required
                    />
                  </div>
                  <button type="submit" className="submit-btn">Submit</button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default RoomSelection;
