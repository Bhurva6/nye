import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import InputForm from './Components/InputForm';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import axios from 'axios';
import AllResolutions from './Components/AllResolutions'; 
import './styles.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/"  style={{ marginRight: '40px' }}>Post Yours</Link>
      <Link to="/resolutions"><span role="img" aria-label="globe">🌍</span> See Others</Link>
    </nav>
  );
};


const firebaseConfig = {
  apiKey: "AIzaSyBNEHmJluP2MzKX8cK7exVH0Px1cInah5I",
  authDomain: "new-year-resolutions-65428.firebaseapp.com",
  projectId: "new-year-resolutions-65428",
  storageBucket: "new-year-resolutions-65428.appspot.com",
  messagingSenderId: "852746778495",
  appId: "1:852746778495:web:8c78a4821cdb5e9b0a0c4a"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const colRef = collection(db, 'resolutions');

const App = () => {
  // Load resolutions from local storage on initial load
  const [resolutions, setResolutions] = useState();
  const [name, setName] = useState(() => {
    // Initialize name from local storage or default value
    return localStorage.getItem('apiName') || '';
  });

  useEffect(() => {
    const fetchDataAndName = async () => {
      try {
        // Fetch data from Firebase
        const snapshot = await getDocs(colRef);
        const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setResolutions(data);
        console.log(data);

        // Fetch name from the external API
        if (!name) {
          const response = await axios.get('https://randomuser.me/api/');
          const apiName = response.data.results[0].name.first;
          console.log('api');
          setName(apiName);
          // Store the name in local storage
          localStorage.setItem('apiName', apiName);
        }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
    };
  
    fetchDataAndName();
  }, [name]);

  return (
    <Router>
      <div>
        <Navbar /> 
        <div style={{ marginTop: '60px' }}> 
          <Routes>
            <Route path="/" element={<InputForm name={name} />} />
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
export { db }
