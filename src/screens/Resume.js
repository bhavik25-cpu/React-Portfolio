import '../stylesheet/resume.css';
import ResumeBody from '../component/ResumeBody';
import ResumeAside from '../component/ResumeAside';

const Resume = () => {
    return (
        <div id="resume">
            <h1 id="proj">RESUME</h1>
            <hr id="underline" /> 
            <section className="resume-main">
            <ResumeBody/>
            <ResumeAside/>
            </section>
        </div>
    );
}

export default Resume;