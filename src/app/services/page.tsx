import Breadcrumb from "@/components/Common/Breadcrumb";
import Features from "@/components/Features";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services - Web Development, AI Automation & Creative Design | Tech Square",
  description: "Professional digital services including web development, AI automation, creative design, e-commerce solutions, and mobile app development. 24/7 WhatsApp support. Free consultation available.",
  keywords: [
    "web development services",
    "AI automation solutions",
    "creative design agency",
    "e-commerce development",
    "mobile app development",
    "digital marketing services",
    "business automation",
    "tech solutions pakistan",
    "software development",
    "WhatsApp business support"
  ],
  openGraph: {
    title: "Services - Web Development, AI Automation & Creative Design | Tech Square",
    description: "Professional digital services including web development, AI automation, creative design, e-commerce solutions, and mobile app development.",
    type: "website",
    url: "https://techsquare.com/services",
    images: [
      {
        url: "https://techsquare.com/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Tech Square Services - Web Development & AI Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services - Web Development, AI Automation & Creative Design | Tech Square",
    description: "Professional digital services including web development, AI automation, creative design, e-commerce solutions, and mobile app development.",
    images: ["https://techsquare.com/logo.jpeg"],
  },
  alternates: {
    canonical: "https://techsquare.com/services",
  },
};

const ServicesPage = () => {
  return (
    <>
      {/* Services Page Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://techsquare.com/services#service",
            name: "Digital Transformation Services",
            description: "Comprehensive digital services including web development, AI automation, creative design, and e-commerce solutions",
            provider: {
              "@type": "Organization",
              "@id": "https://techsquare.com/#organization"
            },
            serviceType: [
              "Web Development",
              "AI Automation",
              "Creative Design",
              "E-commerce Development",
              "Mobile App Development",
              "Digital Marketing"
            ],
            areaServed: {
              "@type": "Country",
              name: "Pakistan"
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Tech Square Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Web Development",
                    description: "Custom website and web application development"
                  }
                },
                {
                  "@type": "Offer", 
                  itemOffered: {
                    "@type": "Service",
                    name: "AI Automation",
                    description: "Business process automation using artificial intelligence"
                  }
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service", 
                    name: "Creative Design",
                    description: "Brand identity, UI/UX design, and creative solutions"
                  }
                }
              ]
            },
            offers: {
              "@type": "Offer",
              availability: "https://schema.org/InStock",
              price: "Contact for Quote",
              priceCurrency: "PKR"
            }
          })
        }}
      />

      <Features />
    </>
  );
};

export default ServicesPage;
