import React from 'react'
import BrandLogo from 'components/logos/brandLogo/BrandLogo'
import BrandTitle from 'components/brandTitle/BrandTitle'

import Submit from 'components/buttons/Submit'
import VerifyEmailImage from './VerifyEmailImage'

const VerifyEmail = () => {

    return (
        <div className="auth-inner">
            <div className="left-div">
                <div className="brand-logo-text">
                    <BrandLogo />
                    <BrandTitle />
                </div>
                <div className="flex-align-center">
                    <VerifyEmailImage />
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