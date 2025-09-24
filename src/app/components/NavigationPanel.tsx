"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavigationItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  path?: string;
  subItems?: NavigationItem[];
  isExpanded?: boolean;
}

interface NavigationPanelProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function NavigationPanel({ isOpen, onToggle }: NavigationPanelProps) {
  const pathname = usePathname();
  
  // Helper function to check if a URL is external
  const isExternalUrl = (url: string) => {
    return url.startsWith('http://') || url.startsWith('https://');
  };
  
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    games: false,
    tools: false,
    about: false
  });

  // Navigation structure based on the architecture
  const navigationItems: NavigationItem[] = [
    {
      id: 'games',
      label: 'GAMES',
      icon: <GameIcon />,
      subItems: [
        { id: 'planetary-chess', label: 'Planetary Chess', icon: <ChessIcon />, path: '/games/planetary-chess' },
        { id: 'game-2', label: 'Sector 2 - Classified', icon: <LockedIcon />, path: '/games/classified' }
      ]
    },
    // Moving FAQ to second position for better visibility
    {
      id: 'faq',
      label: 'FAQ',
      icon: <FAQIcon />,
      path: '/faq'
    },
    {
      id: 'tools',
      label: 'TOOLS',
      icon: <ToolsIcon />,
      subItems: [
        { id: 'keisha-ai', label: 'Keisha AI', icon: <ChatIcon />, path: 'https://talk2keisha.com' },
        { id: 'newsletter', label: 'Newsletter', icon: <NewsletterIcon />, path: 'https://planetarychess.beehiiv.com/' },
        { id: 'research', label: 'Research', icon: <ResourcesIcon />, path: 'https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=6390773' }
      ]
    },
    {
      id: 'about',
      label: 'ABOUT',
      icon: <AboutIcon />,
      subItems: [
        { id: 'mission', label: 'Mission & Story', icon: <MissionIcon />, path: '/about/mission' },
        { id: 'research', label: 'Research & Publications', icon: <ResearchIcon />, path: '/about/research' },
        { id: 'contact', label: 'Contact', icon: <ContactIcon />, path: '/about/contact' }
      ]
    }
  ];

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const isItemActive = (path: string) => {
    return pathname === path || pathname.startsWith(path + '/');
  };

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
          onClick={onToggle}
        />
      )}
      
      {/* Navigation Panel */}
      <div className={`
        fixed left-0 top-0 h-screen w-80 bg-cosmic z-20
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0 md:relative md:z-auto md:w-80
        max-w-[85vw] sm:max-w-[90vw]
        border-r border-panel-border/50
        backdrop-filter blur(10px)
      `}>
        {/* Panel Header */}
        <div className="panel-header border-b border-panel-border mobile-p-3 md:p-4">
          <div className="flex items-center justify-between">
            <h2 className="panel-title text-sm md:text-base">COMMAND CONSOLE</h2>
            <button 
              onClick={onToggle}
              className="btn-console md:hidden touch-target w-8 h-8 flex items-center justify-center"
              aria-label="Close navigation"
            >
              ✕
            </button>
          </div>
          <div className="text-console text-xs mt-2 flex items-center justify-start space-x-2">
            <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
            <span>SYSTEM ONLINE | STATUS: OPERATIONAL</span>
          </div>
        </div>

        {/* Navigation Items */}
        <div className="p-2 md:p-4 space-y-1 md:space-y-2 overflow-visible pb-48">
          {navigationItems.map((item) => (
            <div key={item.id} className="space-y-1">
              {/* Main Item */}
              {item.path ? (
                isExternalUrl(item.path) ? (
                  <a 
                    href={item.path}
                    className={`nav-item touch-target ${item.id === 'faq' ? 'bg-electric-blue/20 border border-electric-blue/60 hover:border-electric-blue font-bold' : ''}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 flex items-center justify-center text-sm md:text-base">
                      {item.icon}
                    </span>
                    <span className="font-sci-fi text-xs md:text-sm">{item.label}</span>
                  </a>
                ) : (
                  <Link 
                    href={item.path}
                    className={`nav-item touch-target ${isItemActive(item.path) ? 'active' : ''} ${item.id === 'faq' ? 'bg-electric-blue/20 border border-electric-blue/60 hover:border-electric-blue font-bold' : ''}`}
                    onClick={onToggle}
                  >
                    <span className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 flex items-center justify-center text-sm md:text-base">
                      {item.icon}
                    </span>
                    <span className="font-sci-fi text-xs md:text-sm">{item.label}</span>
                  </Link>
                )
              ) : (
                <button
                  onClick={() => toggleSection(item.id)}
                  className={`nav-item w-full text-left touch-target ${
                    item.subItems?.some(sub => sub.path && isItemActive(sub.path)) ? 'active' : ''
                  }`}
                >
                  <span className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 flex items-center justify-center text-sm md:text-base">
                    {item.icon}
                  </span>
                  <span className="font-sci-fi text-xs md:text-sm flex-1">{item.label}</span>
                  <span className={`
                    transition-transform duration-200 text-sm
                    ${expandedSections[item.id] ? 'rotate-90' : ''}
                  `}>
                    ▶
                  </span>
                </button>
              )}

              {/* Sub Items */}
              {item.subItems && expandedSections[item.id] && (
                <div className="ml-4 md:ml-6 space-y-1 animate-slide-in-left">
                  {item.subItems.map((subItem) => (
                    isExternalUrl(subItem.path || '') ? (
                      <a
                        key={subItem.id}
                        href={subItem.path}
                        className={`nav-item pl-2 md:pl-4 touch-target ${subItem.id === 'game-2' ? 'opacity-60' : ''}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="w-3 h-3 md:w-4 md:h-4 mr-2 md:mr-3 flex items-center justify-center text-xs">
                          {subItem.icon}
                        </span>
                        <span className="font-body text-xs md:text-sm flex-1">{subItem.label}</span>
                        {subItem.id === 'game-2' && (
                          <span className="ml-auto text-xs text-alert">LOCKED</span>
                        )}
                      </a>
                    ) : (
                      <Link
                        key={subItem.id}
                        href={subItem.path || '#'}
                        className={`nav-item pl-2 md:pl-4 touch-target ${
                          subItem.path && isItemActive(subItem.path) ? 'active' : ''
                        } ${subItem.id === 'game-2' ? 'opacity-60' : ''}`}
                        onClick={onToggle}
                      >
                        <span className="w-3 h-3 md:w-4 md:h-4 mr-2 md:mr-3 flex items-center justify-center text-xs">
                          {subItem.icon}
                        </span>
                        <span className="font-body text-xs md:text-sm flex-1">{subItem.label}</span>
                        {subItem.id === 'game-2' && (
                          <span className="ml-auto text-xs text-alert">LOCKED</span>
                        )}
                      </Link>
                    )
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* System Status Footer */}
        <div className="absolute bottom-0 p-4 border-t border-panel-border bg-cosmic-dark w-full">
          <div className="text-console text-xs space-y-3">
            <div className="flex items-center justify-between">
              <span>NEURAL LINK:</span>
              <span className="text-neon-green animate-pulse">ACTIVE</span>
            </div>
            <div className="flex items-center justify-between">
              <span>MISSION STATUS:</span>
              <span className="text-electric-blue">IN PROGRESS</span>
            </div>
            <div className="flex items-center justify-between">
              <span>THREAT LEVEL:</span>
              <span className="text-alert-orange">CRITICAL</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Icon Components
function GameIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
    </svg>
  );
}

function ChessIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M19,22H5V20H19V22M16,18H8L10.18,8H13.82L16,18M10,4A1,1 0 0,1 11,5A1,1 0 0,1 10,6A1,1 0 0,1 9,5A1,1 0 0,1 10,4M14,4A1,1 0 0,1 15,5A1,1 0 0,1 14,6A1,1 0 0,1 13,5A1,1 0 0,1 14,4M12,1A1,1 0 0,1 13,2A1,1 0 0,1 12,3A1,1 0 0,1 11,2A1,1 0 0,1 12,1Z"/>
    </svg>
  );
}

function LockedIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z"/>
    </svg>
  );
}

function ToolsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M22.7,19L13.6,9.9C14.5,7.6 14,4.9 12.1,3C10.1,1 7.1,0.6 4.7,1.7L9,6L6,9L1.6,4.7C0.4,7.1 0.9,10.1 2.9,12.1C4.8,14 7.5,14.5 9.8,13.6L18.9,22.7C19.3,23.1 19.9,23.1 20.3,22.7L22.6,20.4C23.1,20 23.1,19.3 22.7,19Z"/>
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M12,3C17.5,3 22,6.58 22,11C22,15.42 17.5,19 12,19C10.76,19 9.57,18.82 8.47,18.5C5.55,21 2,21 2,21C4.33,18.67 4.7,17.1 4.75,16.5C3.05,15.07 2,13.13 2,11C2,6.58 6.5,3 12,3Z"/>
    </svg>
  );
}

function NewsletterIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"/>
    </svg>
  );
}

function ResourcesIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
    </svg>
  );
}

function AboutIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,17L7,12L8.41,10.59L12,14.17L15.59,10.59L17,12L12,17Z"/>
    </svg>
  );
}

function MissionIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,17L7,12L8.41,10.59L12,14.17L15.59,10.59L17,12L12,17Z"/>
    </svg>
  );
}

function ResearchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"/>
    </svg>
  );
}

function ContactIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M22,4C22,2.89 21.1,2 20,2H4A2,2 0 0,0 2,4V16A2,2 0 0,0 4,18H18L22,22V4Z"/>
    </svg>
  );
}

function FAQIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M15.07,11.25L14.17,12.17C13.45,12.89 13,13.5 13,15H11V14.5C11,13.39 11.45,12.39 12.17,11.67L13.41,10.41C13.78,10.05 14,9.55 14,9C14,7.89 13.1,7 12,7A2,2 0 0,0 10,9H8A4,4 0 0,1 12,5A4,4 0 0,1 16,9C16,9.88 15.64,10.67 15.07,11.25M13,19H11V17H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z"/>
    </svg>
  );
}