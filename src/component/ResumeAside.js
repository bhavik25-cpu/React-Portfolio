import '../stylesheet/resume.css';
import { FiAward } from "react-icons/fi";
import { IoLanguageOutline } from "react-icons/io5";

const ResumeAside = () => {
    return (
        <div id="res-aside">
            <div className="element" id="res1">
                <FiAward size='40'/>
                <h3>Skills</h3>
                <hr id="underline2" />
                {/* lang from database */}
                <ul  id="skills">
                    <li>Html/CSS</li>
                </ul>
                {/* lang from database */}
            </div>

            <div className="element" id="res2">
                <IoLanguageOutline size='40'/>
                <h3>Languages</h3>
                <hr id="underline2" />
                {/* lang from database */}
                <ul id="lang">
                    <li>English</li>
                </ul>
                {/* lang from database */}
            </div>
        </div>
    );
}

export default ResumeAside;