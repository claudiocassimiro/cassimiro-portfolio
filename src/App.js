import Login from "./pages/Login";
import { Route, Switch } from "react-router-dom";
import ProvideContext from "./context/ProvideContext";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";

function App() {
  return (
    <ProvideContext >
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/aboutme" component={AboutMe} />
        <Route path="/contacts" component={Contact} />
      </Switch>
    </ProvideContext>
  );
}

export default App;
