import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Tech Square - Get Free Consultation | 24/7 WhatsApp Support",
  description: "Contact Tech Square for digital solutions, AI automation, and creative design services. 24/7 WhatsApp support +923313587093. Free consultation available. Based in Karachi, Pakistan.",
  keywords: [
    "contact tech square",
    "WhatsApp business support",
    "free consultation",
    "digital solutions contact",
    "AI automation consultation",
    "web development quote",
    "tech square karachi",
    "business automation contact",
    "creative design consultation"
  ],
  openGraph: {
    title: "Contact Tech Square - Get Free Consultation | 24/7 WhatsApp Support",
    description: "Contact Tech Square for digital solutions, AI automation, and creative design services. 24/7 WhatsApp support available.",
    type: "website",
    url: "https://techsquare.com/contact",
    images: [
      {
        url: "https://techsquare.com/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Contact Tech Square - 24/7 WhatsApp Support",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Tech Square - Get Free Consultation | 24/7 WhatsApp Support",
    description: "Contact Tech Square for digital solutions, AI automation, and creative design services. 24/7 WhatsApp support available.",
    images: ["https://techsquare.com/logo.jpeg"],
  },
  alternates: {
    canonical: "https://techsquare.com/contact",
  },
};

const ContactPage = () => {
  return (
    <>
      {/* Contact Page Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "@id": "https://techsquare.com/contact#contactpage",
            url: "https://techsquare.com/contact",
            name: "Contact Tech Square - Get Free Consultation",
            description: "Contact Tech Square for digital solutions, AI automation, and creative design services. 24/7 WhatsApp support available.",
            mainEntity: {
              "@type": "ContactPoint",
              telephone: "+923313587093",
              contactType: "customer service",
              availableLanguage: ["English", "Urdu"],
              contactOption: ["TollFree"],
              areaServed: {
                "@type": "Country",
                name: "Pakistan"
              },
              hoursAvailable: [
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
            },
            potentialAction: {
              "@type": "CommunicateAction",
              name: "Contact via WhatsApp",
              target: "https://wa.me/923313587093"
            }
          })
        }}
      />

      <Contact />
    </>
  );
};

export default ContactPage;
