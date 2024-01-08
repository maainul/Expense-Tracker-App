import React from 'react'
import { Link } from 'react-router-dom';
import BrandLogo from '../../Components/Logos/BrandLogo/BrandLogo';
import BrandTitle from '../../Components/BrandTitle/BrandTitle';
import Facebook from '../../Components/SocialIcons/Facebook';
import Twitter from '../../Components/SocialIcons/Twitter';
import Gmail from '../../Components/SocialIcons/Gmail';
import Github from '../../Components/SocialIcons/Github';
import ButtonPrimary from './../../Components/Buttons/ButtonPrimary';

const LandingPage = () => {
    return (
        <>
            <div className='landing-page'>
                <div className='landing-container'>
                    <div className='landing-page-header'>
                        <div className='brand-&-Title'>
                            <BrandLogo />
                            <BrandTitle />
                        </div>
                        <div className='hero'>
                            <div className='left-hero'>
                                <p className='hero-title'>Get Started</p>
                                <h1>Your expense advisor
                                    All in one place</h1>
                                <p className='hero-sub-title'>
                                    When, while lovely valley teems with vapour around meand
                                    meridian sun strikes the upper impenetroble.
                                </p>
                                <div className='button-group'>
                                    <ButtonPrimary title={"Signin"} />
                                    <ButtonPrimary title={"Signup"} />
                                </div>

                            </div>
                            <div className='right-hero'>

                            </div>

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
