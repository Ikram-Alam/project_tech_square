import Link from "next/link";

const Contact = () => {
  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-white to-secondary/5 pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-20 md:pb-20 lg:pt-28 lg:pb-28 dark:from-gray-dark dark:via-gray-dark dark:to-gray-dark">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 -z-10 h-full w-full">
        <div className="absolute top-1/4 left-1/4 h-32 w-32 sm:h-72 sm:w-72 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 h-48 w-48 sm:h-96 sm:w-96 rounded-full bg-secondary/10 blur-3xl"></div>
        <div className="absolute top-1/2 right-1/3 h-24 w-24 sm:h-64 sm:w-64 rounded-full bg-yellow/10 blur-3xl"></div>
      </div>

      <div className="container relative z-10 px-4">
        {/* Header Section */}
        <div className="mb-12 text-center sm:mb-16">
          <h2 className="mb-4 text-2xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl">
            Let's Create Something
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Amazing </span>
            Together
          </h2>
          <p className="mx-auto max-w-2xl text-base text-body-color sm:text-lg px-4 sm:px-0">
            Ready to transform your business? Choose your preferred way to connect with our expert team and start your journey today.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left Column - WhatsApp CTA */}
          <div className="space-y-8">
            {/* Primary WhatsApp Card */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-primary/80 p-6 sm:p-8 shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-primary/25">
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10"></div>
              <div className="absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-white/5"></div>
              
              <div className="relative z-10">
                <div className="mb-6 flex flex-col items-center space-y-4 text-center sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0 sm:text-left">
                  <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                    <svg width="28" height="28" viewBox="0 0 24 24" className="fill-white sm:w-8 sm:h-8">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.686"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white sm:text-2xl">WhatsApp Support</h3>
                    <p className="text-white/80 text-sm sm:text-base">Instant responses • Available 24/7</p>
                  </div>
                </div>
                
                <p className="mb-6 text-white/90">
                  Get immediate responses to your questions, project quotes, and expert advice. Our team typically responds within 5 minutes!
                </p>
                
                <Link
                  href="https://wa.me/923313587093?text=Hi%20Tech%20Square,%20I%20need%20help%20with%20my%20project"
                  target="_blank"
                  className="inline-flex items-center space-x-2 rounded-full bg-white px-8 py-4 font-semibold text-primary transition-all duration-300 hover:bg-white/90 hover:scale-105"
                >
                  <span>Start Chatting Now</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" className="fill-current">
                    <path d="M10.293 3.293L6 7.586 7.414 9l4-4 4 4L16.828 7.586l-4.293-4.293a1 1 0 00-1.414 0z"/>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Service Quick Access */}
            <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-xl dark:bg-gray-dark">
              <h3 className="mb-6 text-lg sm:text-xl font-bold text-black dark:text-white">
                Quick Service Access
              </h3>
              
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                <Link
                  href="https://wa.me/923313587093?text=Hi%20Tech%20Square,%20I%20need%20creative%20design%20services"
                  target="_blank"
                  className="group flex items-center space-x-3 rounded-xl bg-primary/5 p-3 sm:p-4 transition-all duration-300 hover:bg-primary/10 hover:scale-105"
                >
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-primary/20 text-primary transition-colors group-hover:bg-primary group-hover:text-white flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" className="fill-current sm:w-6 sm:h-6">
                      <path d="M12 2l3.09 6.26L22 9l-6.91.74L12 16 8.91 9.74 2 9l6.91-.74L12 2zM19 15l.74 2.74L22.48 18.48l-2.74.74L19 22l-.74-2.78L15.52 18.48l2.74-.74L19 15zM5 15l.74 2.74L8.48 18.48l-2.74.74L5 22l-.74-2.78L1.52 18.48l2.74-.74L5 15z"/>
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-black dark:text-white text-sm sm:text-base">Creative Design</h4>
                    <p className="text-xs sm:text-sm text-body-color">Branding & Graphics</p>
                  </div>
                </Link>

                <Link
                  href="https://wa.me/923313587093?text=Hi%20Tech%20Square,%20I%20need%20digital%20solutions"
                  target="_blank"
                  className="group flex items-center space-x-3 rounded-xl bg-secondary/5 p-3 sm:p-4 transition-all duration-300 hover:bg-secondary/10 hover:scale-105"
                >
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-secondary/20 text-secondary transition-colors group-hover:bg-secondary group-hover:text-white flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" className="fill-current sm:w-6 sm:h-6">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"/>
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-black dark:text-white text-sm sm:text-base">Digital Solutions</h4>
                    <p className="text-xs sm:text-sm text-body-color">Web & E-commerce</p>
                  </div>
                </Link>

                <Link
                  href="https://wa.me/923313587093?text=Hi%20Tech%20Square,%20I%20need%20AI%20automation%20solutions"
                  target="_blank"
                  className="group flex items-center space-x-3 rounded-xl bg-yellow/5 p-3 sm:p-4 transition-all duration-300 hover:bg-yellow/10 hover:scale-105"
                >
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-yellow/20 text-yellow transition-colors group-hover:bg-yellow group-hover:text-white flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" className="fill-current sm:w-6 sm:h-6">
                      <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L19 8L21 9ZM3 9L5 8L3 7V9ZM12 18C10.9 18 10 18.9 10 20C10 21.1 10.9 22 12 22C13.1 22 14 21.1 14 20C14 18.9 13.1 18 12 18Z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-black dark:text-white text-sm sm:text-base">AI & Automation</h4>
                    <p className="text-xs sm:text-sm text-body-color">Smart Solutions</p>
                  </div>
                </Link>

                <Link
                  href="https://wa.me/923313587093?text=Hi%20Tech%20Square,%20I%20need%20a%20quote%20for%20my%20project"
                  target="_blank"
                  className="group flex items-center space-x-3 rounded-xl bg-gray-100 p-3 sm:p-4 transition-all duration-300 hover:bg-gray-200 hover:scale-105 dark:bg-dark dark:hover:bg-gray-800"
                >
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-gray-200 text-gray-600 transition-colors group-hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" className="fill-current sm:w-6 sm:h-6">
                      <path d="M19 14V6c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14l4 4V14z"/>
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-black dark:text-white text-sm sm:text-base">Custom Quote</h4>
                    <p className="text-xs sm:text-sm text-body-color">Free Consultation</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Info & Form */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-xl dark:bg-gray-dark">
              <h3 className="mb-6 text-lg sm:text-xl font-bold text-black dark:text-white">
                Alternative Contact Methods
              </h3>
              
              <div className="space-y-4">
                <div className="group flex items-center space-x-3 sm:space-x-4 rounded-xl p-3 sm:p-4 transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-800">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-primary/10 text-primary flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 20 20" className="fill-current sm:w-5 sm:h-5">
                      <path d="M2.5 5L10 11L17.5 5H2.5ZM2.5 15V6.5L10 12.5L17.5 6.5V15H2.5Z"/>
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-black dark:text-white text-sm sm:text-base">Email Us</h4>
                    <p className="text-body-color text-xs sm:text-sm break-all">techsquare.corp@gmail.com</p>
                  </div>
                  <div className="text-xs sm:text-sm text-body-color hidden sm:block">24h response</div>
                </div>

                <div className="group flex items-center space-x-3 sm:space-x-4 rounded-xl p-3 sm:p-4 transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-800">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-secondary/10 text-secondary flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 20 20" className="fill-current sm:w-5 sm:h-5">
                      <path d="M2 3C2 2.45 2.45 2 3 2H5.5C5.78 2 6.03 2.17 6.14 2.42L7.79 6.21C7.89 6.43 7.84 6.69 7.66 6.86L5.5 9C6.96 12.04 9.96 15.04 13 16.5L15.14 14.34C15.31 14.16 15.57 14.11 15.79 14.21L19.58 15.86C19.83 15.97 20 16.22 20 16.5V19C20 19.55 19.55 20 19 20C8.95 20 2 13.05 2 3Z"/>
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-black dark:text-white text-sm sm:text-base">Call Us</h4>
                    <p className="text-body-color text-xs sm:text-sm">+92 3313587093</p>
                  </div>
                  <div className="text-xs sm:text-sm text-body-color hidden sm:block">Mon-Fri 9-6</div>
                </div>

                <div className="group flex items-center space-x-3 sm:space-x-4 rounded-xl p-3 sm:p-4 transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-800">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-yellow/10 text-yellow flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 20 20" className="fill-current sm:w-5 sm:h-5">
                      <path d="M10 2C6.69 2 4 4.69 4 8C4 13 10 18 10 18S16 13 16 8C16 4.69 13.31 2 10 2ZM10 10.5C8.62 10.5 7.5 9.38 7.5 8S8.62 5.5 10 5.5S12.5 6.62 12.5 8S11.38 10.5 10 10.5Z"/>
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-black dark:text-white text-sm sm:text-base">Visit Us</h4>
                    <p className="text-body-color text-xs sm:text-sm">Karachi, Pakistan</p>
                  </div>
                  <div className="text-xs sm:text-sm text-body-color hidden sm:block">By appointment</div>
                </div>
              </div>
            </div>

            {/* Business Hours & Stats */}
            <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2">
              <div className="rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 p-4 sm:p-6">
                <h4 className="mb-3 sm:mb-4 font-bold text-black dark:text-white text-sm sm:text-base">Business Hours</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-body-color">Mon - Fri</span>
                    <span className="font-medium text-black dark:text-white">9AM - 6PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-body-color">Saturday</span>
                    <span className="font-medium text-black dark:text-white">10AM - 4PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-body-color">Sunday</span>
                    <span className="font-medium text-black dark:text-white">Emergency</span>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-gradient-to-br from-secondary/10 to-secondary/5 p-4 sm:p-6">
                <h4 className="mb-3 sm:mb-4 font-bold text-black dark:text-white text-sm sm:text-base">Quick Stats</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-body-color">Response Time</span>
                    <span className="font-medium text-black dark:text-white">5 minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-body-color">Projects Done</span>
                    <span className="font-medium text-black dark:text-white">500+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-body-color">Happy Clients</span>
                    <span className="font-medium text-black dark:text-white">200+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="mx-auto max-w-3xl rounded-2xl bg-gradient-to-r from-primary to-secondary p-6 sm:p-8 text-white">
            <h3 className="mb-4 text-xl sm:text-2xl font-bold">Ready to Start Your Project?</h3>
            <p className="mb-6 text-sm sm:text-base text-white/90 px-2 sm:px-0">
              Join 200+ satisfied clients who have transformed their businesses with Tech Square. 
              Let's discuss your vision and create something extraordinary together.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 sm:flex-row">
              <Link
                href="https://wa.me/923313587093?text=Hi%20Tech%20Square,%20I%20want%20to%20start%20a%20new%20project"
                target="_blank"
                className="w-full sm:w-auto rounded-full bg-white px-6 py-3 sm:px-8 sm:py-4 font-semibold text-primary transition-all duration-300 hover:bg-white/90 hover:scale-105 text-sm sm:text-base"
              >
                🚀 Start Your Project
              </Link>
              <Link
                href="/portfolio"
                target="_blank"
                className="w-full sm:w-auto rounded-full border-2 border-white/30 px-6 py-3 sm:px-8 sm:py-4 font-semibold text-white transition-all duration-300 hover:bg-white/10 text-sm sm:text-base"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
