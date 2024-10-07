// src/components/CtaSectionS2/CtaSectionS2.jsx

import React from 'react';
import callPhoto2 from '../../images/callPhoto2.jpg';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Ensure Font Awesome is imported

const CtaSectionS2 = () => {
    return (
        <section className="cta_section_s2">
            <div className="container">
                <div className="cta_wrapper">
                    <div className="content">
                        {/* <div className="icon">
                            <i className="flaticon-phone-call"></i>
                        </div> */}

                        {/* WhatsApp Video Call Section */}
                        <div className="row">
                            <div className="col col-xl-3 col-lg-6 col-md-6 col-12">
                                <div className="office-info-item">
                                    <div className="office-info-icon">
                                        {/* WhatsApp Video Call Icon */}
                                        <a
                                            href="https://api.whatsapp.com/send?phone=254704076578&text=Hi,%20I'd%20like%20to%20start%20a%20video%20call%20with%20you."
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="whatsapp-video-icon"
                                        >
                                            <i className="fas fa-video fa-2x"></i> {/* Increased Size */}
                                        </a>
                                    </div>
                                    <div className="office-info-text">
                                        <h2>WhatsApp Video Call</h2>
                                        <a
                                            href="https://api.whatsapp.com/send?phone=254704076578&text=Hi,%20I'd%20like%20to%20start%20a%20video%20call%20with%20you."
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="whatsapp-button"
                                        >
                                            Start WhatsApp Chat
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div> {/* End of row */}
                    </div>

                    <div className="shape-icon">
                        <i className="flaticon-24-7"></i>
                    </div>
                    <div className="image">
                        <img src={callPhoto2} alt="Call illustration" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CtaSectionS2;
