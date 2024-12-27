import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from 'next/font/google';
import { cn } from '@/lib/utils';
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Tableau de Katia',
  description: 'Experience luxury hair care at its finest at Tableau de Katia.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          cormorant.variable,
          montserrat.variable,
          'font-sans bg-black'
        )}
      >
        {children}
      </body>
    </html>
  );
}
