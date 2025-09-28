import SectionTitle from "../Common/SectionTitle";
import SingleService from "./SingleService";
import servicesData from "./servicesData";

const Services = () => {
  return (
    <>
      <section id="services" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Our Services"
            paragraph="Comprehensive solutions across Creative & Design, Digital Solutions, and AI & Automation to transform your business."
            center
          />

          {/* Service Categories */}
          <div className="mb-16">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {/* Creative & Design */}
              <div className="rounded-sm bg-white p-8 shadow-two duration-300 hover:shadow-one dark:bg-dark dark:shadow-three dark:hover:shadow-gray-dark lg:px-5 xl:px-8">
                <div className="mb-5 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                  <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
                    <path d="M20 0C8.95 0 0 8.95 0 20C0 31.05 8.95 40 20 40C31.05 40 40 31.05 40 20C40 8.95 31.05 0 20 0ZM20 36C11.16 36 4 28.84 4 20C4 11.16 11.16 4 20 4C28.84 4 36 11.16 36 20C36 28.84 28.84 36 20 36Z"/>
                  </svg>
                </div>
                <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Creative & Design
                </h3>
                <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
                  Stunning visual experiences that capture your brand essence.
                </p>
                <div className="mt-6">
                  <ul className="mb-4 space-y-2">
                    <li className="text-body-color">• Designing & Branding</li>
                    <li className="text-body-color">• Animation & Motion Graphics</li>
                    <li className="text-body-color">• Illustration</li>
                  </ul>
                  <a
                    href="https://wa.me/923324038258?text=Hi%20Tech%20Square,%20I'm%20interested%20in%20Creative%20&%20Design%20services"
                    target="_blank"
                    className="inline-block rounded-sm bg-primary px-6 py-3 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
                  >
                    Discuss on WhatsApp
                  </a>
                </div>
              </div>

              {/* Digital Solutions */}
              <div className="rounded-sm bg-white p-8 shadow-two duration-300 hover:shadow-one dark:bg-dark dark:shadow-three dark:hover:shadow-gray-dark lg:px-5 xl:px-8">
                <div className="mb-5 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-secondary bg-opacity-10 text-secondary">
                  <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
                    <path d="M32 8H8C6.9 8 6 8.9 6 10V30C6 31.1 6.9 32 8 32H32C33.1 32 34 31.1 34 30V10C34 8.9 33.1 8 32 8ZM30 28H10V12H30V28Z"/>
                  </svg>
                </div>
                <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Digital Solutions
                </h3>
                <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
                  Complete digital transformation for modern businesses.
                </p>
                <div className="mt-6">
                  <ul className="mb-4 space-y-2">
                    <li className="text-body-color">• E-commerce Development</li>
                    <li className="text-body-color">• E-book Creation</li>
                    <li className="text-body-color">• Web Development</li>
                    <li className="text-body-color">• SaaS Solutions</li>
                  </ul>
                  <a
                    href="https://wa.me/923324038258?text=Hi%20Tech%20Square,%20I'm%20interested%20in%20Digital%20Solutions"
                    target="_blank"
                    className="inline-block rounded-sm bg-secondary px-6 py-3 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
                  >
                    Discuss on WhatsApp
                  </a>
                </div>
              </div>

              {/* AI & Automation */}
              <div className="rounded-sm bg-white p-8 shadow-two duration-300 hover:shadow-one dark:bg-dark dark:shadow-three dark:hover:shadow-gray-dark lg:px-5 xl:px-8">
                <div className="mb-5 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-yellow bg-opacity-10 text-yellow">
                  <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
                    <path d="M20 4C13.37 4 8 9.37 8 16C8 22.63 13.37 28 20 28C26.63 28 32 22.63 32 16C32 9.37 26.63 4 20 4ZM20 24C15.58 24 12 20.42 12 16C12 11.58 15.58 8 20 8C24.42 8 28 11.58 28 16C28 20.42 24.42 24 20 24Z"/>
                  </svg>
                </div>
                <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  AI & Automation
                </h3>
                <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
                  Intelligent solutions that streamline and optimize your operations.
                </p>
                <div className="mt-6">
                  <ul className="mb-4 space-y-2">
                    <li className="text-body-color">• AI Solutions</li>
                    <li className="text-body-color">• Machine Learning</li>
                    <li className="text-body-color">• Chatbots</li>
                  </ul>
                  <a
                    href="https://wa.me/923324038258?text=Hi%20Tech%20Square,%20I'm%20interested%20in%20AI%20&%20Automation%20services"
                    target="_blank"
                    className="inline-block rounded-sm bg-yellow px-6 py-3 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
                  >
                    Discuss on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Individual Services Grid */}
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {servicesData.map((service) => (
              <SingleService key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
