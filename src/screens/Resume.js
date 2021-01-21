import '../stylesheet/resume.css';
import ResumeBody from '../component/ResumeBody';
import ResumeAside from '../component/ResumeAside';
import useFetch from '../utils/useFetch';

const Resume = () => {

    const { data: cv, isPending: p3, error: e2 } = useFetch('/cv');

    return (
        <div id="resume">
            <h1 id="proj">RESUME</h1>
            <hr id="underline" /> 
            <section className="resume-main">
            <ResumeBody/>
            <ResumeAside/>
            </section>
            <hr id="underline3" />
            <span>
             To see more about my works download my CV
              <a href={cv} id="link1" target="_blank" rel="noopener noreferrer"> &nbsp; &#62; &#62;</a>
              <a href={cv}  id="link2" className="sample" target="_blank" rel="noopener noreferrer"> DOWNLOAD CV</a>
            </span>
        </div> 
    );
}

export default Resume;