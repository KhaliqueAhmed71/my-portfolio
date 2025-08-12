import React from 'react';

const Contact = () => {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-20 xl:px-36 bg-gray-100 dark:bg-gray-800 min-h-screen text-gray-900 dark:text-gray-100">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-blue-600 text-center">
        Contact Me
      </h2>

      <form className="max-w-xl mx-auto space-y-5">
        <input
          className="w-full p-3 rounded bg-white dark:bg-gray-700 dark:placeholder-gray-300 outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          type="text"
          placeholder="Your Name"
          required
        />
        <input
          className="w-full p-3 rounded bg-white dark:bg-gray-700 dark:placeholder-gray-300 outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          type="email"
          placeholder="Email"
          required
        />
        <textarea
          className="w-full p-3 rounded bg-white dark:bg-gray-700 dark:placeholder-gray-300 outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          placeholder="Your Message"
          rows="5"
          required
        ></textarea>
        <button
          className="w-full bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition duration-300"
          type="submit"
        >
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
