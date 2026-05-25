import './globals.css';

export const metadata = {
  title: 'Fahid Hasan - MERN Stack Developer',
  description:
    'Personal portfolio of Fahid Hasan, MERN Stack Developer from Dhaka, Bangladesh.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <body id="top">{children}</body>
    </html>
  );
}