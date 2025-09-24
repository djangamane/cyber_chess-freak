"use client";

import React from 'react';
import { Panel, StatusIndicator } from '../../components/UIComponents';

export default function MissionPage() {
  return (
    <div className="min-h-screen p-4 md:p-6 space-y-8">
      {/* Section Header */}
      <div className="text-center mb-8 md:mb-12">
        <h1 className="heading-section">MISSION & OPERATIVE PROFILE</h1>
        <div className="text-console text-sm mb-4">
          [ OPERATIVE: JANGA BUSSAJA // ALIAS: OMEGA ]
        </div>
        <p className="text-text-secondary max-w-3xl mx-auto">
          "I am just a student of Dr. Frances Cress Welsing and Dr. Amos Wilson, following the bread crumbs they left for us to eradicate systemic racism."
        </p>
      </div>

      {/* Profile Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">

        {/* Operative Profile */}
        <Panel>
          <div className="panel-header">
            <h2 className="panel-title">OPERATIVE PROFILE</h2>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-electric-blue font-bold">CLASSIFICATION</span>
              <span className="text-neon-green">LEVEL 7 CLEARANCE</span>
            </div>
            <div className="border-t border-panel-border/50 pt-4 space-y-3 text-sm">
              <p><strong className="text-text-primary w-28 inline-block">ROLE:</strong> Philosopher, Social Engineer, AI Developer</p>
              <p><strong className="text-text-primary w-28 inline-block">AFFILIATION:</strong> Founder, Planetary Chess, Inc. | House of ISM</p>
              <p><strong className="text-text-primary w-28 inline-block">STATUS:</strong> <StatusIndicator status="online" label="ACTIVE" size="sm" /></p>
            </div>
          </div>
        </Panel>

        {/* Mission Directives */}
        <Panel>
          <div className="panel-header">
            <h2 className="panel-title">MISSION DIRECTIVES</h2>
          </div>
          <div className="p-6 space-y-4 text-sm">
            <div>
              <h3 className="text-electric-blue font-sci-fi mb-2">PRIMARY OBJECTIVE</h3>
              <p className="text-text-secondary">
                Counter systemic racism through education, technology, research, and strategic systems.
              </p>
            </div>
            <div>
              <h3 className="text-neon-green font-sci-fi mb-2">METHODOLOGY</h3>
              <p className="text-text-secondary">
                Develops and deploys essays, system designs, and conceptual frameworks targeting the intersection of race and technology.
              </p>
            </div>
            <div>
              <h3 className="text-cyber-purple font-sci-fi mb-2">KEY PROJECTS</h3>
              <ul className="list-disc list-inside text-text-secondary space-y-1">
                <li><strong>Planetary Chess:</strong> An interactive ecosystem for strategic counter-racism.</li>
                <li><strong>Uncle Roy AI:</strong> A specialized chatbot for strategic guidance.</li>
                <li><strong>Keisha News Network (KNN):</strong> A suite of tools for decoding media propaganda.</li>
              </ul>
            </div>
          </div>
        </Panel>

        {/* Background & Training */}
        <Panel>
          <div className="panel-header">
            <h2 className="panel-title">BACKGROUND & TRAINING</h2>
          </div>
          <div className="p-6 space-y-4 text-sm">
            <div>
              <h3 className="text-electric-blue font-sci-fi mb-2">ORIGIN & EDUCATION</h3>
              <ul className="list-disc list-inside text-text-secondary space-y-1">
                <li><strong>Homeworld:</strong> Beaumont, Texas</li>
                <li><strong>Formal Training:</strong> B.S. Electrical Engineering, Prairie View A&M University</li>
              </ul>
            </div>
            <div>
              <h3 className="text-neon-green font-sci-fi mb-2">FIELD EXPERIENCE</h3>
              <ul className="list-disc list-inside text-text-secondary space-y-1">
                <li><strong>Previous Deployment:</strong> Corporate Engineer, Siemens Energy</li>
                <li><strong>Covert Research:</strong> Years immersed in "the Black underworld" to develop grassroots sociological insight and strategic frameworks.</li>
              </ul>
            </div>
          </div>
        </Panel>

        {/* Intellectual Framework */}
        <Panel>
          <div className="panel-header">
            <h2 className="panel-title">INTELLECTUAL FRAMEWORK</h2>
          </div>
          <div className="p-6 space-y-4 text-sm">
            <div>
              <h3 className="text-electric-blue font-sci-fi mb-2">CORE INFLUENCES</h3>
              <p className="text-text-secondary">
                The strategic and theoretical work of Dr. Frances Cress Welsing and Dr. Amos Wilson forms the bedrock of the mission's ideology.
              </p>
            </div>
            <div>
              <h3 className="text-neon-green font-sci-fi mb-2">SPECIALIZATION</h3>
              <ul className="list-disc list-inside text-text-secondary space-y-1">
                <li>Systemic analysis and critique of white supremacy.</li>
                <li>Detection and analysis of "White Fragility" in Large Language Models.</li>
                <li>Development of counter-measure AI systems (aka "Woke AI").</li>
              </ul>
            </div>
             <div>
              <h3 className="text-cyber-purple font-sci-fi mb-2">PUBLISHED RESEARCH</h3>
              <p className="text-text-secondary">
                Authored multiple peer-reviewed papers, including "Exploring White Fragility in Large Language Models," establishing benchmarks for detecting systemic bias in AI.
              </p>
            </div>
          </div>
        </Panel>

      </div>
    </div>
  );
}
