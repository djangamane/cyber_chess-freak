"use client";

import React, { useState } from 'react';
import { Button, Panel, HolographicDisplay } from '../components/UIComponents';
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

      {/* Transcript intentionally removed for preview clarity */}
    </div>
  );
}
