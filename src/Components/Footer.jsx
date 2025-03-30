import { FaGithub, FaEnvelope } from "react-icons/fa";
import "../Styles/Footer.css";

function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <h2>Creado por:</h2>
                <p>Esteban Vásquez Castañeda</p>
                <p>© {new Date().getFullYear()} - Desarrollado con ReactJS</p>
                
                <div className="social-links">
                    <a href="https://github.com/EstebanVC23" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
