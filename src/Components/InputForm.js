import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../App.js'; // Import your Firebase configuration

const InputForm = () => {
  const [text, setText] = useState('');
  const [name, setName] = useState('');

  const handlePost = async () => {
    if (text && name) {
      // Add the document to Firestore
      try {
        const docRef = await addDoc(collection(db, 'resolutions'), {
          resolution: text,
          name,
        });

        // Clear the input fields
        setText('');
        setName('');
      } catch (e) {
        console.error('Error adding document: ', e);
      }
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter resolution (max 100 words)"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handlePost}>Post</button>
    </div>
  );
};

export default InputForm;
