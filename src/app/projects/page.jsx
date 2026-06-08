import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import ProjectsSection from '../../components/home/ProjectsSection';

export const metadata = {
  title: 'All Projects - Fahid Hasan',
  description: 'Explore all of my projects and works.',
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main>
        <div style={{ paddingTop: '4rem' }}>
          <ProjectsSection />
        </div>
      </main>
      <Footer />
      <a href="#top" className="btt show" aria-label="Back to top">
        ↑
      </a>
    </>
  );
}
