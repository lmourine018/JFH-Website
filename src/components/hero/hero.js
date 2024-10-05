import React from 'react';
import { Link } from 'react-router-dom';
import VideoModal from '../ModalVideo/VideoModal';

// image
import Himg1 from '../../images/slider/1.png'
import Hshape from '../../images/slider/shape.svg'
import outerView from '../../images/outerView.jpeg'; // Import the new image

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
                <h3>Welcome to Junction Family Hospital</h3>
                {/* <h3>Your journey to better health starts here</h3> */}
                <p> Your health and well-being are our top priorities. Our dedicated team of healthcare professionals is here to provide compassionate, patient-centered care. Together, we can ensure a healthier future for you and your family. Thank you for choosing us!

        </p>
                <Link onClick={ClickHandler} className="theme-btn" to="/about">Make
                    Appointment</Link>
            </div>
            <div className="image_content">
               
                <div className="photo">
                    <img src={outerView} alt="Hospital" />
                </div>
               
            </div>
        </section>
    );
}

export default hero;