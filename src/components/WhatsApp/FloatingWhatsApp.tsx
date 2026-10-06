"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    // Show the button after a short delay when page loads
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Close dialog when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.whatsapp-widget')) {
        setIsDialogOpen(false);
      }
    };

    if (isDialogOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDialogOpen]);

  const whatsappNumber = "+923353855193";
  const defaultMessage = "Hi Tech Square! I'm interested in your services and would like to know more about how you can help transform my business.";
  
  // Helper functions for different WhatsApp links
  const createWaLink = (message: string) => `https://wa.me/${whatsappNumber.replace("+", "")}?text=${encodeURIComponent(message)}`;
  const createWebWhatsAppLink = (message: string) => `https://web.whatsapp.com/send?phone=${whatsappNumber.replace("+", "")}&text=${encodeURIComponent(message)}`;

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div
        className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
        }`}
      >
        <button
          onClick={() => setIsDialogOpen(!isDialogOpen)}
          className="whatsapp-widget group relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-green-600 shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-green-500/30"
        >
          {/* Pulse Animation */}
          <div className="absolute -inset-2 rounded-full bg-green-500/30 animate-ping"></div>
          <div className="absolute -inset-1 rounded-full bg-green-500/50 animate-pulse"></div>
          
          {/* WhatsApp Icon */}
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            className="relative z-10 text-white transition-transform duration-300 group-hover:scale-110"
          >
            <path
              fill="currentColor"
              d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.686"
            />
          </svg>

          {/* Tooltip */}
          <div
            className={`absolute bottom-full right-0 mb-2 w-max max-w-xs rounded-lg bg-gray-900 px-3 py-2 text-sm text-white shadow-lg transition-all duration-300 ${
              !isDialogOpen ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
            }`}
          >
            <div className="relative">
              Click to chat with us
              <div className="absolute -bottom-1 right-4 h-2 w-2 rotate-45 bg-gray-900"></div>
            </div>
          </div>
        </button>
      </div>

      {/* Chat Widget (Opens on click) */}
      {isDialogOpen && (
        <div
          className="whatsapp-widget fixed bottom-24 right-6 z-40 w-80 rounded-2xl bg-white shadow-2xl transition-all duration-300 dark:bg-gray-800 animate-in slide-in-from-bottom-4 fade-in"
        >
          <div className="rounded-t-2xl bg-gradient-to-r from-green-500 to-green-600 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" className="text-white">
                    <path
                      fill="currentColor"
                      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white">Tech Square Support</h3>
                  <div className="flex items-center space-x-1 text-sm text-white/80">
                    <div className="h-2 w-2 rounded-full bg-green-300"></div>
                    <span>Online - Reply in 5 minutes</span>
                  </div>
                </div>
              </div>
              
              {/* Close Button */}
              <button
                onClick={() => setIsDialogOpen(false)}
                className="text-white/70 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" className="fill-current">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                </svg>
              </button>
            </div>
          </div>
          
          <div className="p-4">
            <div className="mb-4">
              <div className="rounded-lg bg-gray-100 p-3 dark:bg-gray-700">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Hi there! 👋 How can we help transform your business today?
                </p>
              </div>
              </div>
            
            <div className="space-y-2">
              <Link
                href={createWebWhatsAppLink("Hi! I need help with Creative Design services")}
                target="_blank"
                onClick={() => setIsDialogOpen(false)}
                className="block rounded-lg bg-primary/10 p-2 text-sm text-primary transition-colors hover:bg-primary/20"
              >
                🎨 Creative Design
              </Link>
              <Link
                href={createWebWhatsAppLink("Hi! I'm interested in Digital Solutions")}
                target="_blank"
                onClick={() => setIsDialogOpen(false)}
                className="block rounded-lg bg-secondary/10 p-2 text-sm text-secondary transition-colors hover:bg-secondary/20"
              >
                💻 Digital Solutions
              </Link>
              <Link
                href={createWebWhatsAppLink("Hi! I want to learn about AI Automation")}
                target="_blank"
                onClick={() => setIsDialogOpen(false)}
                className="block rounded-lg bg-yellow/10 p-2 text-sm text-yellow transition-colors hover:bg-yellow/20"
              >
                🤖 AI Automation
              </Link>
            </div>
            
            <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-600">
              <div className="space-y-2">
                <Link
                  href={createWaLink(defaultMessage)}
                  target="_blank"
                  onClick={() => setIsDialogOpen(false)}
                  className="flex w-full items-center justify-center space-x-2 rounded-lg bg-green-500 py-2 px-4 font-semibold text-white transition-colors hover:bg-green-600"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" className="fill-current">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                  </svg>
                  <span>Open WhatsApp</span>
                </Link>
                
                <Link
                  href={createWebWhatsAppLink(defaultMessage)}
                  target="_blank"
                  onClick={() => setIsDialogOpen(false)}
                  className="flex w-full items-center justify-center space-x-2 rounded-lg bg-blue-500 py-2 px-4 font-semibold text-white transition-colors hover:bg-blue-600"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" className="fill-current">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </Link>
              </div>
              

            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingWhatsApp;
