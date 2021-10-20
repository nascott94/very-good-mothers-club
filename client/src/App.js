import React, { Component } from "react";
import Navbar from "../src/components/Navbar/Navbar.js";
import Home from "../src/pages/Home.js";
import SignUp from "../src/pages/SignUp.js";
import Login from "../src/pages/Login.js";
import Profile from "../src/pages/Profile.js";
import Footer from "../src/components/Footer/Footer.js";

import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Navbar />
          <div className="container">
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/signup">
              <SignUp />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
