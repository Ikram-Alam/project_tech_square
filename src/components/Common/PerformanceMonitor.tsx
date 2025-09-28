"use client";

import { useEffect } from "react";

// Web Vitals tracking
export function PerformanceMonitor() {
  useEffect(() => {
    // Only load performance monitoring in production
    if (process.env.NODE_ENV === 'production') {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(console.log);
        getFID(console.log);
        getFCP(console.log);
        getLCP(console.log);
        getTTFB(console.log);
      });
    }
  }, []);

  return null;
}

// Page speed optimization hooks
export function usePageSpeedOptimization() {
  useEffect(() => {
    // Preload critical resources
    const criticalImages = ['/logo.jpeg'];
    
    criticalImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });

    // Remove unused CSS (if any)
    const removeUnusedCSS = () => {
      const unusedSelectors = document.querySelectorAll('[data-unused-css]');
      unusedSelectors.forEach(el => el.remove());
    };

    // Optimize images on scroll
    const observeImages = () => {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              observer.unobserve(img);
            }
          }
        });
      }, { threshold: 0.1 });

      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
      });
    };

    removeUnusedCSS();
    observeImages();
  }, []);
}

export default PerformanceMonitor;