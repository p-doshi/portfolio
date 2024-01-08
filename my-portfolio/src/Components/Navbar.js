import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const resumepath = process.env.PUBLIC_URL + '/Parth_Doshi_resume.pdf'
    return (
        <div className="navbar">
            <div className="parth"><Link to="/Components/pages/home">
               <b> Parth Doshi</b></Link>
            </div>
            <div className="projects"><Link to="/Components/pages/projects">My Projects</Link></div>
            <div className="about"><Link to="/Components/pages/aboutme">About Me</Link></div>
            <div className="github"><a href="https://github.com/p-doshi" target="_blank"><FaGithub /></a></div>
            <div className="linkedin"><a href="https://www.linkedin.com/in/parth-doshi-a351bb235" target="_blank"><FaLinkedinIn /></a></div>
            <div className="resume"><a href={resumepath} target="_blank" rel="noopener noreferrer">Resume</a></div>
        </div>
    );
}

export default Navbar;