import Breadcrumb from "@/components/Common/Breadcrumb";
import Portfolio from "@/components/Portfolio";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Tech Square - Our Work & Case Studies",
  description: "View our portfolio of successful projects and case studies across various industries",
  // other metadata
};

const PortfolioPage = () => {
  return (
    <>
      {/* <Breadcrumb
        pageName="Our Portfolio"
        description="Explore our successful projects and case studies that showcase our expertise and creativity."
      /> */}
      <br />
      <br />
      <Portfolio />
    </>
  );
};

export default PortfolioPage;
