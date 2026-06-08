import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import EducationSection from '../../components/home/EducationSection';

export const metadata = {
  title: 'Education - Fahid Hasan',
  description: 'My educational background and academic achievements.',
};

export default function EducationPage() {
  return (
    <>
      <Navbar />
      <main>
        <div style={{ paddingTop: '4rem' }}>
          <EducationSection />
        </div>
      </main>
      <Footer />
      <a href="#top" className="btt show" aria-label="Back to top">
        ↑
      </a>
    </>
  );
}
