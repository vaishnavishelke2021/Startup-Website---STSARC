import React, { useEffect } from "react";
import * as THREE from "three";
import { motion } from "framer-motion";
import Button from "./Button";

const HomeHero = () => {
  useEffect(() => {
    let camera,
      scene,
      renderer,
      particles = [];
    const SEPARATION = 30,
      AMOUNTX = 100,
      AMOUNTY = 30;
    let count = 0;

    function init() {
      const container = document.getElementById("canvasContainer");

      camera = new THREE.PerspectiveCamera(
        100,
        window.innerWidth / window.innerHeight,
        1,
        10000
      );
      camera.position.z = 500;

      scene = new THREE.Scene();

      const material = new THREE.SpriteMaterial({ color: 0xffa500 });

      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          const particle = new THREE.Sprite(material);
          particle.position.x = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
          particle.position.z = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2;
          particles.push(particle);
          scene.add(particle);
        }
      }

      renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      container.appendChild(renderer.domElement);

      window.addEventListener("resize", onWindowResize);
    }

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function animate() {
      requestAnimationFrame(animate);
      render();
    }

    function render() {
      let i = 0;
      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          const particle = particles[i++];
          particle.position.y =
            Math.sin((ix + count) * 0.3) * 20 +
            Math.sin((iy + count) * 0.5) * 20;
        }
      }
      renderer.render(scene, camera);
      count += 0.05;
    }

    init();
    animate();

    return () => {
      window.removeEventListener("resize", onWindowResize);
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-screen bg-gradient-to-b from-white to-orange-50 overflow-hidden text-gray-800">
      <div id="canvasContainer" className="absolute inset-0 z-0"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="w-72 h-40 rounded-full bg-gradient-to-br from-orange-300 to-orange-400/60 filter blur-3xl opacity-50"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <motion.h1
          className="text-3xl md:text-[45px] raleway font-extrabold text-orange-500 mb-9"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          Connecting The World With AI
        </motion.h1>
        <motion.p
          className="text-lg text-black/60 font-medium max-w-[60%] mb-7 raleway"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
        >
          With AI, Blockchain, and Web 3.0, we embark on a journey where
          pioneering technology converges with limitless potential, shaping a
          future constrained only by the bounds of imagination.
        </motion.p>
        {/* <Button targetId="product" text="Get Started" /> */}
      </div>
    </div>
  );
};

export default HomeHero;


// ===================================== 2========================================

// import React, { useEffect } from 'react';

// const HomeHero = () => {

//   useEffect(() => {
//     const backgroundText = document.querySelector('#backgroundText');
//     backgroundText.style.transform = 'translateY(20px)';
//     setTimeout(() => {
//       backgroundText.style.transition = 'transform 1.5s ease-out';
//       backgroundText.style.transform = 'translateY(0)';
//     }, 300);
//   }, []);

//   return (
//     <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 to-white">
//       {/* Large Background Text */}
//       <h1
//         id="backgroundText"
//         className="absolute text-[12rem] md:text-[16rem] font-extrabold text-orange-400 top-[30%] transform opacity-10 select-none pointer-events-none raleway"
//       >
//         stsarc
//       </h1>

//       {/* Main Content */}
//       <div className="relative z-10 flex flex-col items-center text-center px-6 py-10">

//         <h2 className="text-3xl md:text-5xl font-extrabold text-orange-600 mb-4 raleway">
//         Connecting The World With AI
//         </h2>

//         <p className="text-md md:text-lg text-gray-700 w-[96%] md:w-[68%] mb-8">
//         With AI, Blockchain, and Web 3.0, we embark on a journey where pioneering technology converges with limitless potential, shaping a future constrained only by the bounds of imagination.
//         </p>

//         <a  className="px-8 py-3 bg-orange-500 text-white rounded-full font-semibold shadow-lg transform transition duration-300 hover:scale-105 hover:bg-orange-600">
//           Get Started
//         </a>
//       </div>
//     </div>
//   );
// };

// export default HomeHero;

// ========================================== 3 ===================================================

// import React from 'react';

// const HomeHero = () => {
//   return (
//     <div className="relative w-full h-screen bg-white flex flex-col md:flex-row overflow-hidden">
//       {/* Diagonal Split Background */}
//       <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-500 via-orange-400 to-orange-300 transform -skew-y-6 -translate-y-10 z-0"></div>

//       {/* Content Block */}
//       <div className="relative w-full md:w-[62%] z-10 flex flex-col items-start justify-center px-8 md:px-16 py-10 space-y-6">
//         <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight raleway">
//         Connecting The World With AI
//         </h1>
//         <p className="text-lg md:text-lg text-gray-100 max-w-[43rem]">With AI, Blockchain, and Web 3.0, we embark on a journey where pioneering technology converges with limitless potential, shaping a future constrained only by the bounds of imagination.
//         </p>
//         <button className="px-6 py-3 bg-white text-orange-500 font-semibold rounded-full shadow-md hover:bg-gray-100 transform transition hover:-translate-y-1">
//           Explore Now
//         </button>
//       </div>

