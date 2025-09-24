"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Button, ConsoleScreen, StatusIndicator } from '../../components/UIComponents';
import { useTransition } from '../../components/TransitionProvider';

interface ChatMessage {
  id: string;
  sender: 'user' | 'uncle_roy';
  message: string;
  timestamp: Date;
}

export default function UncleRoyChat() {
  const { startTransition } = useTransition();
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'uncle_roy',
      message: 'Greetings, young strategist! I am Uncle Roy, your AI guide in the fight against systemic racism. How can I assist your mission today?',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      message: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response (in real implementation, this would call your AI service)
    setTimeout(() => {
      const responses = [
        "That's a profound question about systemic racism. Let me share some strategic insights based on the research...",
        "Understanding the chess metaphor in counter-racism work is crucial. Consider how each move affects the entire board...",
        "The key to effective anti-racism work lies in systematic thinking and strategic planning. Here's what I recommend...",
        "Based on game theory principles, the most effective approach would involve multiple coordinated strategies...",
        "That reminds me of Dr. Frances Cress Welsing's work on the Cress Theory of Color-Confrontation. Have you considered...",
        "From a strategic standpoint, addressing institutional racism requires understanding power structures. Let me explain..."
      ];

      const aiMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'uncle_roy',
        message: responses[Math.floor(Math.random() * responses.length)],
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleBackToTools = () => {
    startTransition('/tools');
  };

  const quickPrompts = [
    "What is systemic racism?",
    "How can chess teach strategy?",
    "Best counter-racism tactics?",
    "Community organizing tips?",
    "Understanding power structures"
  ];

  return (
    <div className="min-h-screen p-6">
      {/* Back Navigation */}
      <Button 
        variant="console" 
        size="sm" 
        onClick={handleBackToTools}
        className="mb-4"
      >
        ← BACK TO COMMAND TOOLS
      </Button>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* Main Chat Interface */}
        <div className="lg:col-span-3">
          <div className="panel h-[600px] flex flex-col">
            <div className="panel-header">
              <div className="flex items-center justify-between">
                <h2 className="panel-title">UNCLE ROY AI TERMINAL</h2>
                <div className="flex items-center space-x-2">
                  <StatusIndicator status="online" label="AI ACTIVE" size="sm" />
                  <span className="text-console text-xs">ENCRYPTION: AES-256</span>
                </div>
              </div>
            </div>
            
            {/* Chat Messages */}
            <div className="flex-1 p-4 overflow-y-auto bg-dark-matter">
              <div className="space-y-4">
                {messages.map((msg) => (
                  <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-3 rounded-lg text-sm ${
                      msg.sender === 'user' 
                        ? 'bg-electric-blue/20 border border-electric-blue/30' 
                        : 'bg-neon-green/20 border border-neon-green/30'
                    }`}>
                      <div className={`font-bold text-xs mb-1 ${
                        msg.sender === 'user' ? 'text-electric-blue' : 'text-neon-green'
                      }`}>
                        {msg.sender === 'user' ? '[USER]' : '[UNCLE_ROY]'}
                      </div>
                      <div className="text-text-primary">{msg.message}</div>
                      <div className="text-xs text-text-muted mt-1">
                        {msg.timestamp.toLocaleTimeString()}
                      </div>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-neon-green/20 border border-neon-green/30 p-3 rounded-lg">
                      <div className="text-neon-green font-bold text-xs mb-1">[UNCLE_ROY]</div>
                      <div className="text-text-primary animate-pulse">Analyzing your query...</div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>
            
            {/* Input Area */}
            <div className="p-4 border-t border-panel-border bg-panel-bg">
              <div className="flex space-x-2">
                <textarea
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message to Uncle Roy..."
                  className="flex-1 input resize-none h-12"
                  rows={2}
                />
                <Button 
                  variant="primary" 
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim() || isTyping}
                  className="px-6"
                >
                  SEND
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          
          {/* AI Info */}
          <div className="panel">
            <div className="panel-header">
              <h3 className="panel-title">AI PROFILE</h3>
            </div>
            <div className="p-4 space-y-3">
              <div className="text-center">
                <div className="text-4xl mb-2">🤖</div>
                <div className="text-electric-blue font-bold">UNCLE ROY</div>
                <div className="text-xs text-text-muted">Strategic AI Assistant v3.2.1</div>
              </div>
              
              <div className="space-y-2 text-sm">
                <div>
                  <span className="text-neon-green font-bold">Specialization:</span>
                  <div className="text-text-secondary">Counter-racism strategy</div>
                </div>
                <div>
                  <span className="text-electric-blue font-bold">Training:</span>
                  <div className="text-text-secondary">Game theory, social justice</div>
                </div>
                <div>
                  <span className="text-cyber-purple font-bold">Response Style:</span>
                  <div className="text-text-secondary">Direct, educational, strategic</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Prompts */}
          <div className="panel">
            <div className="panel-header">
              <h3 className="panel-title">QUICK QUERIES</h3>
            </div>
            <div className="p-4 space-y-2">
              {quickPrompts.map((prompt, index) => (
                <button
                  key={index}
                  onClick={() => setInputMessage(prompt)}
                  className="w-full text-left p-2 text-sm bg-dark-matter border border-panel-border rounded hover:border-electric-blue transition-colors"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>

          {/* Chat Stats */}
          <div className="panel">
            <div className="panel-header">
              <h3 className="panel-title">SESSION STATS</h3>
            </div>
            <div className="p-4 space-y-3 text-sm">
              <div className="flex justify-between">
                <span>Messages:</span>
                <span className="text-electric-blue">{messages.length}</span>
              </div>
              <div className="flex justify-between">
                <span>Session Time:</span>
                <span className="text-neon-green">Active</span>
              </div>
              <div className="flex justify-between">
                <span>AI Model:</span>
                <span className="text-cyber-purple">GPT-Strategy</span>
              </div>
            </div>
          </div>

          {/* Guidelines */}
          <div className="panel">
            <div className="panel-header">
              <h3 className="panel-title">USAGE GUIDELINES</h3>
            </div>
            <div className="p-4 space-y-2 text-xs">
              <div className="flex items-start space-x-2">
                <div className="w-1 h-1 bg-neon-green rounded-full mt-2" />
                <span>Ask specific questions about counter-racism strategies</span>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-1 h-1 bg-electric-blue rounded-full mt-2" />
                <span>Discuss chess tactics and strategic thinking</span>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-1 h-1 bg-cyber-purple rounded-full mt-2" />
                <span>Explore community organizing approaches</span>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-1 h-1 bg-alert-orange rounded-full mt-2" />
                <span>Request educational resource recommendations</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}