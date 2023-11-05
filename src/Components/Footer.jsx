import {AiOutlinePhone, AiOutlineMail, AiFillTwitterCircle, AiFillInstagram} from "react-icons/ai";
import {CiLocationOn} from "react-icons/ci";
import {SiFacebook, SiLinkedin} from "react-icons/si";
import logo from "../assets/logo.png"

function Footer(){
    return (
        <div className="footer">
            <div className="footer-box company">
                {/* <p>SkyShop</p> */}
                <img src={logo} className="h-12" />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore 
                    magna aliqua
                </p>
                <ul className="social-links">
                    <li> <SiFacebook fontSize="2.4rem" cursor="pointer" color="rgba(19, 129, 233, 0.881)" /> </li>
                    <li> <AiFillTwitterCircle fontSize="2.6rem" cursor="pointer" color="rgba(19, 129, 233, 0.881)" /> </li>
                    <li> <AiFillInstagram fontSize="2.5rem" cursor="pointer" color="rgba(236, 86, 45, 0.815)" /> </li>
                    <li> <SiLinkedin fontSize="2.2rem" cursor="pointer" color="rgba(19, 129, 233, 0.881)" /> </li>
                </ul>
            </div>
            <div className="footer-box about">
                <p> About </p>
                <ul className="list-item">
                    <li>About Us</li>
                    <li>Corporate Info</li>
                    <li>Our Stories</li>
                    <li>Careers</li>
                    <li>Press</li>
                </ul>
            </div>

            <div className="footer-box help">
                <p> Help </p>
                <ul className="list-item">
                    <li>Payments</li>
                    <li>Shipping</li>
                    <li>Cancellation & Returns</li>
                    <li>FAQ</li>
                </ul>
            </div>

            <div className="footer-box contact">
                <p> Contact Us </p>
                <ul className="contact-details">
                    <li>
                        <AiOutlinePhone fontSize="1.5rem" />
                        <span>+91 330 63456751</span>
                    </li>
                    <li>
                        <AiOutlineMail fontSize="1.5rem" />
                        <span>example@gmail.com</span>
                    </li>
                    <li>
                        <CiLocationOn fontSize="1.5rem" />
                        <span>Hyderabad, India</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;