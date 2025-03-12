import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'EMV TLV Parser | Payment Systems Development Tool',
  description:
    'Advanced tool for parsing EMV (Europay, Mastercard, Visa) TLV data with comprehensive tag information, bit-level field analysis for TVR, AIP, AUC, and support for both 1-byte and 2-byte tags.',
  keywords: [
    'EMV',
    'TLV',
    'parser',
    'payment systems',
    'Terminal Verification Results',
    'Application Interchange Profile',
    'Application Usage Control',
    'card data',
    'hex parsing',
  ],
  authors: [
    {
      name: 'Frank David Corona',
      url: 'https://github.com/frankdavidcorona',
    },
  ],
  creator: 'Frank David Corona',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tlv-parser.vercel.app',
    title: 'EMV TLV Parser | Payment Systems Development Tool',
    description:
      'Advanced tool for parsing EMV TLV data with comprehensive tag information and bit-level field analysis',
    siteName: 'EMV TLV Parser',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EMV TLV Parser | Payment Systems Development Tool',
    description:
      'Advanced tool for parsing EMV TLV data with comprehensive tag information and bit-level field analysis',
    creator: '@chaplindev',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
