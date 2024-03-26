import React from 'react';
import '../cubestyles.css'

const Cube = () => {
  return (
    <div className="container about-page">
      <div className='stage-cube-cont'>
        <div className='cubespinner'>
          <div className='face1'></div>
          <div className='face2'></div>
          <div className='face3'></div>
          <div className='face4'></div>
          <div className='face5'></div>
          <div className='face6'></div>
        </div>
      </div>
    </div>
  );
}

export default Cube;
