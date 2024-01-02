import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../App.js'; // Import your Firebase configuration

const InputForm = ({ name }) => {
  const [text, setText] = useState('');
  const [isPosted, setIsPosted] = useState(false);
  //const [name, setName] = useState('');

  const handlePost = async () => {
    if (text) {
        
      // Add the document to Firestore
      try {
        
        const docRef = await addDoc(collection(db, 'resolutions'), {
          resolution: text,
          name,
        });
        setText('');
        setIsPosted(true);
        setTimeout(() => {
            setIsPosted(false);
          }, 3000);

        // Clear the input fields
        //setName('');
      } catch (e) {
        console.error('Error adding document: ', e);
      }
    }
  };
  return (
    <div >
        <div style={{
            textAlign:"center",
            fontSize: 50,
            fontWeight:"bold",
            color:"white",
            paddingBottom:50,
            textDecoration: 'underline',
        }}>
            Hi, "{name}"!
        </div>
        <div style={{
            textAlign:"center",
            paddingRight:40,
            paddingLeft:40,
            marginBottom:40,
            fontWeight:'bold'

        }}>This is an anonymous website to put in your "new years goal" for 2024 that you are going to set for yourself and so will everyone else on Earth, hence the name that you see above is to protect your identity and be 100% anonymous (we promise) ;) This is where the world will put their silly, personal, professional and absolutely random things that they want to do in 2024. Happy New Years :) </div>
     
      <input
  type="text"
  placeholder="Enter resolution (max 100 words)"
  value={text}
  onChange={(e) => setText(e.target.value)}
  style={{
    width: '800px',
    height:'200px', 
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxSizing: 'border-box',
    textAlign: 'left',
    marginLeft:'350px',
    fontSize:'38px'


  }}
/>




<div style={{paddingBottom:30}}></div>

<button
        style={{
          marginTop: '30px',
          width: '80px',
          height: '40px',
          borderRadius: '5px',
          textAlign: 'center',
          display: 'block',
          margin: '0 auto',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        }}
        onClick={handlePost}
      >
        Post
      </button>
      {isPosted && (
        <div style={{ textAlign: 'center', marginTop: '20px', color: 'green', fontWeight:'bold', fontSize:'24' }}>
          Your resolution is now visible to the world ! 
        </div>
      )}
    </div>
  );
};

export default InputForm;