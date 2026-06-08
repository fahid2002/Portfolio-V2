import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import SkillsSection from '../../components/home/SkillsSection';

export const metadata = {
  title: 'Skills & Technologies - Fahid Hasan',
  description: 'Explore my technical skills and technologies I work with.',
};

export default function SkillsPage() {
  return (
    <>
      <Navbar />
      <main>
        <div style={{ paddingTop: '4rem' }}>
          <SkillsSection />
        </div>
      </main>
      <Footer />
      <a href="#top" className="btt show" aria-label="Back to top">
        ↑
      </a>
    </>
  );
}
