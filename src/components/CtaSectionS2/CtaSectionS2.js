import React from 'react';
import callPhoto2  from '../../images/callPhoto2.jpg'
const CtaSectionS2 = () => {
    return (
        <section className="cta_section_s2">
            <div className="container">
                <div className="cta_wrapper">
                    <div className="content">
                        <div className="icon">
                            <i className="flaticon-phone-call"></i>
                        </div>
                        <div className="text">
                            <h2>Available 24/7</h2>
                            <h3>0700668707</h3>
                        </div>
                    </div>
                    <div className="shape-icon">
                        <i className="flaticon-24-7"></i>
                    </div>
                    <div className="image">
                        <img src={callPhoto2} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CtaSectionS2;