"use client";

import React, { useState } from 'react';
import { Button, Panel, HolographicDisplay, ConsoleScreen } from '../components/UIComponents';
import { useTransition } from '../components/TransitionProvider';
import ContactModal from '../components/ContactModal';

export default function TzuracializmPage() {
  const { startTransition } = useTransition();
  const [isContactOpen, setContactOpen] = useState(false);

  return (
    <div className="min-h-screen p-4 md:p-6 space-y-8">
      <ContactModal isOpen={isContactOpen} onClose={() => setContactOpen(false)} />

      {/* Home Button */}
      <Button
        variant="console"
        size="sm"
        onClick={() => startTransition('/')}
        className="mb-2"
      >
        ⌂ HOME
      </Button>

      {/* Header */}
      <div className="text-center mb-2 md:mb-6">
        <h1 className="heading-section">TZURACIALIZM</h1>
        <div className="text-console text-sm mb-2">INVEST IN THE MISSION • 501(c)(3)</div>
        <p className="text-text-secondary max-w-3xl mx-auto">
          Tzuracializm is our donor/investment mechanism. We do not use traditional banking —
          supporters invest via crypto and receive a 1-of-1 NFT plus an authentic painting duplicate.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {/* Left: Videos */}
        <div className="lg:col-span-2 space-y-6">
          <Panel>
            <div className="panel-header">
              <h2 className="panel-title">PLANETARY CHESS — OVERVIEW</h2>
            </div>
            <div className="p-4">
              <div className="relative w-full rounded-lg overflow-hidden border border-electric-blue/40">
                <div style={{ position: 'relative', paddingTop: '56.25%' }}>
                  <iframe
                    src="https://www.youtube.com/embed/F7SZDurD01Y"
                    title="Planetary Chess System Overview"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                  />
                </div>
              </div>
            </div>
          </Panel>

          <Panel>
            <div className="panel-header">
              <h2 className="panel-title">TZURACIALIZM — DONOR / INVESTING MECHANISM</h2>
            </div>
            <div className="p-4">
              <div className="relative w-full rounded-lg overflow-hidden border border-electric-blue/40">
                <div style={{ position: 'relative', paddingTop: '56.25%' }}>
                  <iframe
                    src="https://www.youtube.com/embed/ZlHXCPAIdFE"
                    title="Tzuracializm Investing Mechanism"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                  />
                </div>
              </div>
            </div>
          </Panel>
        </div>

        {/* Right: How it works / NFTs / CTA */}
        <div className="space-y-6">
          <HolographicDisplay>
            <div className="space-y-4">
              <h3 className="heading-subsection">HOW INVESTING WORKS</h3>
              <ul className="list-disc list-inside text-sm text-text-secondary space-y-2">
                <li>Choose the amount you want to invest (crypto only).</li>
                <li>We set the price of a 1-of-1 NFT to match your investment.</li>
                <li>You receive that NFT and an authentic painting duplicate.</li>
                <li>Your support is visible, making the NFT more valuable for resale.</li>
                <li>The system monetizes knowledge of white supremacy and can return value to supporters.</li>
              </ul>
              <Button variant="primary" className="w-full" onClick={() => setContactOpen(true)}>
                CONTACT TO INVEST (EMAIL)
              </Button>
              <div className="text-center text-xs text-text-muted">or use “Contact” in the left panel</div>
            </div>
          </HolographicDisplay>

          <Panel>
            <div className="panel-header">
              <h3 className="panel-title">NFT GALLERIES (1 OF 1)</h3>
            </div>
            <div className="p-4 space-y-3 text-sm">
              <p className="text-text-secondary">No public prices listed. Contact to set the NFT price equal to your investment.</p>
              <a
                href="https://opensea.io/collection/planetarychess"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary w-full text-center"
              >
                Planetary Chess NFT Collection ↗
              </a>
              <a
                href="https://opensea.io/collection/sanctuary-of-self"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary w-full text-center"
              >
                Sanctuary of Self NFT Collection ↗
              </a>
              <div className="text-xs text-text-muted pt-2">
                Future: our DAO will continue to reward creators who make Tzuracializm art.
              </div>
            </div>
          </Panel>
        </div>
      </div>

      {/* Transcript */}
      <div className="max-w-7xl mx-auto">
        <ConsoleScreen title="Planetary Chess — Transcript">
          <div className="space-y-3">
            <p>how we [ __ ] up systemic racism</p>
            <p>Dr welsing first coined the term planetary chess but the effort is also known as counter-racism</p>
            <p>introduction to planetary chess counter-racist strategy was written two years ago it combines The Genius of counter-racist experts with Sun Tzu to present a structure for future book volumes and the formula to end systemic racism Sun Tzu also prescribed another crucial remedy to eliminate systemic racism without a hint of Violence by perfecting the formula thus representing the Supreme art of warfare next one of one rare nfts were released to fund the project this led to the creation of a new art form Zoo racialism — art music literature or film that gives artistic life and flavor to the formula you're currently viewing Zoo racialism this is where planetary chess sits currently on the road map awaiting patrons or philanthropists ready to really [ __ ] systemic racism up</p>
            <p>when that happened the planetary chess game will then be created in the metaverse players will compete against A.I Stewie for upgrades and crypto the game will help influence racial Jiu Jitsu — the concept that systemic racism sets traps like everyday police encounters as ways to eliminate us learn how to avoid the traps — that's racial Jiu Jitsu then you're ready to utilize technology for the finishing move the knowledge dispersed throughout the process are the roots and foundation of the system and these Technologies strengthen and fortify the community</p>
            <p>The DAO will bridge the community and reward tzuracializm. The language model created will infuse the wisdom of the experts with today and formulate the data for expedient intel and reproduction. After seven years of running and tuning the model we ask the question — does systemic racism still exist?</p>
            <p>If so we repeat the process using AI to create the next volume Planetary Chess volume one. New games can be created, new tzuracializm will be rewarded and after seven years of running and tuning the model we ask the question — does systemic racism still exist? If so we repeat the process using AI to create the next volume Planetary Chess volume 2. We continue to arm ourselves with knowledge of self and enemy until it's totally [ __ ] up.</p>
            <p>[Music]</p>
            <p>that's for [ __ ] with me you no business born insecure [ __ ] why aren't you thinking of how to end systemic racism why don't you have a methodology for dismantlement is this not the biggest single threat against us join planetary chess or create your own planner you need to shut the [ __ ] up when grown folks is talking — shots fired</p>
          </div>
        </ConsoleScreen>
      </div>
    </div>
  );
}