//       {/* Image Section */}
//       <div className="relative w-full md:w-1/3 z-10 flex items-center justify-center py-8 md:py-0">
//         <img
//           src="https://images.unsplash.com/photo-1718241905439-3562f088758d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGludGVsaWdlbmNpYSUyMGFydGlmaWNpYWx8ZW58MHx8MHx8fDA%3D"
//           alt="SVP Logo"
//           className="w-40 h-40 md:w-60 md:h-60 object-cover shadow-lg rounded-full bg-white border-4 border-orange-500"
//         />
//       </div>

//       {/* Decorative Circles */}
//       <div className="absolute top-16 right-16 w-32 h-32 rounded-full bg-orange-300 opacity-50 z-0"></div>
//       <div className="absolute bottom-10 left-10 w-24 h-24 rounded-full bg-orange-500 opacity-30 z-0"></div>
//     </div>
//   );
// };

// export default HomeHero;

// =========================================================== 4 =======================================

// import React from 'react';

// const HomeHero = () => {
//   return (
//     <div className="relative w-full h-screen flex items-center overflow-hidden ">
//       {/* Left Split Screen with Rotating 3D Text */}
//       <div className="w-1/2 h-full flex flex-col justify-center items-center bg-orange-500 text-white">
//         <h1 className="text-6xl md:text-6xl px-12 raleway font-extrabold transform-gpu">
//         Connecting The World With AI
//         </h1>
//         <p className="text-lg ralewaay px-12 mt-4 transform-gpu ">
//         With AI, Blockchain, and Web 3.0, we embark on a journey where pioneering technology converges with limitless potential, shaping a future constrained only by the bounds of imagination.
//         </p>
//       </div>

//       {/* Right Split Screen with Animated Layers */}
//       <div className="w-1/2 h-full flex items-center justify-center relative">
//         <div className="absolute inset-0 bg-gradient-to-bl from-white via-orange-100 to-white opacity-80 transform-gpu scale-105 animate-pulse"></div>
//         <img
//           src="http://svp.xyz/svp.png"
//           alt="SVP Logo"
//           className="relative z-10 w-48 h-48 md:w-60 md:h-60 object-cover transform-gpu hover:scale-110 transition duration-300 shadow-lg rounded-full"
//         />
//       </div>

//       {/* Floating Animation */}
//       <style>
//         {`
//           @keyframes floatAnimation {
//             0% { transform: translateY(0px); }
//             50% { transform: translateY(-20px); }
//             100% { transform: translateY(0px); }
//           }

//           .relative div {
//             animation: floatAnimation 6s ease-in-out infinite;
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default HomeHero;

// ================================= 5================================================================

// import React from 'react';

// const HomeHero = () => {
//   return (
//     <div className="relative flex flex-col items-center justify-center w-[55%] h-screen bg-white overflow-hidden">
//       {/* Background Gradient */}
//       <div className="absolute inset-0 bg-gradient-to-r from-orange-300 to-orange-100 opacity-40" />

//       {/* Hero Content */}
//       <div className="relative z-10 text-start px-6">
//         <h1 className="text-5xl md:text-6xl font-extrabold raleway text-gray-800 mb-4 animate-fadeInUp">
//         Connecting The World With AI
//         </h1>
//         <p className="text-lg text-gray-600 mb-6 animate-fadeInUp delay-150">
//         With AI, Blockchain, and Web 3.0, we embark on a journey where pioneering technology converges with limitless potential, shaping a future constrained only by the bounds of imagination.
//         </p>
//         <div className="flex space-x-4">
//           <button className="px-8 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-lg transition duration-300 transform hover:bg-orange-600 hover:scale-105 ">
//             Get Started
//           </button>

//         </div>
//       </div>

//       {/* Decorative Elements */}

//       {/* Animated Shapes */}
//       <div className="absolute top-0 right-0 w-40 h-40 bg-orange-200 rounded-full transform animate-pulse -translate-x-2 -translate-y-24" />
//       <div className="absolute bottom-0 left-0 w-52 h-52 bg-orange-200 rounded-full transform animate-pulse -translate-x-16 translate-y-16" />

//       {/* Animations */}
//       <style>
//         {`
//           @keyframes fadeInUp {
//             0% { opacity: 0; transform: translateY(10px); }
//             100% { opacity: 1; transform: translateY(0); }
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default HomeHero;

// ===================================================== 6 ==========================================================

// import React from 'react';
// import { motion } from 'framer-motion';

// const HomeHero = () => {
//   return (
//     <div className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-br from-orange-100 to-white overflow-hidden">
//       {/* Floating Background Elements */}
//       <div className="absolute top-10 left-10 w-40 h-40 bg-orange-200 rounded-full opacity-50 animate-pulse blur-xl"></div>
//       <div className="absolute bottom-10 right-20 w-48 h-48 bg-orange-300 rounded-full opacity-60 animate-bounce blur-2xl"></div>

