// src/components/BoardUser.js
// Example of a component that might fetch user-specific data or require USER role
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AuthService from '../services/AuthService';

const BoardUser = () => {
  const [content, setContent] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (!user || !user.token) {
      setMessage("You need to be logged in to view this content.");
      return;
    }

    axios.get('http://localhost:8080/api/test/user', { // Example: Spring Boot user-specific endpoint
      headers: { Authorization: `Bearer ${user.token}` }
    })
    .then(response => {
      setContent(response.data);
    })
    .catch(error => {
      console.error("Error fetching user board content:", error);
      setMessage("Access Denied or data not found. Check your role or token.");
    });
  }, []);

  return (
    <div>
      <h2>User Board</h2>
      {content ? <p>{content}</p> : <p>{message}</p>}
    </div>
  );
};
export default BoardUser;