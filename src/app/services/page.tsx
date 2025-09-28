import Breadcrumb from "@/components/Common/Breadcrumb";
import Features from "@/components/Features";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Tech Square - Creative & AI Solutions",
  description: "Explore our services in Creative & Design, Digital Solutions, and AI & Automation",
  // other metadata
};

const ServicesPage = () => {
  return (
    <>
      {/* <Breadcrumb
        pageName="Our Services"
        description="Discover our comprehensive range of services designed to help your business thrive in the digital world."
      /> */}
      <br />
      <br />
      <Features />
    </>
  );
};

export default ServicesPage;
