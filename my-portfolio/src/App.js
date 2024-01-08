import Navbar from './Components/Navbar';
import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Myprojects from './Components/pages/projects';
import AboutMe from './Components/pages/aboutme';
import Mainpage from './Components/pages/home';
import './App.css';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/Components/pages/home" element={<Mainpage />} />
                <Route path="/Components/pages/projects" element={<Myprojects />} />
                <Route path="Components/pages/aboutme" element={<AboutMe/>}/> 
                <Route index element={<Mainpage />} /> 
            </Routes>
        </Router>
    );
}

export default App;
