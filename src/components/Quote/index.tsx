"use client";

import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";

const Quote = () => {
  return (
    <section className="relative z-10 overflow-hidden bg-gradient-to-br from-primary/5 via-white to-secondary/5 pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-20 md:pb-20 lg:pt-28 lg:pb-28 dark:from-gray-dark dark:via-gray-dark dark:to-gray-dark">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-gradient-to-r from-yellow/10 to-primary/10 blur-3xl animate-pulse [animation-delay:1s]"></div>
        <div className="absolute top-1/2 left-1/4 h-64 w-64 rounded-full bg-gradient-to-r from-secondary/10 to-yellow/10 blur-3xl animate-pulse [animation-delay:2s]"></div>
      </div>

      <div className="container relative z-10">
        <SectionTitle
          title="Get Your Instant Quote"
          paragraph="Transform your vision into reality with our expert team. Get a personalized quote in minutes and start your journey to digital excellence."
          center
        />

        {/* Hero Quote Card */}
        <div className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/90 via-white/50 to-white/90 p-8 backdrop-blur-sm shadow-2xl dark:from-gray-dark/90 dark:via-gray-dark/50 dark:to-gray-dark/90 md:p-12 lg:p-16">
            {/* Floating Elements */}
            <div className="absolute top-6 right-6 rounded-full bg-gradient-to-r from-primary to-secondary p-3 animate-bounce [animation-delay:0.5s]">
              <svg width="24" height="24" viewBox="0 0 24 24" className="text-white fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
              </svg>
            </div>

            <div className="absolute bottom-6 left-6 rounded-xl bg-white/20 p-4 backdrop-blur-sm animate-bounce [animation-delay:1s]">
              <div className="flex items-center space-x-2">
                <div className="h-3 w-3 rounded-full bg-green-500 animate-ping"></div>
                <span className="text-sm font-semibold text-black dark:text-white">Available 24/7</span>
              </div>
            </div>

            <div className="text-center">
              <div className="mb-8 inline-block">
                <span className="inline-flex items-center space-x-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 px-6 py-3 text-sm font-semibold text-primary backdrop-blur-sm">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                  </span>
                  <span>Live Quote Generator</span>
                </span>
              </div>

              <h2 className="mb-6 text-4xl font-bold text-black dark:text-white sm:text-5xl lg:text-6xl">
                Let's Build Something
                <span className="bg-gradient-to-r from-primary via-secondary to-yellow bg-clip-text text-transparent"> Extraordinary</span>
              </h2>
              
              <p className="mb-8 text-lg leading-relaxed text-body-color dark:text-body-color-dark sm:text-xl lg:text-2xl">
                Whether you need <span className="font-semibold text-primary">creative design</span>, 
                <span className="font-semibold text-secondary"> digital solutions</span>, or 
                <span className="font-semibold text-yellow"> AI automation</span>, our experts are ready to transform your vision into reality.
              </p>
              
              {/* Stats */}
              <div className="mb-8 grid grid-cols-3 gap-6 rounded-2xl bg-white/20 p-6 backdrop-blur-sm dark:bg-white/5">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">5min</div>
                  <div className="text-sm text-body-color">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">200+</div>
                  <div className="text-sm text-body-color">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow">99%</div>
                  <div className="text-sm text-body-color">Satisfaction</div>
                </div>
              </div>
              
              <div className="mb-8 flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
                <Link
                  href="https://wa.me/923353855193?text=Hi%20Tech%20Square,%20I%20need%20an%20instant%20quote%20for%20my%20project"
                  target="_blank"
                  className="group relative overflow-hidden rounded-full bg-gradient-to-r from-primary to-secondary px-10 py-5 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  <div className="relative flex items-center justify-center space-x-3">
                    <svg width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                    </svg>
                    <span>💬 Get Instant Quote</span>
                  </div>
                </Link>
                
                <Link
                  href="/portfolio"
                  className="group rounded-full border-2 border-primary/30 bg-white/50 px-10 py-5 text-lg font-semibold text-primary backdrop-blur-sm transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white hover:scale-105 dark:bg-white/10 dark:text-white"
                >
                  <div className="flex items-center justify-center space-x-2">
                    <span>View Our Work</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" className="fill-current transition-transform group-hover:translate-x-1">
                      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                    </svg>
                  </div>
                </Link>
              </div>

              <p className="text-sm text-body-color">
                ⚡ Usually responds within 5 minutes • 🔒 100% Confidential • 💯 Free Consultation
              </p>
            </div>
          </div>
        </div>

        {/* Service Cards */}
        <div className="mt-20">
          <div className="mb-12 text-center">
            <h3 className="mb-4 text-3xl font-bold text-black dark:text-white">
              What Can We Help You With?
            </h3>
            <p className="text-lg text-body-color">Choose your service category for a customized quote</p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Creative & Design */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-primary/5 p-8 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl dark:from-gray-dark dark:to-primary/10">
              <div className="absolute top-4 right-4 rounded-full bg-primary/10 p-2 opacity-50 transition-opacity group-hover:opacity-100">
                <svg width="20" height="20" viewBox="0 0 24 24" className="text-primary fill-current">
                  <path d="M12 2l3.09 6.26L22 9l-6.91.74L12 16 8.91 9.74 2 9l6.91-.74L12 2z"/>
                </svg>
              </div>

              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-primary to-primary/80 text-white shadow-lg">
                <svg width="32" height="32" viewBox="0 0 40 40" className="fill-current">
                  <path d="M20 0C8.95 0 0 8.95 0 20C0 31.05 8.95 40 20 40C31.05 40 40 31.05 40 20C40 8.95 31.05 0 20 0ZM20 36C11.16 36 4 28.84 4 20C4 11.16 11.16 4 20 4C28.84 4 36 11.16 36 20C36 28.84 28.84 36 20 36Z"/>
                </svg>
              </div>
              
              <h4 className="mb-4 text-2xl font-bold text-black dark:text-white">
                Creative & Design
              </h4>
              <p className="mb-6 text-body-color">
                Transform your brand with stunning visuals, logos, animations, and creative content that captivates your audience.
              </p>
              
              <div className="mb-6 space-y-2">
                <div className="flex items-center space-x-2 text-sm text-body-color">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>Brand Identity & Logo Design</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-body-color">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>Animation & Motion Graphics</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-body-color">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>Illustration & Digital Art</span>
                </div>
              </div>
              
              <Link
                href="https://wa.me/923353855193?text=Hi%20Tech%20Square,%20I%20need%20a%20quote%20for%20Creative%20&%20Design%20services"
                target="_blank"
                className="group/btn inline-flex items-center space-x-2 rounded-xl bg-primary px-6 py-3 text-white transition-all duration-300 hover:bg-primary/90 hover:shadow-lg"
              >
                <span>Get Design Quote</span>
                <svg width="16" height="16" viewBox="0 0 24 24" className="fill-current transition-transform group-hover/btn:translate-x-1">
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                </svg>
              </Link>
            </div>

            {/* Digital Solutions */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-secondary/5 p-8 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl dark:from-gray-dark dark:to-secondary/10">
              <div className="absolute top-4 right-4 rounded-full bg-secondary/10 p-2 opacity-50 transition-opacity group-hover:opacity-100">
                <svg width="20" height="20" viewBox="0 0 24 24" className="text-secondary fill-current">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"/>
                </svg>
              </div>

              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-secondary to-secondary/80 text-white shadow-lg">
                <svg width="32" height="32" viewBox="0 0 40 40" className="fill-current">
                  <path d="M32 8H8C6.9 8 6 8.9 6 10V30C6 31.1 6.9 32 8 32H32C33.1 32 34 31.1 34 30V10C34 8.9 33.1 8 32 8ZM30 28H10V12H30V28Z"/>
                </svg>
              </div>
              
              <h4 className="mb-4 text-2xl font-bold text-black dark:text-white">
                Digital Solutions
              </h4>
              <p className="mb-6 text-body-color">
                Build powerful digital platforms, e-commerce stores, and web applications that drive business growth.
              </p>
              
              <div className="mb-6 space-y-2">
                <div className="flex items-center space-x-2 text-sm text-body-color">
                  <div className="h-2 w-2 rounded-full bg-secondary"></div>
                  <span>E-commerce Development</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-body-color">
                  <div className="h-2 w-2 rounded-full bg-secondary"></div>
                  <span>Web & Mobile Applications</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-body-color">
                  <div className="h-2 w-2 rounded-full bg-secondary"></div>
                  <span>SaaS Platform Development</span>
                </div>
              </div>
              
              <Link
                href="https://wa.me/923353855193?text=Hi%20Tech%20Square,%20I%20need%20a%20quote%20for%20Digital%20Solutions"
                target="_blank"
                className="group/btn inline-flex items-center space-x-2 rounded-xl bg-secondary px-6 py-3 text-white transition-all duration-300 hover:bg-secondary/90 hover:shadow-lg"
              >
                <span>Get Development Quote</span>
                <svg width="16" height="16" viewBox="0 0 24 24" className="fill-current transition-transform group-hover/btn:translate-x-1">
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                </svg>
              </Link>
            </div>

            {/* AI & Automation */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-yellow/5 p-8 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl dark:from-gray-dark dark:to-yellow/10">
              <div className="absolute top-4 right-4 rounded-full bg-yellow/10 p-2 opacity-50 transition-opacity group-hover:opacity-100">
                <svg width="20" height="20" viewBox="0 0 24 24" className="text-yellow fill-current">
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L19 8L21 9ZM3 9L5 8L3 7V9ZM12 18C10.9 18 10 18.9 10 20C10 21.1 10.9 22 12 22C13.1 22 14 21.1 14 20C14 18.9 13.1 18 12 18Z"/>
                </svg>
              </div>

              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-yellow to-yellow/80 text-white shadow-lg">
                <svg width="32" height="32" viewBox="0 0 40 40" className="fill-current">
                  <path d="M20 4C13.37 4 8 9.37 8 16C8 22.63 13.37 28 20 28C26.63 28 32 22.63 32 16C32 9.37 26.63 4 20 4ZM20 24C15.58 24 12 20.42 12 16C12 11.58 15.58 8 20 8C24.42 8 28 11.58 28 16C28 20.42 24.42 24 20 24Z"/>
                </svg>
              </div>
              
              <h4 className="mb-4 text-2xl font-bold text-black dark:text-white">
                AI & Automation
              </h4>
              <p className="mb-6 text-body-color">
                Leverage cutting-edge AI technology to automate processes and unlock intelligent business solutions.
              </p>
              
              <div className="mb-6 space-y-2">
                <div className="flex items-center space-x-2 text-sm text-body-color">
                  <div className="h-2 w-2 rounded-full bg-yellow"></div>
                  <span>AI Solutions & Machine Learning</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-body-color">
                  <div className="h-2 w-2 rounded-full bg-yellow"></div>
                  <span>Intelligent Chatbots</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-body-color">
                  <div className="h-2 w-2 rounded-full bg-yellow"></div>
                  <span>Process Automation</span>
                </div>
              </div>
              
              <Link
                href="https://wa.me/923353855193?text=Hi%20Tech%20Square,%20I%20need%20a%20quote%20for%20AI%20&%20Automation%20solutions"
                target="_blank"
                className="group/btn inline-flex items-center space-x-2 rounded-xl bg-yellow px-6 py-3 text-white transition-all duration-300 hover:bg-yellow/90 hover:shadow-lg"
              >
                <span>Get AI Quote</span>
                <svg width="16" height="16" viewBox="0 0 24 24" className="fill-current transition-transform group-hover/btn:translate-x-1">
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-20">
          <div className="rounded-2xl bg-gradient-to-r from-white/50 to-white/30 p-8 backdrop-blur-sm dark:from-gray-dark/50 dark:to-gray-dark/30 md:p-12">
            <h3 className="mb-8 text-center text-2xl font-bold text-black dark:text-white">
              Multiple Ways to Connect
            </h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                  <svg width="32" height="32" viewBox="0 0 24 24" className="text-primary fill-current">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                  </svg>
                </div>
                <h4 className="mb-2 font-bold text-black dark:text-white">WhatsApp</h4>
                <p className="text-sm text-body-color">0335 3855193</p>
                <p className="text-xs text-body-color">Instant responses</p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/10">
                  <svg width="32" height="32" viewBox="0 0 24 24" className="text-secondary fill-current">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <h4 className="mb-2 font-bold text-black dark:text-white">Email</h4>
                <p className="text-sm text-body-color">techsquare.corp@gmail.com</p>
                <p className="text-xs text-body-color">Detailed proposals</p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow/10">
                  <svg width="32" height="32" viewBox="0 0 24 24" className="text-yellow fill-current">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <h4 className="mb-2 font-bold text-black dark:text-white">Phone</h4>
                <p className="text-sm text-body-color">0335 3855193</p>
                <p className="text-xs text-body-color">Direct consultation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quote;
