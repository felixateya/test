import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Skills from './Pages/Skills';
import Works from './Pages/Works';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/About" element={<About/>}></Route>
          <Route path="/Skills" element={<Skills/>}></Route>
          <Route path="/Works" element={<Works/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
