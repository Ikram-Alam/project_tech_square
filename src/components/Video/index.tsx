"use client";

import VideoModal from "@/components/video-modal";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Video() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <section className="relative z-10 overflow-hidden bg-gradient-to-br from-primary/5 via-white to-secondary/5 py-16 dark:from-gray-dark dark:via-gray-dark dark:to-gray-dark md:py-20 lg:py-28">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 h-96 w-96 rounded-full bg-gradient-to-r from-secondary/10 to-yellow/10 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 left-1/3 h-80 w-80 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 blur-3xl animate-pulse [animation-delay:2s]"></div>
          
          {/* Floating geometric shapes */}
          <div className="absolute top-20 left-20 h-24 w-24 rounded-lg bg-yellow/5 backdrop-blur-sm rotate-45 animate-bounce [animation-delay:1s]"></div>
          <div className="absolute bottom-32 right-16 h-32 w-32 rounded-full bg-primary/5 backdrop-blur-sm animate-bounce [animation-delay:3s]"></div>
        </div>

        <div className="container relative z-20">
          {/* Section Header */}
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <div className="mb-6 inline-block animate-fade-in opacity-0 [animation-delay:0.2s]">
              <span className="inline-flex items-center space-x-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 px-6 py-3 text-sm font-semibold text-primary backdrop-blur-sm">
                <div className="h-2 w-2 rounded-full bg-red-500 animate-ping"></div>
                <span>Watch Our Story</span>
              </span>
            </div>
            
            <h2 className="mb-6 text-4xl font-bold leading-tight text-black dark:text-white sm:text-5xl md:text-6xl animate-fade-in opacity-0 [animation-delay:0.4s]">
              See How We
              <span className="bg-gradient-to-r from-primary via-secondary to-yellow bg-[length:200%_200%] bg-clip-text text-transparent animate-[gradient_3s_ease_infinite]"> Transform</span> Businesses
            </h2>
            
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-body-color dark:text-body-color-dark sm:text-xl animate-fade-in opacity-0 [animation-delay:0.6s]">
              Discover the innovative solutions and creative processes that help businesses thrive in the digital landscape. Watch how we bring visions to life.
            </p>
          </div>

          {/* Video Section */}
          {/* Features Grid */}
          <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3 animate-fade-in opacity-0 [animation-delay:1s]">
            <div className="group rounded-2xl bg-white/50 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white hover:shadow-xl dark:bg-white/5 dark:hover:bg-white/10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <svg width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                  <path d="M12 2l3.09 6.26L22 9l-6.91.74L12 16 8.91 9.74 2 9l6.91-.74L12 2z"/>
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-black dark:text-white">Creative Process</h3>
              <p className="text-body-color dark:text-body-color-dark">See how our creative team transforms ideas into stunning visual experiences.</p>
            </div>

            <div className="group rounded-2xl bg-white/50 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white hover:shadow-xl dark:bg-white/5 dark:hover:bg-white/10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                <svg width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"/>
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-black dark:text-white">Digital Solutions</h3>
              <p className="text-body-color dark:text-body-color-dark">Discover our cutting-edge digital strategies and implementation methods.</p>
            </div>

            <div className="group rounded-2xl bg-white/50 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white hover:shadow-xl dark:bg-white/5 dark:hover:bg-white/10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-yellow/10 text-yellow">
                <svg width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L19 8L21 9ZM3 9L5 8L3 7V9ZM12 18C10.9 18 10 18.9 10 20C10 21.1 10.9 22 12 22C13.1 22 14 21.1 14 20C14 18.9 13.1 18 12 18Z"/>
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-black dark:text-white">AI Automation</h3>
              <p className="text-body-color dark:text-body-color-dark">Learn about our AI-powered automation solutions for business efficiency.</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center animate-fade-in opacity-0 [animation-delay:1.2s]">
            <div className="mx-auto max-w-2xl">
              <h3 className="mb-6 text-2xl font-bold text-black dark:text-white">
                Ready to Start Your Transformation Journey?
              </h3>
              <p className="mb-8 text-body-color dark:text-body-color-dark">
                Get in touch with our experts and let's discuss how we can help transform your business with innovative solutions.
              </p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
                <Link
                  href="https://wa.me/923353855193?text=Hi%20Tech%20Square,%20I%20want%20to%20start%20my%20transformation%20journey"
                  className="group relative overflow-hidden rounded-full bg-gradient-to-r from-primary to-secondary px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  target="_blank"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  <div className="relative flex items-center justify-center space-x-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" className="fill-current">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                    </svg>
                    <span>Start Transformation</span>
                  </div>
                </Link>
                
                <Link
                  href="/portfolio"
                  className="group rounded-full border-2 border-primary/30 bg-white/50 px-8 py-4 text-base font-semibold text-primary backdrop-blur-sm transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white hover:scale-105 dark:bg-white/10 dark:text-white"
                >
                  <div className="flex items-center justify-center space-x-2">
                    <span>View Portfolio</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" className="fill-current transition-transform group-hover:translate-x-1">
                      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <VideoModal
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        channel="youtube"
        videoId="dQw4w9WgXcQ"
      />
    </>
  );
};
