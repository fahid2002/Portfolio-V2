import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import AboutSection from '../../components/home/AboutSection';

export const metadata = {
  title: 'About Me - Fahid Hasan',
  description: 'Learn more about Fahid Hasan, a MERN Stack Developer from Bangladesh.',
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <div style={{ paddingTop: '4rem' }}>
          <AboutSection />
        </div>
      </main>
      <Footer />
      <a href="#top" className="btt show" aria-label="Back to top">
        ↑
      </a>
    </>
  );
}
