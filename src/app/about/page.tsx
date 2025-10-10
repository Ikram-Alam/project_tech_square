import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Tech Square - Leading Digital Solutions & AI Automation Company",
  description: "Learn about Tech Square's journey in transforming businesses through innovative digital solutions, AI automation, and creative design. Meet our expert team serving 200+ clients with 24/7 WhatsApp support.",
  keywords: [
    "about tech square",
    "digital solutions company",
    "AI automation experts",
    "creative design team",
    "web development agency",
    "business transformation",
    "tech company pakistan",
    "software development team"
  ],
  openGraph: {
    title: "About Tech Square - Leading Digital Solutions & AI Automation Company",
    description: "Learn about Tech Square's journey in transforming businesses through innovative digital solutions, AI automation, and creative design.",
    type: "website",
    url: "https://techsquare.com/about",
    images: [
      {
        url: "https://techsquare.com/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "About Tech Square - Digital Solutions Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Tech Square - Leading Digital Solutions & AI Automation Company",
    description: "Learn about Tech Square's journey in transforming businesses through innovative digital solutions, AI automation, and creative design.",
    images: ["https://techsquare.com/logo.jpeg"],
  },
  alternates: {
    canonical: "https://techsquare.com/about",
  },
};

const AboutPage = () => {
  return (
    <>
      {/* About Page Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "@id": "https://techsquare.com/about#aboutpage",
            url: "https://techsquare.com/about",
            name: "About Tech Square - Leading Digital Solutions & AI Automation Company",
            description: "Learn about Tech Square's journey in transforming businesses through innovative digital solutions, AI automation, and creative design.",
            mainEntity: {
              "@type": "Organization",
              "@id": "https://techsquare.com/#organization",
              name: "Tech Square",
              foundingDate: "2020",
              description: "Tech Square is a leading digital transformation company specializing in creative design, AI automation, and web development services.",
              numberOfEmployees: "10-50",
              slogan: "Empowering Businesses with Creative & AI Solutions",
              knowsAbout: [
                "Web Development",
                "AI Automation",
                "Creative Design",
                "Digital Marketing",
                "E-commerce Solutions",
                "Mobile App Development"
              ],
              memberOf: {
                "@type": "Organization",
                name: "Pakistan Software Houses Association"
              }
            }
          })
        }}
      />

      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
