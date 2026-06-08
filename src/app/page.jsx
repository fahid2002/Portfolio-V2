import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import SkillsSection from '../components/home/SkillsSection';
import FeaturedEducationSection from '../components/home/FeaturedEducationSection';
import FeaturedProjectsSection from '../components/home/FeaturedProjectsSection';
  {/* import AISection from '../components/home/AISection'; */}
import ContactSection from '../components/home/ContactSection';
import CursorGlow from '../components/home/CursorGlow';

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <FeaturedEducationSection />
        <FeaturedProjectsSection />
        <CursorGlow />
        {/* <AISection /> */}
        <ContactSection />
      </main>

      <Footer />

      <a href="#top" className="btt show" aria-label="Back to top">
        ↑
      </a>
    </>
  );
}