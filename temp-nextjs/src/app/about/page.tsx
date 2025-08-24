"use client";

import React from 'react';
import { Button, Panel, HolographicDisplay, StatusIndicator } from '../components/UIComponents';
import { useTransition } from '../components/TransitionProvider';

export default function AboutSection() {
  const { startTransition } = useTransition();

  return (
    <div className="min-h-screen p-6 space-y-8">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h1 className="heading-section">MISSION ARCHIVES</h1>
        <div className="text-console text-sm mb-4">
          [ COMMAND STRUCTURE & OPERATIONAL HISTORY ]
        </div>
        <p className="text-text-secondary max-w-3xl mx-auto">
          Discover the origins, mission, and strategic framework behind Planetary Chess - 
          a revolutionary approach to combating systemic racism through strategic gaming and education.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
        
        {/* Mission & Story */}
        <div className="space-y-6">
          <HolographicDisplay>
            <div className="space-y-6">
              <h2 className="heading-subsection">MISSION DIRECTIVE</h2>
              
              {/* Mission Statement */}
              <div className="space-y-4">
                <div className="bg-electric-blue/10 border border-electric-blue/30 rounded-lg p-4">
                  <h3 className="text-electric-blue font-sci-fi text-sm mb-2">PRIMARY OBJECTIVE</h3>
                  <p className="text-text-primary text-lg font-medium">
                    "The eradication of white supremacy or systemic racism through strategic 
                    education, gaming, and community empowerment."
                  </p>
                </div>
                
                <div className="bg-neon-green/10 border border-neon-green/30 rounded-lg p-4">
                  <h3 className="text-neon-green font-sci-fi text-sm mb-2">STRATEGIC APPROACH</h3>
                  <p className="text-text-primary">
                    Utilizing game theory principles and chess strategy to develop critical 
                    thinking skills necessary for dismantling institutional racism.
                  </p>
                </div>
              </div>

              {/* Organization Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-4">
                  <StatusIndicator status="online" label="OPERATIONAL" size="sm" />
                  <span className="text-console text-sm">501(c)(3) NONPROFIT ORGANIZATION</span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-electric-blue font-bold">Founded:</span>
                    <div className="text-text-secondary">2024</div>
                  </div>
                  <div>
                    <span className="text-neon-green font-bold">Status:</span>
                    <div className="text-text-secondary">Active Operations</div>
                  </div>
                  <div>
                    <span className="text-cyber-purple font-bold">Research Papers:</span>
                    <div className="text-text-secondary">6 International</div>
                  </div>
                  <div>
                    <span className="text-alert-orange font-bold">Impact Areas:</span>
                    <div className="text-text-secondary">Global</div>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="space-y-3">
                <Button 
                  variant="primary" 
                  size="lg" 
                  onClick={() => startTransition('/about/mission')}
                  className="w-full"
                >
                  📜 FULL MISSION BRIEFING
                </Button>
                <div className="grid grid-cols-2 gap-3">
                  <Button 
                    variant="secondary" 
                    size="sm" 
                    onClick={() => startTransition('/about/research')}
                  >
                    📊 RESEARCH DATA
                  </Button>
                  <Button 
                    variant="secondary" 
                    size="sm" 
                    onClick={() => startTransition('/about/contact')}
                  >
                    📡 CONTACT COMMAND
                  </Button>
                </div>
              </div>
            </div>
          </HolographicDisplay>
        </div>

        {/* Command Structure & Leadership */}
        <div className="space-y-6">
          <Panel>
            <div className="panel-header">
              <h2 className="panel-title">COMMAND STRUCTURE</h2>
            </div>
            <div className="p-6 space-y-6">
              
              {/* Founder Profile */}
              <div className="bg-dark-matter border border-electric-blue/30 rounded-lg p-4">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-electric-blue/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">👨‍🚀</span>
                  </div>
                  <div>
                    <h3 className="text-electric-blue font-sci-fi text-lg">JANGA BUSSAJA</h3>
                    <div className="text-console text-sm">MISSION COMMANDER</div>
                    <div className="text-xs text-text-muted">Founder & Strategic Director</div>
                  </div>
                </div>
                
                <div className="space-y-3 text-sm">
                  <p className="text-text-primary">
                    Former engineer turned social entrepreneur with 13+ years of research 
                    into counter-racism strategies and systematic approaches to social change.
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-1 h-1 bg-neon-green rounded-full" />
                      <span>Engineering to Social Justice Transition</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1 h-1 bg-electric-blue rounded-full" />
                      <span>13+ Years Counter-Racism Research</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1 h-1 bg-cyber-purple rounded-full" />
                      <span>Game Theory & Social Change Expert</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1 h-1 bg-alert-orange rounded-full" />
                      <span>Published Researcher & Strategist</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Vision Statement */}
              <div className="space-y-3">
                <h3 className="text-neon-green font-sci-fi text-sm">COMMANDER'S VISION</h3>
                <div className="bg-neon-green/10 border border-neon-green/30 rounded p-3 text-sm">
                  <p className="text-text-primary italic">
                    "Planetary Chess is engineered to overcome systemic racism, no matter how long it takes. 
                    Through strategic thinking and educational gaming, we're building the tools for lasting social change."
                  </p>
                </div>
              </div>
            </div>
          </Panel>

          {/* Research Foundation */}
          <Panel>
            <div className="panel-header">
              <h3 className="panel-title">RESEARCH FOUNDATION</h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="bg-cyber-purple/10 border border-cyber-purple/30 rounded-lg p-4">
                <h4 className="text-cyber-purple font-bold text-sm mb-2">
                  FEATURED PUBLICATION
                </h4>
                <div className="text-text-primary text-sm mb-2">
                  "Game Theory in Action: Exploring Planetary Chess as a Tool for Social Change"
                </div>
                <div className="text-xs text-text-muted mb-3">
                  International Journal of Game Theory and Technology (IJGTT), Vol.10 No.2, June 2024
                </div>
                <Button 
                  variant="console" 
                  size="sm" 
                  onClick={() => startTransition('/about/research')}
                  className="w-full"
                >
                  📄 ACCESS RESEARCH PAPER
                </Button>
              </div>
              
              <div className="grid grid-cols-2 gap-3 text-center text-sm">
                <div>
                  <div className="text-2xl font-bold text-electric-blue">6</div>
                  <div className="text-xs text-text-muted">International Papers</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-neon-green">13+</div>
                  <div className="text-xs text-text-muted">Years Research</div>
                </div>
              </div>
            </div>
          </Panel>
        </div>
      </div>

      {/* Impact Metrics */}
      <div className="max-w-7xl mx-auto">
        <Panel>
          <div className="panel-header">
            <h3 className="panel-title">MISSION IMPACT METRICS</h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-electric-blue">1,247</div>
                <div className="text-sm text-text-secondary">Strategic Players Trained</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-neon-green">156</div>
                <div className="text-sm text-text-secondary">Educational Scenarios</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyber-purple">42</div>
                <div className="text-sm text-text-secondary">Research Citations</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-alert-orange">89%</div>
                <div className="text-sm text-text-secondary">Mission Success Rate</div>
              </div>
            </div>
          </div>
        </Panel>
      </div>

      {/* Navigation Links */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        <Button 
          variant="secondary" 
          size="lg" 
          onClick={() => startTransition('/about/mission')}
          className="w-full"
        >
          📜 DETAILED MISSION STORY
        </Button>
        <Button 
          variant="secondary" 
          size="lg" 
          onClick={() => startTransition('/about/research')}
          className="w-full"
        >
          📊 RESEARCH & PUBLICATIONS
        </Button>
        <Button 
          variant="secondary" 
          size="lg" 
          onClick={() => startTransition('/about/contact')}
          className="w-full"
        >
          📡 CONTACT & SUPPORT
        </Button>
      </div>
    </div>
  );
}