import React from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-6 text-center mt-10">
      <div className="flex justify-center gap-6 text-2xl mb-3">

        {/* GitHub */}
        <a href="https://github.com/KhaliqueAhmed71" target="_blank" rel="noreferrer" className="hover:text-blue-400">
          <FaGithub />
        </a>

        {/* LinkedIn */}
        <a href="https://linkedin.com/in/khaliqueahmedchandio" target="_blank" rel="noreferrer" className="hover:text-blue-400">
          <FaLinkedin />
        </a>

        {/* Gmail */}
        <a href="mailto:21cs071@students.muet.edu.pk" className="hover:text-blue-400">
          <MdEmail />
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/923452083660"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-400"
        >
          <FaWhatsapp />
        </a>
      </div>

      <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Khalique | All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
