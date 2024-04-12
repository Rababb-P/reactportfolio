import React from 'react';
import '../cubestyles.css'
import hockeystickicon from '../assets/hockeystickicon.svg'
import pythonicon from '../assets/pythonicon.svg'
import reacticon from '../assets/reacticon.svg'
import javaicon from '../assets/javaicon.svg'
import firsticon from '../assets/firsticon.svg'
import papericon from '../assets/papericon.svg'

const Cube = () => {
  return (
    <div className="container about-page">
      <div className='stage-cube-cont'>
        <div className='cubespinner'>

          <div className='face1'>
            <img src={reacticon} alt="reactcon" className=''/>
          </div>

          <div className='face2'>
            <img src={pythonicon} alt="pythcon"/>
          </div>

          <div className='face3'>
            <img src={javaicon} alt="javacon"/>
          </div>

          <div className='face4'>
            <img src={hockeystickicon} alt="stickcon"/>
          </div>

          <div className='face5'>
            <img src={firsticon} alt="firstcon"/>
          </div>

          <div className='face6'>
            <img src={papericon} alt="papercon"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cube;
