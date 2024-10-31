import React from "react";
import HomeHero from "./HomeHero";
import MarqueeCards from "./Marquee";

const Home = () => {
  return (
    <div id="home" className="min-h-screen">
      {/* Home */}
      <div className="flex items-center justify-center mb-20">
        <HomeHero />
      </div>
      <MarqueeCards/>
    </div>
  );
};

export default Home;
