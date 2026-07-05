
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/about/About";
import Skills from "@/components/sections/skills/Skills";
import Projects from "@/components/sections/projects/Projects";
import Experience from "@/components/sections/experience/Experience";
import Education from "@/components/sections/education/Education";
import Contact from "@/components/sections/contact/contact";
import Footer from "@/components/sections/footer/footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
     
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
