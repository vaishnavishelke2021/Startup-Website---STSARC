import React from "react";
import Marquee from "react-fast-marquee";
import { FaBrain, FaGlobe, FaLink } from "react-icons/fa";

const Card = ({ icon, heading, subtext }) => {
  return (
    <div className="flex flex-col items-center justify-center mr-6 w-[350px] h-48 p-4 bg-gray-100/60 rounded-xl border-gray-200 transition-transform transform hover:bg-light">
      <div className="text-2xl mb-2 text-orange-500">{icon}</div>
      <h3 className="text-lg font-bold text-gray-800 raleway">{heading}</h3>
      <p className="text-sm text-center text-zinc-600 mt-2">{subtext}</p>
    </div>
  );
};

const MarqueeCards = () => {
  const cardData = [
    {
      icon: <FaBrain />,
      heading: "Artificial Intelligence",
      subtext:
        "Powering intelligent automation and data-driven insights for smarter decision-making.",
    },
    {
      icon: <FaGlobe />,
      heading: "Web 3.0",
      subtext:
        "Next-gen internet that puts users in control and ensures privacy and security.",
    },
    {
      icon: <FaLink />,
      heading: "Blockchain",
      subtext:
        "Secure digital ledger that records transactions transparently and without intermediaries.",
    },
  ];

  return (
    <div className="relative w-full py-6 mt-10 overflow-hidden">
      {/* Left Gradient */}
      <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
      {/* Right Gradient */}
      <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

      <Marquee speed={70} gradient={false} pauseOnHover={true}>
        {cardData.map((card, index) => (
          <Card
            key={index}
            icon={card.icon}
            heading={card.heading}
            subtext={card.subtext}
          />
        ))}
        {/* Duplicate cards to make the loop appear continuous */}
        {cardData.map((card, index) => (
          <Card
            key={`duplicate-${index}`}
            icon={card.icon}
            heading={card.heading}
            subtext={card.subtext}
          />
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeCards;
