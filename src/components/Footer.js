import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareXTwitter, faSquareFacebook, faSquareInstagram, faSquareGithub } from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
    return (
        <div className="footer">
            <a id="twitter" href="https://www.twitter.com">
                <FontAwesomeIcon icon={faSquareXTwitter} className="footer-buttons"/>
            </a>
            <a id="facebook" href="https://www.facebook.com">
                <FontAwesomeIcon icon={faSquareFacebook} className="footer-buttons"/>
            </a>
            <a id="instagram" href="https://www.instagram.com">
                <FontAwesomeIcon icon={faSquareInstagram} className="footer-buttons"/>
            </a>
            <a id="github" href="https://www.github.com/HemantAntony">
                <FontAwesomeIcon icon={faSquareGithub} className="footer-buttons"/>
            </a>
        </div>
    )
}