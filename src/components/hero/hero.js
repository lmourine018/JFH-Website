import React from 'react';
import { Link } from 'react-router-dom';
import VideoModal from '../ModalVideo/VideoModal';

// image
import Himg1 from '../../images/slider/1.png'
import Hshape from '../../images/slider/shape.svg'
import clearLogo from '../../images/clearLogo.jpeg'; // Import the new image

const ClickHandler = () => {
    window.scrollTo(10, 0);
}


const hero = () => {
    return (
        <section className="hero_section">
            <div className="bg_shape">
                <svg viewBox="0 0 1920 1075" fill="none">
                    <path d="M0 0H1920V1000C1920 1000 1632 619 962 917C292 1215 0 1000 0 1000V0Z" fill="#EBF7FF" />
                </svg>
            </div>
            <div className="content">
                <h2>Welcome to Junction Family Hospital</h2>
                <h3>Your journey to better health starts here</h3>
                <p>Your health is our priority! Our dedicated team of 
                    medical professionals 
                     is here to provide compassionate care and cutting-edge treatments in a warm,
                      healing environment. Whether you're visiting for a routine checkup or specialized care,
                       we are committed to supporting your well-being every step of the way. 
        </p>
                <Link onClick={ClickHandler} className="theme-btn" to="/about">Make
                    Appointment</Link>
            </div>
            <div className="image_content">
               
                <div className="photo">
                    <img src={clearLogo} alt="Hospital" />
                </div>
               
            </div>
        </section>
    );
}

export default hero;