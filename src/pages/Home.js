import React from "react";
import devImg from "../images/mern3.jpg";

function Home() {
  return (
    <div className="alert alert-dark mt-5" role="alert">
      <img
        src="./profile.png"
        alt="profile"
        style={{ width: 200, borderRadius: "20px" }}
      />
      <p className="mt-2" style={{ fontSize: 40 }}>
        <strong>Wassim abdennadher</strong>
      </p>
      <p style={{ fontSize: "25px" }}>
        Hello, my name is <strong>Wassim Abdennadher</strong> and i'am a{" "}
        <strong>FullStack JS (MERN stack, VUE.JS, Nest.JS)</strong> Web
        developer
      </p>
      <img
        src={devImg}
        alt="Dev"
        style={{ width: "100%", borderRadius: "5px" }}
      />
    </div>
  );
}

export default Home;
