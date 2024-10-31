import React from "react";
import Aboutsec1 from "./Aboutsec1";
import Timeline from "./Timeline";

const About = () => {
  return (
    <div
      id="about"
      className="min-h-screen flex-col flex items-center justify-center"
    >
      <Aboutsec1 />
      <Timeline />
    </div>
  );
};

export default About;
