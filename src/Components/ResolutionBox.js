import React from 'react';

const ResolutionBox = ({ resolution, name }) => {
  return (
    <div className="box">
      <p>{resolution}</p>
      <p>By: {name}</p>
    </div>
  );
};

export default ResolutionBox;
