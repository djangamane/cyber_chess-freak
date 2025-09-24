"use client";

import React from 'react';
import { useTransition } from '../components/TransitionProvider';
import VideoBackground from '../components/VideoBackground';

export default function WarRoom() {
  const { startTransition } = useTransition();

  // Handle going back to the welcome page
  const handleReturn = () => {
    startTransition("/");
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Video Background */}
      <VideoBackground 
        src="/videos/war_room4.mp4" 
        fallbackSrc="/pchess.mp4" 
      />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white px-4">
        {/* Header Title */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold text-cyan-400">
            COUNTER-RACISM
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-cyan-400">
            STRATEGIC COMMAND CENTER
          </h2>
        </div>

        {/* Grid of options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full">
          <div className="bg-black/50 backdrop-blur-sm border border-cyan-500/30 p-5 rounded-lg shadow-lg hover:bg-black/70 transition-all cursor-pointer">
            <h2 className="text-2xl font-bold mb-3 text-cyan-400">RESEARCH</h2>
            <p>Access educational resources and training materials.</p>
          </div>
          
          <div className="bg-black/50 backdrop-blur-sm border border-cyan-500/30 p-5 rounded-lg shadow-lg hover:bg-black/70 transition-all cursor-pointer">
            <h2 className="text-2xl font-bold mb-3 text-cyan-400">CHESS GAME</h2>
            <p>Play the strategic game and sharpen your skills.</p>
          </div>
          
          <div className="bg-black/50 backdrop-blur-sm border border-cyan-500/30 p-5 rounded-lg shadow-lg hover:bg-black/70 transition-all cursor-pointer">
            <h2 className="text-2xl font-bold mb-3 text-cyan-400">NEWSLETTER</h2>
            <p>Stay updated with the latest strategies and news.</p>
          </div>
          
          <div className="bg-black/50 backdrop-blur-sm border border-cyan-500/30 p-5 rounded-lg shadow-lg hover:bg-black/70 transition-all cursor-pointer">
            <h2 className="text-2xl font-bold mb-3 text-cyan-400">CONTACT US</h2>
            <p>Connect with our team and community.</p>
          </div>
          
          <div className="bg-black/50 backdrop-blur-sm border border-cyan-500/30 p-5 rounded-lg shadow-lg hover:bg-black/70 transition-all cursor-pointer">
            <h2 className="text-2xl font-bold mb-3 text-cyan-400">AI CHATBOX</h2>
            <p>Get guidance from our AI assistant, Uncle Roy.</p>
          </div>
          
          <div className="bg-black/50 backdrop-blur-sm border border-cyan-500/30 p-5 rounded-lg shadow-lg hover:bg-black/70 transition-all cursor-pointer">
            <h2 className="text-2xl font-bold mb-3 text-cyan-400">DOCUMENTARY</h2>
            <p>Watch informative videos about our mission.</p>
          </div>
        </div>
        
        {/* Motto */}
        <p className="text-xl mt-12 text-center font-bold text-white">
          KNOW THYSELF + KNOW THY ENEMY = VICTORY OVER SYSTEMIC RACISM
        </p>
        
        {/* Back button */}
        <button 
          onClick={handleReturn}
          className="mt-8 bg-transparent border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-900/30 font-bold py-2 px-6 rounded-full transition-all duration-300"
        >
          Return to Home
        </button>
      </div>
    </div>
  );
} 