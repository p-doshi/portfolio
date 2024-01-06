import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="parth"><Link to="./pages/home.js">
               <b> Parth Doshi</b></Link>
            </div>
            <div className="projects"><Link to="./pages/projects.js">My Projects</Link></div>
            <div className="about"><Link to="">About Me</Link></div>
            <div className="github"><a href="https://github.com/p-doshi" target="_blank"><FaGithub /></a></div>
            <div className="linkedin"><a href="https://www.linkedin.com/in/parth-doshi-a351bb235" target="_blank"><FaLinkedinIn /></a></div>
            <div className="resume"><a href="" target="_blank">Resume</a></div>
        </div>
    );
}

export default Navbar;