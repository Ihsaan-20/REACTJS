// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AuthService from './services/AuthService';
import Login from './components/Login';
import Profile from './components/Profile';
import Home from './components/Home'; // Simple home page
import BoardUser from './components/BoardUser'; // Example of a user-specific board

function App() {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
    setCurrentUser(undefined); // State update karein
  };

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        {currentUser ? (
          <>
            <Link to="/profile">Profile</Link>
            <Link to="/user">User Board</Link> {/* Example protected board */}
            <a href="/login" onClick={logOut}>Logout</a>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>

      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/user" element={<BoardUser />} /> {/* Example: Requires specific role */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
