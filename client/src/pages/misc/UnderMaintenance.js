import React from 'react'
import ButtonPrimary from 'components/buttons/ButtonPrimary'
import Image from 'img/girl-doing-yoga-light.png';

const UnderMaintenance = () => {
    return (
        <div>
            <div style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center"
            }}>
                <h1>Page Not Found :(</h1>
                <p>
                    Oops! 😖 The requested URL was not found on this server.
                </p>
                <ButtonPrimary title={"Back to Home"} url="/" />
                <div>
                    <img src={Image} alt="Page not found " style={{ width: "50%", marginTop: "50px" }} />
                </div>
            </div>
        </div>
    )
}

export default UnderMaintenance