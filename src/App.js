import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import InputForm from './Components/InputForm';
import ResolutionBox from './Components/ResolutionBox';
import AllResolutions from './Components/AllResolutions'; // New component for displaying all resolutions
import './styles.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/resolutions">Resolutions</Link>
    </nav>
  );
};


// ye local storage method hai  - temporary - implement firebase here

const App = () => {
  // Load resolutions from local storage on initial load
  const storedResolutions = JSON.parse(localStorage.getItem('resolutions')) || [];
  const [resolutions, setResolutions] = useState(storedResolutions);

  useEffect(() => {
    // Save resolutions to local storage whenever it changes
    localStorage.setItem('resolutions', JSON.stringify(resolutions));
  }, [resolutions]);

  const addResolution = (newResolution) => {
    setResolutions([...resolutions, newResolution]);
  };

  return (
    <Router>
      <div>
        <Navbar /> 
        <div style={{ marginTop: '60px' }}> 
          <Routes>
            <Route path="/" element={<InputForm addResolution={addResolution} />} />
            <Route
              path="/resolutions"
              element={<AllResolutions resolutions={resolutions} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};


export default App;
