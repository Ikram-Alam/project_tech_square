"use client";

import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative z-10 min-h-screen overflow-hidden bg-gradient-to-br from-white via-primary/5 to-secondary/10 pb-16 pt-[120px] dark:from-gray-dark dark:via-gray-dark dark:to-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 h-80 w-80 rounded-full bg-gradient-to-r from-yellow/20 to-primary/20 blur-3xl animate-pulse [animation-delay:1s]"></div>
        <div className="absolute top-1/2 right-1/4 h-72 w-72 rounded-full bg-gradient-to-r from-secondary/20 to-yellow/20 blur-3xl animate-pulse [animation-delay:2s]"></div>
        
        {/* Geometric Patterns */}
        <div className="absolute top-20 right-20 h-32 w-32 rounded-lg bg-primary/10 backdrop-blur-sm rotate-45 animate-bounce [animation-delay:0.5s]"></div>
        <div className="absolute bottom-32 left-16 h-24 w-24 rounded-full bg-secondary/10 backdrop-blur-sm animate-bounce [animation-delay:1.5s]"></div>
        <div className="absolute top-1/3 left-1/6 h-16 w-16 rounded-lg bg-yellow/10 backdrop-blur-sm rotate-12 animate-bounce [animation-delay:2.5s]"></div>
      </div>

      <div className="container relative z-20">
        <div className="flex flex-wrap items-center min-h-[80vh]">
          {/* Left Column - Content */}
          <div className="w-full px-4 xl:w-1/2">
            <div className="max-w-[600px] mx-auto xl:mx-0">
              {/* Badge */}
              <div className="mb-6 inline-block animate-fade-in opacity-0 [animation-delay:0.2s]">
                <span className="inline-flex items-center space-x-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 px-6 py-3 text-sm font-semibold text-primary backdrop-blur-sm">
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-ping"></div>
                  <span>Available for New Projects</span>
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="mb-6 text-4xl font-bold leading-tight text-black dark:text-white sm:text-5xl sm:leading-tight md:text-6xl md:leading-tight lg:text-7xl lg:leading-tight animate-fade-in opacity-0 [animation-delay:0.4s]">
                Let's Build Something
                <span className="bg-gradient-to-r from-primary via-secondary to-yellow bg-[length:200%_200%] bg-clip-text text-transparent animate-[gradient_3s_ease_infinite]"> Extraordinary</span>
              </h1>

              {/* Subtitle */}
              <p className="mb-8 text-lg leading-relaxed text-body-color dark:text-body-color-dark sm:text-xl md:text-2xl animate-fade-in opacity-0 [animation-delay:0.6s]">
                Tech Square delivers <span className="font-semibold text-primary">innovative creative designs</span>, 
                <span className="font-semibold text-secondary"> digital solutions</span>, and 
                <span className="font-semibold text-yellow"> AI automation</span> to help your business thrive in the digital age.
              </p>

              {/* Features List */}
              <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 animate-fade-in opacity-0 [animation-delay:0.8s]">
                <div className="flex items-center space-x-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <svg width="16" height="16" viewBox="0 0 24 24" className="fill-current">
                      <path d="M12 2l3.09 6.26L22 9l-6.91.74L12 16 8.91 9.74 2 9l6.91-.74L12 2z"/>
                    </svg>
                  </div>
                  <span className="font-medium text-black dark:text-white">Creative Excellence</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                    <svg width="16" height="16" viewBox="0 0 24 24" className="fill-current">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"/>
                    </svg>
                  </div>
                  <span className="font-medium text-black dark:text-white">Digital Innovation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow/10 text-yellow">
                    <svg width="16" height="16" viewBox="0 0 24 24" className="fill-current">
                      <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L19 8L21 9ZM3 9L5 8L3 7V9ZM12 18C10.9 18 10 18.9 10 20C10 21.1 10.9 22 12 22C13.1 22 14 21.1 14 20C14 18.9 13.1 18 12 18Z"/>
                    </svg>
                  </div>
                  <span className="font-medium text-black dark:text-white">AI Automation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <svg width="16" height="16" viewBox="0 0 24 24" className="fill-current">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                    </svg>
                  </div>
                  <span className="font-medium text-black dark:text-white">24/7 Support</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 animate-fade-in opacity-0 [animation-delay:1s]">
                <Link
                  href="https://wa.me/923313587093?text=Hi%20Tech%20Square,%20I'm%20ready%20to%20transform%20my%20business"
                  className="group relative overflow-hidden rounded-full bg-gradient-to-r from-primary to-secondary px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  target="_blank"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  <div className="relative flex items-center space-x-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" className="fill-current">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                    </svg>
                    <span>Start Your Project</span>
                  </div>
                </Link>
                
                <Link
                  href="/portfolio"
                  className="group rounded-full border-2 border-primary/30 bg-white/50 px-8 py-4 text-base font-semibold text-primary backdrop-blur-sm transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white hover:scale-105 dark:bg-white/10 dark:text-white"
                >
                  <div className="flex items-center space-x-2">
                    <span>View Our Work</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" className="fill-current transition-transform group-hover:translate-x-1">
                      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                    </svg>
                  </div>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 flex items-center space-x-8 animate-fade-in opacity-0 [animation-delay:1.2s]">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">200+</div>
                  <div className="text-sm text-body-color">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">99%</div>
                  <div className="text-sm text-body-color">Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow">5min</div>
                  <div className="text-sm text-body-color">Response</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="hidden xl:block w-full px-4 xl:w-1/2">
            <div className="relative mx-auto max-w-[600px] animate-fade-in opacity-0 [animation-delay:0.8s]">
              {/* Main Visual Container */}
              <div className="group relative aspect-square overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 via-secondary/20 to-yellow/20 p-8 backdrop-blur-sm">
                {/* Floating Elements */}
                <div className="absolute top-8 right-8 rounded-full bg-white p-4 shadow-xl dark:bg-gray-dark">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-r from-primary to-secondary animate-spin [animation-duration:3s]"></div>
                </div>
                
                <div className="absolute bottom-8 left-8 rounded-xl bg-white p-4 shadow-xl dark:bg-gray-dark">
                  <div className="flex items-center space-x-2">
                    <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-sm font-semibold text-black dark:text-white">Live Support</span>
                  </div>
                </div>

                <div className="absolute top-1/2 right-12 rounded-lg bg-white/20 p-3 backdrop-blur-sm">
                  <svg width="32" height="32" viewBox="0 0 24 24" className="text-white animate-pulse">
                    <path fill="currentColor" d="M12 2l3.09 6.26L22 9l-6.91.74L12 16 8.91 9.74 2 9l6.91-.74L12 2z"/>
                  </svg>
                </div>

                {/* Center Brand Element */}
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto mb-8 rounded-3xl bg-white/20 p-12 backdrop-blur-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                      <Image 
                        src="/logo.jpeg" 
                        alt="Tech Square Logo" 
                        width={96}
                        height={96}
                        className="h-24 w-24 mx-auto object-contain"
                      />
                      <div className="mt-2 h-1 w-16 bg-gradient-to-r from-primary via-secondary to-yellow"></div>
                    </div>
                    <h3 className="text-3xl font-bold text-white">Tech Square</h3>
                    <p className="text-white/80">Innovation Hub</p>
                  </div>
                </div>

                {/* Animated Particles */}
                <div className="absolute top-1/4 left-1/4 h-4 w-4 rounded-full bg-primary/60 animate-ping"></div>
                <div className="absolute bottom-1/3 right-1/3 h-3 w-3 rounded-full bg-secondary/60 animate-ping [animation-delay:1s]"></div>
                <div className="absolute top-2/3 left-1/3 h-2 w-2 rounded-full bg-yellow/60 animate-ping [animation-delay:2s]"></div>
                <div className="absolute top-1/6 right-1/4 h-5 w-5 rounded-full bg-white/40 animate-ping [animation-delay:0.5s]"></div>
              </div>

              {/* Service Icons Around Main Visual */}
              <div className="absolute -top-4 left-1/4 rounded-xl bg-white p-3 shadow-lg dark:bg-gray-dark animate-bounce [animation-delay:0.5s]">
                <svg width="24" height="24" viewBox="0 0 24 24" className="text-primary fill-current">
                  <path d="M12 2l3.09 6.26L22 9l-6.91.74L12 16 8.91 9.74 2 9l6.91-.74L12 2z"/>
                </svg>
              </div>

              <div className="absolute -bottom-4 right-1/4 rounded-xl bg-white p-3 shadow-lg dark:bg-gray-dark animate-bounce [animation-delay:1.5s]">
                <svg width="24" height="24" viewBox="0 0 24 24" className="text-secondary fill-current">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"/>
                </svg>
              </div>

              <div className="absolute top-1/2 -left-4 rounded-xl bg-white p-3 shadow-lg dark:bg-gray-dark animate-bounce [animation-delay:2.5s]">
                <svg width="24" height="24" viewBox="0 0 24 24" className="text-yellow fill-current">
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L19 8L21 9ZM3 9L5 8L3 7V9ZM12 18C10.9 18 10 18.9 10 20C10 21.1 10.9 22 12 22C13.1 22 14 21.1 14 20C14 18.9 13.1 18 12 18Z"/>
                </svg>
              </div>

              <div className="absolute top-1/2 -right-4 rounded-xl bg-white p-3 shadow-lg dark:bg-gray-dark animate-bounce [animation-delay:3.5s]">
                <svg width="24" height="24" viewBox="0 0 24 24" className="text-primary fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2 animate-bounce">
          <span className="text-sm text-body-color">Scroll to explore</span>
          <svg width="24" height="24" viewBox="0 0 24 24" className="text-primary fill-current">
            <path d="M12 16l-6-6h12l-6 6z"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
