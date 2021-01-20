import '../stylesheet/footer.css';
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail, } from "react-icons/io5";
import { GrGithub } from "react-icons/gr";
import { GoPlay } from "react-icons/go";
import { ImLinkedin } from "react-icons/im";

const Footer = () => {
    return (
        <footer>
            <div className="icons">
                <FaPhoneAlt size='35' className="sample" />
                <h6>Call</h6>
                <span> +91-9232-469-513</span>
            </div>

            <div className="icons">
                <IoMail size='35' className="sample" />
                <h6>Contact</h6>
                <span> ben.arijit@gmail.com</span>
            </div>

            <div className="icons" id="abc">
                <GoPlay size='35' className="sample" />
                <h6>Follow Me</h6>
                <span className="extra">
                    <a href="https://www.linkedin.com/in/arijit-mukherjee-065091190/" target="_blank" rel="noopener noreferrer"><ImLinkedin size='30' cursor="pointer"/></a>  
                    <a href="https://github.com/Arijit123Muk" target="_blank" rel="noopener noreferrer" ><GrGithub size='30' /></a>
                </span>
            </div>


        </footer>
    );
}

export default Footer;