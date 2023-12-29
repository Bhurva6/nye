import React from 'react';
import ResolutionBox from './ResolutionBox';

const AllResolutions = ({ resolutions }) => {
  return (
    <div className="container">
      {resolutions.map((res, index) => (
        <ResolutionBox key={index} resolution={res.text} name={res.name} />
      ))}
    </div>
  );
};

export default AllResolutions;
