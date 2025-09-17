/* eslint-disable no-unused-vars */

import { BsTwitterX } from "react-icons/bs";
import IconContainer from "./icon-container";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

const imageVariants = {
  hidden: { opacity: 0, x: 60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const socials = [
  { icon: <FaFacebook size={25} />, href: "#" },
  { icon: <BsTwitterX size={20} />, href: "https://x.com/only__1kizzy" },
  { icon: <FaGithub size={25} />, href: "https://github.com/Kizito3" },
  {
    icon: <AiFillTikTok size={25} />,
    href: "https://www.tiktok.com/@gozirim__",
  },
  {
    icon: <FaLinkedin size={25} />,
    href: "https://www.linkedin.com/in/okwara-kizito-chigozirim-31b0a5217/",
  },
];

export default function HeroSection() {
  return (
    <section className="pt-[160px]">
      <div className="flex items-center justify-center lg:flex-row flex-col-reverse px-5">
        {/* LEFT CONTENT */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="lg:w-[600px]"
        >
          <motion.h1
            variants={textVariants}
            className="text-[28px] lg:text-[58px]"
          >
            Hello I'm <strong>Gozirim.</strong>
          </motion.h1>
          <motion.h1
            variants={textVariants}
            className="text-[28px] lg:text-[58px]"
          >
            <strong>Frontend</strong>{" "}
            <p className="text-outline inline-block">Developer</p>
          </motion.h1>
          <motion.p
            variants={textVariants}
            className="lg:text-base text-sm text-[#71717A] mt-4"
          >
            My name is Okwara Chigozirim Kizito and I'm a fullstack web
            developer, with prior knowledge of HTML, CSS, JavaScript, React,
            Node.js and PHP. I specialize mainly in crafting stunning and
            effective websites tailored to your unique needs.
          </motion.p>

          {/* SOCIAL ICONS */}
          <motion.div
            variants={containerVariants}
            className="lg:mt-20 mt-5 flex items-center gap-4"
          >
            {socials.map((item, i) => (
              <motion.div key={i} variants={iconVariants}>
                <IconContainer href={item.href} target="__blank">
                  {item.icon}
                </IconContainer>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate="show"
          className="mb-10 lg:mb-0"
        >
          <motion.img
            src="/images/illustration.png"
            alt="illustration"
            className="object-cover"
            animate={{
              y: [0, -10, 0], // float effect
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
