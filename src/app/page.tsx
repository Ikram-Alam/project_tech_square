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
  title: "Tech Square - Creative & AI Solutions for Your Business",
  description: "Tech Square delivers innovative creative designs, digital solutions, and AI automation to help your business thrive. Let's build something creative together!",
  keywords: [
    "creative design",
    "digital solutions", 
    "AI automation",
    "web development",
    "business solutions",
    "tech square"
  ],
  openGraph: {
    title: "Tech Square - Creative & AI Solutions for Your Business",
    description: "Tech Square delivers innovative creative designs, digital solutions, and AI automation to help your business thrive.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Square - Creative & AI Solutions for Your Business",
    description: "Tech Square delivers innovative creative designs, digital solutions, and AI automation to help your business thrive.",
  },
};

export default function Home() {
  return (
    <>
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
