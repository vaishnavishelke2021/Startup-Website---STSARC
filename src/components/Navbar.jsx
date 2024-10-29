import React, { useState, useEffect } from "react";

const Navbar = () => {
  // State to keep track of the active link
  const [activeLink, setActiveLink] = useState("#home");

  // Function to handle clicking on a link
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  // UseEffect to detect the current section in the viewport
  useEffect(() => {
    // All sections that need to be observed
    const sections = document.querySelectorAll("section");

    // Create an IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Update active link based on the currently visible section
            setActiveLink(`#${entry.target.id}`);
          }
        });
      },
      {
        root: null, // viewport as the root
        rootMargin: "0px",
        threshold: 0.6, // 60% of the section needs to be visible
      }
    );

    // Observe each section
    sections.forEach((section) => {
      observer.observe(section);
    });

    // Cleanup the observer on component unmount
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="bg-white shadow-sm px-14 py-5 flex justify-between items-center fixed top-0 left-0 w-full z-50">
      {/* logo */}
      <div>
        <h1 className="text-3xl font-bold text-primary">stsarc</h1>
      </div>
      <ul className="flex items-center gap-x-10 text-black/70 tracking-[1.2px] font-normal uppercase text-[14px]">
        <a
          href="#home"
          onClick={() => handleLinkClick("#home")}
          className={activeLink === "#home" ? "active" : "pb-1"}
        >
          Home
        </a>
        <a
          href="#about"
          onClick={() => handleLinkClick("#about")}
          className={activeLink === "#about" ? "active" : "pb-1"}
        >
          About Us
        </a>
        <a
          href="#product"
          onClick={() => handleLinkClick("#product")}
          className={activeLink === "#product" ? "active" : "pb-1"}
        >
          Product
        </a>
        <a
          href="#contact"
          onClick={() => handleLinkClick("#contact")}
          className={activeLink === "#contact" ? "active" : "pb-1"}
        >
          Contact
        </a>
      </ul>
    </div>
  );
};

export default Navbar;
