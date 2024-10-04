import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MobileMenu from '../MobileMenu/MobileMenu'


import photo2 from '../../images/photo2.jpg';


const Header = (props) => {
    // const [menuActive, setMenuState] = useState(false);
    // const [cartActive, setcartState] = useState(false);

    // const SubmitHandler = (e) => {
    //     e.preventDefault()
    // }

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    // const { carts } = props;


    return (
        <header id="header">
            <div className={"" + props.hclass}>
                <nav className="navigation navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                                <MobileMenu />
                            </div>
                            <div className="col-lg-2 col-md-6 col-6">
                                <div className="navbar-header">
                                    <Link onClick={ClickHandler} className="navbar-brand" to="/home"><img src={photo2}
                                        alt="logo" /></Link>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-1 col-1">
                                <div id="navbar" className="collapse navbar-collapse navigation-holder">
                                    <button className="menu-close"><i className="ti-close"></i></button>
                                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} to="/home">Home</Link>
                                            <ul className="sub-menu">
                                                {/* <li><Link onClick={ClickHandler} to="/home">Home</Link></li> */}
                                                {/* <li><Link onClick={ClickHandler} to="/home-2">Home style 2</Link></li> */}
                                                {/* <li><Link onClick={ClickHandler} to="/home-3">Home style 3</Link></li> */}
                                            </ul>
                                        </li>
                                        <li><Link onClick={ClickHandler} to="/about">About Us</Link></li>
                                        {/* <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} to="#">Pages</Link>
                                            <ul className="sub-menu">
                                                {/* <li><Link onClick={ClickHandler} to="/team">Doctor</Link></li> */}
                                                {/* <li><Link onClick={ClickHandler} to="/team-single/Marlene-Henry">Doctor Single</Link></li> */}
                                                {/* <li><Link onClick={ClickHandler} to="/shop">Shop</Link></li> */}
                                                {/* <li><Link onClick={ClickHandler} to="/shop-single/prayer-mat">Shop Single</Link></li> */}
                                                {/* <li><Link onClick={ClickHandler} to="/cart">Cart</Link></li> */}
                                                {/* <li><Link onClick={ClickHandler} to="/checkout">Checkout</Link></li> */}
                                               {/* <li><Link onClick={ClickHandler} to="/404">404 Error</Link></li> */}
                                                {/* <li><Link onClick={ClickHandler} to="/faq">FAQ</Link></li> */}
                                            {/* </ul> */}
                                        {/* </li> */} 
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} to="/services">Services</Link>
                                            <ul className="sub-menu">
                                                {/* <li><Link onClick={ClickHandler} to="/services">Services</Link></li> */}
                                                {/* <li><Link onClick={ClickHandler} to="/service-single/Dental-Care">Services Single</Link></li> */}
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} to="/project">Portfolio</Link>
                                            <ul className="sub-menu">
                                                {/* <li><Link onClick={ClickHandler} to="/project">Portfolio</Link></li> */}
                                                {/* <li><Link onClick={ClickHandler} to="/project-single/Heart-Institure">Portfolio Single</Link></li> */}
                                            </ul>
                                        </li>
                                        {/* <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} to="#">Blog</Link>
                                            <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} to="/blog">Blog right sidebar</Link></li>
                                                <li><Link onClick={ClickHandler} to="/blog-left-sidebar">Blog left sidebar</Link></li>
                                                <li><Link onClick={ClickHandler} to="/blog-fullwidth">Blog fullwidth</Link></li>
                                                <li className="menu-item-has-children">
                                                    <Link onClick={ClickHandler} to="#">Blog details</Link>
                                                    <ul className="sub-menu">
                                                        <li><Link onClick={ClickHandler} to="/blog-single/Why-Industry-Are-A-Juicy-Target-For">Blog details right sidebar</Link>
                                                        </li>
                                                        <li><Link onClick={ClickHandler} to="/blog-single-left-sidebar/Why-Industry-Are-A-Juicy-Target-For">Blog details left
                                                            sidebar</Link></li>
                                                        <li><Link onClick={ClickHandler} to="/blog-single-fullwidth/Why-Industry-Are-A-Juicy-Target-For">Blog details
                                                            fullwidth</Link></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li> */}
                                        <li><Link onClick={ClickHandler} to="/contact">Contact</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}



export default (Header);