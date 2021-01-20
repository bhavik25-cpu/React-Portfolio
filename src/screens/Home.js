import '../stylesheet/home.css';
import Avatar from '../assets/avatar.jpg';
import { Link } from 'react-router-dom';
import useFetch from '../utils/useFetch';

const Home = () => { 
  const { data, isPending, error } = useFetch('/intro');

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
            {isPending && <div>Loding...</div>}
            {error && <div>{error}</div>}
            <p>
               {data}
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;