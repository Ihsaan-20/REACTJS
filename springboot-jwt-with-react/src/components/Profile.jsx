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
      // Ensure your user object from login has a 'token' property
      // If your token is inside a 'user' object like { user: { token: '...' } }, adjust this.
      fetchProtectedData(user.token); 
    } else {
      setMessage('Please login to view this page.');
    }
  }, []);

  const fetchProtectedData = (token) => {
    // Protected API endpoint. Make sure this exists in your Spring Boot.
    // Example: A simple endpoint that returns some data if authenticated.
    // Ensure this URL matches your backend's protected endpoint (e.g., in SecurityConfig)
    axios.get('http://localhost:8080/api/me', { 
      headers: {
        Authorization: `Bearer ${token}` // JWT ko Authorization header mein bhejein
      }
    })
    .then(response => {
      // Assuming response.data is like { "role": "ADMIN", "username": "Ihsan" }
      setProtectedData(response.data);
    })
    .catch(error => {
      console.error("Error fetching protected data:", error);
      setMessage("Failed to load protected data. Maybe your token expired or you're not authorized.");
    });
  };

  // Jab tak current user load na ho ya login na ho
  if (!currentUser) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <div className="text-center text-gray-700 text-lg">
          {message || "Loading profile..."}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">User Profile</h2>
        
        {/* User Information Section */}
        <div className="mb-6 border-b pb-4">
          <p className="text-lg text-gray-700 mb-2">
            <span className="font-semibold">Welcome:</span> {currentUser.username}
          </p>
          {currentUser.roles && currentUser.roles.length > 0 && (
            <p className="text-md text-gray-600">
              <span className="font-semibold">Your Roles:</span> {currentUser.roles.join(', ')}
            </p>
          )}
        </div>

        {/* Protected Data Section */}
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Protected Data from API:</h3>
        {protectedData ? (
          <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
            {/* Assuming protectedData is an object like { role: "ADMIN", username: "Ihsan" } */}
            <p className="text-gray-700"><span className="font-medium">Role:</span> {protectedData.role}</p>
            <p className="text-gray-700"><span className="font-medium">Username:</span> {protectedData.username}</p>
            {/* Agar response mein aur properties hain, unko bhi yahan display kar sakte hain */}
          </div>
        ) : (
          <p className="text-gray-600 text-sm">Loading protected data or no data available.</p>
        )}

        {/* Error/Message Display */}
        {message && (
          <p className="mt-6 text-center text-red-600 text-sm font-medium">{message}</p>
        )}
      </div>
    </div>
  );
}

export default Profile;