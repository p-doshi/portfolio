
import React from "react";
import "./projects.css";
import { FaGithub } from "react-icons/fa";

const Myprojects = () => {
    const portwebimagepath = process.env.PUBLIC_URL + '/portwebsite.png'
    const udemydemoimagepath = process.env.PUBLIC_URL + '/udemydemo.png'
    const nanosatelliteimagepath = process.env.PUBLIC_URL + '/nanosatellite.jpeg'
  return (
   <div className="outerbox">
        <div className="projectimage">
            <img src={portwebimagepath} alt="This Website"/>
        </div>
        <div className="project">
            <h2>Portfolio Website  <a href="https://github.com/p-doshi/portfolio" target="_blank"><FaGithub /></a></h2>
            <p>
            I am proud to present my portfolio website, a testament to 
            my skills in web development. Crafted entirely by me, this 
            website showcases my proficiency in using cutting-edge 
            technologies such as React, JavaScript, and CSS. Through a 
            seamless and visually engaging user interface, I've highlighted 
            my projects, skills, and experiences. The combination of these 
            technologies not only reflects my technical expertise but also 
            underscores my commitment to creating dynamic and responsive 
            web solutions. As you navigate through the site, you'll experience 
            firsthand the synergy of React components, JavaScript functionality, 
            and meticulously styled CSS, providing a comprehensive view of
            my capabilities as a web developer.
            </p>
        </div>
        <div className="project">
            <h2>UdemyDemo  <a href="https://github.com/p-doshi/udemyDemo" target="_blank"><FaGithub /></a></h2>
            <p>
            My friend and I are excited to embark on a collaborative 
            journey to develop an innovative online learning platform, 
            drawing inspiration from the likes of Udemy. In this venture, 
            I am taking the lead in crafting the frontend using React, 
            ensuring a user-friendly and dynamic interface that enhances 
            the overall learning experience. Simultaneously, my talented 
            friend is channeling their expertise into the backend using 
            Node.js, building the robust infrastructure that powers our 
            platform. Together, we aim to create a seamless environment 
            where instructors can effortlessly upload educational content, 
            and students can engage in enriching courses, fostering a 
            collaborative and interactive learning community. This project 
            is a testament to our combined skills and dedication to making 
            education accessible and engaging for all.
            </p>
        </div>
        <div className="projectimage">
            <img src={udemydemoimagepath} alt="This Website"/>
        </div>
        <div className="projectimage">
            <img src={nanosatelliteimagepath} alt="This Website"/>
        </div>
        <div className="project">
            <h2>Project MANTIS  <a href="https://github.com/jacklangille/DSS-MANTIS-OBC-AI" target="_blank"><FaGithub /></a></h2>
            <p>
            I am thrilled to be an integral part of the AI team within 
            my university's esteemed Space Society, i.e the Dalhousie 
            Space Systems Society. In this exciting venture, I am 
            contributing my skills to develop a cutting-edge machine 
            learning model for the upcoming nanosatellite project named 
            MANTIS, scheduled for launch in 2025. Leveraging my 
            proficiency in the Python language, I am actively engaged 
            in crafting and fine-tuning algorithms that will enhance 
            MANTIS's functionality and performance, showcasing the 
            pivotal role that artificial intelligence plays in advancing 
            space exploration and technology. Being a member of this 
            visionary project allows me to apply my passion for AI to 
            real-world challenges, making strides towards the future of 
            space exploration. 
            </p>
        </div>
   </div>
  );
};

export default Myprojects;
