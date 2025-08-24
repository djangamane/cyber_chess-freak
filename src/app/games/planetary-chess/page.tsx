"use client";

import React, { useState, useEffect } from 'react';
import { Button, Panel, HolographicDisplay, StatusIndicator, ProgressBar } from '../../components/UIComponents';
import { useTransition } from '../../components/TransitionProvider';

export default function PlanetaryChessPage() {
  const { startTransition } = useTransition();
  const [gameMode, setGameMode] = useState<'single' | 'multi' | 'tutorial'>('single');

  useEffect(() => {
    // Redirect to the Vercel deployment when the page loads
    window.location.replace('https://pc-desk-club.vercel.app/');
  }, []);

  const handlePlayGame = () => {
    // This would redirect to the actual game (could be external link or embedded)
    window.open('https://planetarychess.com', '_blank');
  };

  const handleBackToGames = () => {
    startTransition('/games');
  };

  return (
    <div className="min-h-screen p-6 space-y-8">
      {/* Back Navigation */}
      <Button 
        variant="console" 
        size="sm" 
        onClick={handleBackToGames}
        className="mb-4"
      >
        ← BACK TO GAMING PROTOCOLS
      </Button>

      {/* Game Header */}
      <div className="text-center mb-12">
        <h1 className="heading-main text-4xl md:text-6xl mb-4">PLANETARY CHESS</h1>
        <div className="text-console text-lg mb-4">
          === STRATEGIC COUNTER-RACISM PROTOCOL ===
        </div>
        <div className="flex justify-center items-center space-x-6 mb-6">
          <StatusIndicator status="online" label="SYSTEM OPERATIONAL" />
          <StatusIndicator status="online" label="SERVERS ONLINE" />
          <StatusIndicator status="warning" label="HIGH DEMAND" />
        </div>
        <p className="text-text-primary max-w-4xl mx-auto text-lg leading-relaxed">
          A revolutionary chess experience that combines traditional strategic gameplay with 
          cutting-edge educational content designed to combat systemic racism through critical thinking.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        
        {/* Main Game Panel */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Game Preview */}
          <HolographicDisplay>
            <div className="space-y-6">
              <h2 className="heading-subsection">MISSION BRIEFING</h2>
              
              {/* Game Preview Area */}
              <div className="relative bg-dark-matter border border-electric-blue rounded-lg h-80 overflow-hidden">
                {/* Simulated game interface */}
                <div className="absolute inset-4 grid grid-cols-8 grid-rows-8 gap-1">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <div 
                      key={i}
                      className={`
                        ${(Math.floor(i / 8) + i) % 2 === 0 ? 'bg-electric-blue/20' : 'bg-dark-matter/50'}
                        border border-electric-blue/30 flex items-center justify-center text-xs
                      `}
                    >
                      {i < 16 && '♛'}
                      {i >= 48 && '♕'}
                    </div>
                  ))}
                </div>
                
                {/* Overlay UI elements */}
                <div className="absolute top-4 left-4 bg-panel-bg p-2 rounded border border-panel-border">
                  <div className="text-console text-xs">PLAYER: WHITE</div>
                  <div className="text-console text-xs">MOVE: 1</div>
                </div>
                
                <div className="absolute top-4 right-4 bg-panel-bg p-2 rounded border border-panel-border">
                  <div className="text-console text-xs">THREAT LEVEL: 7/10</div>
                  <div className="text-console text-xs">EDUCATION: 92%</div>
                </div>
                
                <div className="absolute bottom-4 left-4 right-4 bg-panel-bg p-3 rounded border border-panel-border">
                  <div className="text-electric-blue text-sm font-bold mb-1">Educational Prompt:</div>
                  <div className="text-xs text-text-primary">
                    "Consider how strategic planning in chess mirrors the systematic approach needed to address institutional racism..."
                  </div>
                </div>
              </div>

              {/* Game Mode Selection */}
              <div className="space-y-4">
                <h3 className="text-electric-blue font-sci-fi text-sm">SELECT PROTOCOL MODE:</h3>
                <div className="grid grid-cols-3 gap-3">
                  <button
                    onClick={() => setGameMode('single')}
                    className={`btn ${gameMode === 'single' ? 'btn-primary' : 'btn-secondary'} text-xs py-2`}
                  >
                    SINGLE PLAYER
                  </button>
                  <button
                    onClick={() => setGameMode('multi')}
                    className={`btn ${gameMode === 'multi' ? 'btn-primary' : 'btn-secondary'} text-xs py-2`}
                  >
                    MULTIPLAYER
                  </button>
                  <button
                    onClick={() => setGameMode('tutorial')}
                    className={`btn ${gameMode === 'tutorial' ? 'btn-primary' : 'btn-secondary'} text-xs py-2`}
                  >
                    TRAINING
                  </button>
                </div>
              </div>

              {/* Mode-specific content */}
              <div className="text-sm space-y-2">
                {gameMode === 'single' && (
                  <div className="text-text-secondary">
                    <span className="text-neon-green font-bold">Single Player Mode:</span> Practice against AI while 
                    learning about counter-racism strategies. Earn NFT chess pieces and unlock new scenarios.
                  </div>
                )}
                {gameMode === 'multi' && (
                  <div className="text-text-secondary">
                    <span className="text-electric-blue font-bold">Multiplayer Mode:</span> Challenge other players 
                    worldwide while discussing social justice topics in real-time educational prompts.
                  </div>
                )}
                {gameMode === 'tutorial' && (
                  <div className="text-text-secondary">
                    <span className="text-alert-orange font-bold">Training Mode:</span> Learn chess fundamentals 
                    integrated with anti-racism education. Perfect for beginners to both chess and social justice.
                  </div>
                )}
              </div>

              {/* Play Button */}
              <Button 
                variant="primary" 
                size="lg" 
                onClick={handlePlayGame}
                className="w-full animate-pulse"
              >
                🚀 LAUNCH PLANETARY CHESS
              </Button>
            </div>
          </HolographicDisplay>

          {/* Game Features */}
          <Panel>
            <div className="panel-header">
              <h3 className="panel-title">PROTOCOL SPECIFICATIONS</h3>
            </div>
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-electric-blue font-sci-fi text-sm mb-3">CORE FEATURES</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center space-x-2">
                      <div className="w-1 h-1 bg-neon-green rounded-full" />
                      <span>Traditional chess rules with educational integration</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1 h-1 bg-electric-blue rounded-full" />
                      <span>Real-time social justice scenarios</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1 h-1 bg-cyber-purple rounded-full" />
                      <span>NFT chess sets and collectibles</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1 h-1 bg-alert-orange rounded-full" />
                      <span>Progress tracking and impact metrics</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-electric-blue font-sci-fi text-sm mb-3">EDUCATIONAL COMPONENTS</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center space-x-2">
                      <div className="w-1 h-1 bg-neon-green rounded-full" />
                      <span>Historical racism analysis</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1 h-1 bg-electric-blue rounded-full" />
                      <span>Strategic thinking frameworks</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1 h-1 bg-cyber-purple rounded-full" />
                      <span>Community action planning</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1 h-1 bg-alert-orange rounded-full" />
                      <span>Critical consciousness development</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Panel>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          
          {/* Player Stats */}
          <Panel>
            <div className="panel-header">
              <h3 className="panel-title">PLAYER STATISTICS</h3>
            </div>
            <div className="p-4 space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Games Played</span>
                  <span className="text-electric-blue">0</span>
                </div>
                <ProgressBar progress={0} color="blue" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Education Score</span>
                  <span className="text-neon-green">0%</span>
                </div>
                <ProgressBar progress={0} color="green" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>NFT Collection</span>
                  <span className="text-cyber-purple">0/42</span>
                </div>
                <ProgressBar progress={0} color="orange" />
              </div>
            </div>
          </Panel>

          {/* System Requirements */}
          <Panel>
            <div className="panel-header">
              <h3 className="panel-title">SYSTEM REQUIREMENTS</h3>
            </div>
            <div className="p-4 space-y-3 text-sm">
              <div>
                <div className="text-electric-blue font-bold">Platform:</div>
                <div className="text-text-secondary">Web Browser (Chrome, Firefox, Safari)</div>
              </div>
              <div>
                <div className="text-electric-blue font-bold">Connection:</div>
                <div className="text-text-secondary">Stable Internet Required</div>
              </div>
              <div>
                <div className="text-electric-blue font-bold">Optional:</div>
                <div className="text-text-secondary">Web3 Wallet for NFT Features</div>
              </div>
            </div>
          </Panel>

          {/* Research Link */}
          <Panel>
            <div className="panel-header">
              <h3 className="panel-title">RESEARCH FOUNDATION</h3>
            </div>
            <div className="p-4 space-y-3 text-sm">
              <p className="text-text-secondary">
                Based on peer-reviewed research published in the International Journal of Game Theory and Technology.
              </p>
              <Button 
                variant="secondary" 
                size="sm" 
                onClick={() => startTransition('/about/research')}
                className="w-full"
              >
                📚 READ RESEARCH PAPER
              </Button>
            </div>
          </Panel>

          {/* Community */}
          <Panel>
            <div className="panel-header">
              <h3 className="panel-title">COMMUNITY HUB</h3>
            </div>
            <div className="p-4 space-y-3">
              <Button 
                variant="console" 
                size="sm" 
                onClick={() => startTransition('/tools/uncle-roy')}
                className="w-full"
              >
                💬 CHAT WITH UNCLE ROY
              </Button>
              <Button 
                variant="console" 
                size="sm" 
                onClick={() => startTransition('/tools/newsletter')}
                className="w-full"
              >
                📧 JOIN NEWSLETTER
              </Button>
            </div>
          </Panel>
        </div>
      </div>
    </div>
  );
}