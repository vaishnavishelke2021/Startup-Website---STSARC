import React from "react";
import { motion } from "framer-motion";

const Aboutsec1 = () => {
  return (
    <div className="relative w-full h-auto gradient-bg text-white py-12 md:py-28 px-8 md:px-20 flex flex-col md:flex-row overflow-hidden mt-[5.1rem]">
      {/* Left Side Content */}
      <motion.div
        className="md:w-[45%] flex flex-col justify-center mb-8 md:mb-0 z-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <h2 className="raleway text-4xl md:text-[33px] text-white font-extrabold mb-4">
          About Us
        </h2>
        <p className="text-[16px] font-light text-white/80 mb-4">
          STSARC (Sahajananda Tech Services And Research Centre Private Limited). The name of our company itself defines us. "SAHAJANANDA" is influenced by the name of "LORD KRISHNA". Sahajananda Means "Innate Bliss" A happiness. It Says Whenever our clients engage with our services, they will always be happy and our team will never disappoint them. There will be always Joyful Growth and Success in their Business. We maintain joyful and healthy relationships and environments with our clients.
        </p>
        <p className="text-[16px] font-light text-white/80">
          Welcome to STSARC Private Limited, where we specialize in crafting cutting-edge products at the forefront of AI, blockchain, metaverse, and web 3.0 technologies. At STSARC, we're creating a cutting-edge blogging platform designed to transform the way stories are shared online. With our user-friendly interface and powerful AI-powered algorithms, creators can effortlessly monetize their content while enjoying cost-effective solutions that maximize their revenue potential.
        </p>
      </motion.div>

      {/* Right Side Image */}
      <motion.div
        className="md:w-1/2 flex justify-center md:justify-end"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <div className="relative overflow-hidden rounded-[54%] shadow-2xl scale-[2.7] w-full md:w-[50%] h-[350px]">
          <img
            src="https://images.unsplash.com/photo-1542089363-bba089ffaa25?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with your image URL
            alt="About Section"
            className="object-cover w-full h-full"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Aboutsec1;
