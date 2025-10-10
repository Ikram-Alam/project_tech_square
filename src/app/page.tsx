import dynamic from "next/dynamic";
import { Metadata } from "next";
import Hero from "@/components/Hero";
import ScrollUp from "@/components/Common/ScrollUp";

// Critical above-the-fold components (no lazy loading)
import Features from "@/components/Features";

// Non-critical components with lazy loading
const AboutSectionOne = dynamic(() => import("@/components/About/AboutSectionOne"), {
  loading: () => (
    <div className="flex items-center justify-center py-20">
      <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
    </div>
  ),
});

const Portfolio = dynamic(() => import("@/components/Portfolio"), {
  loading: () => (
    <div className="flex items-center justify-center py-20">
      <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
    </div>
  ),
});

const Video = dynamic(() => import("@/components/Video"), {
  loading: () => (
    <div className="flex items-center justify-center py-20">
      <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
    </div>
  ),
});

const Clients = dynamic(() => import("@/components/Clients"), {
  loading: () => (
    <div className="flex items-center justify-center py-20">
      <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
    </div>
  ),
});

const Contact = dynamic(() => import("@/components/Contact"), {
  loading: () => (
    <div className="flex items-center justify-center py-20">
      <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
    </div>
  ),
});

export const metadata: Metadata = {
  title: "Tech Square - Transform Your Business with Creative & AI Solutions",
  description: "Leading digital transformation company in Pakistan. Expert web development, AI automation, creative design & e-commerce solutions. 24/7 WhatsApp support. 200+ happy clients. Get free consultation now!",
  keywords: [
    "digital transformation pakistan",
    "web development karachi",
    "AI automation services",
    "creative design agency",
    "e-commerce development",
    "business automation",
    "mobile app development",
    "tech solutions company",
    "WhatsApp business support",
    "digital marketing pakistan",
    "Tech Square"
  ],
  openGraph: {
    title: "Tech Square - Transform Your Business with Creative & AI Solutions",
    description: "Leading digital transformation company in Pakistan. Expert web development, AI automation, creative design & e-commerce solutions. 24/7 WhatsApp support.",
    type: "website",
    url: "https://techsquare.com",
    images: [
      {
        url: "https://techsquare.com/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Tech Square - Digital Solutions & AI Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Square - Transform Your Business with Creative & AI Solutions",
    description: "Leading digital transformation company in Pakistan. Expert web development, AI automation, creative design & e-commerce solutions.",
    images: ["https://techsquare.com/logo.jpeg"],
  },
  alternates: {
    canonical: "https://techsquare.com",
  },
};

export default function Home() {
  return (
    <>
      {/* Home Page Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://techsquare.com/#webpage",
            url: "https://techsquare.com",
            name: "Tech Square - Transform Your Business with Creative & AI Solutions",
            description: "Leading digital transformation company in Pakistan. Expert web development, AI automation, creative design & e-commerce solutions.",
            isPartOf: {
              "@type": "WebSite",
              "@id": "https://techsquare.com/#website"
            },
            about: {
              "@type": "Organization",
              "@id": "https://techsquare.com/#organization"
            },
            mainEntity: {
              "@type": "Service",
              name: "Digital Transformation Services",
              description: "Comprehensive digital solutions including web development, AI automation, and creative design",
              provider: {
                "@type": "Organization",
                "@id": "https://techsquare.com/#organization"
              },
              serviceType: [
                "Web Development",
                "AI Automation", 
                "Creative Design",
                "E-commerce Development",
                "Mobile App Development"
              ],
              areaServed: {
                "@type": "Country",
                name: "Pakistan"
              }
            }
          })
        }}
      />
      
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      <AboutSectionOne />
      <Portfolio />
      <Clients />
      <Contact />
    </>
  );
}
