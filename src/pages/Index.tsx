import { lazy, Suspense } from "react";
import { usePerformanceMonitor } from "@/hooks/use-performance";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

// Lazy load non-critical components
const About = lazy(() => import("@/components/About"));
const Services = lazy(() => import("@/components/Services"));
const Productions = lazy(() => import("@/components/Productions"));
const Newsletter = lazy(() => import("@/components/Newsletter"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

// Loading component for better UX
const SectionLoader = () => (
  <div className="flex items-center justify-center py-20">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const Index = () => {
  // Monitor performance metrics
  usePerformanceMonitor();

  return (
    <div className="min-h-screen bg-background gpu-accelerated">
      <Header />
      <Hero />
      
      <Suspense fallback={<SectionLoader />}>
        <About />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <Services />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <Productions />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <Newsletter />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <Contact />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
