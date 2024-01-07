import Navbar from './Components/Navbar';
import Homepage from './Components/pages/home';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Myprojects from './Components/pages/projects';
import AboutMe from './Components/pages/about';
import './App.css';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route index element={<Homepage />} />
                <Route path="/Components/pages/home" element={<Homepage />} />
                <Route path="/Components/pages/projects" element={<Myprojects />} />
                <Route path="/Components/pages/about" element={<AboutMe/>}/>  
            </Routes>
        </Router>
    );
}

export default App;
