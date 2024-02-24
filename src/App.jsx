import { useState } from 'react'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './components/About'
import Landing from './components/Landing'
import Hobbies from './components/Hobbies';
import Navbar from "./components/Navbar"


function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div className="bg-hero">
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;