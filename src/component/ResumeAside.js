import '../stylesheet/resume.css';
import { FiAward } from "react-icons/fi";
import { IoLanguageOutline } from "react-icons/io5";
import useFetch from '../utils/useFetch';

const ResumeAside = () => {

    const { data: lang, isPending: p1, error: e1 } = useFetch('/resume/languages');
    const { data: skill, isPending: p3, error: e2 } = useFetch('/resume/skill');

    return (
        <div id="res-aside">
            <div className="element" id="res1">
                <FiAward size='40' />
                <h3>Skills</h3>
                <hr id="underline2" />
                {
                    (skill) &&
                    skill.map(item => (
                        <ul id="skills" key={item.id}>
                            <li>{item.title}</li>
                        </ul>
                    ))
                }
            </div>

            <div className="element" id="res2">
                <IoLanguageOutline size='40' />
                <h3>Languages</h3>
                <hr id="underline2" />
               {
                (lang) &&
                lang.map(item => (
                        <ul id="lang" key={item.id}>
                            <li>{item.title}</li>
                        </ul>
                    ))
               }
            </div>
        </div>
    );
}

export default ResumeAside;