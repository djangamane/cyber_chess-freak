"use client";

import React from 'react';

interface MobileMenuToggleProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function MobileMenuToggle({ isOpen, onToggle }: MobileMenuToggleProps) {
  return (
    <button
      onClick={onToggle}
      className={`
        fixed top-4 left-4 z-30 md:hidden
        w-12 h-12 bg-panel-bg border border-panel-border rounded-lg
        flex flex-col items-center justify-center space-y-1
        transition-all duration-300 hover:border-electric-blue
        touch-target active:scale-95
        ${isOpen ? 'border-electric-blue' : ''}
      `}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
    >
      {/* Animated Hamburger Lines */}
      <div className={`
        w-6 h-0.5 bg-electric-blue transition-all duration-300
        ${isOpen ? 'rotate-45 translate-y-1.5' : ''}
      `} />
      <div className={`
        w-6 h-0.5 bg-electric-blue transition-all duration-300
        ${isOpen ? 'opacity-0' : ''}
      `} />
      <div className={`
        w-6 h-0.5 bg-electric-blue transition-all duration-300
        ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}
      `} />
      
      {/* Glow effect */}
      <div className={`
        absolute inset-0 rounded-lg transition-all duration-300
        ${isOpen ? 'shadow-[0_0_15px_rgba(0,255,255,0.5)]' : ''}
      `} />
      
      {/* Status indicator */}
      <div className={`
        absolute -top-1 -right-1 w-3 h-3 rounded-full
        transition-all duration-300 animate-pulse
        ${isOpen ? 'bg-neon-green' : 'bg-electric-blue'}
      `} />
    </button>
  );
}