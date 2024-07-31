import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Register from './Pages/Register';
import DetailPage from './Pages/DetailPage';
import RoomSelection from './Pages/RoomSelection';
import './App.css';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for react-toastify
import { ToastContainer } from 'react-toastify'; // Import the ToastContainer

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/Pages/Home' element={<Home />} />
          <Route path='/Pages/Login' element={<Login />} />
          <Route path='/Pages/Signup' element={<Signup />} />
          <Route path='/Pages/Register' element={<Register />} />
          <Route path='/Pages/DetailPage' element={<DetailPage />} />
          <Route path='/Pages/RoomSelection' element={<RoomSelection />} />
        </Routes>
      </Router>
      <ToastContainer /> {/* Add the ToastContainer here */}
    </div>
  );
}

export default App;
