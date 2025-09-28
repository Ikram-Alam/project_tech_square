import Image from "next/image";
import Link from "next/link";

const AboutSectionTwo = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-primary/5 to-secondary/5 py-16 dark:from-gray-dark dark:via-gray-dark dark:to-gray-dark md:py-20 lg:py-28">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 h-72 w-72 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 h-80 w-80 rounded-full bg-secondary/10 blur-3xl"></div>
        <div className="absolute top-1/2 right-1/3 h-64 w-64 rounded-full bg-yellow/10 blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Column - Visual Content */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              {/* Main Image Container */}
              <div className="group relative mx-auto aspect-square max-w-[500px] overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 via-secondary/20 to-yellow/20 p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
                
                {/* Floating Elements */}
                <div className="absolute top-8 right-8 rounded-full bg-white p-4 shadow-xl dark:bg-gray-dark">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-r from-primary to-secondary"></div>
                </div>
                
                <div className="absolute bottom-8 left-8 rounded-xl bg-white p-4 shadow-xl dark:bg-gray-dark">
                  <div className="flex items-center space-x-2">
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    <span className="text-sm font-semibold text-black dark:text-white">Online</span>
                  </div>
                </div>

                {/* Center Icon */}
                <div className="flex h-full items-center justify-center">
                  <div className="rounded-2xl bg-white/20 p-8 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                    <Image
                      src="/favicon.ico"
                      alt="Tech Square Logo"
                      width={80}
                      height={80}
                      className="h-20 w-20 object-contain"
                    />
                  </div>
                </div>

                {/* Animated Circles */}
                <div className="absolute top-1/4 left-1/4 h-4 w-4 rounded-full bg-primary/50 animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 h-6 w-6 rounded-full bg-secondary/50 animate-pulse" style={{animationDelay: '1s'}}></div>
                <div className="absolute top-1/2 left-1/6 h-3 w-3 rounded-full bg-yellow/50 animate-pulse" style={{animationDelay: '2s'}}></div>
              </div>

              {/* Stats Cards */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-white p-4 shadow-lg dark:bg-gray-dark">
                  <div className="text-2xl font-bold text-primary">5min</div>
                  <div className="text-sm text-body-color">Response Time</div>
                </div>
                <div className="rounded-xl bg-white p-4 shadow-lg dark:bg-gray-dark">
                  <div className="text-2xl font-bold text-secondary">24/7</div>
                  <div className="text-sm text-body-color">Support Available</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="order-1 lg:order-2">
            <div className="max-w-[600px]">
              {/* Header */}
              <div className="mb-8">
                <span className="mb-4 inline-block rounded-full bg-primary/10 px-6 py-2 text-sm font-semibold text-primary">
                  Why Choose Us
                </span>
                <h2 className="mb-6 text-4xl font-bold text-black dark:text-white sm:text-5xl">
                  Your Success is Our
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Mission</span>
                </h2>
                <p className="text-lg text-body-color">
                  We don't just build solutions - we craft digital experiences that transform businesses and delight users. Here's what makes us different.
                </p>
              </div>

              {/* Feature Cards */}
              <div className="space-y-6">
                {/* Feature 1 */}
                <div className="group rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl dark:bg-gray-dark">
                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      <svg width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                        <path d="M12 2l3.09 6.26L22 9l-6.91.74L12 16 8.91 9.74 2 9l6.91-.74L12 2z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2 text-xl font-bold text-black dark:text-white">
                        Creative Excellence Meets Technology
                      </h3>
                      <p className="text-body-color">
                        We combine stunning design with cutting-edge technology to deliver solutions that not only look amazing but also drive real business results and efficiency.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="group rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl dark:bg-gray-dark">
                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10 text-secondary transition-colors group-hover:bg-secondary group-hover:text-white">
                      <svg width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2 text-xl font-bold text-black dark:text-white">
                        Instant WhatsApp Support & Communication
                      </h3>
                      <p className="text-body-color">
                        Get immediate assistance, project updates, and expert guidance through WhatsApp. Our dedicated team responds within 5 minutes to keep your projects moving forward.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="group rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl dark:bg-gray-dark">
                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow/10 text-yellow transition-colors group-hover:bg-yellow group-hover:text-white">
                      <svg width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                        <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L19 8L21 9ZM3 9L5 8L3 7V9ZM12 18C10.9 18 10 18.9 10 20C10 21.1 10.9 22 12 22C13.1 22 14 21.1 14 20C14 18.9 13.1 18 12 18Z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2 text-xl font-bold text-black dark:text-white">
                        Future-Ready AI & Automation Solutions
                      </h3>
                      <p className="text-body-color">
                        Stay ahead with our AI-powered solutions and modern development practices. We ensure your business remains competitive in today's rapidly evolving digital landscape.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="mt-10">
                <div className="rounded-2xl bg-gradient-to-r from-primary/10 via-secondary/10 to-yellow/10 p-6">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                    Ready to Experience the Tech Square Difference?
                  </h3>
                  <p className="mb-6 text-body-color">
                    Join 200+ satisfied clients who have transformed their businesses with our expert solutions. Let's discuss your project today!
                  </p>
                  
                  <div className="flex flex-col gap-4 sm:flex-row">
                    <Link
                      href="https://wa.me/923324038258?text=Hi%20Tech%20Square,%20I%20want%20to%20learn%20more%20about%20your%20services"
                      target="_blank"
                      className="inline-flex items-center justify-center space-x-2 rounded-full bg-primary px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-primary/80 hover:scale-105"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" className="fill-current">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.686"/>
                      </svg>
                      <span>Chat on WhatsApp</span>
                    </Link>
                    
                    <Link
                      href="/portfolio"
                      className="inline-flex items-center justify-center space-x-2 rounded-full border-2 border-primary/30 px-6 py-3 font-semibold text-primary transition-all duration-300 hover:border-primary hover:bg-primary/5"
                    >
                      <span>View Our Work</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" className="fill-current">
                        <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">200+</div>
                  <div className="text-sm text-body-color">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-secondary">99%</div>
                  <div className="text-sm text-body-color">Client Satisfaction</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow">24/7</div>
                  <div className="text-sm text-body-color">WhatsApp Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
