import React, { Component } from "react";
import SignUp from "../src/components/SignUp/SignUp.js";
import Profile from "../src/components/Profile/Profile.js";

class App extends Component {
  state = {
    data: null,
  };

  componentDidMount() {
    this.callBackendAPI()
      .then((res) => this.setState({ data: res.express }))
      .catch((err) => console.log(err));
  }
  // fetching the GET route from the Express server which matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch("/express_backend");
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  render() {
    return (
      <main>
        <SignUp />
        <Profile />
      </main>
    );
  }
}

export default App;
