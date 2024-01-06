import React from "react";
import './home.css';
import QuotesCarousel from "../QuoteCaoursel";


const Homepage = () =>{
    return(
        <div className="mainpage">
            <div className="imagearea"><img src="/portimage.jpg" alt="Potrait"/></div>
            <div className="description">
                <h2>Undergraduate student at Dalhousie University pursuing a Bachelor
                    in Computer Science.
                </h2>
                <h4>Intro -</h4>
                <p>I am currently pursuing a Bachelor's degree in Computer Science at Dalhousie University. My educational journey has been uniquely shaped by a global perspective, having been born in India, spent my formative years in Lagos, Nigeria, and returned to India during my mid-teen years. This diverse background has not only enriched my worldview but has also instilled in me adaptability and resilience. Now, as an undergraduate student in Canada, I am eager to leverage my international experiences to excel in the dynamic field of Computer Science.
                <br/><br/>
                Beyond my academic pursuits, my upbringing has fostered cultural agility and a strong appreciation for diversity. These qualities, coupled with my technical skills, position me to thrive in collaborative and multicultural environments. I am enthusiastic about contributing to innovative projects that transcend geographical boundaries and have a positive impact on the ever-evolving technology landscape.
                <br/><br/>
                As I progress in my studies, I look forward to applying my knowledge and skills in practical settings. Dalhousie University's robust Computer Science program provides an excellent platform for me to further explore my passion for technology and contribute meaningfully to the advancements in the field. I am excited about the opportunities for both academic and professional growth that lie ahead as I navigate the exciting and challenging world of Computer Science.
                </p>
            </div>
            <br/>
            <div className="carousel">
                <h3>The Anime Corner:</h3>
                <QuotesCarousel/>
            </div>
        </div>
    );
};
 
export default Homepage;