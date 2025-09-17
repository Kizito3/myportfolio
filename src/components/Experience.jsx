/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const experiences = [
    {
      logo: "images/vn-2.png",
      title: (
        <>
          Chief Software Architect at{" "}
          <a
            href="https://votenaija.ng/"
            className="underline text-[#d9cb48]"
            target="__blank"
          >
            VoteNaija
          </a>
        </>
      ),
      date: "July 2025 - Present",
      description:
        "Gozirim oversees the design and architecture of VoteNaija’s software systems. With a focus on performance and security, he ensures the platform is built for long-term growth and innovation.",
    },
    {
      logo: "images/aledoy.png",
      title: (
        <>
          Junior Frontend Developer at{" "}
          <a
            href="https://aledoy.com/"
            className="underline text-[#d9cb48]"
            target="__blank"
          >
            Aledoy
          </a>
        </>
      ),
      date: "August 2022 - August 2024",
      description:
        "Worked on frontend development tasks, ensuring smooth user experiences, collaborating with designers, and maintaining scalable codebases.",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section id="experience" ref={ref}>
      <div className="bg-black text-white w-full">
        <div className="lg:px-[80px] px-5 py-6 my-6">
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center text-white lg:text-5xl text-3xl mb-10 lg:mt-[80px]"
          >
            My <strong className="font-bold">Experience</strong>
          </motion.h1>

          {/* Experience Cards */}
          <div className="flex flex-col gap-[32px] lg:mb-[100px] mb-[50px]">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                className="border border-[#71717a] hover:bg-[#27272A] transition-all duration-300 p-5 rounded-[8px]"
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={i}
              >
                <div className="flex justify-between lg:items-center lg:flex-row flex-col gap-4">
                  <div className="flex lg:items-center lg:gap-4 flex-col lg:flex-row">
                    <img src={exp.logo} className="w-[55px]" alt="" />
                    <p className="font-semibold lg:text-2xl text-xl tracking-[-2%]">
                      {exp.title}
                    </p>
                  </div>
                  <div>
                    <p>{exp.date}</p>
                  </div>
                </div>

                <p className="text-[#D4D4D8] lg:text-base text-sm my-6">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
