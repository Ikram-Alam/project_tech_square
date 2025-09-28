import dynamic from "next/dynamic";

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center py-20">
    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

// Lazy load components that are not immediately visible
export const LazyFeatures = dynamic(() => import("../Features"), {
  loading: () => <LoadingSpinner />,
  ssr: true,
});

export const LazyServices = dynamic(() => import("../Services"), {
  loading: () => <LoadingSpinner />,
  ssr: true,
});

export const LazyPortfolio = dynamic(() => import("../Portfolio"), {
  loading: () => <LoadingSpinner />,
  ssr: true,
});

export const LazyQuote = dynamic(() => import("../Quote"), {
  loading: () => <LoadingSpinner />,
  ssr: false,
});

export const LazyVideo = dynamic(() => import("../Video"), {
  loading: () => <LoadingSpinner />,
  ssr: false, // Video component doesn't need SSR
});

export const LazyBrands = dynamic(() => import("../Brands"), {
  loading: () => <LoadingSpinner />,
  ssr: true,
});

export const LazyClients = dynamic(() => import("../Clients"), {
  loading: () => <LoadingSpinner />,
  ssr: true,
});

export const LazyTestimonials = dynamic(() => import("../Testimonials"), {
  loading: () => <LoadingSpinner />,
  ssr: false,
});

export const LazyPricing = dynamic(() => import("../Pricing"), {
  loading: () => <LoadingSpinner />,
  ssr: false,
});

export const LazyContact = dynamic(() => import("../Contact"), {
  loading: () => <LoadingSpinner />,
  ssr: false,
});

// WhatsApp component - load only when needed
export const LazyFloatingWhatsApp = dynamic(() => import("../WhatsApp/FloatingWhatsApp"), {
  loading: () => null,
  ssr: false,
});