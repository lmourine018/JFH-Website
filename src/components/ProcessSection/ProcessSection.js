import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';

/* image */
import Pross1 from '../../images/work/1.jpg'
import Pross2 from '../../images/work/2.jpg'
import Pross3 from '../../images/work/3.jpg'
import Pross4 from '../../images/work/4.jpg'
import Shape from '../../images/work/shape.svg'

const ProcessSection = (props) => {
    return (
        <section className={"" + props.hclass}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-9 col-12">
                        <SectionTitle title={'Why Choose Us'}/>
                    </div>
                </div>
                <div className="work_wrapper">
                    <div className="row">
                        <div className="col-xl-3 col-lg-6 col-md-6 col-12">
                            <div className="work_card">
                                <div className="image">
                                    <img src={Pross1} alt="" />
                                        <span className="number">01</span>
                                </div>
                                <div className="text">
                                    <h3>Compassionate Care</h3>
                                    <p>Our team of dedicated health care professionals is committed to providing compassionate patient-centered care. 
                                        We treat each patient with respect and empathy, ensuring that 
                                        you feel valued and understood throughout your healthcare journey</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-12">
                            <div className="work_card">
                                <div className="image">
                                    <img src={Pross2} alt="" />
                                        <span className="number">02</span>
                                </div>
                                <div className="text">
                                    <h3>Comprehensive Services</h3>
                                    <p>We offer a full spectrum of medical services, from primary care and specialized clinics to emergency and maternity services.
                                         With everything under one roof,
                                         we simplify your healthcare experience, making it easier for you to receive the care you need.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-12">
                            <div className="work_card">
                                <div className="image">
                                    <img src={Pross3} alt="" />
                                        <span className="number">03</span>
                                </div>
                                <div className="text">
                                    <h3>Convenient Access</h3>
                                    <p>With our Out/Inpatient Department, walk-in services, 
                                        and easy appointment scheduling, accessing care has never been easier. We prioritize your convenience and work to minimize wait times,
                                         so you can focus on what matters most—your health..</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-12">
                            <div className="work_card">
                                <div className="image">
                                    <img src={Pross4} alt="" />
                                        <span className="number">04</span>
                                </div>
                                <div className="text">
                                    <h3>Skilled Professionals</h3>
                                    <p>Our healthcare team consists of highly qualified doctors, nurses, and specialists with extensive experience in their fields. We are committed to continuous education and training,
                                         ensuring you receive the best care based on the latest medical advancements.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shape">
                        <img src={Shape} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;