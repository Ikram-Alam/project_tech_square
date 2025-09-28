"use client";

import { Suspense, lazy, ComponentType } from "react";

interface LazyLoadWrapperProps {
  fallback?: React.ReactNode;
  children: React.ReactNode;
}

const LazyLoadWrapper = ({ 
  fallback = (
    <div className="flex items-center justify-center py-20">
      <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
    </div>
  ), 
  children 
}: LazyLoadWrapperProps) => {
  return (
    <Suspense fallback={fallback}>
      {children}
    </Suspense>
  );
};

// Higher-order component for lazy loading
export const withLazyLoading = <P extends object>(
  Component: ComponentType<P>,
  fallback?: React.ReactNode
) => {
  const LazyComponent = lazy(() => Promise.resolve({ default: Component }));
  
  return (props: P) => (
    <LazyLoadWrapper fallback={fallback}>
      <LazyComponent {...props} />
    </LazyLoadWrapper>
  );
};

export default LazyLoadWrapper;