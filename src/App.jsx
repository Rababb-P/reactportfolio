import './input.css'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './components/About'
import Landing from './components/Landing'
import Hobbies from './components/Hobbies';
import Navbar from "./components/Navbar"

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div className='bg-hero'>
        <Navbar />
        <div>
        
        <Landing />
        <Hobbies />
        <About />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;