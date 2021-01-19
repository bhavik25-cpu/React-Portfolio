
import Home from './screens/Home'
import Contact from './screens/Contact'
import Project from './screens/Project'
import Navbar from './shared/Navbar';
import Footer from './shared/Footer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/project">
            <Project />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
