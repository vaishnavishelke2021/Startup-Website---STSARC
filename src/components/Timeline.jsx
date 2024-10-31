import React from 'react';

const TimelineItem = ({ date, title, description, isLeft }) => (
  <div className="relative flex items-center justify-between mb-8">
    {/* Content */}
    <div className={`w-[48%] ${isLeft ? 'text-right pr-24' : 'ml-auto pl-24'}`}>
      <div className="bg-light p-5 rounded-xl">
        <h3 className="font-bold raleway text-gray-800 mb-2">{title}</h3>
        <p className="text-sm text-black/70">{description}</p>
       
      </div>
    </div>

    {/* Timeline point and date */}
    <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
      <div className="w-4 h-4 bg-primary rounded-full"></div>
      <span className={`mt-2 text-sm font-medium text-gray-600 ${
        isLeft ? '-ml-28 text-start' : 'text-start ml-28'
      }`}>
        {date}
      </span>
    </div>
  </div>
);

const Timeline = () => {
    const events = [
        {
          date: "Jan 2021",
          title: "Launch of STSARC",
          description: "In January 2021, STSARC was founded with the aim of innovation."
        },
        {
          date: "Nov 2023",
          title: "Incorporation of STSARC",
          description: "By November 2023, STSARC officially incorporated as a recognized entity."
        },
        {
          date: "Feb 1943",
          title: "STSARC Incubation at NEC",
          description: "In February 1943, STSARC initiated its incubation program at the Nashik Engineering Cluster (NEC)."
        },
        {
          date: "Jun 2024",
          title: "STSARC Incubation at IIT Roorkee",
          description: "By June 2024, STSARC began its incubation phase at the prestigious Indian Institute of Technology (IIT) Roorkee."
        }
      ];
      
  return (
    <div className="max-w-4xl mx-auto p-8 py-20 mt-10">
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary/20"></div>
        
        {/* Timeline items */}
        {events.map((event, index) => (
          <TimelineItem
            key={event.date}
            date={event.date}
            title={event.title}
            description={event.description}
            isLeft={index % 2 === 0}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;