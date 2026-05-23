import Link from 'next/link';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function NotFound() {
  return (
    <>
      <Navbar />

      <main className="project-detail">
        <div className="container">
          <h1 className="detail-title">Page Not Found</h1>

          <p className="detail-desc">
            Sorry, the page you are looking for does not exist.
          </p>

          <Link href="/" className="btn btn-primary">
            Go Home
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}