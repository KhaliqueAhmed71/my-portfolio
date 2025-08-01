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

  ];

  return (
    <section className="px-6 py-16 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">
      <h2 className="text-4xl sm:text-5xl font-bold text-center text-blue-600 mb-12">Projects</h2>

      <div className="grid gap-10 md:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg p-6 sm:p-8 hover:scale-[1.02] transition-transform duration-300"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-blue-500 mb-4">
              {project.name}
            </h3>

            <p className="text-base sm:text-lg leading-relaxed mb-6">{project.description}</p>

            <div className="mb-6">
              <h4 className="font-semibold text-lg mb-2">Tech Stack:</h4>
              <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
                {project.stack.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            </div>

            {project.live !== '#' && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-base font-medium transition"
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
