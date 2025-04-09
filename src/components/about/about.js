import React from 'react';
import CountUp from 'react-countup';

// Image imports
import aboutImage from '../../images/about.jpeg'; // Renamed to avoid conflict
// Uncomment these if you plan to use the doctors' images in the future
// import Abd1 from '../../images/doctors/1.jpg';
// import Abd2 from '../../images/doctors/2.jpg';
// import Abd3 from '../../images/doctors/3.jpg';
// import Abd4 from '../../images/doctors/4.jpg';

const About = (props) => {
    return (
        <section className={props.hclass}>
            <div className="container">
                <div className="row align-items-center">
                    {/* Left Column - Image and Stats */}
                    <div className="col-lg-6 col-12">
                        <div className="about_left">
                            <div className="image">
                                <img src={aboutImage} alt="About Us" />
                                <span className="round-on"></span>
                                <span className="round-two"></span>
                                {/* <div className="award"> */}
                                    {/* <div className="icon">
                                        <i className="flaticon-cup"></i>
                                    </div> */}
                                    {/* <div className="text">
                                        <h2>
                                            <CountUp end={25} enableScrollSpy />+
                                        </h2>
                                        <p>Years Of Experience</p>
                                    </div> */}
                                {/* </div> */}
                                {/* Uncomment and use if you have doctors' images */}
                                {/* 
                                <div className="doctors">
                                    <ul>
                                        <li><img src={Abd1} alt="Doctor 1" /></li>
                                        <li><img src={Abd2} alt="Doctor 2" /></li>
                                        <li><img src={Abd3} alt="Doctor 3" /></li>
                                        <li><img src={Abd4} alt="Doctor 4" /></li>
                                        <li><span>95+</span></li>
                                    </ul>
                                    <h4>Available Doctors</h4>
                                </div> 
                                */}
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Content */}
                    <div className="col-lg-6 col-12">
                        <div className="content">
                            <h3>Who We Are </h3>
                            <p>
                            Welcome to Junction Family Hospital, where compassionate care meets advanced medicine. Since our establishment
                             in 2022, we've been committed to providing exceptional healthcare to our community. At JFH, your well-being is our top priority, and we strive to create a healing environment where recovery thrives. With a dedicated team of experienced medical professionals and a patient-centered approach, we deliver care that reflects our commitment to excellence.
                              Trust us with your health, and let us be your partner on your journey to wellness.
                            </p>
                            <h3>Our Mission</h3>
                            <p>
                                To provide advanced, accessible, and affordable health care for every member of your family.
                            </p>
                            <h3>Our Vision</h3>
                            <p>
                                To be a leading healthcare provider in the industry.
                            </p>
                            {/* Uncomment and use if you have CEO details */}
                            {/* 
                            <div className="ceo">
                                <div>
                                    <h4>Savannah Nguyen</h4>
                                    <span>CEO & Founder of Madically</span>
                                </div>
                                <div>
                                    <img src={sine} alt="CEO" />
                                </div>
                            </div> 
                            */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
