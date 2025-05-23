import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import PortfolioGrid from "./components/PortfolioGrid";
import Marquee from "./components/Marquee";
import ContactForm from "./components/ContactForm";
import NewsletterSubscribe from "./components/NewsletterSubscribe";
import { Timeline } from "./components/ui/timeline";
import Testimonials from "./components/Testimonials";
import FloatingActionButton from "./components/FloatingActionButton";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      <Services />
      <PortfolioGrid />
      <Timeline />
      <Testimonials />
      <ContactForm />
      <FloatingActionButton />
    </>
  );
}
