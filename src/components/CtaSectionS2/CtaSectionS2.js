// src/components/CtaSectionS2/CtaSectionS2.jsx

import React from 'react';
import callPhoto2 from '../../images/callPhoto2.jpg';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './CtaSectionS2.css';
import SectionTitle from '../SectionTitle/SectionTitle';


const CtaSectionS2 = () => {
    return (
        <section className="cta_section_s2">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-9 col-12">
                        <SectionTitle title={'Talk To Us!'}/>
                    </div>
                </div>
                <div className="cta_wrapper">
                    <div className="cta_inner">
                        <div className="content">
                            <div className="row">
                                <div className="col col-xl-3 col-lg-6 col-md-6 col-12">
                                    <div className="office-info-item">
                                        <div className="whatsapp-section">
                                            <a
                                                href="https://api.whatsapp.com/send?phone=254704076578&text=Hi,%20I'd%20like%20to%20start%20a%20video%20call%20with%20you."
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="whatsapp-video-icon"
                                            >
                                                <i className="fas fa-video fa-3x"></i>
                                            </a>
                                            <h2 className="whatsapp-title"></h2>
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
                            </div>
                        </div>

                        {/* Image pushed to far end */}
                        <div className="image">
                            <img src={callPhoto2} alt="Call illustration" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CtaSectionS2;
