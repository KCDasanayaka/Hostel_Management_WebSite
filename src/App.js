import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import './App.css';
<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Outfit:wght@100..900&display=swap');
</style>
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/Pages/Home' element={<Home />} />
          <Route path='/Pages/Login' element={<Login/>} />
          <Route path='/Pages/Signup' element={<Signup/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
