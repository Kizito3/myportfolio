/* eslint-disable no-unused-vars */

import { motion, useInView } from "framer-motion";

import { useRef } from "react";
import { HiOutlineExternalLink } from "react-icons/hi";

export default function ProjectCard({ project }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={`flex flex-col lg:flex-row items-center justify-center gap-[40px] ${
        project.reverse ? "lg:flex-row-reverse" : ""
      }`}
      variants={fadeInUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Image */}
      <div className="overflow-hidden rounded-xl lg:h-[398px] lg:w-[600px]">
        <img
          src={project.image}
          alt={project.title}
          className="object-cover w-full h-full transform transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Text Content */}
      <div className="lg:w-[682px]">
        <h1 className="font-black lg:text-5xl text-3xl lg:mb-8 mb-5 tracking-[-2%]">
          {project.id}
        </h1>
        <h2 className="font-bold lg:text-5xl text-3xl lg:mb-8 mb-5 tracking-[-2%]">
          {project.title}
        </h2>
        <p className="lg:mb-8 mb-5 lg:text-base text-sm">
          {project.description}
        </p>
        <a href={project.link} target="__blank" rel="noreferrer">
          <HiOutlineExternalLink size={30} />
        </a>
      </div>
    </motion.div>
  );
}
