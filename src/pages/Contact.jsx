import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function Contact  (){
  const [data, setData] = useState({
    name: "",
    email: "",
    msg: "",
  });

  const url='http://localhost:3000/contact'

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, msg } = data;

    if (!name || !email || !msg) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        toast.success("Message sent successfully!");
        setData({ name: "", email: "", msg: "" });
      } else {
        toast.error("Failed to send message. Try again!");
      }
    } catch (error) {
      toast.error("Server error. Try again later!");
      console.error(error);
    }
  };

  return (
    <section className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-6 py-16 transition-colors duration-300">
      <h2 className="text-2xl sm:text-4xl font-bold text-center text-blue-600 mb-12">
        Contact Me
      </h2>

      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={data.name}
            onChange={handleChange}
            className="px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-700 dark:text-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={data.email}
            onChange={handleChange}
            className="px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-700 dark:text-white"
          />
          <textarea
            name="msg"
            placeholder="Your Message"
            value={data.msg}
            onChange={handleChange}
            className="px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-700 dark:text-white"
            rows={5}
          />

          <button
            type="submit"
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
          >
            Send Message
          </button>
        </form>
      </div>

      <Toaster position="top-right" reverseOrder={false} />
    </section>
  );
};

export default Contact;
