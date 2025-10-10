import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-white to-secondary/5 py-16 dark:from-gray-dark dark:via-gray-dark dark:to-gray-dark md:py-20 lg:py-28">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/6 h-96 w-96 rounded-full bg-primary/5 blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 h-80 w-80 rounded-full bg-secondary/5 blur-3xl"></div>
          <div className="absolute top-1/2 right-1/6 h-72 w-72 rounded-full bg-yellow/5 blur-3xl"></div>
        </div>

        <div className="container relative z-10">
          {/* Enhanced Header */}
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-6 py-2 text-sm font-semibold text-primary">
              Our Expert Services
            </span>
            <h2 className="mb-6 text-4xl font-bold text-black dark:text-white sm:text-5xl">
              Comprehensive Solutions for
              <span className="bg-gradient-to-r from-primary via-secondary to-yellow bg-clip-text text-transparent"> Digital Success</span>
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-body-color">
              We offer comprehensive solutions across key areas to help your business succeed in the digital landscape. 
              From creative design to AI automation, we've got you covered.
            </p>
          </div>

          {/* Services Grid */}
          {/* <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature, index) => (
              <SingleFeature key={feature.id} feature={feature} index={index} />
            ))}
          </div> */}

          {/* Service Categories Overview */}
          <div className="mb-16 grid gap-8 lg:grid-cols-3">
            {/* Creative & Design */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 p-8 transition-all duration-300 hover:scale-105">
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/10"></div>
              <div className="relative z-10">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/20 text-primary">
                  <svg width="32" height="32" viewBox="0 0 24 24" className="fill-current">
                    <path d="M12 2l3.09 6.26L22 9l-6.91.74L12 16 8.91 9.74 2 9l6.91-.74L12 2z"/>
                  </svg>
                </div>
                <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
                  Creative & Design
                </h3>
                <p className="mb-6 text-body-color">
                  Visual identity, branding, and creative solutions that make your business stand out.
                </p>
                <Link
                  href="https://wa.me/923313587093?text=Hi%20Tech%20Square,%20I%20need%20creative%20design%20services"
                  target="_blank"
                  className="inline-flex items-center space-x-2 text-primary transition-colors hover:text-primary/80"
                >
                  <span className="font-semibold">Get Creative Solutions</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" className="fill-current">
                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Digital Solutions */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-secondary/10 to-secondary/5 p-8 transition-all duration-300 hover:scale-105">
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-secondary/10"></div>
              <div className="relative z-10">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/20 text-secondary">
                  <svg width="32" height="32" viewBox="0 0 24 24" className="fill-current">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"/>
                  </svg>
                </div>
                <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
                  Digital Solutions
                </h3>
                <p className="mb-6 text-body-color">
                  Web development, e-commerce platforms, and digital transformation services.
                </p>
                <Link
                  href="https://wa.me/923313587093?text=Hi%20Tech%20Square,%20I%20need%20digital%20solutions"
                  target="_blank"
                  className="inline-flex items-center space-x-2 text-secondary transition-colors hover:text-secondary/80"
                >
                  <span className="font-semibold">Explore Digital Services</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" className="fill-current">
                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                  </svg>
                </Link>
              </div>
            </div>

            {/* AI & Automation */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-yellow/10 to-yellow/5 p-8 transition-all duration-300 hover:scale-105">
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-yellow/10"></div>
              <div className="relative z-10">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow/20 text-yellow">
                  <svg width="32" height="32" viewBox="0 0 24 24" className="fill-current">
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L19 8L21 9ZM3 9L5 8L3 7V9ZM12 18C10.9 18 10 18.9 10 20C10 21.1 10.9 22 12 22C13.1 22 14 21.1 14 20C14 18.9 13.1 18 12 18Z"/>
                  </svg>
                </div>
                <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
                  AI & Automation
                </h3>
                <p className="mb-6 text-body-color">
                  Intelligent solutions, chatbots, and automation tools to streamline your business.
                </p>
                <Link
                  href="https://wa.me/923313587093?text=Hi%20Tech%20Square,%20I%20need%20AI%20automation%20solutions"
                  target="_blank"
                  className="inline-flex items-center space-x-2 text-yellow transition-colors hover:text-yellow/80"
                >
                  <span className="font-semibold">Discover AI Solutions</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" className="fill-current">
                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mb-16 grid grid-cols-2 gap-6 md:grid-cols-4">
            <div className="rounded-2xl bg-white p-6 text-center shadow-lg dark:bg-gray-dark">
              <div className="mb-2 text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-body-color">Services Offered</div>
            </div>
            <div className="rounded-2xl bg-white p-6 text-center shadow-lg dark:bg-gray-dark">
              <div className="mb-2 text-3xl font-bold text-secondary">200+</div>
              <div className="text-sm text-body-color">Projects Completed</div>
            </div>
            <div className="rounded-2xl bg-white p-6 text-center shadow-lg dark:bg-gray-dark">
              <div className="mb-2 text-3xl font-bold text-yellow">99%</div>
              <div className="text-sm text-body-color">Client Satisfaction</div>
            </div>
            <div className="rounded-2xl bg-white p-6 text-center shadow-lg dark:bg-gray-dark">
              <div className="mb-2 text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-body-color">Support Available</div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-r from-primary via-secondary to-yellow p-1">
              <div className="rounded-3xl bg-white p-8 dark:bg-gray-dark md:p-12">
                <h3 className="mb-4 text-3xl font-bold text-black dark:text-white">
                  Ready to Transform Your Business?
                </h3>
                <p className="mb-8 text-lg text-body-color">
                  Let's discuss your project and create a customized solution that perfectly fits your needs. 
                  Our expert team is ready to help you succeed.
                </p>
                
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Link
                    href="https://wa.me/923313587093?text=Hi%20Tech%20Square,%20I%20want%20to%20discuss%20my%20project"
                    target="_blank"
                    className="rounded-full bg-primary px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-primary/80 hover:scale-105"
                  >
                    🚀 Start Your Project
                  </Link>
                  
                  <Link
                    href="/contact"
                    className="rounded-full border-2 border-primary/30 px-8 py-4 font-semibold text-primary transition-all duration-300 hover:border-primary hover:bg-primary/5"
                  >
                    Get Free Consultation
                  </Link>
                  
                  <Link
                    href="/portfolio"
                    className="rounded-full bg-secondary px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-secondary/80 hover:scale-105"
                  >
                    View Our Work
                  </Link>
                </div>

                <div className="mt-6 text-sm text-body-color">
                  ⚡ Free consultation • 🎯 Custom solutions • 💬 Instant WhatsApp support
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
