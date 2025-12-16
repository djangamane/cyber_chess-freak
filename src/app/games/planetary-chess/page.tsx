"use client";

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { Button } from '../../components/UIComponents';
import { useTransition } from '../../components/TransitionProvider';

// Dynamically import the game to avoid SSR issues
const GameEntry = dynamic(
  () => import('@/game-engine/GameEntry'),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-black">
        <div className="text-center">
          <div className="text-electric-blue text-2xl font-sci-fi mb-4">
            LOADING PLANETARY CHESS...
          </div>
          <div className="w-16 h-16 border-4 border-electric-blue border-t-transparent rounded-full animate-spin mx-auto" />
        </div>
      </div>
    )
  }
);

export default function PlanetaryChessPage() {
  const { startTransition } = useTransition();

  const handleBackToGames = () => {
    startTransition('/games');
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Minimal Header with Back Button */}
      <div className="p-4 bg-panel-bg border-b border-panel-border flex items-center">
        <Button
          variant="console"
          size="sm"
          onClick={handleBackToGames}
        >
          ← BACK TO GAMING PROTOCOLS
        </Button>
        <h1 className="heading-main text-xl ml-4">PLANETARY CHESS</h1>
      </div>

      {/* Game Container */}
      <div className="flex-1">
        <Suspense fallback={
          <div className="flex items-center justify-center h-full bg-black">
            <div className="text-electric-blue">Loading...</div>
          </div>
        }>
          <GameEntry />
        </Suspense>
      </div>
    </div>
  );
}