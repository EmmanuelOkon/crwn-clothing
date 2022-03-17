import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepages/homepage.components';


function HatsPage() {
  return (
    <div>
    <h1>HATS PAGE</h1>
  </div>

  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/hats' element={<HatsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
