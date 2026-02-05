import React from 'react';

const Home = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
      <div className="text-center">
        <h1 className="text-lg sm:text-5xl md:text-6xl font-extrabold text-blue-600 mb-4 animate-fade-in">
          Hi,I'm Khalique Ahmed👋
        </h1>

        <p className="text-sm sm:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          I'm a passionate Frontend Developer focused on creating modern, responsive, and user-friendly web applications.
        </p>
      </div>
    </section>
  );
};

export default Home;
