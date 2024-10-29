import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Product from "./components/Product";

const App = () => {
  return (
    <div>
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="product">
        <Product />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
