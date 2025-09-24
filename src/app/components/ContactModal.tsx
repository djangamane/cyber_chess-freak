"use client";

import React from 'react';
import { Panel, Button } from './UIComponents';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-md"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the panel
      >
        <Panel>
          <div className="panel-header">
            <h2 className="panel-title">CONTACT INFORMATION</h2>
          </div>
          <div className="p-6 space-y-4 text-center">
            <p className="text-text-primary">Janga Bussaja</p>
            <a 
              href="mailto:janga@planetarychess.com" 
              className="text-electric-blue hover:underline font-bold"
            >
              janga@planetarychess.com
            </a>
            <p className="text-text-secondary text-sm pt-2">
              For inquiries, support, or partnership opportunities, please reach out via email.
            </p>
            <Button onClick={onClose} variant="primary" className="mt-4 w-full">CLOSE</Button>
          </div>
        </Panel>
      </div>
    </div>
  );
}