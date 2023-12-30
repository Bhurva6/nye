import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../App.js'; // Import your Firebase configuration

const InputForm = () => {
  const [text, setText] = useState('');
  const [isPosted, setIsPosted] = useState(false);
  //const [name, setName] = useState('');

  const handlePost = async () => {
    if (text) {
        
      // Add the document to Firestore
      try {
        
        const docRef = await addDoc(collection(db, 'resolutions'), {
          resolution: text,
          //name,
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
// the cursor is not aligning at the top of the text input box, it's in the middle
  return (
    <div >
        <div style={{
            textAlign:"center",
            fontSize: 50,
            fontWeight:"bold",
            color:"white",
            paddingBottom:50,

        }}>
            Hi, "name" !
        </div>
        <div style={{
            textAlign:"center",
            paddingRight:40,
            paddingLeft:40,
            marginBottom:40,
            fontWeight:'bold'

        }}>This is an anonymous website to put in your "new years goal" for 2024 that you are going to set for yourself and so will millions of others that you can check out too. This is where the world will put their silly, personal (not reccomended) and cool things that they want to do in 2024. Happy New Years :) </div>
      <input
  type="text"
  placeholder="Enter resolution (max 100 words)"
  value={text}
  onChange={(e) => setText(e.target.value)}
  style={{
    width: '900px',
    height: '250px',
    padding: '10px',
    border: '0px solid transparent',
    borderRadius: '5px',
    borderColor: 'black',
    boxSizing: 'border-box',
    margin: 'auto',
    display: 'block',
    position: 'relative',
    textAlign: 'left', 
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  }}
/>
<style>
  {`
    input::placeholder {
      text-align: left; /* Align placeholder text to the right */
      direction: rtl;
      position: absolute;
      top: 0;
      right: 0px; /* Adjust right spacing for placeholder */
      padding: 10px;
      width: calc(100% - 20px); 
      height: calc(100% - 20px); 
      box-sizing: border-box;
    }
  `}
</style>

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


//<input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)}/>
