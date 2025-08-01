import React from 'react';

const Skills = () => {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind', 'Git'];

  return (
    <section className="min-h-screen px-6 py-16 bg-white dark:bg-gray-900 text-gray-800 dark:text-white transition-colors duration-300">
      <h2 className="text-4xl sm:text-5xl font-bold text-center text-blue-600 mb-12">Skills</h2>

      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="bg-blue-100 dark:bg-blue-800/80 text-blue-900 dark:text-white px-6 py-4 rounded-xl text-center font-medium text-lg hover:scale-105 transition-transform duration-300 shadow-md"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
