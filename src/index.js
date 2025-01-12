import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';  // Import the Tailwind CSS styles
import App from './App';  // Import the main App component

// Create the root of the React app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component into the DOM
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
