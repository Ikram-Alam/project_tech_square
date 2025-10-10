import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import ErrorBoundary from "@/components/Common/ErrorBoundary";
import PerformanceMonitor from "@/components/Common/PerformanceMonitor";
import GoogleAnalytics from "@/components/Analytics/GoogleAnalytics";
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
  metadataBase: new URL('https://techsquare.com'),
  title: {
    template: '%s | Tech Square - Digital Solutions & AI Automation',
    default: 'Tech Square - Leading Digital Solutions & AI Automation Company in Pakistan',
  },
  description: 'Transform your business with Tech Square\'s expert digital solutions, creative design services, AI automation, web development, and e-commerce solutions. Serving 200+ satisfied clients with 24/7 WhatsApp support.',
  keywords: [
    'digital solutions pakistan',
    'web development karachi',
    'AI automation services',
    'creative design agency',
    'tech solutions company',
    'software development pakistan',
    'business automation',
    'e-commerce development',
    'mobile app development',
    'digital marketing services',
    'Tech Square',
    'WhatsApp business support'
  ],
  authors: [{ name: 'Tech Square', url: 'https://techsquare.com' }],
  creator: 'Tech Square',
  publisher: 'Tech Square',
  category: 'Technology',
  classification: 'Digital Solutions & AI Automation Company',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://techsquare.com',
    title: 'Tech Square - Leading Digital Solutions & AI Automation Company',
    description: 'Transform your business with expert digital solutions, AI automation, and creative services. 24/7 WhatsApp support, 200+ satisfied clients.',
    siteName: 'Tech Square',
    images: [
      {
        url: '/logo.jpeg',
        width: 1200,
        height: 630,
        alt: 'Tech Square - Digital Solutions & AI Automation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tech Square - Digital Solutions & AI Automation',
    description: 'Transform your business with expert digital solutions, AI automation, and creative services. 24/7 WhatsApp support.',
    images: ['/logo.jpeg'],
    creator: '@TechSquare',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    other: {
      'msvalidate.01': 'your-bing-verification-code',
    },
  },
  alternates: {
    canonical: 'https://techsquare.com',
    languages: {
      'en-US': 'https://techsquare.com',
    },
  },
  other: {
    'contact:phone_number': '+923313587093',
    'contact:country_name': 'Pakistan',
    'contact:region': 'Karachi',
    'business:contact_data:street_address': 'Karachi, Pakistan',
    'business:contact_data:locality': 'Karachi',
    'business:contact_data:region': 'Sindh',
    'business:contact_data:postal_code': '75000',
    'business:contact_data:country_name': 'Pakistan',
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
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="preload" href="/logo.jpeg" as="image" />
        <link rel="preload" href="/favicon.ico" as="image" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Tech Square",
              description: "Leading Digital Solutions & AI Automation Company",
              url: "https://techsquare.com",
              logo: "https://techsquare.com/logo.jpeg",
              image: "https://techsquare.com/logo.jpeg",
              telephone: "+923313587093",
              email: "techsquare.corp@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Karachi",
                addressRegion: "Sindh",
                postalCode: "75000",
                addressCountry: "PK"
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "24.8607",
                longitude: "67.0011"
              },
              openingHours: [
                "Mo-Fr 09:00-18:00",
                "Sa 10:00-16:00"
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+923313587093",
                contactType: "customer service",
                availableLanguage: ["English", "Urdu"],
                contactOption: "TollFree"
              },
              sameAs: [
                "https://wa.me/923313587093"
              ],
              services: [
                "Digital Solutions",
                "Web Development", 
                "AI Automation",
                "Creative Design",
                "Mobile App Development",
                "E-commerce Solutions"
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "200"
              }
            })
          }}
        />
        
        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://techsquare.com/#organization",
              name: "Tech Square",
              description: "Transform your business with expert digital solutions and AI automation",
              url: "https://techsquare.com",
              telephone: "+923313587093",
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Karachi",
                addressLocality: "Karachi", 
                addressRegion: "Sindh",
                postalCode: "75000",
                addressCountry: "PK"
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 24.8607,
                longitude: 67.0011
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "09:00",
                  closes: "18:00"
                },
                {
                  "@type": "OpeningHoursSpecification", 
                  dayOfWeek: "Saturday",
                  opens: "10:00",
                  closes: "16:00"
                }
              ]
            })
          }}
        />
      </head>
      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <ErrorBoundary>
          <Providers>
            {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
              <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
            )}
            <Header />
            <main role="main">
              {children}
            </main>
            <Footer />
            <FloatingWhatsApp />
            <PerformanceMonitor />
          </Providers>
        </ErrorBoundary>
      </body>
    </html>
  );
}

import { Providers } from "./providers";

