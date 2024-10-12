import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/App.css'; // Optional: Create and import your CSS file
// src/index.js
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css'; // Your custom styles

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App />
  </Router>
);
