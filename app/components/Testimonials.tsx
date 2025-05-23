"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { AnimatedTestimonials } from "./ui/animated-testimonials";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonials = [
  {
    quote:
      "Working with Harsha has been a game-changer. He mentored me in Spring Boot API development with incredible patience and clarity. We've also collaborated on several MERN stack freelance projects where his technical depth and reliability consistently impressed me.",
    name: "Munik Sandhu",
    title: "Product Developer",
  },
  {
    quote:
      "Harsha has been an incredible mentor throughout my journey. I met him through Teachron, and he guided me in developing a full-stack shopping management system called Little Outfit using the MERN stack. From building the admin panel to refining the backend, his support was pivotal to the project’s success. I learned a lot working with him.",
    name: "Mohammed Farhan",
    title: "Student - SLIIT",
  },
  {
    quote:
      "I’ve worked with Harsha on several assignments, primarily providing support with Python and Node.js. He's always clear with requirements, communicates effectively, and makes collaboration smooth and productive. It’s been a great experience contributing to his projects.",
    name: "Venkatesh",
    title: "Freelance Client",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
          Testimonials
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          What People Say About Me
        </p>
      </motion.div>

      <div className="mt-10 rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </section>
  );
}
