const About = () => {
  return (
    <section className="px-6 py-16 sm:px-12 lg:px-24 xl:px-36 bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-800 dark:text-gray-100 transition-colors duration-300">
      <h2 className=" text-2xl sm:text-5xl font-extrabold mb-12 text-center md:text-left text-blue-400 dark:text-blue-400">
  About Me
</h2>


      <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
        {/* Left Column */}
        <div className="space-y-6">
          <p className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow hover:shadow-lg transition-shadow duration-300">
            I am a graduate of <strong>Computer Systems Engineering from Mehran UET Jamshoro</strong> with a strong passion for frontend development and UI design.
          </p>

          <p className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow hover:shadow-lg transition-shadow duration-300">
            I have successfully completed a Web Development course from <strong>PITP (People's Information Technology Program)</strong>, working on multiple projects using HTML, CSS, JavaScript, and React.js.
          </p>

          <p className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow hover:shadow-lg transition-shadow duration-300">
            I have completed an internship at <strong>Verior</strong> during <strong>July–August 2025</strong>, contributing to real-world web development projects using modern tools and technologies.
          </p>
        </div>

        {/* Right Column */}
        <div className="space-y-6 flex flex-col justify-center">
          <p className="bg-blue-100 dark:bg-blue-800 p-4 rounded-xl font-medium text-gray-900 dark:text-gray-100 shadow">
            I enjoy transforming complex problems into clean, functional, and visually appealing web interfaces. I am always eager to learn and explore the latest trends in frontend and full-stack development.
          </p>

          <p className="bg-green-100 dark:bg-green-800 p-4 rounded-xl font-medium text-gray-900 dark:text-gray-100 shadow">
            My goal is to deliver professional, scalable, and user-friendly web solutions that create impact and enhance user experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
