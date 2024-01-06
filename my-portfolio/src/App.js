import Navbar from './Components/Navbar';
import Homepage from './Components/pages/home';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Myprojects from './Components/pages/projects';
import './App.css';

function App() {
    return (
        <Router>
       
            <Navbar/>
            <Routes>
                <Route path="./Components/pages/home" exact component={<Homepage/>} />
                <Route path="./Components/pages/projects" component={<Myprojects/>} />
                
            </Routes>
            <Homepage/>
        
        </Router>
    );
}

export default App;