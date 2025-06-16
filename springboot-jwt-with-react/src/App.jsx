import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AuthService from './services/AuthService';
import Login from './components/Login';
import Register from './components/Register'; // <-- Import the Register component

import Profile from './components/Profile';
import Home from './components/Home';
import BoardUser from './components/BoardUser'; // Assuming this component exists and you want to use it

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
    setCurrentUser(undefined); // State update for immediate UI reflection
  };

  return (
    <Router>
      {/* Navigation Bar Styling with Tailwind */}
      <nav className="bg-gradient-to-r from-indigo-600 to-purple-700 p-4 shadow-lg flex justify-between items-center text-white sticky top-0 z-50">
        {/* Logo/Home Link */}
        <Link to="/" className="text-xl font-bold hover:text-indigo-200 transition-colors duration-300">
          My App
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          {currentUser ? (
            <>
              {/* Authenticated User Links */}
              <Link
                to="/profile"
                className="text-white hover:text-indigo-200 font-medium transition-colors duration-300"
              >
                Profile
              </Link>
              <Link
                to="/user"
                className="text-white hover:text-indigo-200 font-medium transition-colors duration-300"
              >
                User Board
              </Link>
              <a
                href="/login"
                onClick={logOut}
                className="text-white bg-red-500 hover:bg-red-600 px-4 py-1 rounded-md transition-colors duration-300 font-medium"
              >
                Logout
              </a>
            </>
          ) : (
            <>
              {/* Guest User Link */}
              <Link
                to="/login"
                className="text-white bg-indigo-500 hover:bg-indigo-400 px-4 py-1 rounded-md transition-colors duration-300 font-medium"
              >
                Login
              </Link>

              {/* Add the Register link here */}
              <Link
                to="/register"
                className="text-white bg-purple-500 hover:bg-purple-600 px-4 py-1 rounded-md transition-colors duration-300 font-medium"
              >
                Register
              </Link>

            </>
          )}
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="container mx-auto p-4 md:p-8 mt-4"> {/* `mx-auto` centers the content, `p-4 md:p-8` for responsive padding */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /> {/* <-- Add this new Route */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/user" element={<BoardUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
