import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home.jsx';
import './index.css'; // This is where your Tailwind CSS directives are imported

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
);