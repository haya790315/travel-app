import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, LoginForm } from "./components";
import { Home,SignUp, DescriptionPage, ErrorPage, CartPage,PreHomePage, ReservationPage,AboardPage } from "./page";
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
        <Routes>
          <Route path="/home" element={<Home />}/>
          <Route path="/products/:number" element={<DescriptionPage openLoginHandler={openLoginHandler}/>}/>
          <Route path="/sign-up" element={<SignUp />}/>
          <Route path="/aboard"  element={<AboardPage/>}/>
          <Route path="/reservation"  element={<ReservationPage/>}/>
          <Route path="/cart-page" element={<CartPage />}/>
          <Route path="/*" element={<ErrorPage />}/>
          <Route path="/" element={<PreHomePage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
