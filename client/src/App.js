import React, { Component } from "react";
import SignUp from "../src/components/SignUp/SignUp.js";
import Profile from "../src/components/Profile/Profile.js";
import Navbar from "../src/components/Navbar/Navbar.js";

class App extends Component {
  render() {
    return (
      <main>
        <Navbar />
        <SignUp />
        <Profile />
      </main>
    );
  }
}

export default App;
