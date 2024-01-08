import React from 'react'
import { Link } from 'react-router-dom';
import BrandLogo from '../../Components/Logos/BrandLogo/BrandLogo';
import BrandTitle from '../../Components/BrandTitle/BrandTitle';
import Facebook from '../../Components/SocialIcons/Facebook';
import Twitter from '../../Components/SocialIcons/Twitter';
import Gmail from '../../Components/SocialIcons/Gmail';
import Github from '../../Components/SocialIcons/Github';
import InboxImage from '../../img/get-update-inbox.png';
import Port1 from '../../img/Port1.png';
import Port2 from '../../img/prot2.png';
import Port3 from '../../img/port3.png';
import Port4 from '../../img/port4.jpg';
const LandingPage = () => {
    return (
        <>
            <div className='landing-page'>
                <div className="landing-container">
                    <div className='less-width'>
                        <div className='nav-and-title'>
                            <div>
                                <BrandLogo />
                                <BrandTitle />
                            </div>
                            <div className='header-nav'>
                                <div className='navbar'>
                                    <Link className='nav-link' to={"/"}>Home</Link>
                                    <Link className='nav-link' to={"/about-us"}>About Us</Link>
                                    <Link className='nav-link' to={"/pricing-and-plans"}>Pricing</Link>
                                    <Link className='nav-link' to={"/features"}>Features</Link>
                                    <Link className='nav-link' to={"/contact"}>Contact</Link>
                                </div>
                            </div>
                        </div>
                        <div className='hero'>
                            <div className='left-hero-container'>
                                <div>
                                    <p className='text-hero-primary'>Get Started</p>
                                    <h1 className='text-hero-heading-text'>Your <span style={{ color: "#FF7272" }}>EXPENSE</span> advisor<br />
                                        AIl in one place</h1>
                                    <p className='text-hero-secondary'>
                                        Get in, It will track Your Expense Automatically<br />
                                        Simply Add expenses then see what wonder is comming.
                                    </p>
                                    <div className='landing-page-btn'>
                                        <Link to={"/signin"} style={{
                                            textDecoration: 'none',
                                            color: "#FFF"
                                        }}>
                                            <button className='btnland btn-clr-signin'>
                                                Signin
                                            </button>
                                        </Link>
                                        <Link to={"/signup"} style={{
                                            textDecoration: 'none',
                                            color: "#FFF"
                                        }}>
                                            <button className='btnland btn-clr-signup' >
                                                Signup
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/* Left Hero End */}
                            <div className='right-hero-container'>
                                2
                            </div>
                        </div>

                    </div>
                </div>
                <div className='app-features'>
                    <div className='app-features-container'>
                        <p className='text-heading'>Features</p>
                        <h2 className='app-features-secondary-heading'>Pages of Websites Works</h2>
                        <div class="grid-container">
                            <div class="grid-item">
                                <img src={Port4} alt='hi' className='image-size' />
                            </div>
                            <div class="grid-item">
                                <img src={Port4} alt='hi' className='image-size' />
                            </div>
                            <div class="grid-item">
                                <img src={Port4} alt='hi' className='image-size' />
                            </div>
                            <div class="grid-item">
                                <img src={Port4} alt='hi' className='image-size' />
                            </div>
                            <div class="grid-item">
                                <img src={Port4} alt='hi' className='image-size' />
                            </div>
                            <div class="grid-item">
                                <img src={Port4} alt='hi' className='image-size' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='get-latest-update'>
                    <div className='get-latest-container'>
                        <div className='get-latest-img-input-box'>
                            <img src={InboxImage} alt="Get Latest Inbox" className='inbox-image' />
                            <div className='get-latest-app-input-box'>
                                <div className='latest-input-box'>
                                    <p className='join-community'>Join our community</p>
                                    <h1 className='latest-app-header'>Get latest app updates<br />
                                        right at your inbox</h1>

                                    <div className='subscribe-form-container'>
                                        <form>
                                            <label>
                                                <input className='subs-input-box' type="text" placeholder="Enter Your Email Id..." />
                                                <button className='subsbutton'>Subscribe</button>
                                            </label>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='app-available'>
                    <div className='app-availabe-container'>
                        <h1 className='section-header'>App Is Available For Free On<br /> Google Play & App Store</h1>
                        <p className='section-secondary-text'>We'll help you achieve your marketing & business goals</p>
                        <div className='btn-grp-center'>
                            <div className='landing-page-btn-footer'>
                                <button className='btnland btn-clr-signin appstorecolor'>Apple Store</button>
                                <button className='btnland btn-clr-signup playstore' >Google Play</button>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className='footer'>
                    <div className='brand-logo-title'>
                        <BrandLogo />
                        <BrandTitle />
                    </div>
                    <p>We'll help you achieve Your personal & business goals</p>
                    <div className='navbar'>
                        <Link className='nav-link' to={"/"}>Home</Link>
                        <Link className='nav-link' to={"/about-us"}>About Us</Link>
                        <Link className='nav-link' to={"/pricing-and-plans"}>Pricing</Link>
                        <Link className='nav-link' to={"/features"}>Features</Link>
                        <Link className='nav-link' to={"/contact"}>Contact</Link>
                    </div>
                    <div className='social-icons'>
                        <div class="flex-align-center gap10">
                            <Facebook />
                            <Twitter />
                            <Gmail />
                            <Github />
                        </div>
                    </div>
                    <p className='footer-Copyright'>© 2024 Designed and Developed By <strong>ButterflyTech</strong>. All Rights Reserved</p>
                </footer>

            </div >
        </>
    )
}

export default LandingPage
