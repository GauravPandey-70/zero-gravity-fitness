import { Space_Grotesk, Manrope } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['300', '400', '500', '600', '700'],
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  title: 'KINETIC PRECISION | High Performance Lab',
  description: 'Step into the future of physical evolution. Kinetic Precision merges advanced biometrics with elite-level mechanical training.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${manrope.variable} dark`}>
      <body className="bg-background text-on-background selection:bg-primary selection:text-black">
        {children}
      </body>
    </html>
  );
}
