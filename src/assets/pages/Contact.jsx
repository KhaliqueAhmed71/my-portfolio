import React from 'react';

const Contact = () => {
  return (
    <section className="p-8 bg-gray-100 dark:bg-gray-800 min-h-screen text-gray-900 dark:text-gray-100">
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <form className="max-w-md mx-auto space-y-4">
        <input className="w-full p-2 rounded bg-white dark:bg-gray-700" type="text" placeholder="Your Name" required />
        <input className="w-full p-2 rounded bg-white dark:bg-gray-700" type="email" placeholder="Email" required />
        <textarea className="w-full p-2 rounded bg-white dark:bg-gray-700" placeholder="Your Message" rows="5"></textarea>
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Send</button>
      </form>
    </section>
  );
};

export default Contact;
