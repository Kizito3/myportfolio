import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import SkillsSection from "./components/Skills";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <SkillsSection />
      <Experience />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
