import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Github,
  Instagram,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
        {/* Navigation Links */}
        <nav
          className="mb-10 flex flex-wrap justify-center gap-6 sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {[
            { name: "About Me", href: "#about-me" },
            { name: "Projects", href: "#projects" },
            { name: "Services", href: "#services" },
            { name: "Journey", href: "#journey" },
            { name: "Testimonials", href: "#testimonials" },
            { name: "Contact", href: "#contact" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm leading-6 text-muted-foreground hover:text-foreground"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Contact Information */}
        <div className="mb-10 text-center sm:text-left sm:flex sm:justify-center sm:space-x-12">
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <Mail size={16} />
              <span>harshacc99@gmail.com</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <Phone size={16} />
              <span>+94 76 295 2655</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <MapPin size={16} />
              <span>Colombo, Sri Lanka</span>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mb-10 flex justify-center space-x-6">
          <a
            href="https://www.facebook.com/profile.php?id=100087999532364&mibextid=JRoKGi"
            className="text-muted-foreground hover:text-foreground"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook />
          </a>

          <a
            href="https://linkedin.com/in/harsha-cv"
            className="text-muted-foreground hover:text-foreground"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin />
          </a>
          <a
            href="https://github.com/harshacv01"
            className="text-muted-foreground hover:text-foreground"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
          </a>
          <a
            href="https://www.instagram.com/harxsha_v?igsh=bjJ2ZzlyYW04N2Ro"
            className="text-muted-foreground hover:text-foreground"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-center text-sm leading-5 text-muted-foreground">
          © 2025 Harsha Vidanagamage. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
