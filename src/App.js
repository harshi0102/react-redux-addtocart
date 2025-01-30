import React from 'react';
import './App.css';
import Header from './components/header'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';  // Import Routes and Route
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter

function App() {
  return (
    <Router>  {/* Wrap the entire app inside Router */}
      <Header />
      <Routes>
        {/* Define your routes here */}
        {/* Example Route */}
        <Route path="/" element={<h1>Home Page</h1>} />
        {/* You can add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
