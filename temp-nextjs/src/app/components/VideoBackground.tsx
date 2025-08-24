"use client";

import React, { useState, useEffect } from 'react';

interface VideoBackgroundProps {
  src: string;
  fallbackSrc?: string;
}

export default function VideoBackground({ src, fallbackSrc }: VideoBackgroundProps) {
  const [videoError, setVideoError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Reset states when src changes
    setVideoError(false);
    setIsLoading(true);
  }, [src]);
  
  const handleVideoError = () => {
    console.error(`Error loading video: ${src}`);
    setVideoError(true);
    setIsLoading(false);
  };
  
  const handleVideoLoaded = () => {
    setIsLoading(false);
  };
  
  // Determine which source to use
  const videoSrc = videoError && fallbackSrc ? fallbackSrc : src;
  
  return (
    <>
      {isLoading && (
        <div className="absolute inset-0 bg-black z-0 flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        onError={handleVideoError}
        onLoadedData={handleVideoLoaded}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </>
  );
} 