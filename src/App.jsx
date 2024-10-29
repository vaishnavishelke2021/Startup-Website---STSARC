import React, { useEffect, useRef, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

const App = () => {
  const scrollRef = useRef(null);
  const [scroll, setScroll] = useState(null); // State to hold LocomotiveScroll instance

  useEffect(() => {
    // Initialize Locomotive Scroll
    const locomotiveScroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.1,
    });

    // Save the instance in state
    setScroll(locomotiveScroll);

    // Clean up Locomotive Scroll instance on component unmount
    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
    };
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container>
      {/* Pass scroll instance as a prop to Navbar */}
      {scroll && <Navbar scroll={scroll} />}
      <section id="home" data-scroll-section>
        <Home />
      </section>
      <section id="about" data-scroll-section>
        <About />
      </section>
      <section id="product" data-scroll-section>
        <Product />
      </section>
      <section id="contact" data-scroll-section>
        <Contact />
      </section>
    </div>
  );
};

export default App;
