import React, { useState , useRef} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, LoginForm } from "./components";
import { Home, SignUp, Description,ErrorPage } from "./page";
function App() {
  const [openLoginForm, setOpenLoginForm] = useState(false);
  const openLoginHandler = () => {
    setOpenLoginForm(true);
  };
  const closeLoginHandler = () => {
    setOpenLoginForm(false);
  };
  

  return (
    <div className="wrapper" >
      <Router>
        <Navbar openLoginHandler={openLoginHandler} />
        {openLoginForm && <LoginForm closeLoginHandler={closeLoginHandler} />}
        <Switch>
          <Route exact path="/home" >
            <Home />
          </Route>
          <Route exact path="/products/:number">
            <Description />
          </Route>
          <Route exact path="/sign-up">
            <SignUp />
          </Route>
          <Route path="/error">
            <ErrorPage/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
