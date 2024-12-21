import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


export default function Footer() {
    return (
        <div>
            <footer className="footer">
                <div className="social-media-links">
                    <FaGithub size={40} className="link1" />
                    <FaTwitter size={40} className="link2"/>
                    <FaLinkedin size={40} className="link3"/>
                </div>
                <p>Portfolio  &copy; 2024. All Rights Reserved</p>

            </footer>
        </div>
    )
}