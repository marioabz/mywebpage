import React from "react"


function Contact() {
    return(
        <div className="card">
            <h3>Contact Information</h3>
            <p className="card-info">mario.briseno7@gmail.com</p>
            <span>
                <a href="https://www.linkedin.com/in/m7a7b7z7/" target="_blank">
                    <img className="logos linkedin-logo" src="LinkedIn_Logo.svg" />
                </a>

                <a href="https://github.com/marioabz" target="_blank">
                    <img className="logos" src="GitHub_Logo.png" />
                </a>
            </span>
        </div>
    )
}

export default Contact