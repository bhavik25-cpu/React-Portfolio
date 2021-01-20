import { Link } from 'react-router-dom';
import '../stylesheet/navbar.css';
import useFetch from '../utils/useFetch';

const Navbar = () => {
    const { data, isPending, error } = useFetch('/nav');
    return (
        <nav className='navbar'>
            <div className="my-name">
                <h1>Arijit Mukherjee</h1>
               { data &&  <h2>{data}</h2> }
            </div>


            <ul className="items">
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/resume">RESUME</Link></li>
                <li><Link to="/project">PROJECTS</Link></li>
                <li><Link to="/contact">CONTACT</Link></li>
            </ul>

        </nav>
    );
}

export default Navbar;