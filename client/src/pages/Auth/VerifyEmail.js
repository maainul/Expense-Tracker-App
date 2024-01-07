import React, { useState } from 'react'
import BrandLogo from '../../Components/Logos/BrandLogo/BrandLogo'
import BrandTitle from '../../Components/BrandTitle/BrandTitle'
import Image from '../../Components/TwoStepVerImage/TwoStepVerImage'

import Submit from '../../Components/Buttons/Submit'

const VerifyEmail = () => {

    return (
        <div className="auth-inner">
            <div className="left-div">
                <div className="brand-logo-text">
                    <BrandLogo />
                    <BrandTitle />
                </div>
                <div className="flex-align-center">
                    <Image />
                </div>
            </div>
            <div className="right-div">
                <div className="formContainer gap10">
                    <div className="form-header">
                        <h2 class="text-primary">Verify your email ✉️</h2>
                        <p class="text-secondary padddingBottom20">
                            Account activation link sent to your email address: <br /> <strong>hello@pixinvent.com</strong> Please follow the link inside to continue.
                        </p>
                    </div>
                    <form>
                        <Submit title={"Skip for now"} />
                        <p className="text-secondary center">
                            <span>Didn't receive an email?</span>
                            <a
                                className="text-secondary text-deco-color"
                                href={"/signup"}
                            >
                                <span style={{ color: "#7367F0" }} >&nbsp;Resend</span>
                            </a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default VerifyEmail