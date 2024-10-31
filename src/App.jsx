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
import CustomCursor from "./components/CustomCursor";

const App = () => {
  const scrollRef = useRef(null);
  const [scroll, setScroll] = useState(null); // State to hold LocomotiveScroll instance
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    // Initialize Locomotive Scroll after loading has finished
    if (!loading) {
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
    }
  }, [loading]); // Run effect when loading changes

  useEffect(() => {
    // Set a timeout for 2.5 seconds before starting to fade out the loading screen
    const timeout = setTimeout(() => {
      // Use GSAP to fade out the loading screen
      gsap.to(".loading-screen", {
        y: "20%", // Slide out of view if needed
        opacity: 0, // Fade out the loading screen
        duration: 1.4,
        ease: "power4.inOut",
        onComplete: () => {
          // Only set loading to false after the fade-out animation is complete
          setLoading(false);
        },
      });
    }, 2500);

    // Clean up the timeout when the component unmounts
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container className="cursor-none">
      <CustomCursor/>
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
