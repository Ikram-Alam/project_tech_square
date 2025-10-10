'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

// Google Analytics tracking functions
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

declare global {
  interface Window {
    gtag: (command: string, ...args: any[]) => void;
  }
}

// Track page views
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID!, {
      page_path: url,
    });
  }
};

// Track events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// WhatsApp click tracking
export const trackWhatsAppClick = (source: string, service?: string) => {
  event({
    action: 'whatsapp_click',
    category: 'engagement',
    label: `${source}${service ? ` - ${service}` : ''}`,
  });
};

// Service inquiry tracking
export const trackServiceInquiry = (service: string) => {
  event({
    action: 'service_inquiry',
    category: 'lead_generation',
    label: service,
  });
};

// Quote request tracking
export const trackQuoteRequest = (service: string) => {
  event({
    action: 'quote_request',
    category: 'conversion',
    label: service,
  });
};

// Page scroll tracking
export const trackScrollDepth = (depth: number) => {
  event({
    action: 'scroll_depth',
    category: 'engagement',
    value: depth,
  });
};

// Hook for automatic page view tracking
export const useGoogleAnalytics = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (GA_MEASUREMENT_ID && pathname) {
      pageview(pathname);
    }
  }, [pathname]);
};

export default useGoogleAnalytics;