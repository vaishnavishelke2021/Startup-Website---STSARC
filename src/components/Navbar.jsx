import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("#home");

  const handleLinkClick = (link) => {
    // Smoothly scroll to the section using the native scroll behavior
    document.querySelector(link).scrollIntoView({ behavior: "smooth" });
    setActiveLink(link);
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(`#${entry.target.id}`);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.6,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="bg-white shadow-sm px-14 py-5 flex justify-between items-center fixed top-0 left-0 w-full z-50">
      <div>
        <h1 className="text-3xl font-bold text-primary">stsarc</h1>
      </div>
      <ul className="flex items-center gap-x-10 text-black/70 tracking-[1.2px] font-normal uppercase text-[14px]">
        {["#home", "#about", "#product", "#contact"].map((link) => (
          <motion.a
            key={link}
            href={link}
            onClick={() => handleLinkClick(link)}
            className={activeLink === link ? "active" : "pb-1"}
            onMouseEnter={{ scale: 1.03 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
          >
            {link.replace("#", "")}
          </motion.a>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
