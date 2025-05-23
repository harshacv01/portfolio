"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Instagram, Mail } from "lucide-react";

export default function AboutMe() {
  // Social media links with icons
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://linkedin.com/in/harsha-cv",
      color: "hover:text-blue-600",
    },
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      url: "https://github.com/harshacv01",
      color: "hover:text-gray-800 dark:hover:text-gray-200",
    },
    {
      name: "WhatsApp",
      icon: (
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20.52 3.48A11.93 11.93 0 0012 0C5.37 0 0 5.37 0 12c0 2.11.55 4.19 1.59 6.01L0 24l6.18-1.62A11.92 11.92 0 0012 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.22-3.48-8.52zM12 22c-1.83 0-3.64-.5-5.23-1.45l-.37-.22-3.68.96.99-3.58-.24-.37A9.98 9.98 0 012 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.07-7.75c-.28-.14-1.66-.82-1.92-.91-.26-.1-.45-.14-.64.14s-.74.91-.91 1.1c-.17.18-.34.21-.63.07-.29-.14-1.21-.45-2.3-1.45-.85-.76-1.42-1.7-1.58-1.99-.16-.28-.02-.43.12-.57.13-.13.29-.34.43-.51.14-.17.18-.29.27-.48.09-.19.05-.35-.02-.49-.07-.14-.64-1.54-.88-2.11-.23-.55-.46-.48-.64-.49-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.35s-1 1.01-1 2.46c0 1.45 1.02 2.85 1.17 3.05.14.19 2 3.04 4.85 4.26.68.29 1.2.46 1.61.59.68.22 1.29.19 1.77.11.54-.08 1.66-.68 1.89-1.34.23-.66.23-1.23.16-1.34-.07-.11-.25-.18-.53-.32z" />
        </svg>
      ),
      url: "https://wa.me/94762952655",
      color: "hover:text-green-600",
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-5 h-5" />,
      url: "https://www.instagram.com/harxsha_v?igsh=bjJ2ZzlyYW04N2Ro",
      color: "hover:text-pink-600",
    },
    {
      name: "Email",
      icon: <Mail className="w-5 h-5" />,
      url: "mailto:harshacc99@gmail.com",
      color: "hover:text-blue-400",
    },
  ];

  return (
    <section id="about-me" className="bg-background py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
            About Me
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Hello, I'm{" "}
            <span
              className="
              text-gradient font-bold
              bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent
              text-xl sm:text-2xl
            "
            >
              Harsha Vidanagamage
            </span>{" "}
            passionate about creating dynamic web experiences. From frontend to
            backend, I thrive on solving complex problems with clean, efficient
            code. My expertise spans React, Next.js, and Node.js, and I'm always
            eager to learn more. When I'm not immersed in work, I'm exploring
            new ideas and staying curious. Life's about balance, and I love
            embracing every part of it. I believe in waking up each day eager to
            make a difference!
          </p>

          {/* Social Media Links */}
          <motion.div
            className="flex justify-center mt-8 space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                className={`p-3 rounded-full bg-primary/10 text-foreground ${social.color} transition-all duration-300 hover:scale-110`}
                aria-label={social.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <a
              href="https://www.flowersandsaints.com.au"
              target="_blank"
              rel="noopener noreferrer"
              className="apple-button inline-flex items-center"
            >
              Download CV
              <svg
                className="w-5 h-5 ml-2"
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
