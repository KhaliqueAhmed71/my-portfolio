import React from 'react';

const Projects = () => {
  const projects = [
    {
      name: 'CineScope 🎬',
      description:
        'CineScope is a movie discovery web app where users can browse trending movies, view detailed movie info, and manage their favorites. Built with React and TMDB/OMDB API.',
      stack: [
        'React', 'React Router', 'Tailwind CSS', 'Material UI',
        'Axios', 'Context API / Redux', 'TMDB API / OMDB API',
      ],
      live: 'https://cinescopeweb.netlify.app/',
    },
    {
      name: 'Redux Cart 🛒',
      description:
        'A minimal shopping cart app built using Redux Toolkit. Users can add or remove items, view total price, and see a clean state-managed cart system — deployed to Netlify.',
      stack: [
        'React', 'Redux Toolkit', 'React-Redux', 'Tailwind CSS',
        'useSelector & useDispatch', 'Netlify Deployment',
      ],
      live: 'https://redux-cart-ap.netlify.app/',
    },
    {
      name: 'Delish – Restaurant Cafe 🍽️',
      description:
        'A pixel-perfect restaurant website built from a Figma template. Fully responsive with modern UI/UX. Includes pages for Home, Menu, About, and Reservation.',
      stack: [
        'React', 'React Router', 'Tailwind CSS', 'Vite',
        'Responsive Layout', 'Dark Mode',
      ],
      live: 'https://delish-restaurant-cafe.netlify.app/',
    },
    {
      name: 'React Quiz App ❓',
      description:
        'A quiz application built with React featuring timer, scoring, and progress bar functionalities. Responsive and interactive.',
      stack: [
        'React', 'Tailwind CSS', 'useState', 'useEffect',
        'React Router', 'JavaScript',
      ],
      live: 'https://react-quiz-apk.netlify.app/', 
    },
  ];

  return (
    <section className="px-6 py-16 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">
      <h2 className="text-2xl sm:text-4xl font-bold text-center text-blue-600 mb-12">
        Projects
      </h2>

      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-700 rounded-2xl shadow-md p-6 sm:p-8 hover:scale-105 hover:shadow-2xl transition-transform duration-300"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-blue-500 mb-4">
              {project.name}
            </h3>

            <p className="text-base sm:text-lg leading-relaxed mb-6">
              {project.description}
            </p>

            <div className="mb-6">
              <h4 className="font-semibold text-lg mb-2">Tech Stack:</h4>
              <ul className="flex flex-wrap gap-2 mb-4">
                {project.stack.map((tech, i) => (
                  <li
                    key={i}
                    className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-1 rounded text-xs sm:text-sm"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            {project.live !== '#' && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 sm:px-5 sm:py-2.5 rounded-lg text-base font-medium shadow-md hover:shadow-lg transition"
              >
                🔗 Live Demo
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
