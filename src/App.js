import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./components";
import { Home } from "./page";
function App() {
  return (
    <div className="wrapper">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
