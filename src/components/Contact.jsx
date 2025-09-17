/* eslint-disable no-unused-vars */

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Form from "./Form";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="contact">
      <div ref={ref} className="lg:px-[80px] px-5 py-16 my-6">
        <div className="flex justify-center items-center gap-8 lg:flex-row flex-col">
          {/* Form Section */}
          <motion.div
            className="lg:w-[608px] w-full"
            variants={fadeInLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <Form />
          </motion.div>

          {/* Text Section */}
          <motion.div
            className="lg:w-[608px] w-full"
            variants={fadeInRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h1 className="font-bold tracking-[-2%] lg:text-5xl text-3xl">
              Let's <p className="text-outline inline-block">talk</p> for
              something special
            </h1>
            <p className="text-[#71717A] tracking-[-2%] lg:text-base text-sm mt-[20px]">
              I seek to push the limits of creativity to create high-engaging,
              user-friendly, and memorable interactive experiences.
            </p>

            <div className="mt-[40px] flex flex-col gap-4">
              <a
                href="mailto:chigokizzy@gmail.com"
                target="__blank"
                className="lg:text-3xl text-xl font-semibold"
              >
                chigokizzy@gmail.com
              </a>
              <a
                href="tel:+2348164361932"
                target="__blank"
                className="lg:text-3xl text-xl font-semibold"
              >
                +2348164361932
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
