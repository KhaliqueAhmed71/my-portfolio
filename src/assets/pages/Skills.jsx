import React from 'react';

const Skills = () => {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind', 'Git'];
  return (
    <section className="p-8 bg-white dark:bg-gray-900 min-h-screen text-gray-800 dark:text-white">
      <h2 className="text-3xl font-bold mb-4">Skills</h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
        {skills.map((skill) => (
          <li key={skill} className="bg-blue-100 dark:bg-blue-800 px-4 py-2 rounded text-center">{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
