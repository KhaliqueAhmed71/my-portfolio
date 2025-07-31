import React from 'react';

const About = () => {
  return (
    <section className="p-8 bg-white dark:bg-gray-900 min-h-screen text-gray-800 dark:text-gray-200">
      <h2 className="text-4xl font-bold mb-6 text-blue-600">About Me</h2>

      <p className="text-lg leading-relaxed mb-5">
        I’m a final year student of <strong>Computer Systems Engineering at Mehran UET Jamshoro.</strong>. I have a strong passion for frontend development and UI design.
      </p>

      <p className="text-lg leading-relaxed mb-5">
        I’ve successfully completed a Web Development course from <strong>PITP (People's Infromation Technology Program)</strong>, where I worked on multiple projects using HTML, CSS, JavaScript, and React.js.
      </p>

      <p className="text-lg leading-relaxed mb-5">
        Currently, I’m doing an internship at <strong>Verior</strong>, where I’m working on real-world web development projects using modern tools and technologies.
      </p>

      <p className="text-lg leading-relaxed">
        I love turning complex problems into clean, functional, and beautiful web interfaces. I’m always eager to learn and explore the latest trends in frontend and full-stack development.
      </p>
    </section>
  );
};

export default About;
