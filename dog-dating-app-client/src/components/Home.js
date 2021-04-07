import React from "react";
import logo from "../images/logo.jpg";

const Home = () => {
  return (
    <div>
      <img
        alt={logo}
        src={logo}
        style={{
          float: "left",
          height: "60px",
          paddingTop: "10px",
        }}
      />

      <h2 style={{ color: "#1b5a7a", paddingTop: "26px" }}>Spark'd</h2>
      <br />
      <h1 style={{ color: "#1aa59a" }}> Welcome to Spark'd! </h1>
      <h2 style={{ color: "#1b5a7a" }}>Where Pets Come to Meet Their Mate</h2>
      <br />
      <h2 style={{ color: "#1aa59a" }}>Log In </h2>
    </div>
  );
};

export default Home;
