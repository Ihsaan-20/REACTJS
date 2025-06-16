// src/components/Home.js
import React from 'react'; // React import is necessary in each component file

const Home = () => (
  <div className="bg-white p-8 rounded-lg shadow-xl text-center">
    <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Welcome to Your Secure App!</h1>
    <p className="text-lg text-gray-700">Please login to explore protected content and your profile.</p>
    <p className="text-sm text-gray-500 mt-2">Built with React, Vite, Spring Boot & Tailwind CSS</p>
  </div>
);

export default Home;