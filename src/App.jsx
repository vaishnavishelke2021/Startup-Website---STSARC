import React, { useEffect, useRef, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Loading from "./components/Loading"; // Import the Loading component
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import gsap from "gsap";

const App = () => {
  const scrollRef = useRef(null);
  const [scroll, setScroll] = useState(null); // State to hold LocomotiveScroll instance
  const [loading, setLoading] = useState(true); // Loading state

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

  useEffect(() => {
    // Set a timeout for 5 seconds before removing the loading screen
    const timeout = setTimeout(() => {
      // Transition the loading screen out and show the main content
      gsap.to(".loading-screen", {
        y: "50%", // Slide the loading screen down
        opacity: 0, // Fade out the loading screen
        duration: 1,
        ease: "power4.inOut",
        onComplete: () => {
          setLoading(false);
        },
      });
    }, 2000);

    // Clean up the timeout when the component unmounts
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container>
      {loading && <Loading />} {/* Show loading screen while loading is true */}
      {!loading && (
        <>
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
        </>
      )}
    </div>
  );
};

export default App;
