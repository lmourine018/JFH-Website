import React from 'react';
import CountUp from 'react-countup';

const FunFact = (props) => {

    return (
        <section className={"" + props.hclass} >
            <div className="container">
                <div className="row">
                    <div className="col col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="item">
                            <i className="flaticon-doctor"></i>
                            <h3><CountUp end={20} enableScrollSpy />+</h3>
                            <p>Qualified Doctors</p>
                        </div>
                    </div>
                    <div className="col col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="item">
                            <i className="flaticon-businesswoman"></i>
                            <h3><CountUp end={1000} enableScrollSpy />+</h3>
                            <p> Satisfied Clients</p>
                        </div>
                    </div>
                    <div className="col col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="item">
                            <i className="flaticon-award"></i>
                            <h3><CountUp end={5} enableScrollSpy />+</h3>
                            <p>Award Winning</p>
                        </div>
                    </div>
                    <div className="col col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="item">
                            <i className="flaticon-customer-care"></i>
                            <h3><CountUp end={24} enableScrollSpy />/<CountUp end={7} enableScrollSpy /></h3>
                            <p>Client Support</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default FunFact;