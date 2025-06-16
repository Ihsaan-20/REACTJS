// src/components/Profile.js
import React, { useState, useEffect } from 'react';
import AuthService from '../services/AuthService';
import axios from 'axios'; // Protected data fetch karne ke liye

function Profile() {
  const [currentUser, setCurrentUser] = useState(null);
  const [protectedData, setProtectedData] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
      // Example: Fetching protected data using the token
      fetchProtectedData(user.token); // Assume user object mein 'token' property hai
    } else {
      setMessage('Please login to view this page.');
    }
  }, []);

  const fetchProtectedData = (token) => {
    // Protected API endpoint. Make sure this exists in your Spring Boot.
    // Example: A simple endpoint that returns some data if authenticated.
    axios.get('http://localhost:8080/api/me', { // Aapka protected endpoint
      headers: {
        Authorization: `Bearer ${token}` // JWT ko header mein bhejein
      }
    })
    .then(response => {
      setProtectedData(response.data);
    })
    .catch(error => {
      console.error("Error fetching protected data:", error);
      setMessage("Failed to load protected data. Maybe your token expired or you're not authorized.");
    });
  };


  if (!currentUser) {
    return <div>{message || "Loading profile..."}</div>;
  }

  return (
  <div>
    <h2>Profile Page</h2>
    <p>Welcome, {currentUser.username}!</p>
    {currentUser.roles && (
      <p>Your Roles: {currentUser.roles.join(', ')}</p>
    )}

    <h3>Protected Data:</h3>
    {protectedData ? ( // Check karein ke protectedData maujood hai
      <div>
        {/* Yahan properties ko access karein */}
        <p>Role from API: {protectedData.role}</p>
        <p>Username from API: {protectedData.username}</p>
      </div>
    ) : (
      <p>Loading protected data or no data available.</p>
    )}
    {message && <p style={{ color: 'red' }}>{message}</p>}
  </div>
);
}

export default Profile;