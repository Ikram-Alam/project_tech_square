import Breadcrumb from "@/components/Common/Breadcrumb";
import Portfolio from "@/components/Portfolio";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio - Our Successful Projects & Case Studies | Tech Square",
  description: "Explore Tech Square's portfolio of successful web development, AI automation, and creative design projects. See case studies from 200+ satisfied clients across various industries.",
  keywords: [
    "tech square portfolio",
    "web development projects",
    "AI automation case studies",
    "creative design portfolio",
    "successful projects",
    "client case studies",
    "digital solutions examples",
    "tech company portfolio"
  ],
  openGraph: {
    title: "Portfolio - Our Successful Projects & Case Studies | Tech Square",
    description: "Explore Tech Square's portfolio of successful web development, AI automation, and creative design projects from 200+ satisfied clients.",
    type: "website",
    url: "https://techsquare.com/portfolio",
    images: [
      {
        url: "https://techsquare.com/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Tech Square Portfolio - Successful Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio - Our Successful Projects & Case Studies | Tech Square",
    description: "Explore Tech Square's portfolio of successful web development, AI automation, and creative design projects.",
    images: ["https://techsquare.com/logo.jpeg"],
  },
  alternates: {
    canonical: "https://techsquare.com/portfolio",
  },
};

const PortfolioPage = () => {
  return (
    <>
      {/* <Breadcrumb
        pageName="Our Portfolio"
        description="Explore our successful projects and case studies that showcase our expertise and creativity."
      /> */}

      <Portfolio />
    </>
  );
};

export default PortfolioPage;
