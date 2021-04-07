import React from "react";
import logo from "../images/logo.jpg";

const Home = () => {
  return (
    <div>
      <ul>
        <img
          alt={logo}
          src={logo}
          style={{
            float: "left",
            height: "60px",
            paddingTop: "10px",
          }}
        />
      </ul>
      <h2 style={{ color: "#1b5a7a", paddingTop: "15px" }}>Spark'd</h2>
    </div>
  );
};

export default Home;
