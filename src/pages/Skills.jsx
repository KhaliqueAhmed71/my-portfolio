import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

function Skills ()  {
  const skills = [
    { name: 'HTML', icon: <FaHtml5 className="text-orange-500 text-3xl" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-blue-500 text-3xl" /> },
    { name: 'JavaScript', icon: <FaJs className="text-yellow-500 text-3xl" /> },
    { name: 'React', icon: <FaReact className="text-cyan-400 text-3xl" /> },
    { name: 'Tailwind', icon: <SiTailwindcss className="text-sky-500 text-3xl" /> },
    { name: 'Git', icon: <FaGitAlt className="text-red-500 text-3xl" /> },
  ];

  return (
    <section className="min-h-screen px-6 py-16 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <h2 className="text-2xl sm:text-4xl font-bold text-center text-blue-600 mb-12">
        Skills
      </h2>

      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="flex flex-col items-center bg-white dark:bg-gray-700 px-6 py-6 rounded-2xl text-center font-medium text-lg hover:scale-105 transition-transform duration-300 shadow-md"
          >
            <div className="mb-2">{skill.icon}</div>
            <span className="text-gray-800 dark:text-gray-100">{skill.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
