import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, LoginForm } from "./components";
import { Home,SignUp, Description, ErrorPage, CartPage } from "./page";
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
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/products/:number">
            <Description />
          </Route>
          <Route path="/sign-up">
            <SignUp />
          </Route>
          <Route exact path="/cart-page">
            <CartPage />
          </Route>
          <Route path="/aboard">
          </Route>
          <Route path="/cart">
          <CartPage />
          </Route>
          <Route path="/error">
            <ErrorPage />
          </Route>
          {/* <Route to="/">
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
