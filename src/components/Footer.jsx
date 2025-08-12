import React from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 px-4 text-center mt-10">
      {/* Social Icons */}
      <div className="flex justify-center flex-wrap gap-6 text-2xl mb-4">
        <a
          href="https://github.com/KhaliqueAhmed71"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-400 transition duration-300"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/khaliqueahmedchandio"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-400 transition duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:21cs071@students.muet.edu.pk"
          className="hover:text-blue-400 transition duration-300"
        >
          <MdEmail />
        </a>
        <a
          href="https://wa.me/923452083660"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-400 transition duration-300"
        >
          <FaWhatsapp />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-sm text-gray-400 leading-tight">
        &copy; {new Date().getFullYear()} Khalique | All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
