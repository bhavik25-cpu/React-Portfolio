import '../stylesheet/footer.css';
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail, } from "react-icons/io5";
import { GrGithub } from "react-icons/gr";
import { GoPlay } from "react-icons/go";
import { ImLinkedin } from "react-icons/im";
import useFetch from '../utils/useFetch';

const Footer = () => {

    const { data:email, isPending, error } = useFetch('/footer/email');
    const { data: git, isPending: p5, error: e5 } = useFetch('/footer/git');
    const { data: linkindin, isPending: p2, error: e3 } = useFetch('/footer/linkindin');
    const { data: phone, isPending: p4, error: e4 } = useFetch('/footer/ph');

    return (
        <footer>
            <div className="icons">
                <FaPhoneAlt size='35' className="sample" />
                <h6>Call</h6>
                <span> {phone}</span>
            </div>

            <div className="icons">
                <IoMail size='35' className="sample" />
                <h6>Contact</h6>
                <span> {email}</span>
            </div>

            <div className="icons" id="abc">
                <GoPlay size='35' className="sample" />
                <h6>Follow Me</h6>
                <span className="extra">
                    <a href={linkindin} target="_blank" rel="noopener noreferrer"><ImLinkedin size='30' cursor="pointer"/></a>  
                    <a href={git} target="_blank" rel="noopener noreferrer" ><GrGithub size='30' /></a>
                </span>
            </div>


        </footer>
    );
}

export default Footer;