import { useState } from 'react'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './components/About'
import Landing from './components/Landing'
import Navbar from "./components/Navbar"


function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
    <Navbar />

      <div className="bg-hero">
        <div className="">
          <Routes>
            <Route path="/landing" element={<Landing />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;