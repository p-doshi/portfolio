import React from "react";
import './home.css';
import QuotesCarousel from "../QuoteCaoursel";
import ProjectsCarousel from "../projectCarousel";
import {FaReact, FaPython, FaCss3} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaJava } from "react-icons/fa6";

const Mainpage = () =>{
    const portimagepath = process.env.PUBLIC_URL + '/portimage.jpg'
    const email = 'parthdoshi135@gmail.comm'
    return(
        <div className="mainpage">
            <div className="imagearea"><img src={portimagepath} alt="Potrait"/></div>
            <div className="description">
                <h2>Undergraduate student at Dalhousie University pursuing a Bachelor
                    in Computer Science.
                </h2>
                <h4>Intro -</h4>
                <p>Hello and welcome to my portfolio! I'm Parth Doshi, a Computer Science student at Dalhousie University, passionate about the ever-evolving world of technology. My journey is shaped by a love for Computer Engineering, with a particular interest in machine learning. Proficient in Java, JavaScript, React, CSS, and Python, I bring a solid technical foundation to the table. But it's not just about the code – my soft skills include Time Management, Attention to Detail, Problem Solving, and Multitasking. Fluent in English, French, and Hindi, I'm ready to contribute to the global tech landscape. Explore my projects and experiences through the navigation bar, and let's connect to discuss exciting opportunities!
                </p>
                Contact : <a href={`mailto:${email}`}> parthdoshi135@gmail.com</a>
            </div>
            <br/>
            <div className="skills">
                <h1><u>Skills:</u></h1>
                <h4><FaJava/> Java</h4>
                <h4><IoLogoJavascript/> JavaScript</h4>
                <h4><FaReact/> React  </h4>
                <h4><FaPython/> Python</h4>
                <h4><FaCss3/> Css</h4>
            </div>
            <div className="topprojects">
                <h1><u>Top Projects</u></h1>
                <ProjectsCarousel/>
                <br/>
            </div>
            
            <div className="carousel">
                <h3>The Anime Corner:</h3>
                <QuotesCarousel/>
            </div>
        </div>
    );
}
 
export default Mainpage;