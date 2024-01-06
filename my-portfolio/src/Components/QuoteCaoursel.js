import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const QuotesCarousel = () => {
    const settings = {
        showArrows: true,
        showStatus: false,
        showThumbs: false,
        dynamicHeight: false, 
        emulateTouch: true,
        useKeyboardArrows: true,
        centerMode: true,
        showIndicators: false,
        centerSlidePercentage: 100,
    }
  return (
    <Carousel {...settings}>
     
       <div>
            <p>"Wake up to reality. Nothing ever goes as planned in this world. The longer you live, the more you realize that only pain, suffering, and futility exist in this reality."" — Madara Uchiha.</p>
       </div>
       <div>
            <p>“THOSE WHO FORGIVE THEMSELVES, AND ARE ABLE TO ACCEPT THEIR TRUE NATURE… THEY ARE THE STRONG ONES!” – ITACHI UCHIHA</p>
       </div>
       <div>
            <p>“Music speaks louder than words.”― Arima Kousei</p>
       </div>
     
   </Carousel>
  );
};
export default QuotesCarousel;