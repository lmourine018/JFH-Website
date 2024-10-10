// Contactpage.jsx
import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS
// import '../../sass/page/_contact.scss'; // Updated relative path

const Contactpage = () => {
    return (
        <section className="wpo-contact-pg-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                        <div className="office-info">
                            <div className="row">
                             
                                
                                {/* Email */}
                                <div className="col-lg-6 col-md-6 col-sm-12 col-12 mb-4">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="icon">
                                                <i className="fi flaticon-email"></i>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2>Email Us</h2>
                                            <p><a href="mailto:junctionfamilyhosi@gmail.com">junctionfamilyhosi@gmail.com</a></p>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Call Now */}
                                <div className="col-lg-6 col-md-6 col-sm-12 col-12 mb-4">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="icon">
                                                <i className="fi flaticon-phone-call"></i>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2>Call Now</h2>
                                            <p><a href="tel:+254700668707">+254 700 668707</a></p>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* WhatsApp Video Call */}
                                <div className="col-lg-6 col-md-6 col-sm-12 col-12 mb-4">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="icon">
                                                <i className="fas fa-video"></i> {/* Updated Icon */}
                                            </div>
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
                                   {/* Address */}
                                   <div className="col-lg-6 col-md-6 col-sm-12 col-12 mb-4">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="icon">
                                                <i className="fi flaticon-location-1"></i>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2>Address</h2>
                                            <p>Along Kangundo Road, at Kayole Junction behind Shell Petrol Station</p>
                                        </div>
                                    </div>
                                </div>
                            </div> {/* End of office-info row */}
                            
                            {/* Contact Title */}
                            <div className="wpo-contact-title">
                                <h2>Have Any Questions?</h2>
                                <p>Please drop your question here.</p>
                            </div>
                            
                            {/* Contact Form */}
                            <div className="wpo-contact-form-area">
                                <ContactForm />
                            </div>
                        </div> {/* End of office-info */}
                    </div> {/* End of col-lg-10 */}
                </div> {/* End of row */}
            </div> {/* End of container */}
            
            {/* Contact Map Section */}
            <section className="wpo-contact-map-section">
                <div className="wpo-contact-map">
                    <iframe
                        title='contact-map'
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.429706748186!2d36.91236772496696!3d-1.2574984249705419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f14ee3c518fc5%3A0xea1c0aa9d9b3d297!2sKayole%20Junction!5e0!3m2!1sen!2ske!4v1728022989592!5m2!1sen!2ske"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </section>
        </section>
    );
};

export default Contactpage;
