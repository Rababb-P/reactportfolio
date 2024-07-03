import './input.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Landing from './components/Landing';
import Hobbies from './components/Hobbies';
import Navbar from "./components/Navbar";
import ParticlesComponent from './components/particles';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div className='w-full webheight bg-blackish //bg-gradient-to-r from-indigo-500 to-blue-600'>
        <Navbar />
        <div>
          <ParticlesComponent />
          <Landing />
          <Hobbies />
          <About />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;