import React from "react";

import Home from "./Home";
import Login from "./Login";
// import SignUp from "./SignUp";

const App = () => {
  return (
    <div>
      <Home />
      <Login />
      <h4>
        {" "}
        Or <a href="#">Sign Up Here</a>
      </h4>
      <h4>
        {" "}
        <a href="#">Forgot your password?</a>
      </h4>
    </div>
  );
};

export default App;
