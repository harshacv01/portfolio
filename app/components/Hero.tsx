"use client";

import { motion } from "framer-motion";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

const words = [
  {
    text: "Full",
    className: "text-2xl sm:text-4xl",
  },
  {
    text: "Stack",
    className: "text-2xl sm:text-4xl",
  },
  {
    text: "Developer",
    className: "text-2xl sm:text-4xl",
  },
];

const projects = [
  {
    id: 1,
    category: "MongoDB",
  },
  {
    id: 2,
    category: "Express.js",
  },
  {
    id: 3,
    category: "React.js",
  },
  {
    id: 3,
    category: "Node.js",
  },
];

const categories = [...new Set(projects.map((project) => project.category))];

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col-reverse lg:flex-row lg:items-center lg:gap-x-10 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg lg:flex-shrink-0">
          <motion.h1
            className="mt-10 text-4xl font-bold tracking-tight text-foreground sm:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gradient">Hello I'm Harsha</span>
          </motion.h1>
          <TypewriterEffectSmooth words={words} />
          <motion.p
            className="mt-6 text-lg leading-8 text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Enhancing digital experiences that are smooth, scalable, and made to
            impress.
          </motion.p>
          <motion.div
            className="mt-10 grid grid-cols-2 sm:grid-cols-4  gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {categories.map((category) => (
              <div
                key={category}
                onClick={() => {}}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors 
    bg-background/80 backdrop-blur-md text-black 
    dark:bg-white/5 dark:text-white 
    border border-black/10 dark:border-white/10 
    hover:bg-black/10 dark:hover:bg-white/10 
     text-center`}
              >
                {category}
              </div>
            ))}
          </motion.div>
          <motion.div
            className="mt-10 flex items-center gap-x-6 justify-center sm:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a href="#projects" className="apple-button">
              Explore My Work
            </a>
          </motion.div>
        </div>
        <motion.div
          className="mx-auto mt-16 lg:mt-0 flex justify-center"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="relative">
            <img
              src="/assets/profile.png"
              alt="Flowers & Saints design concept"
              width={500}
              height={500}
              className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full shadow-xl ring-1 ring-gray-900/10 object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
