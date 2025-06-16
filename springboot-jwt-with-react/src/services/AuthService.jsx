// src/services/AuthService.js
import axios from 'axios';

// API_URL ko backend ke @RequestMapping("/auth") se match karein
const API_URL = 'http://localhost:8080/auth/'; 

const login = (username, password) => {
  return axios.post(API_URL + 'login', { // Endpoint: http://localhost:8080/auth/login
      username,
      password,
    }
    // `withCredentials: true` ko hata diya gaya hai
    // Kyunki JWT Bearer Token aam tor par `Authorization` header mein bheja jata hai,
    // aur uske liye iski zaroorat nahi hoti.
  )
  .then(response => {
    if (response.data.token) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
  });
};

const logout = () => {
  localStorage.removeItem('user');
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

const register = (username, email, password) => {
  return axios.post(API_URL + 'register', { // Endpoint: http://localhost:8080/auth/register
    username,
    email,
    password,
  });
};

const AuthService = {
  login,
  logout,
  register,
  getCurrentUser,
};

export default AuthService;