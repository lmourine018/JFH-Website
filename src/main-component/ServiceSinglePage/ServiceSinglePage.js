// src/pages/ServiceSinglePage.js

import React, { Fragment } from 'react';
import { Link, useParams } from 'react-router-dom';
import Services from '../../api/Services';
import ServiceForm from './ServiceForm'; // Fixed typo from 'ServiceFrom' to 'ServiceForm'
import ServiceSidebar from './sidebar';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import logo from '../../images/logo-2.svg';

const ServiceSinglePage = () => {
    const ClickHandler = () => {
        window.scrollTo(0, 0); // Changed to scroll to top-left corner
    };

    const { slug } = useParams();
    const serviceDetails = Services.find(item => item.slug === slug);

    // Handle case where service is not found
    if (!serviceDetails) {
        return (
            <Fragment>
                <Navbar Logo={logo} hclass={'wpo-site-header wpo-site-header-s2'} />
                <PageTitle pageTitle="Service Not Found" pagesub={'Service Single'} />
                <section className="service_single section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center">
                                <h2>Service Not Found</h2>
                                <p>The service you are looking for does not exist.</p>
                                <Link to="/services" className="theme-btn">Back to Services</Link>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer hclass={'wpo-site-footer_s2'} />
                <Scrollbar />
            </Fragment>
        );
    }

    return (
        <Fragment>
            <Navbar Logo={logo} hclass={'wpo-site-header wpo-site-header-s2'} />
            <PageTitle pageTitle={serviceDetails.title} pagesub={'Service Single'} />
            <section className="service_single section-padding">
                <div className="container">
                    <div className="row g-0">
                        <div className="col-lg-8 col-12 service_content">
                            <div>
                                {/* Primary Image */}
                                {serviceDetails.simage && (
                                    <img src={serviceDetails.simage} alt={serviceDetails.title} />
                                )}
                                <h2>{serviceDetails.title}</h2>
                                {/* Service Description */}
                                <p>{serviceDetails.description}</p>
                                {/* Additional Service Content */}
                                {serviceDetails.additionalContent && (
                                    <p>{serviceDetails.additionalContent}</p>
                                )}
                            </div>

                            {/* Additional Images */}
                            {serviceDetails.images && serviceDetails.images.length > 0 && (
                                <div className="row">
                                    {serviceDetails.images.map((image, index) => (
                                        <div className="col-lg-6 col-12" key={index}>
                                            <img src={image} alt={`${serviceDetails.title} ${index + 1}`} />
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Capabilities Section */}
                            {serviceDetails.capabilities && serviceDetails.capabilities.length > 0 && (
                                <div>
                                    <h3>Our Capabilities</h3>
                                    <p>{serviceDetails.capabilitiesDescription}</p>
                                    <ul>
                                        {serviceDetails.capabilities.map((capability, index) => (
                                            <li key={index}>{capability}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Approach Section */}
                            {serviceDetails.approach && (
                                <div>
                                    <h3>Our Approach</h3>
                                    <p>{serviceDetails.approach}</p>
                                </div>
                            )}

                            {/* Related Services */}
                            {serviceDetails.related && serviceDetails.related.length > 0 && (
                                <div className="other-service">
                                    <h3>Related Services</h3>
                                    <div className="row">
                                        {Services.filter(item => serviceDetails.related.includes(item.slug))
                                            .map((relatedService, index) => (
                                                <div className="col-lg-4 col-md-6 col-12" key={index}>
                                                    <div className="service_card">
                                                        <div className="icon">
                                                            <i className={relatedService.icon}></i>
                                                        </div>
                                                        <div className="content">
                                                            <h2>{relatedService.title}</h2>
                                                            <p>{relatedService.description}</p>
                                                            <Link onClick={ClickHandler} to={`/service-single/${relatedService.slug}`}>
                                                                <i className="flaticon-right-arrow"></i>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                    </div>
                                </div>
                            )}

                            {/* Call to Action Form */}
                            <div className="cta_form_s2">
                                <div className="title">
                                    <h3>Make An Appointment</h3>
                                    <p>Get in touch with us to see how we can help you with your needs.</p>
                                </div>
                                <ServiceForm />
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="col-lg-4 col-12">
                            <ServiceSidebar />
                        </div>
                    </div>
                </div>
            </section>
            <Footer hclass={'wpo-site-footer_s2'} />
            <Scrollbar />
        </Fragment>
    );
};

export default ServiceSinglePage;
