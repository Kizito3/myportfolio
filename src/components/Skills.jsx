/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaCss3, FaGitAlt, FaNodeJs, FaReact, FaSass } from "react-icons/fa";
import { SiJavascript, SiPhp } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { IoLogoHtml5 } from "react-icons/io";
import { RiNextjsFill } from "react-icons/ri";
import SkillContainer from "./SkillContainer";

const parentVariants = {
  hidden: {
    opacity: 0,
    transition: {
      // when hiding, reverse the staggering
      staggerChildren: 0.12,
      staggerDirection: -1,
      when: "afterChildren",
    },
  },
  show: {
    opacity: 1,
    transition: {
      // when showing, stagger forward
      staggerChildren: 0.12,
      staggerDirection: 1,
      when: "beforeChildren",
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: -12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const skills = [
  { icon: <FaGitAlt size={60} />, label: "Git" },
  { icon: <FaNodeJs size={60} />, label: "NodeJs" },
  { icon: <SiJavascript size={60} />, label: "Javascript" },
  { icon: <BiLogoTypescript size={60} />, label: "Typescript" },
  { icon: <FaReact size={60} />, label: "React" },
  { icon: <IoLogoHtml5 size={60} />, label: "Html" },
  { icon: <RiNextjsFill size={60} />, label: "NextJs" },
  { icon: <FaCss3 size={60} />, label: "Css" },
  { icon: <FaSass size={60} />, label: "Scss" },
  { icon: <SiPhp size={60} />, label: "PHP" },
];

export default function SkillsSection() {
  const ref = useRef(null);
  // amount: how much of the element should be visible to count as "in view" (0..1)
  const inView = useInView(ref, { amount: 0.2, once: false });

  return (
    <section id="skills">
      <div className="lg:my-[120px] my-[50px] lg:px-[80px] px-5">
        <motion.div
          ref={ref}
          variants={parentVariants}
          initial="hidden"
          // toggle animate based on inView (this causes exit animation when leaving)
          animate={inView ? "show" : "hidden"}
          className="flex flex-col items-center"
        >
          <motion.h1
            variants={headingVariants}
            className="text-center lg:mb-[80px] mb-[40px] lg:text-5xl text-3xl"
          >
            My <strong className="font-bold">Skills</strong>
          </motion.h1>

          <div className="flex flex-wrap lg:gap-10 gap-4 items-center justify-center">
            {skills.map((skill, i) => (
              <SkillContainer key={i}>
                <motion.div
                  variants={childVariants}
                  className="flex flex-col items-center justify-center gap-5"
                >
                  {skill.icon}
                  <p className="text-xl font-bold">{skill.label}</p>
                </motion.div>
              </SkillContainer>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
