import './globals.css';

export const metadata = {
  title: 'Fahid Hasan - MERN Stack Developer',
  description:
    'Personal portfolio of Fahid Hasan, MERN Stack Developer from Dhaka, Bangladesh.',
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <body id="top">{children}</body>
    </html>
  );
}
