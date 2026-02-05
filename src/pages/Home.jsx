
function  Home(){
  return (
<section className="min-h-screen flex flex-col items-center justify-center px-6 sm:px-16 lg:px-32 bg-white dark:bg-gray-900 transition-colors duration-300 text-center">
  <h1 className="text-2xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight whitespace-nowrap">
    Hi,I'm Khalique Ahmed
  </h1>
  <p className="text-gray-700 dark:text-gray-300 text-lg sm:text-xl max-w-lg mt-4">
    I’m a Frontend Developer specializing in React, Tailwind CSS, and building professional, responsive web applications.
  </p>
<div className="flex gap-4 mt-6 flex-wrap justify-center">
  <a
    href="/contact"
    className="px-4 py-2 sm:px-6 sm:py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
  >
    Hire Me
  </a>
  <a
    href="/projects"
    className="px-4 py-2 sm:px-6 sm:py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-100 hover:text-700 dark:hover:bg-gray-800 dark:border-blue-400 dark:text-blue-400 transition"
  >
    View Projects
  </a>
</div>

</section>

  );
};

export default Home;
