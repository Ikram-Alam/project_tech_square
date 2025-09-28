import Breadcrumb from "@/components/Common/Breadcrumb";
import Clients from "@/components/Clients";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clients & Testimonials | Tech Square",
  description: "See what our clients say about our services and explore our client testimonials",
  // other metadata
};

const ClientsPage = () => {
  return (
    <>
      {/* <Breadcrumb
        pageName="Our Clients"
        description="Trusted by businesses worldwide. See what our clients say about working with Tech Square."
      /> */}
      <br />
      <br />
      <Clients />
    </>
  );
};

export default ClientsPage;
