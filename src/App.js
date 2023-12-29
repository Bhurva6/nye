import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import InputForm from './Components/InputForm';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
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
const firebaseConfig = {
  apiKey: "AIzaSyBbyCdmxeoN8fyE9l89iyCQCJEPvPmI7GU",
  authDomain: "new-year-resolution-21fdd.firebaseapp.com",
  projectId: "new-year-resolution-21fdd",
  storageBucket: "new-year-resolution-21fdd.appspot.com",
  messagingSenderId: "815408232312",
  appId: "1:815408232312:web:19aebdf01c47ceaf227a8d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const colRef = collection(db, 'resolutions');

const App = () => {
  // Load resolutions from local storage on initial load
  const [resolutions, setResolutions] = useState();

  useEffect(() => {
    // Fetch data from Firebase and update state
    const fetchData = async () => {
      try {
        const snapshot = await getDocs(colRef);
        const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setResolutions(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

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
