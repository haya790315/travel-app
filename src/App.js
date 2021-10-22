import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useAuthContext } from "./AuthContext";
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
    <Router>
      <div className="wrapper">
        <Navbar openLoginHandler={openLoginHandler} />
        {openLoginForm && <LoginForm closeLoginHandler={closeLoginHandler} />}
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/products/:number">
            <Description />
          </Route>
          <Route path="/sign-up">
            <SignUp />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
