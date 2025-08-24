"use client";

import React, { useState, ReactNode, useEffect } from 'react';
import NavigationPanel from './NavigationPanel';
import MobileMenuToggle from './MobileMenuToggle';

interface SpaceshipLayoutProps {
  children: ReactNode;
}

export default function SpaceshipLayout({ children }: SpaceshipLayoutProps) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState<string>('');
  const [currentDate, setCurrentDate] = useState<string>('');

  useEffect(() => {
    // Only update time on client side after hydration
    const updateDateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString());
      setCurrentDate(now.toLocaleDateString());
    };
    
    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    
    return () => clearInterval(interval);
  }, []);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="min-h-screen bg-space relative">
      {/* Mobile Menu Toggle */}
      <MobileMenuToggle isOpen={isNavOpen} onToggle={toggleNav} />
      
      {/* Main Layout Container */}
      <div className="flex min-h-screen">
        {/* Navigation Panel */}
        <NavigationPanel isOpen={isNavOpen} onToggle={toggleNav} />
        
        {/* Main Content Area */}
        <main className={`
          flex-1 relative transition-all duration-300 ease-in-out
          md:ml-0 ${isNavOpen ? 'md:ml-80' : ''}
          min-h-screen
        `}>
          {/* Background Effects */}
          <div className="absolute inset-0 z-0">
            {/* Grid Pattern Overlay - Hidden on mobile for performance */}
            <div 
              className="absolute inset-0 opacity-5 md:block hidden"
              style={{
                backgroundImage: `
                  linear-gradient(90deg, rgba(0,255,255,0.3) 1px, transparent 1px),
                  linear-gradient(0deg, rgba(0,255,255,0.3) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px'
              }}
            />
            
            {/* Simplified ambient effects for mobile */}
            <div className="absolute top-10 left-10 w-20 h-20 md:w-32 md:h-32 bg-electric-blue/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-20 w-24 h-24 md:w-40 md:h-40 bg-cyber-purple/10 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/3 w-16 h-16 md:w-24 md:h-24 bg-neon-green/10 rounded-full blur-2xl md:hidden" />
          </div>
          
          {/* Content Container */}
          <div className="relative z-10 min-h-screen">
            {/* Top Status Bar - Simplified for mobile */}
            <div className="hidden md:flex items-center justify-between p-4 border-b border-panel-border/30">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
                  <span className="text-console text-xs">SYSTEM ONLINE</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-electric-blue rounded-full animate-pulse" />
                  <span className="text-console text-xs">NEURAL LINK ACTIVE</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <span className="text-console text-xs">
                  STARDATE: {currentDate}
                </span>
                <span className="text-console text-xs">
                  {currentTime}
                </span>
              </div>
            </div>
            
            {/* Mobile status indicator */}
            <div className="md:hidden flex items-center justify-between p-2 border-b border-panel-border/20">
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-neon-green rounded-full animate-pulse" />
                <span className="text-console text-xs">ONLINE</span>
              </div>
              <span className="text-console text-xs">
                {currentTime}
              </span>
            </div>
            
            {/* Page Content */}
            <div className="p-2 md:p-4 lg:p-8">
              {children}
            </div>
            
            {/* Bottom Status Bar - Desktop only */}
            <div className="hidden lg:flex items-center justify-center p-4 border-t border-panel-border/30 mt-auto">
              <div className="flex items-center space-x-8 text-console text-xs">
                <div className="flex items-center space-x-2">
                  <span>MISSION:</span>
                  <span className="text-electric-blue">COUNTER-RACISM PROTOCOL</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>STATUS:</span>
                  <span className="text-alert-orange">IN PROGRESS</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>THREAT LEVEL:</span>
                  <span className="text-warning-red animate-pulse">CRITICAL</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Corner Radar Display */}
          <div className="fixed bottom-4 right-4 w-16 h-16 hidden lg:block">
            <div className="relative w-full h-full bg-dark-matter border border-neon-green rounded-full opacity-80">
              {/* Radar Circle */}
              <div className="absolute inset-2 border border-neon-green/50 rounded-full" />
              <div className="absolute inset-4 border border-neon-green/30 rounded-full" />
              
              {/* Sweeping Line */}
              <div 
                className="absolute top-1/2 left-1/2 w-px h-6 bg-neon-green origin-bottom transform -translate-x-1/2 -translate-y-full animate-radar"
              />
              
              {/* Blips */}
              <div className="absolute top-3 right-5 w-1 h-1 bg-electric-blue rounded-full animate-pulse" />
              <div className="absolute bottom-4 left-6 w-1 h-1 bg-alert-orange rounded-full animate-pulse" />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}