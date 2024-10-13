import React from 'react';
import TimelineItem from './Timelineitem';

const Timeline = () => {
  const experiences = [
    {
      year: "2023 - Present",
      title: "Full Stack Developer",
      company: "Moringa School",
      duration: "1 year",
      details: "Developed and maintained various projects, from e-commerce platforms to data visualization tools Gained extensive experience in Agile methodologies and test-driven development practices.",
    },
    {
      year: "2022 - 2023",
      title: "Personal Trainer",
      company: "Profitness gym",
      duration: "1 year",
      details: "Trained and formed connections with multiple people while also helping them with their fitness goals. Picked up a lot of managerial and social skills, discipline and also handling of people.",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-center my-20">
      <div className="w-full md:w-7/12">
        <h2 className="text-3xl font-bold mb-8 text-center text-indigo-900 dark:text-white">Professional Experience</h2>
        {experiences.map((experience, index) => (
          <TimelineItem
            key={index}
            year={experience.year}
            title={experience.title}
            company={experience.company}
            duration={experience.duration}
            details={experience.details}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;