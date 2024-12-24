// src/components/NotFound.js
import React from 'react';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Page Not Found</p>
      <a href="/" className="home-link">Go to Home</a>
    </div>
  );
};

export default NotFound;
