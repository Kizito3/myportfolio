/* eslint-disable no-unused-vars */
import { HiOutlineExternalLink } from "react-icons/hi";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/data";

// 🎯 Each project card with its own animation

export default function Projects() {
  return (
    <section id="projects">
      <div className="bg-black text-white">
        <div className="lg:px-[80px] px-5 py-16 my-6">
          {/* Section Heading */}
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="text-center text-white lg:text-5xl text-3xl mb-10 lg:mt-[80px]"
          >
            My <strong className="font-bold">Projects</strong>
          </motion.h1>

          <div className="flex flex-col gap-20">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
