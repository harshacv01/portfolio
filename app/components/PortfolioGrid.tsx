"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Next.js Financial Dashboard",
    description: "Comprehensive dashboard for a fintech startup",
    imageUrl: "/assets/dashboard.png?height=800&width=600",
    category: "Full Stack",
    projectUrl: "https://dashboard-sandy-ten.vercel.app/dashboard",
  },
  {
    id: 2,
    title: "E-commerce Store",
    description: "A full-fledged e-commerce platform",
    imageUrl: "/assets/e-commerce.png?height=800&width=600",
    category: "Frontend",
    projectUrl: "https://e-commerce-fe-ten.vercel.app",
  },
  {
    id: 3,
    title: "E-commerce Store Admin",
    description: "Admin panel for managing the e-commerce store",
    imageUrl: "/assets/forever-admin.png?height=800&width=600",
    category: "Frontend",
    projectUrl: "https://e-commerce-admin-one-gamma.vercel.app",
  },
  {
    id: 4,
    title: "Real Estate Web App",
    description: "A platform for buying and selling properties",
    imageUrl: "/assets/real-estate.png?height=800&width=600",
    category: "Frontend",
    projectUrl: "https://real-estate-app-khaki-six.vercel.app",
  },
  {
    id: 5,
    title: "Skill Gate",
    description: "A educational platform for skill development",
    imageUrl: "/assets/skill-gate.png?height=800&width=600",
    category: "Frontend",
    projectUrl: "https://skill-gate-v03.vercel.app",
  },
  {
    id: 6,
    title: "E-commerce Store Backend",
    description: "Backend for the e-commerce store",
    imageUrl: "",
    category: "Backend",
    projectUrl: "https://e-commerce-be-ashen.vercel.app",
  },
];

const categories = [
  "All",
  ...new Set(projects.map((project) => project.category)),
];

export default function PortfolioGrid() {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            My Projects
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A showcase of my minimalist designs and creative solutions.
          </p>
        </motion.div>

        <div className="flex justify-center space-x-4 mb-8 flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-background rounded-3xl shadow-lg overflow-hidden hover-lift transition-all duration-300 ease-in-out border-2 border-transparent hover:border-primary/10"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.imageUrl || "/placeholder.svg"}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                  <motion.div
                    className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300"
                    whileHover={{ opacity: 1 }}
                  >
                    <p className="text-white text-center px-4">
                      {project.description}
                    </p>
                  </motion.div>
                </div>
                <div className="p-6">
                  <div className="text-sm font-medium text-primary mb-1">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <a
                    href={project?.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center"
                  >
                    View Project
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
