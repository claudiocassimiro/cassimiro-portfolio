import Login from "./pages/Login";
import { Route, Switch } from "react-router-dom";
import ProvideContext from "./context/ProvideContext";
import Home from "./pages/Home";

function App() {
  return (
    <ProvideContext >
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/home" component={Home} />
      </Switch>
    </ProvideContext>
  );
}

export default App;
