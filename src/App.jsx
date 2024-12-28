import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import Header from './components/Header';
import Project from './components/Project';
import About from './components/About';
function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Main />} />
        <Route path="/header" element={<Header />} />
        <Route path='/projects' element={<Project/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </Router>
  );
}

export default App;
