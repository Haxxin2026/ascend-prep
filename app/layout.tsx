import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://ascendprep.co'),
  title: {
    default: 'Ascend Prep | SAT Prep & College Admissions Coaching',
    template: '%s | Ascend Prep'
  },
  description:
    'Personalized SAT Performance Coaching and College Admissions Strategy from the founder of Ascend Prep, admitted to MIT, Princeton, and Yale.',
  openGraph: {
    title: 'Ascend Prep',
    description: 'Personalized SAT Prep & College Admissions Coaching from an MIT, Princeton, and Yale admit.',
    url: 'https://ascendprep.co',
    siteName: 'Ascend Prep',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ascend Prep'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ascend Prep',
    description: 'SAT Prep & College Admissions Coaching from an MIT, Princeton, and Yale admit.',
    images: ['/images/og-image.jpg']
  },
  icons: {
    icon: '/images/ascend-icon-512.png',
    apple: '/images/ascend-icon-512.png'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
