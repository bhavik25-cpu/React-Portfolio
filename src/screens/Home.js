// import Navbar from '../shared/Navbar';
// import Footer from '../shared/Footer';
import '../stylesheet/home.css';
import Avatar from '../assets/avatar.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>

      <section className="home">
        <img src={Avatar} alt="Avatar" />

        <div className="container">
          <h1>Hello,</h1>
          <h2>a bit about me</h2>

          <div className="side">
            <Link to="/resume" className="sample" id="item1">MY RESUME</Link>
            <Link to="/project" className="sample" id="item2">MY WORK</Link>
            <Link to="/project" className="sample" id="item3">MY SKILLS</Link>
          </div>

          <div className="para">
            <p> To work in an environment which encourages me to
            succeed and grow professionally where I can utilize my skills and knowledge appropriately.
           <br /><br />I have experience in Flutter App Development and ReactJs for more than a year and had completed several projects which are available in my GitHub Repository and had also taken part in Hackathons as App Developer and also completed an internship in app development. I have also experience in Firebase Authentication and can easily connect and make dynamic apps.
           I am also an ML Developer and had worked with the implementation of the ML model in App development.</p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;