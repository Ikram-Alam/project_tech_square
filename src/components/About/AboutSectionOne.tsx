import Image from "next/image";
import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text, icon, color = "primary" }: { text: any; icon: any; color?: string }) => (
    <div className="group mb-6 flex items-center space-x-4 rounded-xl p-4 transition-all duration-300 hover:bg-white hover:shadow-lg dark:hover:bg-gray-dark">
      <div className={`flex h-12 w-12 items-center justify-center rounded-full bg-${color}/10 text-${color} transition-all duration-300 group-hover:bg-${color} group-hover:text-white group-hover:scale-110`}>
        {icon || checkIcon}
      </div>
      <p className="text-lg font-semibold text-body-color group-hover:text-black dark:group-hover:text-white transition-colors duration-300">
        {text}
      </p>
    </div>
  );

  const features = [
    {
      text: "Quality + Innovation",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" className="fill-current">
          <path d="M12 2l3.09 6.26L22 9l-6.91.74L12 16 8.91 9.74 2 9l6.91-.74L12 2z"/>
        </svg>
      ),
      color: "primary"
    },
    {
      text: "AI-Powered Solutions",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" className="fill-current">
          <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L19 8L21 9ZM3 9L5 8L3 7V9ZM12 18C10.9 18 10 18.9 10 20C10 21.1 10.9 22 12 22C13.1 22 14 21.1 14 20C14 18.9 13.1 18 12 18Z"/>
        </svg>
      ),
      color: "secondary"
    },
    {
      text: "Creative Excellence",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" className="fill-current">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      color: "yellow"
    },
    {
      text: "Digital Transformation",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" className="fill-current">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"/>
        </svg>
      ),
      color: "primary"
    },
    {
      text: "24/7 WhatsApp Support",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" className="fill-current">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884"/>
        </svg>
      ),
      color: "secondary"
    },
    {
      text: "Client-Centric Approach",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" className="fill-current">
          <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A2.999 2.999 0 0 0 17.04 7c-.8 0-1.54.37-2.01 1l-2.03 2.03L12 8.5C11.23 8.5 10.5 9.23 10.5 10s.73 1.5 1.5 1.5h1l2 2v3L12 19.5 9 16.5V15c0-.83-.67-1.5-1.5-1.5S6 14.17 6 15v3.5l3 3L12 22l3-1.5L18 22h2z"/>
        </svg>
      ),
      color: "yellow"
    }
  ];

  return (
    <section id="about" className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-primary/5 pt-16 dark:from-gray-dark dark:via-gray-dark dark:to-gray-dark md:pt-20 lg:pt-28">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 h-64 w-64 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 h-80 w-80 rounded-full bg-secondary/5 blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 h-72 w-72 rounded-full bg-yellow/5 blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Left Column - Content */}
            <div className="order-2 lg:order-1">
              {/* Header Section */}
              <div className="mb-8">
                <span className="mb-4 inline-block rounded-full bg-primary/10 px-6 py-2 text-sm font-semibold text-primary">
                  About Tech Square
                </span>
                <h2 className="mb-6 text-4xl font-bold text-black dark:text-white sm:text-5xl">
                  Empowering Businesses with
                  <span className="bg-gradient-to-r from-primary via-secondary to-yellow bg-clip-text text-transparent"> Creative & AI </span>
                  Solutions
                </h2>
                <p className="text-lg leading-relaxed text-body-color">
                  At Tech Square, we believe in the power of innovation. Our mission is to transform businesses through quality design, cutting-edge technology, and intelligent automation that drives real results.
                </p>
              </div>

              {/* Features Grid */}
              <div className="mb-10">
                <h3 className="mb-6 text-xl font-bold text-black dark:text-white">
                  Why Businesses Choose Us:
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {features.map((feature, index) => (
                    <List
                      key={index}
                      text={feature.text}
                      icon={feature.icon}
                      color={feature.color}
                    />
                  ))}
                </div>
              </div>

              {/* CTA Section */}
              <div className="rounded-2xl bg-gradient-to-r from-primary/10 via-secondary/10 to-yellow/10 p-6">
                <h3 className="mb-4 text-lg font-bold text-black dark:text-white">
                  Ready to Transform Your Business?
                </h3>
                <p className="mb-6 text-body-color">
                  Let's discuss how our innovative solutions can drive your business forward. Get instant support and expert guidance through WhatsApp.
                </p>
                
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="https://wa.me/923324038258?text=Hi%20Tech%20Square,%20I'm%20interested%20in%20your%20services"
                    target="_blank"
                    className="inline-flex items-center justify-center space-x-2 rounded-full bg-primary px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-primary/80 hover:scale-105"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" className="fill-current">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884"/>
                    </svg>
                    <span>Start a Conversation</span>
                  </Link>
                  
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center space-x-2 rounded-full border-2 border-primary/30 px-6 py-3 font-semibold text-primary transition-all duration-300 hover:border-primary hover:bg-primary/5"
                  >
                    <span>Explore Services</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" className="fill-current">
                      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column - Enhanced Visual */}
            <div className="order-1 lg:order-2">
              <div className="relative">
                {/* Main Visual Container */}
                <div className="group relative mx-auto aspect-square max-w-[500px] overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 via-secondary/20 to-yellow/20 p-8">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
                  
                  {/* Floating Elements */}
                  <div className="absolute top-6 right-6 rounded-full bg-white p-3 shadow-xl dark:bg-gray-dark">
                    <div className="h-6 w-6 rounded-full bg-gradient-to-r from-primary to-secondary animate-pulse"></div>
                  </div>
                  
                  <div className="absolute bottom-6 left-6 rounded-xl bg-white p-4 shadow-xl dark:bg-gray-dark">
                    <div className="flex items-center space-x-2">
                      <div className="h-3 w-3 rounded-full bg-green-500"></div>
                      <span className="text-sm font-semibold text-black dark:text-white">Active</span>
                    </div>
                  </div>

                  <div className="absolute top-1/2 right-8 rounded-lg bg-white/20 p-3 backdrop-blur-sm">
                    <svg width="24" height="24" viewBox="0 0 24 24" className="text-white">
                      <path fill="currentColor" d="M12 2l3.09 6.26L22 9l-6.91.74L12 16 8.91 9.74 2 9l6.91-.74L12 2z"/>
                    </svg>
                  </div>

                  {/* Center Content */}
                  <div className="flex h-full items-center justify-center">
                    <div className="text-center">
                      <div className="mx-auto mb-6 rounded-2xl bg-white/20 p-8 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                        <Image
                          src="/favicon.ico"
                          alt="Tech Square Logo"
                          width={80}
                          height={80}
                          className="mx-auto h-20 w-20 object-contain"
                        />
                      </div>
                      <h3 className="text-2xl font-bold text-white">Tech Square</h3>
                      <p className="text-white/80">Innovation Hub</p>
                    </div>
                  </div>

                  {/* Animated Dots */}
                  <div className="absolute top-1/4 left-1/4 h-3 w-3 rounded-full bg-primary/60 animate-ping"></div>
                  <div className="absolute bottom-1/3 right-1/3 h-4 w-4 rounded-full bg-secondary/60 animate-ping" style={{animationDelay: '1s'}}></div>
                  <div className="absolute top-2/3 left-1/3 h-2 w-2 rounded-full bg-yellow/60 animate-ping" style={{animationDelay: '2s'}}></div>
                </div>

                {/* Stats Cards */}
                <div className="mt-8 grid grid-cols-3 gap-4">
                  <div className="rounded-xl bg-white p-4 text-center shadow-lg dark:bg-gray-dark">
                    <div className="text-xl font-bold text-primary">200+</div>
                    <div className="text-xs text-body-color">Projects</div>
                  </div>
                  <div className="rounded-xl bg-white p-4 text-center shadow-lg dark:bg-gray-dark">
                    <div className="text-xl font-bold text-secondary">5min</div>
                    <div className="text-xs text-body-color">Response</div>
                  </div>
                  <div className="rounded-xl bg-white p-4 text-center shadow-lg dark:bg-gray-dark">
                    <div className="text-xl font-bold text-yellow">24/7</div>
                    <div className="text-xs text-body-color">Support</div>
                  </div>
                </div>

                {/* Achievement Badges */}
                <div className="mt-6 flex justify-center space-x-4">
                  <div className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                    🏆 Award Winning
                  </div>
                  <div className="rounded-full bg-secondary/10 px-4 py-2 text-sm font-semibold text-secondary">
                    ⚡ Fast Delivery
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
