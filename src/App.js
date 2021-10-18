import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, LoginForm } from "./components";
import { Home, SignUp, Description } from "./page";
function App() {
  const [openLoginForm, setOpenLoginForm] = useState(false);

  const openLoginHandler = () => {
    setOpenLoginForm(true);
  };
  const closeLoginHandler = () => {
    setOpenLoginForm(false);
  };

  return (
    <div className="wrapper">
      <Router>
        <Navbar openLoginHandler={openLoginHandler} />
        {openLoginForm && <LoginForm closeLoginHandler={closeLoginHandler} />}
        <Switch>
          <Route path="/home" exact>
            <Home />
          </Route>
          <Route path="/home/:number"><Description /></Route>
          <Route path="/sign-up">
            <SignUp />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
