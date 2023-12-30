import React from 'react';
import ResolutionBox from './ResolutionBox';

const AllResolutions = ({ resolutions }) => {
    if(!resolutions || resolutions.length == 0){
        return <p>No resolutions yet</p>
    }
    return(
        <div className='container'>
            {resolutions.map((res, index) => (
        <ResolutionBox key={index} resolution={res.resolution} name={res.name} />
      ))}
        </div>
    );
};

export default AllResolutions;


