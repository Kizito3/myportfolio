/* eslint-disable no-unused-vars */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section id="about-me" className="my-[60px]" ref={ref}>
      <div className="flex lg:flex-row justify-center flex-col lg:px-[80px] gap-[80px] items-center px-5">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="images/me.jpg"
            className="lg:w-[690px] lg:h-[700px] rounded-[8px] object-cover"
            alt="Profile picture"
          />
        </motion.div>

        {/* Text Content */}
        <div className="lg:w-[610px]">
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
            transition={{ duration: 0.6 }}
            className=" text-black lg:text-5xl text-3xl mb-10 lg:mt-[80px]"
          >
            About <strong className="font-bold">Me</strong>
          </motion.h1>

          {/* Paragraphs */}
          {[
            "I'm a Full-Stack Developer who creates beautiful and functional web applications. My expertise lies in HTML, CSS, Tailwind CSS, JavaScript, TypeScript, React, Next.js, Node.js, Express.js, and MongoDB.",
            "I have a solid understanding of full-stack development principles and hands-on experience building responsive, user-friendly applications. I enjoy creating dynamic UIs with React and managing state with tools like Zustand or TanStack Query. I also love working with the MERN stack to develop complete, scalable web solutions.",
            "I've worked on a variety of projects — from simple components to full-scale platforms. From start to finish, I focus on clean, maintainable, and well-documented code using Git and version control best practices.",
            "I'm a lifelong learner who enjoys staying up to date with new technologies and trends. Collaboration is key for me — I love building with others and solving technical problems creatively.",
            "If you're looking for a full-stack dev who brings both passion and experience — I'm your guy. Let's build something amazing together!",
          ].map((para, i) => (
            <motion.p
              key={i}
              className="mt-6 text-[#71717A] lg:text-base text-sm"
              variants={textVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={i}
            >
              {para}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
