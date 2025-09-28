import dynamic from "next/dynamic";

// Simple loading component without JSX
const createLoader = () => () => null;

// Lazy load components with correct paths
export const LazyFeatures = dynamic(() => import("../Features"), {
  loading: createLoader(),
});

export const LazyServices = dynamic(() => import("../Services"), {
  loading: createLoader(),
});

export const LazyPortfolio = dynamic(() => import("../Portfolio"), {
  loading: createLoader(),
});

export const LazyQuote = dynamic(() => import("../Quote"), {
  loading: createLoader(),
});

export const LazyVideo = dynamic(() => import("../Video"), {
  loading: createLoader(),
});

export const LazyBrands = dynamic(() => import("../Brands"), {
  loading: createLoader(),
});

export const LazyClients = dynamic(() => import("../Clients"), {
  loading: createLoader(),
});

export const LazyTestimonials = dynamic(() => import("../Testimonials"), {
  loading: createLoader(),
});

export const LazyPricing = dynamic(() => import("../Pricing"), {
  loading: createLoader(),
});

export const LazyContact = dynamic(() => import("../Contact"), {
  loading: createLoader(),
});

// WhatsApp component - load only when needed
export const LazyFloatingWhatsApp = dynamic(() => import("../WhatsApp/FloatingWhatsApp"), {
  loading: createLoader(),
});