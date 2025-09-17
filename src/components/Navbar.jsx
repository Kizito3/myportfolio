/* eslint-disable no-unused-vars */
import { FiDownload, FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: { x: "100%", opacity: 0, transition: { duration: 0.3 } },
  };

  return (
    <nav>
      <div className="bg-white py-4 shadow-md fixed w-full top-0 z-[100]">
        <div className="lg:px-[80px] px-5 flex justify-between items-center">
          {/* Logo */}
          <div className="flex justify-center items-center gap-3">
            <img src="/images/logo.svg" alt="Logo" />
            <p className="text-2xl font-bold">Gozirim</p>
          </div>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex justify-center items-center space-x-12 text-[18px] font-semibold">
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#about-me">About Me</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact Me</a>
            </li>
          </ul>

          {/* Desktop Button */}
          <button className="hidden lg:flex items-center justify-center gap-4 rounded-2xl border-2 border-dashed border-black bg-white px-6 py-3 font-semibold text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none cursor-pointer">
            <a href="/cv/cv.pdf" download>
              Resume
            </a>{" "}
            <FiDownload size={20} className="shrink-0" />
          </button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex items-center justify-center text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="lg:hidden fixed top-[72px] right-0 w-full h-screen bg-white flex flex-col lg:items-center z-100 px-4 justify-start gap-6 py-10 shadow-lg"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <ul className="flex flex-col space-y-6 text-[20px] font-semibold">
                <li>
                  <a href="#skills" onClick={() => setIsOpen(false)}>
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#experience" onClick={() => setIsOpen(false)}>
                    Experience
                  </a>
                </li>
                <li>
                  <a href="#about-me" onClick={() => setIsOpen(false)}>
                    About Me
                  </a>
                </li>
                <li>
                  <a href="#projects" onClick={() => setIsOpen(false)}>
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" onClick={() => setIsOpen(false)}>
                    Contact Me
                  </a>
                </li>
              </ul>

              {/* Mobile Button */}
              <div>
                <button className="mt-6 flex items-center justify-center gap-4 rounded-2xl border-2 border-dashed border-black bg-white px-6 py-3 font-semibold text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none cursor-pointer">
                  <a href="/cv/cv.pdf" download>
                    Resume
                  </a>{" "}
                  <FiDownload size={20} className="shrink-0" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
