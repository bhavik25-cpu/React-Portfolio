import '../stylesheet/project.css';
import ProjectComponent from '../component/ProjectComponent';
import { Link } from 'react-router-dom';

const Project = () => {
    return (
        <div>
            <h1 className="proj">LATEST PROJECTS</h1>
            <hr className="underline" />
            <ProjectComponent />
            <ProjectComponent />
            <ProjectComponent />
            <h5 className="continue">To see more or discuss possible work let's talk
              <Link to="/contact"> &nbsp; &#62; &#62;</Link>
              <Link to="/contact"  className="sample"> Let&lsquo;s Talk</Link>
            </h5>

        </div>
    );
}

export default Project;