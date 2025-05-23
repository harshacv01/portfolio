"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { MoonIcon, SunIcon, Menu, X } from "lucide-react";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <motion.header
        className="sticky top-0 z-40 bg-background/80 backdrop-blur-md"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 relative"
          aria-label="Global"
        >
          {/* Logo - Left */}
          <div className="flex z-10">
            <Link
              href="/"
              className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
            >
              Harsha V
            </Link>
          </div>

          {/* Desktop Navigation - Center */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="flex gap-x-12">
              <Link
                href="#about-me"
                className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
              >
                About Me
              </Link>
              <Link
                href="#services"
                className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
              >
                Services
              </Link>
              <Link
                href="#projects"
                className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
              >
                Projects
              </Link>
              <Link
                href="#journey"
                className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
              >
                Journey
              </Link>
              <Link
                href="#testimonials"
                className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
              >
                Testimonials
              </Link>
              <Link
                href="#contact"
                className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Theme Toggle & Mobile Menu Button - Right */}
          <div className="flex items-center gap-4 z-10">
            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="rounded-full p-2 bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                aria-label={
                  theme === "dark"
                    ? "Switch to light mode"
                    : "Switch to dark mode"
                }
              >
                {theme === "dark" ? (
                  <SunIcon className="h-5 w-5" />
                ) : (
                  <MoonIcon className="h-5 w-5" />
                )}
              </button>
            )}

            {/* Mobile Menu Button */}
            <button
              className="md:hidden rounded-full p-2 bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
