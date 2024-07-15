import profile from "../images/profile.png"
import { FontAwesomeIcon  } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Main() {
    return (
        <div className="main">
            <img src={profile} alt="Profile" />
            <div className="Title">
                <h1>Hemant Antony</h1>
                <h2>Frontend Developer</h2>
                <h3>hemantantony.com</h3>
            </div>
            <div className="main-buttons">
                <a href="https://www.gmail.com" className="email-button">
                    <FontAwesomeIcon icon={ faEnvelope } className="button-icon"/>
                    Email
                </a>
                <a href="https://www.linkedin.com/in/hemant-antony" className="linkedin-button">
                    <FontAwesomeIcon icon={ faLinkedin } className="button-icon"/>
                    LinkedIn
                </a>
            </div>
            <div className="description">
                <h2>About</h2>
                <p>
                    Hello, I'm Hemant Antony. I'm fueled by my hunger to solve problems in the world
                    and to make the world a better place for everyone.
                </p>
                <h2>Interests</h2>
                <p>
                    I love programming. Building my own application gives immense
                    satisfaction. I also love making music and playing games.
                </p>
            </div>
        </div>
    );
}