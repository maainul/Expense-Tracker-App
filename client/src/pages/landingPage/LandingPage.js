import React from 'react'
import { Link } from 'react-router-dom';
import BrandLogo from 'components/logos/brandLogo/BrandLogo';
import BrandTitle from 'components/brandTitle/BrandTitle';
import Facebook from 'components/socialIcons/Facebook';
import Twitter from 'components/socialIcons/Twitter';
import Gmail from 'components/socialIcons/Gmail';
import Github from 'components/socialIcons/Github';
import InboxImage from 'img/get-update-inbox.png';

import FirstAppScreen from 'img/h1.png'
import SecondAppScreen from 'img/h2.png'
const LandingPage = () => {
    return (
        <>
            <div className='landing-page'>
                <div className="landing-container">
                    <div className='less-width'>
                        <div className='nav-and-title'>
                            <div className='logo-title'>
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
                        {/* ********************************** HERO ****************************************************************** */}
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

                                    <div className='landing-page-btn'>
                                        <Link to={"/signin"} style={{
                                            textDecoration: 'none',
                                            color: "#FFF"
                                        }}>
                                            <button className='btndown downloadbtn'>
                                                <div className='downbtndes'>

                                                    <i className='bx bxl-apple biggericon'></i>
                                                    <p>Download on the <br />APP Store</p>
                                                </div>
                                            </button>
                                        </Link>
                                        <Link to={"/signup"} style={{
                                            textDecoration: 'none',
                                            color: "#FFF"
                                        }}>
                                            <button className='btndown downloadbtn' >
                                                <div className='downbtndes'>
                                                    <i className='bx bxl-play-store biggericon2' ></i>
                                                    <p> GET IT ON <br />Google Play</p>
                                                </div>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/* Left Hero End */}
                            <div className='right-hero-container'>
                                <div className='img-div'>
                                    <img src={FirstAppScreen} alt='first' />
                                    <img src={SecondAppScreen} alt='first' className='secondImge' />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {/* ********************************** APP FEATURES ****************************************************************** */}

                <div className='app-features'>
                    <div className='app-features-container'>
                        <div className='left-app-feat'>
                            <div>
                                <p className='text-heading'><span style={{
                                    fontSize: "32px"
                                }}><span style={{
                                    color: "rgb(115, 103, 240)",

                                }}>
                                        Expense
                                        <span
                                            style={{
                                                color: "#ff7272"
                                            }}
                                        >
                                            Tracker
                                        </span>
                                    </span> <span
                                        style={{
                                            color: "rgb(9, 154, 151)"
                                        }}
                                    >Applicaiton</span></span> </p>
                                <h2 className='app-features-secondary-heading'>Present your app in a <br /> beautiful and elegant way.</h2>
                                <p className='app-feat-sec'>
                                    White iPhone Mockup Templates. A collection of three mockups showing an<br />
                                    iPhone on a dark leather seat. High resolution PSD files, each coming with a<br />
                                    smart object.
                                </p>
                            </div>

                            <div className='grid-3'>
                                <div className='grid-card'>
                                    <div className='content'>
                                        <i className='bx bx-envelope app-icon-design'></i>
                                        <p className='card-title-text'>Minimal Design</p>
                                        <p style={{
                                            color: ' #566a7f'
                                        }}>
                                            Generate Lorem Ipsum place holder
                                            text for use in your Explore
                                        </p>
                                    </div>
                                </div>
                                <div className='grid-card'>
                                    <i className='bx bx-grid-small app-icon-design' ></i>
                                    <p className='card-title-text'>Best Material</p>
                                    <p style={{
                                        color: ' #566a7f'
                                    }}>
                                        Generate Lorem Ipsum place holder
                                        text for use in your Explore
                                    </p>
                                </div>
                                <div className='grid-card'>
                                    <i className='bx bx-devices app-icon-design'></i>
                                    <p className='card-title-text'>Responsive Design</p>
                                    <p style={{
                                        color: ' #566a7f'
                                    }}>
                                        Generate Lorem Ipsum place holder
                                        text for use in your Explore
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* **************************************************** TECH STACK **************************************************** */}
                <div style={{
                    display: 'grid',
                    height: '600px',
                    gridTemplateColumns: 'auto auto',
                    gap: '20px'
                }}>
                    <div>
                        {/* <div className='tech-stack'>
                            <div>
                                <div>
                                    <p className='tech-stack-primary'>Tech Stack</p>
                                    <h2 className='app-features-secondary-heading'>All Modern Technology <br /> are use</h2>
                                    <p className='app-feat-sec'>
                                        White iPhone Mockup Templates. A collection of three mockups showing an<br />
                                        iPhone on a dark leather seat. High resolution PSD files, each coming with a<br />
                                        smart object.
                                    </p>
                                </div>
                            </div>
                            <div className='icon-flex'>
                                <i className='bx bxl-react tech-stack-icon' style={{ color: "#5ED3F3" }}></i>
                                <i className='bx bxl-mongodb tech-stack-icon' style={{ color: "#00684A" }}></i>
                                <i className='bx bxl-css3 tech-stack-icon' style={{ color: "#214CE5" }}></i>
                                <i className='bx bxl-nodejs tech-stack-icon' style={{ color: "#026e00" }} ></i>
                                <i className='bx bxl-html5 tech-stack-icon' style={{ color: "#DD4B25" }} ></i>
                                <i className='bx bxl-docker tech-stack-icon' style={{ color: "#1D63ED" }} ></i>
                            </div>
                        </div> */}
                    </div>
                    <div>
                        <div className='tech-stack'>
                            <div>
                                <div>
                                    <p className='tech-stack-primary'>Tech Stack</p>
                                    <h2 className='app-features-secondary-heading'>All Modern Technology <br /> are use</h2>
                                    <p className='app-feat-sec'>
                                        White iPhone Mockup Templates. A collection of three mockups showing an<br />
                                        iPhone on a dark leather seat. High resolution PSD files, each coming with a<br />
                                        smart object.
                                    </p>
                                </div>
                            </div>
                            <div className='icon-flex'>
                                <i className='bx bxl-react tech-stack-icon' style={{ color: "#5ED3F3" }} ></i>
                                <i className='bx bxl-mongodb tech-stack-icon' style={{ color: "#00684A" }}></i>
                                <i className='bx bxl-css3 tech-stack-icon' style={{ color: "#214CE5" }}></i>
                                <i className='bx bxl-nodejs tech-stack-icon' style={{ color: "#026e00" }} ></i>
                                <i className='bx bxl-html5 tech-stack-icon' style={{ color: "#DD4B25" }} ></i>
                                <i className='bx bxl-docker tech-stack-icon' style={{ color: "#1D63ED" }} ></i>
                            </div>
                        </div>
                    </div>
                </div>
                {/* **************************************************** Latest Update ************************************************ */}
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
                {/* **************************************************** Latest Update ************************************************ */}
                <div className='app-available'>
                    <div className='app-availabe-container'>
                        <h1 className='section-header'>App Is Available For Free On<br /> Google Play & App Store</h1>
                        <p className='section-secondary-text'>We'll help you achieve your marketing & business goals</p>

                        <div className='landing-page-btn'>
                            <div className='landing-btn-grp'>


                                <Link to={"/signin"} style={{
                                    textDecoration: 'none',
                                    color: "#FFF"
                                }}>
                                    <button className='btndown downloadbtn'>
                                        <div className='downbtndes'>

                                            <i className='bx bxl-apple biggericon'></i>
                                            <p>Download on the <br />APP Store</p>
                                        </div>
                                    </button>
                                </Link>
                                <Link to={"/signup"} style={{
                                    textDecoration: 'none',
                                    color: "#FFF"
                                }}>
                                    <button className='btndown downloadbtn' >
                                        <div className='downbtndes'>
                                            <i className='bx bxl-play-store biggericon2' ></i>
                                            <p> GET IT ON <br />Google Play</p>
                                        </div>
                                    </button>
                                </Link>
                            </div>
                            {/* <button className='btnland btn-clr-signin appstorecolor'>Apple Store</button>
                                <button className='btnland btn-clr-signup playstore' >Google Play</button> */}
                        </div>
                    </div>
                </div>

                {/* **************************************************** Footer ******************************************************* */}
                <footer className='footer'>
                    <div>
                        <div className='logo-title'>
                            <BrandLogo />
                            <BrandTitle />
                        </div>
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
                        <div className="flex-align-center gap10">
                            <Facebook />
                            <Twitter />
                            <Gmail />
                            <Github />
                        </div>
                    </div>
                </footer>
                <div className='footer-last'>
                    <p className='footer-Copyright'>© 2024 Designed and Developed By <strong>ButterflyTech</strong>. All Rights Reserved</p>
                </div>
            </div >
        </>
    )
}

export default LandingPage
