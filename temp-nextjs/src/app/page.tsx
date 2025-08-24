"use client";

import { useTransition } from "./components/TransitionProvider";
import VideoBackground from "./components/VideoBackground";
import { Button, HolographicDisplay, StatusIndicator } from "./components/UIComponents";
import { useState, useEffect } from "react";

export default function SpaceshipBridge() {
  const { startTransition } = useTransition();
  const [missionStatus, setMissionStatus] = useState<'standby' | 'active' | 'critical'>('standby');
  const [systemsOnline, setSystemsOnline] = useState(false);

  useEffect(() => {
    // Simulate system startup sequence
    const timer = setTimeout(() => {
      setSystemsOnline(true);
      setMissionStatus('active');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleInitiateMission = () => {
    setMissionStatus('critical');
    startTransition("/war-room");
  };

  const handleNavigateToGames = () => {
    startTransition("/games/planetary-chess");
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Video - Now as Holographic Earth Display */}
      <div className="absolute inset-0 w-full h-full">
        {/* Mobile Welcome Screen */}
        <div className="absolute inset-0 w-full h-full md:hidden">
          <img src="/pchessmobile.png" alt="Planetary Chess Mobile" className="w-full h-full object-cover opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/20 to-cyber-purple/20" />
        </div>

        {/* Desktop/Tablet Holographic Display */}
        <div className="hidden md:block absolute inset-0 w-full h-full">
          <VideoBackground src="/pchess.mp4" />
          {/* Holographic overlay effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/10 via-transparent to-cyber-purple/10" />
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(90deg, rgba(0,255,255,0.3) 1px, transparent 1px),
                linear-gradient(0deg, rgba(0,255,255,0.3) 1px, transparent 1px)
              `,
              backgroundSize: '30px 30px'
            }}
          />
        </div>
      </div>

      {/* Main Bridge Console Interface */}
      <div className="z-10 relative flex flex-col items-center text-center px-3 md:px-6 py-6 md:py-12 w-full max-w-6xl">
        {/* System Status Header */}
        <div className="mb-4 md:mb-8 w-full">
          <div className="flex justify-center items-center space-x-4 md:space-x-8 mb-4 overflow-x-auto">
            <StatusIndicator 
              status={systemsOnline ? 'online' : 'warning'} 
              label="LIFE SUPPORT" 
              size="sm" 
            />
            <StatusIndicator 
              status={systemsOnline ? 'online' : 'offline'} 
              label="NAVIGATION" 
              size="sm" 
            />
            <StatusIndicator 
              status={missionStatus === 'critical' ? 'error' : 'online'} 
              label="MISSION STATUS" 
              size="sm" 
            />
          </div>
        </div>

        {/* Main Title - Mission Briefing Style */}
        <HolographicDisplay className="mb-4 md:mb-8 w-full">
          <div className="text-center space-y-2 md:space-y-4">
            <h1 className="heading-main animate-fade-in text-3xl md:text-6xl">
              PLANETARY CHESS
            </h1>
            <div className="font-console text-electric-blue text-sm md:text-lg tracking-wider">
              === COUNTER-RACISM STRATEGIC COMMAND CENTER ===
            </div>
            <div className="text-console text-xs md:text-sm opacity-80">
              MISSION BRIEFING | CLASSIFICATION: URGENT
            </div>
          </div>
        </HolographicDisplay>

        {/* Mission Statement Panel */}
        <div className="panel mb-4 md:mb-8 w-full max-w-4xl">
          <div className="panel-header">
            <h2 className="panel-title text-sm md:text-base">MISSION PARAMETERS</h2>
          </div>
          <div className="p-3 md:p-6 space-y-3 md:space-y-4">
            <p className="text-sm md:text-lg text-text-primary leading-relaxed">
              <span className="text-electric-blue font-bold">OBJECTIVE:</span> Deploy strategic gaming protocols to dismantle systemic racism through education, critical thinking, and collective action.
            </p>
            <p className="text-xs md:text-base text-text-secondary">
              <span className="text-neon-green font-bold">METHOD:</span> Planetary Chess combines traditional strategy with real-world problem-solving, creating an immersive learning environment where every move counts toward social change.
            </p>
            <div className="border-t border-panel-border pt-3 md:pt-4 mt-3 md:mt-4">
              <div className="flex flex-wrap gap-2 md:gap-4 justify-center text-xs md:text-sm">
                <div className="flex items-center space-x-1 md:space-x-2">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-electric-blue rounded-full" />
                  <span>Strategic Gaming</span>
                </div>
                <div className="flex items-center space-x-1 md:space-x-2">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-neon-green rounded-full" />
                  <span>Educational Content</span>
                </div>
                <div className="flex items-center space-x-1 md:space-x-2">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-alert-orange rounded-full" />
                  <span>Social Impact</span>
                </div>
                <div className="flex items-center space-x-1 md:space-x-2">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-cyber-purple rounded-full" />
                  <span>NFT Integration</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons - Mission Controls */}
        <div className="space-y-3 md:space-y-4 w-full max-w-sm md:max-w-md">
          <Button 
            variant="primary" 
            size="lg"
            onClick={handleInitiateMission}
            className="w-full animate-pulse text-sm md:text-base"
          >
            🚀 INITIATE MISSION - ENTER WAR ROOM
          </Button>
          
          <Button 
            variant="secondary" 
            size="md"
            onClick={handleNavigateToGames}
            className="w-full text-sm md:text-base"
          >
            🎯 DIRECT TO PLANETARY CHESS
          </Button>
        </div>

        {/* Quote/Motto */}
        <div className="mt-4 md:mt-8 text-center px-2">
          <div className="text-console text-xs md:text-sm opacity-90 mb-2">
            [ STRATEGIC PROTOCOL ALPHA-7 ]
          </div>
          <p className="text-sm md:text-xl font-bold text-electric-blue tracking-wide animate-glow">
            KNOW THYSELF + KNOW THY ENEMY = VICTORY OVER SYSTEMIC RACISM
          </p>
        </div>

        {/* Research Foundation Indicator */}
        <div className="mt-3 md:mt-6 text-center text-xs md:text-sm text-text-muted px-2">
          <div className="flex items-center justify-center space-x-1 md:space-x-2 flex-wrap">
            <div className="w-1 h-1 bg-neon-green rounded-full animate-pulse" />
            <span className="text-center">Research-backed by Game Theory in Action (IJGTT, 2024)</span>
            <div className="w-1 h-1 bg-neon-green rounded-full animate-pulse" />
          </div>
        </div>
      </div>

      {/* Corner Elements - Bridge Details */}
      <div className="absolute top-4 left-4 hidden lg:block text-console text-xs opacity-60">
        <div>SHIP ID: PC-2024</div>
        <div>SECTOR: EARTH-SOL</div>
        <div>WARP: STANDBY</div>
      </div>

      <div className="absolute top-4 right-4 hidden lg:block text-console text-xs opacity-60 text-right">
        <div>CAPT: J. BUSSAJA</div>
        <div>CREW: ACTIVE</div>
        <div>ALERT: {missionStatus.toUpperCase()}</div>
      </div>
    </div>
  );
}
