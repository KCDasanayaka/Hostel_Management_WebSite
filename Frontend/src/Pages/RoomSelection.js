import React, { useEffect, useState } from "react";
import './roomSelection.css';
import logo from '../assets/susl_logo_transparent1.png';
import NavBar from "./Components/NavBar";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RoomSelection = () => {
  const navigate = useNavigate();
  const [roomCount, setRoomCount] = useState(0); // State to store room count
  const [numbers, setNumbers] = useState([]); // State to store the room numbers
  const [showForm, setShowForm] = useState(false);
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [indexNumber, setIndexNumber] = useState('');

  const storedRoomCount = localStorage.getItem('room_count'); // Move this outside useEffect to use it in multiple places
  const storedHostel = localStorage.getItem('hostel'); // Corrected variable name

  // Retrieve room count from localStorage and set it in the state
  useEffect(() => {
    if (storedRoomCount) {
      const parsedRoomCount = parseInt(storedRoomCount, 10);
      setRoomCount(parsedRoomCount);
      setNumbers(Array.from({ length: parsedRoomCount }, (_, i) => i + 1)); // Generate room numbers based on room count
    } else {
      toast.error("No room count found in local storage");
    }
  }, [storedRoomCount]);

  const handleClickRoom = () => {
    navigate("/Pages/RoomSelection");
  };

  const handleClick = (number) => {
    setShowForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (users.length < 4) {
      setUsers([...users, { name, indexNumber }]);
      setName('');
      setIndexNumber('');
      setShowForm(false);
    } else {
      alert("Maximum 4 users can add their details.");
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
          <h2 className="Owner">{storedHostel}</h2>
          <h4 className="selectionSub">
            Available rooms: {storedRoomCount} - Select Any Room <span>(each box represents one room)</span>
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
                      {user.name} <br/>{user.indexNumber}
                    </div>
                  ))}
                </div>
                <form className="user-form" onSubmit={handleSubmit}>
                  <h2>Add Your Name And Index Number To Complete The Registration</h2>
                  <div className="form-group">
                    <label htmlFor="name">Name With Initials</label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="indexNumber">Index Number</label>
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
