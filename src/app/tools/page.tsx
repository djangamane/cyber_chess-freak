"use client";

import React from 'react';
import { Button, Panel, ConsoleScreen, StatusIndicator } from '../components/UIComponents';
import { useTransition } from '../components/TransitionProvider';

export default function ToolsSection() {
  const { startTransition } = useTransition();

  const handleLaunchUncleRoy = () => {
    startTransition('/tools/uncle-roy');
  };

  const handleNewsletterSignup = () => {
    startTransition('/tools/newsletter');
  };

  const handleViewResources = () => {
    startTransition('/tools/resources');
  };

  const handleViewFilms = () => {
    window.open('https://www.youtube.com/playlist?list=PLFZALuBiJNYkfmCyuhcn7OQWe9f-_pgSq', '_blank');
  };

  return (
    <div className="min-h-screen p-6 space-y-8">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h1 className="heading-section">STRATEGIC COMMAND TOOLS</h1>
        <div className="text-console text-sm mb-4">
          [ TACTICAL SUPPORT SYSTEMS ]
        </div>
        <p className="text-text-secondary max-w-3xl mx-auto">
          Access advanced support systems and resources designed to enhance your mission effectiveness 
          in combating systemic racism through strategic planning and community engagement.
        </p>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
        
        {/* Uncle Roy AI Chatbox */}
        <Panel className="relative">
          <div className="panel-header">
            <h2 className="panel-title">UNCLE ROY AI ASSISTANT</h2>
          </div>
          <div className="p-6 space-y-6">
            {/* Status */}
            <div className="flex items-center justify-between">
              <StatusIndicator status="online" label="AI ONLINE" size="sm" />
              <span className="text-console text-xs">v3.2.1 | STABLE</span>
            </div>

            {/* Chat Preview */}
            <ConsoleScreen title="CHAT INTERFACE PREVIEW">
              <div className="space-y-2 text-xs">
                <div className="text-electric-blue">
                  [UNCLE_ROY]: Greetings, strategist! How can I assist your mission today?
                </div>
                <div className="text-neon-green">
                  [USER]: What's the best approach to address institutional racism?
                </div>
                <div className="text-electric-blue">
                  [UNCLE_ROY]: Excellent question! Let me break down a systematic approach...
                </div>
                <div className="text-text-muted animate-pulse">
                  [TYPING...]
                </div>
              </div>
            </ConsoleScreen>

            {/* Features */}
            <div className="space-y-3">
              <h3 className="text-electric-blue font-sci-fi text-sm">AI CAPABILITIES:</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-1 h-1 bg-neon-green rounded-full" />
                  <span>Counter-racism strategy guidance</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1 h-1 bg-electric-blue rounded-full" />
                  <span>Educational resource recommendations</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1 h-1 bg-cyber-purple rounded-full" />
                  <span>Chess strategy analysis</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1 h-1 bg-alert-orange rounded-full" />
                  <span>Community action planning</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-text-secondary">
              Uncle Roy is an advanced AI assistant trained on counter-racism literature and strategic 
              thinking frameworks. Get personalized guidance for your social justice journey.
            </p>

            {/* Launch Button */}
            <Button 
              variant="primary" 
              size="lg" 
              onClick={handleLaunchUncleRoy}
              className="w-full"
            >
              💬 INITIATE CHAT SESSION
            </Button>
          </div>
        </Panel>


        {/* Films & Documentaries */}
        <Panel className="relative">
          <div className="panel-header">
            <h2 className="panel-title">FILMS & DOCUMENTARIES</h2>
          </div>
          <div className="p-6 space-y-6">
            {/* Status */}
            <div className="flex items-center justify-between">
              <StatusIndicator status="online" label="MEDIA LIBRARY" size="sm" />
              <span className="text-console text-xs">CURATED CONTENT</span>
            </div>

            {/* Films Preview */}
            <ConsoleScreen title="FEATURED DOCUMENTARY">
              <div className="space-y-2 text-xs">
                <div className="text-electric-blue font-bold">
                  "THE C.O.N.T.R.O.L. MATRIX"
                </div>
                <div className="text-neon-green">
                  Duration: 2h 15m | Rating: ★★★★☆
                </div>
                <div className="text-text-primary">
                  An in-depth exploration of systemic racism in...
                </div>
                <div className="text-alert-orange">
                  [PLAY TRAILER...]
                </div>
              </div>
            </ConsoleScreen>

            {/* Features */}
            <div className="space-y-3">
              <h3 className="text-electric-blue font-sci-fi text-sm">MEDIA FEATURES:</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-1 h-1 bg-neon-green rounded-full" />
                  <span>Educational documentaries</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1 h-1 bg-electric-blue rounded-full" />
                  <span>Historical analysis films</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1 h-1 bg-cyber-purple rounded-full" />
                  <span>Community action videos</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1 h-1 bg-alert-orange rounded-full" />
                  <span>Expert interviews</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-text-secondary">
              Curated collection of films and documentaries that provide visual education on 
              systemic racism, historical context, and community action strategies.
            </p>

            {/* View Films Button */}
            <Button 
              variant="secondary" 
              size="lg" 
              onClick={handleViewFilms}
              className="w-full"
            >
              🎬 ACCESS FILM LIBRARY
            </Button>
          </div>
        </Panel>

        {/* Research Publications */}
        <Panel className="relative">
          <div className="panel-header">
            <h2 className="panel-title">RESEARCH PUBLICATIONS</h2>
          </div>
          <div className="p-6 space-y-6">
            {/* Status */}
            <div className="flex items-center justify-between">
              <StatusIndicator status="online" label="TRANSMITTING" size="sm" />
              <span className="text-console text-xs">WEEKLY UPDATES</span>
            </div>

            {/* Publications Preview */}
            <ConsoleScreen title="LATEST RESEARCH">
              <div className="space-y-2 text-xs">
                <div className="text-electric-blue font-bold">
                  RESEARCH BRIEFING #247
                </div>
                <div className="text-neon-green">
                  Subject: Strategic Advances in Counter-Racism
                </div>
                <div className="text-text-primary">
                  - New research findings published
                </div>
                <div className="text-text-primary">
                  - Community action updates
                </div>
                <div className="text-text-primary">
                  - Planetary Chess tournaments
                </div>
                <div className="text-alert-orange">
                  [READ MORE...]
                </div>
              </div>
            </ConsoleScreen>

            {/* Features */}
            <div className="space-y-3">
              <h3 className="text-electric-blue font-sci-fi text-sm">RESEARCH FEATURES:</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-1 h-1 bg-neon-green rounded-full" />
                  <span>Weekly strategy updates</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1 h-1 bg-electric-blue rounded-full" />
                  <span>Research breakthroughs</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1 h-1 bg-cyber-purple rounded-full" />
                  <span>Community highlights</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1 h-1 bg-alert-orange rounded-full" />
                  <span>Gaming tournament alerts</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-text-secondary">
              Stay connected with the latest developments in counter-racism strategy, research findings, 
              and community actions through our encrypted communication channels.
            </p>

            {/* Subscribe Button */}
            <Button 
              variant="secondary" 
              size="lg" 
              onClick={handleNewsletterSignup}
              className="w-full"
            >
              📚 ACCESS RESEARCH LIBRARY
            </Button>
          </div>
        </Panel>

        {/* Resources & Documentation */}
        <Panel className="relative">
          <div className="panel-header">
            <h2 className="panel-title">STRATEGIC RESOURCES</h2>
          </div>
          <div className="p-6 space-y-6">
            {/* Status */}
            <div className="flex items-center justify-between">
              <StatusIndicator status="online" label="KNN ACTIVE" size="sm" />
              <span className="text-console text-xs">3 CORE TOOLS</span>
            </div>

            {/* Resource Categories */}
            <div className="space-y-4">
              <a href="https://the-maga-files.vercel.app/" target="_blank" rel="noopener noreferrer" className="block bg-dark-matter border border-electric-blue/30 rounded p-3 hover:bg-electric-blue/10 transition-colors">
                <div className="text-electric-blue font-bold text-sm mb-2">🔍 MAGA FILES</div>
                <div className="text-xs text-text-secondary">Exposes colonial nostalgia and racist code words in political rhetoric</div>
              </a>
              
              <a href="https://fns-news-decoded5.vercel.app/" target="_blank" rel="noopener noreferrer" className="block bg-dark-matter border border-neon-green/30 rounded p-3 hover:bg-neon-green/10 transition-colors">
                <div className="text-neon-green font-bold text-sm mb-2">📰 FNS (FRAGILE NEWS SOURCE)</div>
                <div className="text-xs text-text-secondary">Tears apart broadcasts that euphemize racism into palatable sound bites</div>
              </a>
              
              <a href="https://www.talk2keisha.com/bias-detection" target="_blank" rel="noopener noreferrer" className="block bg-dark-matter border border-cyber-purple/30 rounded p-3 hover:bg-cyber-purple/10 transition-colors">
                <div className="text-cyber-purple font-bold text-sm mb-2">📡 FRAGILE NEWS DECODER</div>
                <div className="text-xs text-text-secondary">Gives ordinary people the power to score propaganda themselves</div>
              </a>
            </div>

            {/* Description */}
            <p className="text-sm text-text-secondary">
              Keisha News Network (KNN) is a counter-racist intelligence system that decodes propaganda, scores bias in real time, and exposes the omissions mainstream AI avoids. Rooted in the intellectual fire of Welsing and Wilson, it runs on the soWS newsletter data engine, scraping stories daily to feed these three tools.
            </p>

            {/* Access Button */}
            <Button
              variant="secondary"
              size="lg"
              onClick={() => window.open('https://talk2keisha.com/knn', '_blank')}
              className="w-full"
            >
              🔧 ACCESS KNN TOOLS
            </Button>
          </div>
        </Panel>
      </div>

      {/* System Status Panel */}
      <div className="max-w-7xl mx-auto">
        <Panel>
          <div className="panel-header">
            <h3 className="panel-title">TOOL SYSTEM STATUS</h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <StatusIndicator status="online" size="lg" />
                </div>
                <div className="text-sm font-bold text-electric-blue">AI SYSTEMS</div>
                <div className="text-xs text-text-secondary">Operational</div>
              </div>
              
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <StatusIndicator status="online" size="lg" />
                </div>
                <div className="text-sm font-bold text-neon-green">COMMUNICATIONS</div>
                <div className="text-xs text-text-secondary">Active</div>
              </div>
              
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <StatusIndicator status="online" size="lg" />
                </div>
                <div className="text-sm font-bold text-cyber-purple">DATABASE</div>
                <div className="text-xs text-text-secondary">Synchronized</div>
              </div>
              
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <StatusIndicator status="warning" size="lg" />
                </div>
                <div className="text-sm font-bold text-alert-orange">LOAD BALANCER</div>
                <div className="text-xs text-text-secondary">High Traffic</div>
              </div>
            </div>
          </div>
        </Panel>
      </div>
    </div>
  );
}