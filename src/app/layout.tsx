import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import ErrorBoundary from "@/components/Common/ErrorBoundary";
import PerformanceMonitor from "@/components/Common/PerformanceMonitor";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import "../styles/index.css";

// Optimize font loading
const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial']
});

// Lazy load FloatingWhatsApp since it's not critical for initial page load
const FloatingWhatsApp = dynamic(() => import("@/components/WhatsApp/FloatingWhatsApp"), {
  loading: () => null,
});

// Metadata for SEO
export const metadata: Metadata = {
  title: {
    template: '%s | Tech Square - Digital Solutions & AI Automation',
    default: 'Tech Square - Leading Digital Solutions & AI Automation Company',
  },
  description: 'Transform your business with Tech Square\'s expert digital solutions, creative design services, AI automation, and web development. Join 200+ satisfied clients worldwide.',
  keywords: [
    'digital solutions',
    'web development',
    'AI automation',
    'creative design',
    'tech solutions',
    'software development',
    'business automation'
  ],
  authors: [{ name: 'Tech Square' }],
  creator: 'Tech Square',
  publisher: 'Tech Square',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://techsquare.com',
    title: 'Tech Square - Leading Digital Solutions & AI Automation',
    description: 'Transform your business with expert digital solutions and AI automation services.',
    siteName: 'Tech Square',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tech Square - Digital Solutions & AI Automation',
    description: 'Transform your business with expert digital solutions and AI automation services.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://wa.me" />
        <link rel="preload" href="/logo.jpeg" as="image" />
      </head>
      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <ErrorBoundary>
          <Providers>
            <Header />
            <main role="main">
              {children}
            </main>
            <Footer />
            <ScrollToTop />
            <FloatingWhatsApp />
            <PerformanceMonitor />
          </Providers>
        </ErrorBoundary>
      </body>
    </html>
  );
}

import { Providers } from "./providers";

