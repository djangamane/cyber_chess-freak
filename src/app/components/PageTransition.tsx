import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface PageTransitionProps {
  targetPath: string;
  transitionDuration?: number;
}

export default function PageTransition({ targetPath, transitionDuration = 800 }: PageTransitionProps) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const router = useRouter();

  const handleTransition = () => {
    setIsTransitioning(true);
    
    // After the overlay is fully visible, navigate to the new page
    setTimeout(() => {
      router.push(targetPath);
    }, transitionDuration);
  };

  return (
    <>
      {/* Overlay that appears during transition */}
      {isTransitioning && (
        <div 
          className="fixed inset-0 bg-black z-50 transition-opacity duration-800"
          style={{
            animation: `fadeIn ${transitionDuration}ms ease-in-out forwards`
          }}
        />
      )}
      
      {/* The button that triggers the transition */}
      <button
        onClick={handleTransition}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full 
                 transition-all duration-300 transform hover:scale-105 focus:outline-none 
                 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 shadow-lg"
      >
        ENTER
      </button>
      
      {/* Add the CSS animation */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </>
  );
} 