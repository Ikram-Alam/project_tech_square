import Breadcrumb from "@/components/Common/Breadcrumb";
import Quote from "@/components/Quote";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Free Quote - Web Development, AI Automation & Design | Tech Square",
  description: "Get instant free quote for web development, AI automation, creative design projects. WhatsApp +923313587093 for quick response. No hidden costs, transparent pricing.",
  keywords: [
    "free quote tech square",
    "web development quote",
    "AI automation pricing",
    "creative design quote",
    "instant WhatsApp quote",
    "project estimation",
    "transparent pricing",
    "tech solutions cost"
  ],
  openGraph: {
    title: "Get Free Quote - Web Development, AI Automation & Design | Tech Square",
    description: "Get instant free quote for web development, AI automation, creative design projects. WhatsApp for quick response.",
    type: "website",
    url: "https://techsquare.com/quote",
    images: [
      {
        url: "https://techsquare.com/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Get Free Quote - Tech Square Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Get Free Quote - Web Development, AI Automation & Design | Tech Square",
    description: "Get instant free quote for web development, AI automation, creative design projects. WhatsApp for quick response.",
    images: ["https://techsquare.com/logo.jpeg"],
  },
  alternates: {
    canonical: "https://techsquare.com/quote",
  },
};

const QuotePage = () => {
  return (
    <>
      {/* <Breadcrumb
        pageName="Get a Quote"
        description="Ready to start your project? Get an instant quote by contacting us on WhatsApp."
      /> */}

      <Quote />
    </>
  );
};

export default QuotePage;
