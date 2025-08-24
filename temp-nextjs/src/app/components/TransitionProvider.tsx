"use client";

import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';
import { useRouter, usePathname } from 'next/navigation';

// Create context with default values
const TransitionContext = createContext({
  isTransitioning: false,
  startTransition: (path: string) => {},
});

// Custom hook to use the transition context
export const useTransition = () => useContext(TransitionContext);

// Transition provider component
export default function TransitionProvider({ children }: { children: React.ReactNode }) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  
  // Controlled transition function
  const startTransition = useCallback((path: string) => {
    if (isTransitioning || path === pathname) return;
    
    // Start transition animation
    setIsTransitioning(true);
    
    // Wait for fade out, then navigate
    setTimeout(() => {
      router.push(path);
      
      // Reset transition state after navigation completes
      setTimeout(() => {
        setIsTransitioning(false);
      }, 600);
    }, 600);
  }, [isTransitioning, pathname, router]);
  
  // Handle initial page load
  useEffect(() => {
    // Brief transition on initial load
    setIsTransitioning(true);
    
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []); // Empty dependency array means this runs once on mount
  
  return (
    <TransitionContext.Provider value={{ isTransitioning, startTransition }}>
      {children}
      
      {/* Transition overlay with improved styling */}
      <div 
        className="fixed inset-0 bg-black z-50 pointer-events-none"
        style={{
          opacity: isTransitioning ? 1 : 0,
          transition: `opacity ${isTransitioning ? '600ms' : '800ms'} ease-in-out`,
          visibility: isTransitioning ? 'visible' : 'hidden',
        }}
      />
    </TransitionContext.Provider>
  );
} 