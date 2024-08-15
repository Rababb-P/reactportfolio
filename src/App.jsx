import './input.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Landing from './components/Landing';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact'
import Navbar from "./components/Navbar";
import ParticlesComponent from './components/particles';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div className=' webheight bg-blackish'>
        <Navbar />
        <div>
          <ParticlesComponent />
          <Landing />
          <Hobbies />
          <About />
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;