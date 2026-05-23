import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import SkillsSection from '../components/home/SkillsSection';
import EducationSection from '../components/home/EducationSection';
import ProjectsSection from '../components/home/ProjectsSection';
import AISection from '../components/home/AISection';
import ContactSection from '../components/home/ContactSection';

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <EducationSection />
        <ProjectsSection />
        <AISection />
        <ContactSection />
      </main>

      <Footer />

      <a href="#top" className="btt show" aria-label="Back to top">
        ↑
      </a>
    </>
  );
}