//       {/* Hero Content */}
//       <motion.div
//         className="relative z-10 flex flex-col items-center text-center p-6 space-y-6"
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <h1 className="text-5xl font-bold text-gray-800">
//           Explore Boundless Creativity
//         </h1>
//         <p className="text-lg text-gray-700 max-w-md">
//           Unleash your potential with SVP.XYZ’s innovative tools and designs.
//         </p>
//         <div className="flex space-x-4">
//           <motion.button
//             className="px-8 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-lg transform hover:bg-orange-600 hover:scale-105 transition duration-300"
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//           >
//             Get Started
//           </motion.button>
//           <motion.button
//             className="px-8 py-3 border border-orange-500 text-orange-500 font-semibold rounded-lg shadow-lg transform hover:bg-orange-100 hover:scale-105 transition duration-300"
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//           >
//             Learn More
//           </motion.button>
//         </div>
//       </motion.div>

//       {/* Interactive Card */}
//       <motion.div
//         className="relative mt-10 w-80 h-48 bg-white rounded-xl shadow-lg overflow-hidden"
//         style={{
//           perspective: 1000,
//         }}
//         initial={{ rotateY: 0 }}
//         whileHover={{ rotateY: 15 }}
//         transition={{ type: 'spring', stiffness: 100, damping: 10 }}
//       >
//         <img
//           src="https://svp.xyz/svp.png"
//           alt="SVP logo"
//           className="w-full h-full object-cover"
//         />
//       </motion.div>

//       {/* Additional Floating Circles */}
//       <motion.div
//         className="absolute bottom-20 left-10 w-28 h-28 bg-orange-400 rounded-full opacity-50 blur-lg"
//         animate={{ y: [0, 20, 0] }}
//         transition={{ duration: 4, repeat: Infinity }}
//       />
//     </div>
//   );
// };

// export default HomeHero;

// ===================================================== 7 ================================================

// import React from 'react';
// import { motion } from 'framer-motion';

// const HomeHero = () => {
//   return (
//     <div className="w-[70%] relative flex items-center justify-center h-screen bg-gradient-to-br from-orange-100 via-white to-orange-200 overflow-hidden">
//       {/* Parallax Background Layers */}
//       <div className="absolute inset-0 z-0 flex items-center justify-center">
//         <motion.div
//           className="absolute w-96 h-96 bg-orange-300 rounded-full blur-3xl opacity-60"
//           style={{ left: '20%', top: '30%' }}
//           animate={{ scale: [1, 1.2, 1] }}
//           transition={{ duration: 8, repeat: Infinity }}
//         />
//         <motion.div
//           className="absolute w-96 h-96 bg-orange-400 rounded-full blur-3xl opacity-60"
//           style={{ right: '25%', bottom: '30%' }}
//           animate={{ scale: [1, 1.3, 1] }}
//           transition={{ duration: 10, repeat: Infinity }}
//         />
//       </div>

//       {/* Hero Content */}
//       <motion.div
//         className="relative z-10 flex flex-col items-center text-center p-6 space-y-6 max-w-lg"
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         {/* Animated Title */}
//         <motion.h1
//           className="text-6xl font-extrabold text-gray-800 leading-tight"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 1 }}
//         >
//           Discover <span className="text-orange-600">Inspiration</span> <br />
//           with SVP.XYZ
//         </motion.h1>

//         {/* Subtext */}
//         <p className="text-lg text-gray-600">
//           Your gateway to creating beautiful, interactive web experiences.
//         </p>

//         {/* CTA Button with Hover Animation */}
//         <motion.button
//           className="px-8 py-3 bg-orange-600 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 hover:bg-orange-700 transition duration-300"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           Get Started
//         </motion.button>
//       </motion.div>

//     </div>
//   );
// };

// export default HomeHero;

// ============================================================== 8 =====================================================

// import React from 'react';
// import { motion } from 'framer-motion';

// const HomeHero = () => {
//   return (
//     <section className="w-[98%] md:w-[70%] mx-auto relative flex items-center justify-center h-screen bg-white overflow-hidden">
//       <div className="absolute inset-0 flex items-center justify-center">
//         <motion.div
//           className="w-60 h-60 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 filter blur-3xl opacity-50"
//           initial={{ scale: 0 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 1, ease: 'easeInOut' }}
//         />
//       </div>
//       <motion.div
//         className="relative z-10 text-center px-6"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
//         Connecting The World With AI
//         </h1>
//         <p className="text-lg text-gray-600 mb-6">
//         With AI, Blockchain, and Web 3.0, we embark on a journey where pioneering technology converges with limitless potential, shaping a future constrained only by the bounds of imagination.
//         </p>
//         <motion.button
//           className="bg-orange-500 text-white px-8 py-3 rounded-full shadow-lg transition duration-300 hover:bg-orange-600"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           Get Started
//         </motion.button>
//       </motion.div>
//     </section>
//   );
// };

// export default HomeHero;
