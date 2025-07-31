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
    
  ];

  return (
    <section className="p-8 bg-gray-100 dark:bg-gray-800 min-h-screen text-gray-900 dark:text-gray-100">
      <h2 className="text-5xl font-bold mb-10 text-blue-600 text-center">Projects</h2>

      <div className="grid gap-10 md:grid-cols-2">
        {projects.map((project, index) => (
          <div key={index} className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-8">
            <h3 className="text-3xl font-semibold text-blue-500 mb-4">{project.name}</h3>
            <p className="mb-6 text-lg leading-relaxed">{project.description}</p>

            <div className="mb-6">
              <h4 className="font-semibold mb-2 text-lg">Tech Stack:</h4>
              <ul className="list-disc list-inside text-base text-gray-800 dark:text-gray-200">
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
                className="inline-block mt-2 px-5 py-3 text-lg bg-blue-600 text-white rounded hover:bg-blue-700 transition"
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
