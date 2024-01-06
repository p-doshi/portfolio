import React from "react";
import './projects.css'

const Myprojects =()=>{
    const slider = document.querySelector('.slider');

    function activate(e) {
        const items = document.querySelectorAll('.item');
        e.target.matches('.next') && slider.append(items[0])
        e.target.matches('.prev') && slider.prepend(items[items.length-1]);
    }

    document.addEventListener('click',activate,false);
    return(
        <>
            <ul className='slider'>
                <li className='item' style={{backgroundImage:'url(/udemydemo.png)'}}>
                <div className='content'>
                    <h2 className='title'>"Lossless Youths"</h2>
                    <p className='description'> Lorem ipsum, dolor sit amet consectetur
                    adipisicing elit. Tempore fuga voluptatum, iure corporis inventore
                    praesentium nisi. Id laboriosam ipsam enim.  </p>
                    <button>Read More</button>
                </div>
                </li>
                <li className='item' style={{backgroundImage: 'url(/nanosatellite.jpeg)'}}>
                <div className='content'>
                    <h2 className='title'>"Estrange Bond"</h2>
                    <p className='description'> Lorem ipsum, dolor sit amet consectetur
                    adipisicing elit. Tempore fuga voluptatum, iure corporis inventore
                    praesentium nisi. Id laboriosam ipsam enim.  </p>
                    <button>Read More</button>
                </div>
                </li>
                <li className='item' style={{backgroundImage: 'url(/atal.jpg)'}}>
                <div className='content'>
                    <h2 className='title'>"The Gate Keeper"</h2>
                    <p className='description'> Lorem ipsum, dolor sit amet consectetur
                    adipisicing elit. Tempore fuga voluptatum, iure corporis inventore
                    praesentium nisi. Id laboriosam ipsam enim.  </p>
                    <button>Read More</button>
                </div>
                </li>
            </ul>
            <nav className='nav'>
                <ion-icon className='btn prev' name="arrow-back-outline"></ion-icon>
                <ion-icon className='btn next' name="arrow-forward-outline"></ion-icon>
            </nav>
        </>
    );
}

export default Myprojects;