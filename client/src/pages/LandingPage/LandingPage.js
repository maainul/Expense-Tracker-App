import React from 'react'
import { Link } from 'react-router-dom';
import BrandLogo from '../../Components/Logos/BrandLogo/BrandLogo';
import BrandTitle from '../../Components/BrandTitle/BrandTitle';
import Facebook from '../../Components/SocialIcons/Facebook';
import Twitter from '../../Components/SocialIcons/Twitter';
import Gmail from '../../Components/SocialIcons/Gmail';
import Github from '../../Components/SocialIcons/Github';
import InboxImage from '../../img/get-update-inbox.png';
const LandingPage = () => {
    return (
        <>
            <div className='landing-page'>
                <div className="landing-container">
                    <div className='less-width'>
                        <div className='nav-and-title'>
                            <div className='brand-&-Title'>
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
                                    <h1 className='text-hero-heading-text'>Your fitness advisor<br />
                                        AIl in one place</h1>
                                    <p className='text-hero-secondary'>
                                        When, while lovely valley teems with vapour around meand<br />
                                        meridian sun strikes the upper impenetroble.
                                    </p>
                                    <div className='landing-page-btn'>
                                        <button className='btnland btn-clr-signin'>Signin</button>
                                        <button className='btnland btn-clr-signup' >Signup</button>
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
                <div className='get-latest-update'>
                    <div className='image-and-email-box'>
                        {/* <img src={InboxImage} alt='user' /> */}
                    </div>
                    <div className='get-latest-update-input-box'>
                        <div className='latest-input-header'>
                            <p className='latest-input-text'>Join Our Community</p>
                            <h1>
                                <span className='update-inbox-text'>Get latest app updates<br /> right at your inbox</span>
                            </h1>
                        </div>
                        <div className='get-latest-app-input-box'>
                            <form>
                                <label>
                                    <input type="text" placeholder="Enter Your Email Id..." />
                                    <button>Subscribe</button>
                                </label>
                            </form>


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
            </div>
        </>
    )
}

export default LandingPage
