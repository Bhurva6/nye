import React from 'react';
import ResolutionBox from './ResolutionBox';

const AllResolutions = ({ resolutions }) => {
  // Check if resolutions is defined and is an array
  if (!resolutions || !Array.isArray(resolutions)) {
    return null;
  }

  return (
    <div className="container">
      {resolutions.map((res, index) => (
        <ResolutionBox key={index} resolution={res.resolution} name={res.name} />
      ))}
    </div>
  );
};

export default AllResolutions;
