import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import ContactSection from '../../components/home/ContactSection';

export const metadata = {
  title: 'Contact Me - Fahid Hasan',
  description: 'Get in touch with me and let\'s work together.',
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <div style={{ paddingTop: '4rem' }}>
          <ContactSection />
        </div>
      </main>
      <Footer />
      <a href="#top" className="btt show" aria-label="Back to top">
        ↑
      </a>
    </>
  );
}
