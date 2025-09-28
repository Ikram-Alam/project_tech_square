import Breadcrumb from "@/components/Common/Breadcrumb";
import Quote from "@/components/Quote";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get a Quote | Tech Square - Instant WhatsApp Quote",
  description: "Get an instant quote for your project. Contact us on WhatsApp for quick assistance.",
  // other metadata
};

const QuotePage = () => {
  return (
    <>
      {/* <Breadcrumb
        pageName="Get a Quote"
        description="Ready to start your project? Get an instant quote by contacting us on WhatsApp."
      /> */}
      <br />
      <br />
      <Quote />
    </>
  );
};

export default QuotePage;
