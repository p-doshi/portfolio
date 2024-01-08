import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import './projectCarousel.css'
import { Link } from 'react-router-dom';

const ProjectsCarousel = () => {
    const settings = {
        showArrows: true,
        showStatus: false,
        showThumbs: false,
        dynamicHeight: false, 
        emulateTouch: true,
        useKeyboardArrows: true,
        centerMode: true,
        showIndicators: false,
        centerSlidePercentage: 50,
    }
  
  return (
    
    <Carousel {...settings} >
     
       <div className='theproj'>
            <h4>Portfolio Website</h4>
            <p>This entire website has been designed and coded by me. To learn more...</p>
            <Link to='/Components/pages/projects/#portfolio'>Click Here</Link>
       </div>
       <div className='theproj'>
            <h4>Udemy Website</h4>
            <p>My friend and I are building a copy of the website Udemy. To learn more...</p>
            <Link to='/Components/pages/projects/#udemy'>Click Here</Link>
       </div>
       <div className='theproj'>
            <h4>Project MANTIS</h4>
            <p>I am currently a part of an AI team in a satellite launch. To learn more...</p>
            <Link to='/Components/pages/projects/#mantis'>Click Here</Link>
       </div>
     T
   </Carousel>
   
  );
};
export default ProjectsCarousel;