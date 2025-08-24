"use client";

import React from 'react';
import { Button, Panel, HolographicDisplay, StatusIndicator } from '../components/UIComponents';
import { useTransition } from '../components/TransitionProvider';

export default function GamesSection() {
  const { startTransition } = useTransition();

  const handlePlayPlanetaryChess = () => {
    startTransition('/games/planetary-chess');
  };

  const handleViewClassified = () => {
    // Future game - show coming soon
    alert('🔒 CLASSIFIED SECTION\n\nSector 2 access requires elevated clearance.\nComing Soon...');
  };

  return (
    <div className="min-h-screen p-6 space-y-8">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h1 className="heading-section">STRATEGIC GAMING PROTOCOLS</h1>
        <div className="text-console text-sm mb-4">
          [ MISSION-CRITICAL TRAINING SIMULATIONS ]
        </div>
        <p className="text-text-secondary max-w-3xl mx-auto">
          Deploy advanced gaming protocols designed to enhance strategic thinking, 
          counter-racism education, and social impact through immersive gameplay experiences.
        </p>
      </div>

      {/* Games Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
        
        {/* Planetary Chess - Primary Game */}
        <HolographicDisplay className="relative overflow-hidden">
          <div className="space-y-6">
            {/* Game Header */}
            <div className="flex items-center justify-between">
              <div>
                <h2 className="heading-subsection">PLANETARY CHESS</h2>
                <div className="flex items-center space-x-4">
                  <StatusIndicator status="online" label="OPERATIONAL" size="sm" />
                  <span className="text-console text-xs">v2.0.24 | STABLE</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-console text-xs">THREAT ASSESSMENT</div>
                <div className="text-alert-orange font-bold">CRITICAL</div>
              </div>
            </div>

            {/* Game Preview/Screenshot Area */}
            <div className="relative bg-dark-matter border border-electric-blue/30 rounded-lg p-4 h-48 flex items-center justify-center">
              <div className="text-center space-y-2">
                <div className="text-4xl">♛</div>
                <div className="text-console text-sm">CHESS SIMULATION PREVIEW</div>
                <div className="text-xs text-text-muted">Full 3D Environment with NFT Integration</div>
              </div>
              
              {/* Overlay grid effect */}
              <div 
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  backgroundImage: `
                    linear-gradient(90deg, rgba(0,255,255,0.3) 1px, transparent 1px),
                    linear-gradient(0deg, rgba(0,255,255,0.3) 1px, transparent 1px)
                  `,
                  backgroundSize: '20px 20px'
                }}
              />
            </div>

            {/* Game Features */}
            <div className="space-y-4">
              <h3 className="text-electric-blue font-sci-fi text-sm">MISSION FEATURES:</h3>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-1 h-1 bg-neon-green rounded-full" />
                  <span>Strategic Chess Gameplay</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1 h-1 bg-electric-blue rounded-full" />
                  <span>Educational Prompts</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1 h-1 bg-cyber-purple rounded-full" />
                  <span>NFT Chess Sets</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1 h-1 bg-alert-orange rounded-full" />
                  <span>Social Impact Metrics</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1 h-1 bg-neon-green rounded-full" />
                  <span>Single & Multiplayer</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1 h-1 bg-electric-blue rounded-full" />
                  <span>Play-to-Earn Rewards</span>
                </div>
              </div>
            </div>

            {/* Game Description */}
            <div className="space-y-3 text-sm">
              <p className="text-text-primary">
                A revolutionary chess variant that combines traditional strategy with real-world 
                problem-solving. As you move pieces, encounter strategic questions and scenarios 
                related to social justice, making every game a learning experience.
              </p>
              <p className="text-text-secondary">
                <span className="text-neon-green font-bold">Research-Backed:</span> Based on 
                peer-reviewed study "Game Theory in Action" (IJGTT, Vol.10 No.2, June 2024).
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button 
                variant="primary" 
                size="lg" 
                onClick={handlePlayPlanetaryChess}
                className="w-full"
              >
                🎯 INITIATE CHESS PROTOCOL
              </Button>
              <div className="flex space-x-3">
                <Button 
                  variant="secondary" 
                  size="sm" 
                  onClick={() => startTransition('/about/research')}
                  className="flex-1"
                >
                  📚 VIEW RESEARCH
                </Button>
                <Button 
                  variant="secondary" 
                  size="sm" 
                  onClick={() => startTransition('/games/planetary-chess/tutorial')}
                  className="flex-1"
                >
                  🎓 TUTORIAL
                </Button>
              </div>
            </div>
          </div>
        </HolographicDisplay>

        {/* Sector 2 - Classified Game */}
        <Panel className="relative opacity-75">
          <div className="space-y-6">
            {/* Classified Header */}
            <div className="flex items-center justify-between">
              <div>
                <h2 className="heading-subsection text-text-muted">SECTOR 2</h2>
                <div className="flex items-center space-x-4">
                  <StatusIndicator status="offline" label="CLASSIFIED" size="sm" />
                  <span className="text-console text-xs">CLEARANCE REQUIRED</span>
                </div>
              </div>
              <div className="text-4xl opacity-50">🔒</div>
            </div>

            {/* Classified Preview */}
            <div className="relative bg-dark-matter border border-warning-red/30 rounded-lg p-4 h-48 flex items-center justify-center">
              <div className="text-center space-y-3">
                <div className="text-warning-red text-2xl animate-pulse">⚠ CLASSIFIED ⚠</div>
                <div className="text-console text-sm">AUTHORIZATION LEVEL: OMEGA</div>
                <div className="text-xs text-text-muted">Next-Generation Strategic Platform</div>
                <div className="text-xs text-warning-red">STATUS: IN DEVELOPMENT</div>
              </div>
              
              {/* Static effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-warning-red/10 to-transparent opacity-30" />
            </div>

            {/* Classified Features */}
            <div className="space-y-4">
              <h3 className="text-warning-red font-sci-fi text-sm">CLASSIFIED FEATURES:</h3>
              <div className="grid grid-cols-1 gap-2 text-sm opacity-60">
                <div className="flex items-center space-x-2">
                  <div className="w-1 h-1 bg-warning-red rounded-full animate-pulse" />
                  <span>[REDACTED]</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1 h-1 bg-warning-red rounded-full animate-pulse" />
                  <span>Advanced AI Integration</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1 h-1 bg-warning-red rounded-full animate-pulse" />
                  <span>[CLASSIFIED PROTOCOL]</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1 h-1 bg-warning-red rounded-full animate-pulse" />
                  <span>Enhanced Social Impact</span>
                </div>
              </div>
            </div>

            {/* Coming Soon Content */}
            <div className="space-y-3 text-sm">
              <p className="text-text-muted">
                The next evolution in strategic gaming is under development. Higher clearance 
                levels will unlock advanced protocols designed for maximum social impact.
              </p>
            </div>

            {/* Locked Action */}
            <Button 
              variant="danger" 
              size="lg" 
              className="w-full opacity-50 cursor-not-allowed"
              disabled
            >
              🔒 ACCESS DENIED - COMING SOON
            </Button>
          </div>

          {/* Classification overlay */}
          <div className="absolute top-4 right-4 bg-warning-red/20 border border-warning-red px-2 py-1 rounded text-xs text-warning-red font-bold">
            TOP SECRET
          </div>
        </Panel>
      </div>

      {/* Bottom Stats Section */}
      <div className="max-w-7xl mx-auto mt-12">
        <Panel>
          <div className="panel-header">
            <h3 className="panel-title">GAMING PROTOCOL STATISTICS</h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-electric-blue">1,247</div>
                <div className="text-sm text-text-secondary">Active Players</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-neon-green">89%</div>
                <div className="text-sm text-text-secondary">Mission Success Rate</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-alert-orange">156</div>
                <div className="text-sm text-text-secondary">Educational Scenarios</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-cyber-purple">42</div>
                <div className="text-sm text-text-secondary">NFT Chess Sets</div>
              </div>
            </div>
          </div>
        </Panel>
      </div>
    </div>
  );
}