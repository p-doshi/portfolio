import React from "react";
import './aboutme.css';

const AboutMe = () => {
    const imageonepath = process.env.PUBLIC_URL + '/image1.jpg'
    const imagetwopath = process.env.PUBLIC_URL + '/image2.jpg'
    const imagethreepath = process.env.PUBLIC_URL + '/image3.jpg'
    const imagefourpath = process.env.PUBLIC_URL + '/image4.jpg'
    const imagefivepath = process.env.PUBLIC_URL + '/image5.jpg'
    const imagesixpath = process.env.PUBLIC_URL + '/image6.jpg'
    const imagesevenpath = process.env.PUBLIC_URL + '/image7.jpg'
    const imageeightpath = process.env.PUBLIC_URL + '/image8.jpg'
    return (
        <div className="outerboxmain">
            <div className="abitaboutme">
                <h1>A bit About Me</h1>
                <p>
                Currently pursuing a Bachelor's degree in Computer Science at Dalhousie University, my academic journey reflects a diverse global perspective. Born in India, I spent my formative years in Lagos, Nigeria, and later returned to India during my mid-teen years. This unique background not only enriched my worldview but also cultivated adaptability and resilience in me.
                <br/><br/>
                As an undergraduate student in Canada, I am enthusiastic about leveraging my international experiences to excel in the dynamic field of Computer Science. Beyond academics, my interests extend to cricket and music, which not only serve as sources of enjoyment but also contribute to my well-rounded perspective.
                <br/><br/>
                My engagement in sports, coupled with strong leadership skills, has played a pivotal role in my personal and professional growth. This is further complemented by my involvement in part-time jobs, where I have honed valuable skills that extend beyond the classroom. I am excited about the opportunities that lie ahead as I navigate the enriching landscape of Computer Science and continue to integrate my diverse experiences into my academic and personal pursuits.
                </p>
            </div>
            <div className="hobbies">
                <h1>Enjoy my photography skills</h1>
            </div>
            <div className="imageone"><img src={imageonepath}/></div>
            <div className="imagetwo"><img src={imagetwopath}/></div>
            <div className="imagethree"><img src={imagethreepath}/></div>
            <div className="imagefour"><img src={imagefourpath}/></div>
            <div className="imagefive"><img src={imagefivepath}/></div>
            <div className="imagesix"><img src={imagesixpath}/></div>
            <div className="imageseven"><img src={imagesevenpath}/></div>
            <div className="imageeight"><img src={imageeightpath}/></div>
        </div>
    );
}

export default AboutMe;