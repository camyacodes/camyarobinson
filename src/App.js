import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import NavbarComp from "./components/NavbarComp";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./pages/About";
import Home from "./pages/HomePage/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";

function App() {
  return (
    <Router>
      <div className='App'>
        <NavbarComp></NavbarComp>
        <div className='content'>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/about'>
              <About></About>
            </Route>
            <Route path='/projects'>
              <Projects></Projects>
            </Route>
            <Route path='/contact'>
              <Contact></Contact>
            </Route>
            <Route path='/resume'>
              <Resume></Resume>
            </Route>
          </Switch>
        </div>
      </div>

    </Router>

	);
}

export default App;
