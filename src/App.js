import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar,LoginForm } from "./components";
import { Home ,SignUp} from "./page";
function App() {
  return (
    <div className="wrapper">
      <Router>
        <Navbar />
        {/* <LoginForm /> */}
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route  path="/sign-up">
            <SignUp/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
