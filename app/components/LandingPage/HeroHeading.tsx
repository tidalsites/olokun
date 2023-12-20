"use client";

import { motion } from "framer-motion";
import { Play } from "next/font/google";

const play = Play({ weight: "400", subsets: ["latin"] });

export const HeroHeading = () => {
  return (
    <h1
      className={`${play.className} text-4xl sm:text-5xl md:text-6xl text-zinc-200 flex flex-col gap-4 sm:mx-0 uppercase`}
    >
      <motion.div className="flex flex-col sm:items-end sm:flex-row sm:gap-4">
        <span className="pr-4 overflow-hidden relative sm:after:absolute sm:after:inset-0 sm:after:-z-10 after:sm:border-b-4 after:sm:border-b-red-700 sm:after:-translate-x-[calc(100%+5px)] sm:after:animate-slideBorderRight">
          Where
        </span>
        <motion.span
          initial={{ scaleY: 0, opacity: 0, translateY: "100%" }}
          animate={{ scaleY: 1, opacity: 1, translateY: 0 }}
          transition={{ duration: 0.85 }}
          className="px-4 py-4 sm:py-0 -mx-4 relative overflow-hidden after:absolute after:inset-0 after:translate-x-[calc(100%+5px)] after:bg-red-700 after:-z-10 after:animate-slideLeft"
        >
          INGENUITY
        </motion.span>
      </motion.div>
      <div className="flex flex-col sm:items-end sm:flex-row sm:gap-4">
        <span className="pr-4 overflow-hidden relative after:absolute sm:after:inset-0 sm:after:-z-10 sm:after:border-b-4 sm:after:border-b-red-700 sm:after:-translate-x-[calc(100%+5px)] sm:after:animate-slideBorderRightDelay">
          Creates
        </span>
        <motion.span
          initial={{ scaleY: 0, opacity: 0, translateY: "100%" }}
          animate={{ scaleY: 1, opacity: 1, translateY: 0 }}
          transition={{ duration: 0.85, delay: 0.25 }}
          className="px-4 py-4 sm:py-0 -mx-4 relative overflow-hidden after:absolute after:inset-0 after:translate-x-[calc(100%+5px)] after:bg-red-700 after:-z-10 after:animate-slideLeftDelay"
        >
          INNOVATION
        </motion.span>
      </div>
    </h1>
  );
};
