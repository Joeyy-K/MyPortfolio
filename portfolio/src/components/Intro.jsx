import React from 'react';

const Intro = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20">
      <h1 className="text-5xl md:text-7xl font-bold mb-6 text-indigo-900 dark:text-white">
        Joe Karanja
      </h1>
      <h2 className="text-2xl md:text-3xl font-medium mb-6 text-indigo-700 dark:text-indigo-300">
        Junior Software Engineer & Full Stack Developer
      </h2>
      <p className="text-lg max-w-2xl mb-8 text-gray-700 dark:text-gray-300">
        With over 1.5 years of experience in designing and building intricate systems, 
        I specialize in creating robust, scalable solutions that solve real-world problems. 
        My expertise spans across modern web technologies, cloud architecture, and UI/UX design, 
        allowing me to deliver end-to-end solutions that exceed client expectations.
      </p>
    </div>
  );
};

export default Intro;