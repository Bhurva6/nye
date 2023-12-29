import React, { useState } from 'react';

const InputForm = ({ addResolution }) => {
  const [text, setText] = useState('');
  const [name, setName] = useState('');

  const handlePost = () => {
    if (text && name) {
      addResolution({ text, name });
      setText('');
      setName('');
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
