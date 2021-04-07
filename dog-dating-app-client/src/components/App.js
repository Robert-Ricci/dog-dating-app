import React from "react";

import Home from "./Home";
import Login from "./Login";

const App = () => {
  return (
    <div>
      <Home />
      <Login />
      <h4>
        {" "}
        Or <a href="#">Sign Up Here</a>
      </h4>
    </div>
  );
};

export default App;
