"use client";

import React, { useState } from 'react';
import { Accordion, Panel, Button } from '../components/UIComponents';
import { useTransition } from '../components/TransitionProvider';

export default function FAQSection() {
  const { startTransition } = useTransition();
  const [showContactModal, setShowContactModal] = useState(false);

  const faqItems = [
    {
      id: 'what-distinguishes-planetary-chess',
      title: 'What distinguishes Planetary Chess from other social justice or race equity initiatives?',
      content: (
        <div className="space-y-3 text-sm">
          <p>
            Planetary Chess stands apart from other racial justice initiatives by directly addressing the 
            root cause of racism: white supremacy as a systemic structure. Our approach is fundamentally 
            based on the scholarly work of Dr. Frances Cress Welsing and Dr. Amos Wilson, which provides 
            a comprehensive framework for understanding and dismantling racist systems.
          </p>
          <p>
            As Frederick Douglass noted, "Knowledge makes a man unfit to be a slave." Similarly, 
            Planetary Chess operates on the principle that accurate knowledge about white supremacy 
            is the most powerful tool for defeating it. We don't just discuss symptoms—we target 
            the underlying ideology and mechanisms that maintain racial hierarchies.
          </p>
          <div className="bg-electric-blue/10 border border-electric-blue/30 rounded p-3 mt-3">
            <strong className="text-electric-blue">Key Differentiators:</strong>
            <ul className="mt-2 space-y-1 text-xs">
              <li>• <strong>Research Foundation:</strong> All components—from games to Keisha AI to news analysis tools—are built on peer-reviewed research</li>
              <li>• <strong>Systems-Based Approach:</strong> Treats racism as a strategic game that can be understood, modeled, and systematically dismantled</li>
              <li>• <strong>Technological Integration:</strong> Leverages AI, game theory, and blockchain technologies in a unified counter-racist ecosystem</li>
              <li>• <strong>Strategic Focus:</strong> Emphasizes offensive strategies rather than defensive reactions to racist systems</li>
            </ul>
          </div>
          <p>
            Unlike initiatives that focus on awareness or policy change alone, Planetary Chess provides actionable 
            strategic frameworks and tools that empower individuals to effectively combat systemic racism. Our 
            comprehensive approach combines gamification with scholarly rigor, creating an engaging yet deeply 
            educational experience.
          </p>
          <div className="bg-cyber-purple/10 border border-cyber-purple/30 rounded p-3 mt-3">
            <strong className="text-cyber-purple">Comparative Advantages:</strong>
            <ul className="mt-2 space-y-1 text-xs">
              <li>• <strong>Paradigm Shift:</strong> Moves beyond reactive activism to proactive systemic dismantling</li>
              <li>• <strong>Multi-Platform Learning:</strong> Integrates films, games, and DAOs rather than classroom-only approaches</li>
              <li>• <strong>Living Knowledge:</strong> Treats knowledge as an adaptive weapon that evolves with real-time news</li>
              <li>• <strong>Self-Sustaining Model:</strong> Uses NFTs and DAO governance to avoid donor dependency</li>
            </ul>
          </div>
          <p>
            We invite you to explore Janga Bussaja's extensive digital footprint and published research to verify 
            our approach and credentials. Our founder has published 6 research papers in international journals 
            and has been developing systematic approaches to counter-racism for over a decade.
          </p>
        </div>
      )
    },
    {
      id: 'how-planetary-chess-compares',
      title: 'How does Planetary Chess compare to other racial justice initiatives like the 1619 Project or BLM?',
      content: (
        <div className="space-y-3 text-sm">
          <p>
            While initiatives like the 1619 Project, Black Lives Matter, and Algorithmic Justice League have made 
            important contributions to racial justice, Planetary Chess takes a fundamentally different approach by 
            treating racism as a system to be hacked, gamified, and dismantled algorithmically.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
            <div className="bg-dark-matter border border-panel-border rounded p-3">
              <h4 className="text-electric-blue font-sci-fi text-sm mb-2">Traditional Approaches</h4>
              <ul className="space-y-2 text-xs">
                <li>• <strong>1619 Project:</strong> Historical education reframing U.S. history through slavery's legacy</li>
                <li>• <strong>BLM:</strong> Grassroots activism through protests, policy advocacy, and community organizing</li>
                <li>• <strong>AJL:</strong> Tech accountability exposing bias in AI systems like facial recognition</li>
                <li>• <strong>Zinn Project:</strong> Radical pedagogy providing anti-racist curricula for schools</li>
              </ul>
            </div>
            <div className="bg-electric-blue/10 border border-electric-blue/30 rounded p-3">
              <h4 className="text-neon-green font-sci-fi text-sm mb-2">Planetary Chess Approach</h4>
              <ul className="space-y-2 text-xs">
                <li>• <strong>Gamified Systemic Modeling:</strong> Uses chess/AI to simulate racism as a winnable game</li>
                <li>• <strong>Counter-Racist "War College":</strong> Combines Sun Tzu's strategy with Black radical theory</li>
                <li>• <strong>Offensive AI:</strong> Repurposes AI as a weapon against racism through LLM chatbots</li>
                <li>• <strong>Multi-Platform Learning:</strong> Films, games, and DAOs replace classroom-only focus</li>
              </ul>
            </div>
          </div>
          <div className="bg-cyber-purple/10 border border-cyber-purple/30 rounded p-3 mt-3">
            <strong className="text-cyber-purple">Key Takeaway:</strong>
            <p className="mt-2 text-xs">
              While most initiatives focus on reacting to racism (e.g., protesting, policy reform), Planetary Chess 
              models racism as a system to hack, gamify, and dismantle algorithmically. This represents a paradigm 
              shift from reactive activism to proactive systemic dismantling.
            </p>
          </div>
          <p>
            Our approach uniquely merges adversarial AI, decentralized governance, and NFTs into a single 
            ecosystem—a "tech stack" for counter-racism that treats knowledge as a living, adaptive weapon 
            rather than a static resource.
          </p>
        </div>
      )
    },
    {
      id: 'what-is-planetary-chess',
      title: 'What is Planetary Chess and how do you play it?',
      content: (
        <div className="space-y-3 text-sm">
          <p>
            Planetary Chess is a revolutionary educational chess variant that combines traditional strategic 
            gameplay with real-world counter-racism education. As you move pieces on the board, you encounter 
            prompts and scenarios related to social justice and strategic thinking.
          </p>
          <p>
            The game includes both single-player and multiplayer modes, with an integrated metaverse-like 
            environment featuring NFT chess sets that you can earn and upgrade through successful gameplay.
          </p>
          <div className="bg-electric-blue/10 border border-electric-blue/30 rounded p-3 mt-3">
            <strong className="text-electric-blue">Key Features:</strong>
            <ul className="mt-2 space-y-1 text-xs">
              <li>• Traditional chess rules with educational integration</li>
              <li>• Real-time social justice scenarios and questions</li>
              <li>• Play-to-earn NFT chess pieces and upgrades</li>
              <li>• Single-player training and multiplayer competitions</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'how-fight-racism',
      title: 'How does Planetary Chess help fight systemic racism?',
      content: (
        <div className="space-y-3 text-sm">
          <p>
            Planetary Chess uses game theory principles to develop critical thinking skills necessary 
            for understanding and dismantling institutional racism. Each game session includes 
            educational prompts that explore topics like power structures, historical context, 
            and strategic approaches to social change.
          </p>
          <p>
            The platform is based on 13+ years of research and peer-reviewed academic work, 
            including our publication "Game Theory in Action" in the International Journal 
            of Game Theory and Technology (2024).
          </p>
          <div className="bg-neon-green/10 border border-neon-green/30 rounded p-3 mt-3">
            <strong className="text-neon-green">Educational Components:</strong>
            <ul className="mt-2 space-y-1 text-xs">
              <li>• Historical racism analysis and pattern recognition</li>
              <li>• Strategic thinking frameworks for social change</li>
              <li>• Community organizing and action planning tools</li>
              <li>• Critical consciousness development exercises</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'who-can-play',
      title: 'Who can play and is it free?',
      content: (
        <div className="space-y-3 text-sm">
          <p>
            Planetary Chess is designed for anyone interested in strategic thinking and social justice, 
            regardless of chess experience level. We offer both free and premium access tiers to ensure 
            accessibility while supporting our nonprofit mission.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
            <div className="bg-electric-blue/10 border border-electric-blue/30 rounded p-3">
              <strong className="text-electric-blue">Free Access:</strong>
              <ul className="mt-2 space-y-1 text-xs">
                <li>• Basic single-player mode</li>
                <li>• Core educational content</li>
                <li>• Community forum access</li>
                <li>• Tutorial and training modules</li>
              </ul>
            </div>
            <div className="bg-cyber-purple/10 border border-cyber-purple/30 rounded p-3">
              <strong className="text-cyber-purple">Premium Features:</strong>
              <ul className="mt-2 space-y-1 text-xs">
                <li>• NFT chess set collection</li>
                <li>• Advanced multiplayer tournaments</li>
                <li>• Exclusive educational content</li>
                <li>• Direct access to Uncle Roy AI</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'technology-requirements',
      title: 'What technology do I need to play?',
      content: (
        <div className="space-y-3 text-sm">
          <p>
            Planetary Chess is designed to be accessible on most modern devices with minimal 
            technical requirements.
          </p>
          <div className="bg-dark-matter border border-panel-border rounded p-3">
            <strong className="text-electric-blue">Minimum Requirements:</strong>
            <ul className="mt-2 space-y-1 text-xs">
              <li>• <strong>Device:</strong> Computer, tablet, or smartphone</li>
              <li>• <strong>Browser:</strong> Chrome, Firefox, Safari, or Edge (latest versions)</li>
              <li>• <strong>Internet:</strong> Stable broadband connection</li>
              <li>• <strong>Optional:</strong> Web3 wallet for NFT features (MetaMask recommended)</li>
            </ul>
          </div>
          <p className="text-text-muted">
            No downloads or installations required - everything runs directly in your web browser.
          </p>
        </div>
      )
    },
    {
      id: 'technological-innovation',
      title: 'What technological innovations make Planetary Chess unique among social justice platforms?',
      content: (
        <div className="space-y-3 text-sm">
          <p>
            Planetary Chess uniquely merges adversarial AI, decentralized governance, and NFTs into a single 
            ecosystem—a "tech stack" for counter-racism that treats knowledge as a living, adaptive weapon 
            rather than a static resource.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
            <div className="bg-dark-matter border border-panel-border rounded p-3">
              <h4 className="text-electric-blue font-sci-fi text-sm mb-2">Traditional Tech Use</h4>
              <ul className="space-y-2 text-xs">
                <li>• <strong>IBM Policy Lab:</strong> Predictive analytics modeling policy impacts</li>
                <li>• <strong>BLM DAO:</strong> Decentralized fundraising (largely defunct)</li>
                <li>• <strong>Hate Crime Game:</strong> Narrative gaming teaching racism through stories</li>
                <li>• <strong>Decolonize Art:</strong> NFTs for land reclamation funding Indigenous causes</li>
              </ul>
            </div>
            <div className="bg-neon-green/10 border border-neon-green/30 rounded p-3">
              <h4 className="text-cyber-purple font-sci-fi text-sm mb-2">Planetary Chess Tech Stack</h4>
              <ul className="space-y-2 text-xs">
                <li>• <strong>AI as Adversary:</strong> Players battle an AI that enforces systemic barriers in real-time</li>
                <li>• <strong>DAO as Governance:</strong> Funds and deploys counter-racist strategies via decentralized voting</li>
                <li>• <strong>Strategic Gameplay:</strong> Chess mechanics mirror systemic power dynamics</li>
                <li>• <strong>NFTs as Knowledge Tokens:</strong> Tzuracializm art funds a self-replicating LLM/news database</li>
              </ul>
            </div>
          </div>
          <div className="bg-electric-blue/10 border border-electric-blue/30 rounded p-3 mt-3">
            <strong className="text-electric-blue">Research Foundation:</strong>
            <p className="mt-2 text-xs">
              All our technological innovations are grounded in 13+ years of peer-reviewed academic research. 
              Our platform is based on the publication "Game Theory in Action: Exploring Planetary Chess as a 
              Tool for Social Change" in the International Journal of Game Theory and Technology (2024).
            </p>
          </div>
          <div className="bg-alert-orange/10 border border-alert-orange/30 rounded p-3 mt-3">
            <strong className="text-alert-orange">Self-Sustaining Innovation:</strong>
            <ul className="mt-2 space-y-1 text-xs">
              <li>• <strong>Perpetual Motion Design:</strong> AI, DAO, and cyclical publishing ensure evolution faster than oppressive systems</li>
              <li>• <strong>Play-to-Earn Mechanics:</strong> Gamers earn crypto/NFTs for winning against systemic AI</li>
              <li>• <strong>Knowledge Cycles:</strong> 7-year knowledge cycles outlast political eras, akin to Sun Tzu's campaigns</li>
            </ul>
          </div>
          <p>
            This technological integration creates a perpetual motion machine—our AI, DAO, and cyclical 
            publishing ensure the platform evolves faster than the systems it fights. We're not just using 
            technology; we're reimagining how technology can be weaponized for social justice.
          </p>
        </div>
      )
    },
    {
      id: 'vision-goals',
      title: 'What is the long-term vision and goals?',
      content: (
        <div className="space-y-3 text-sm">
          <p>
            Our mission is "the eradication of white supremacy or systemic racism" through strategic 
            education and community empowerment. Planetary Chess is engineered to overcome systemic 
            racism, no matter how long it takes.
          </p>
          <div className="space-y-3">
            <div className="bg-neon-green/10 border border-neon-green/30 rounded p-3">
              <strong className="text-neon-green">Short-term Goals (2024-2025):</strong>
              <ul className="mt-2 space-y-1 text-xs">
                <li>• Reach 10,000 active strategic players</li>
                <li>• Launch comprehensive NFT chess set collection</li>
                <li>• Expand educational content library</li>
                <li>• Establish university partnerships</li>
              </ul>
            </div>
            <div className="bg-electric-blue/10 border border-electric-blue/30 rounded p-3">
              <strong className="text-electric-blue">Long-term Vision (2025+):</strong>
              <ul className="mt-2 space-y-1 text-xs">
                <li>• Global platform for counter-racism education</li>
                <li>• Integration with schools and organizations</li>
                <li>• Advanced AI-powered strategic analysis</li>
                <li>• Measurable impact on social justice outcomes</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'research-foundation',
      title: 'What research supports Planetary Chess?',
      content: (
        <div className="space-y-3 text-sm">
          <p>
            Planetary Chess is built on a foundation of rigorous academic research spanning 13+ years 
            of study into counter-racism strategies and game theory applications for social change.
          </p>
          <div className="bg-cyber-purple/10 border border-cyber-purple/30 rounded p-3">
            <strong className="text-cyber-purple">Featured Publication:</strong>
            <div className="mt-2 text-xs">
              <div className="font-bold">"Game Theory in Action: Exploring Planetary Chess as a Tool for Social Change"</div>
              <div className="text-text-muted">International Journal of Game Theory and Technology (IJGTT)</div>
              <div className="text-text-muted">Vol.10 No.2, June 2024</div>
            </div>
          </div>
          <p>
            Our founder has published 6 research papers in international journals and has been 
            developing systematic approaches to counter-racism for over a decade.
          </p>
          <Button 
            variant="console" 
            size="sm" 
            onClick={() => startTransition('/about/research')}
            className="mt-3"
          >
            📄 VIEW RESEARCH PUBLICATIONS
          </Button>
        </div>
      )
    },
    {
      id: 'uncle-roy-ai',
      title: 'What is Uncle Roy and how does the AI work?',
      content: (
        <div className="space-y-3 text-sm">
          <p>
            Uncle Roy is our advanced AI assistant trained specifically on counter-racism literature, 
            strategic thinking frameworks, and social justice education. The AI serves as a virtual 
            mentor to guide players through complex scenarios and strategic decisions.
          </p>
          <div className="bg-neon-green/10 border border-neon-green/30 rounded p-3">
            <strong className="text-neon-green">AI Capabilities:</strong>
            <ul className="mt-2 space-y-1 text-xs">
              <li>• Counter-racism strategy guidance and analysis</li>
              <li>• Educational resource recommendations</li>
              <li>• Chess strategy analysis and improvement tips</li>
              <li>• Community action planning assistance</li>
              <li>• Historical context and pattern recognition</li>
            </ul>
          </div>
          <p>
            Uncle Roy operates with advanced natural language processing to provide personalized, 
            contextual responses that help deepen understanding of both chess strategy and social justice concepts.
          </p>
          <Button 
            variant="console" 
            size="sm" 
            onClick={() => startTransition('/tools/uncle-roy')}
            className="mt-3"
          >
            💬 CHAT WITH UNCLE ROY
          </Button>
        </div>
      )
    },
    {
      id: 'get-involved',
      title: 'How can I get involved or support the mission?',
      content: (
        <div className="space-y-3 text-sm">
          <p>
            There are many ways to join our mission and contribute to the fight against systemic racism 
            through strategic education and community action.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-electric-blue/10 border border-electric-blue/30 rounded p-3">
              <strong className="text-electric-blue">For Players:</strong>
              <ul className="mt-2 space-y-1 text-xs">
                <li>• Start playing Planetary Chess</li>
                <li>• Join our community forums</li>
                <li>• Participate in tournaments</li>
                <li>• Share your progress and insights</li>
              </ul>
            </div>
            <div className="bg-neon-green/10 border border-neon-green/30 rounded p-3">
              <strong className="text-neon-green">For Supporters:</strong>
              <ul className="mt-2 space-y-1 text-xs">
                <li>• Subscribe to our newsletter</li>
                <li>• Make a donation (501c3 nonprofit)</li>
                <li>• Volunteer for community outreach</li>
                <li>• Partner with us for education</li>
              </ul>
            </div>
          </div>
          <div className="flex space-x-2 mt-4">
            <Button 
              variant="primary" 
              size="sm" 
              onClick={() => startTransition('/games/planetary-chess')}
              className="flex-1"
            >
              🎯 START PLAYING
            </Button>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setShowContactModal(true)}
              className="flex-1"
            >
              📧 GET IN TOUCH
            </Button>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen p-4 md:p-6 space-y-8 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 right-10 w-32 h-32 bg-electric-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-cyber-purple/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-24 h-24 bg-neon-green/10 rounded-full blur-2xl" />
      </div>
      
      {/* Section Header */}
      <div className="text-center mb-8 md:mb-12 relative z-10">
        <div className="inline-block mb-4">
          <div className="flex items-center justify-center space-x-2 text-console text-xs mb-2">
            <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
            <span>SECURE CHANNEL ESTABLISHED</span>
            <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
          </div>
        </div>
        <h1 className="heading-section">MISSION BRIEFING DATABASE</h1>
        <div className="text-console text-sm mb-4">
          [ FREQUENTLY ACCESSED STRATEGIC INTELLIGENCE ]
        </div>
        <p className="text-text-secondary max-w-3xl mx-auto">
          Access critical information about Planetary Chess, our counter-racism mission, 
          and strategic gameplay through our comprehensive knowledge database.
        </p>
      </div>

      {/* FAQ Accordion */}
      <div className="max-w-4xl mx-auto space-y-6 relative z-10">
        <Panel>
          <div className="panel-header">
            <h2 className="panel-title">STRATEGIC INTELLIGENCE QUERIES</h2>
          </div>
          <div className="p-4 md:p-6">
            <Accordion 
              items={faqItems} 
              allowMultiple={true}
              className="space-y-3"
            />
          </div>
        </Panel>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button 
            variant="primary" 
            size="lg" 
            onClick={() => startTransition('/games/planetary-chess')}
            className="w-full"
          >
            🚀 START MISSION
          </Button>
          <Button 
            variant="secondary" 
            size="lg" 
            onClick={() => startTransition('/tools/uncle-roy')}
            className="w-full"
          >
            💬 ASK UNCLE ROY
          </Button>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => setShowContactModal(true)}
            className="w-full"
          >
            📡 CONTACT COMMAND
          </Button>
        </div>

        
        {/* Research Verification Call to Action */}
        <Panel>
          <div className="panel-header">
            <h3 className="panel-title">VERIFY OUR RESEARCH</h3>
          </div>
          <div className="p-4 md:p-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-text-secondary text-sm">
                <p>
                  Our claims are backed by peer-reviewed research. Explore Janga Bussaja's digital footprint 
                  and published papers to verify our approach and credentials.
                </p>
              </div>
              <Button 
                variant="console" 
                size="sm" 
                onClick={() => startTransition('/about/research')}
              >
                📚 VIEW RESEARCH
              </Button>
            </div>
          </div>
        </Panel>
        {showContactModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
            <div className="bg-dark-matter p-6 rounded-lg max-w-md w-full">
              <h3 className="text-electric-blue font-bold mb-4 text-lg">Contact Information</h3>
              <p className="text-sm mb-4 text-text-secondary">Get in touch with the Planetary Chess team:</p>
              <div className="space-y-2 mb-6">
                <p className="font-mono">Janga Bussaja</p>
                <p className="font-mono text-electric-blue">janga@planetarychess.com</p>
              </div>
              <Button
                variant="primary"
                size="sm"
                onClick={() => setShowContactModal(false)}
                className="w-full"
              >
                Close
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}