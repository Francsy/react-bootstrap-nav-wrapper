import React from 'react';
import { Routes, Route } from 'react-router-dom';

import NavWrapper from './components/NavWrapper';
import { Home, ViteDefault } from './viewsExamples';

import './App.css';

function App() {

  return (
    <>
     <Routes>
      <Route path="/" element={<NavWrapper />}>
        <Route index element={<Home />} />
        <Route path="vite" element={<ViteDefault />} />
      </Route>
    </Routes>
    </>
  )
}

export default App
