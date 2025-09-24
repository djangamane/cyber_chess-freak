"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Button, Panel, StatusIndicator } from '../../components/UIComponents';
import { useTransition } from '../../components/TransitionProvider';

interface ChatMessage {
  sender: 'user' | 'uncle_roy' | 'system_error';
  text: string;
}
const quickPrompts = [
  "What is systemic racism?",
  "How can chess teach strategy?",
  "Best counter-racism tactics?",
  "Explain Dr. Welsing's work",
];

// Component for a single chat message
function ChatMessageItem({ msg }: { msg: ChatMessage }) {
  const isUser = msg.sender === 'user';

  const baseClasses = 'max-w-[80%] p-3 rounded-lg text-sm';
  const senderClasses = {
    user: 'bg-electric-blue/20 border border-electric-blue/30',
    uncle_roy: 'bg-neon-green/20 border border-neon-green/30',
    system_error: 'bg-alert-orange/20 border border-alert-orange/30',
  };

  const senderLabelClasses = {
    user: 'text-electric-blue',
    uncle_roy: 'text-neon-green',
    system_error: 'text-alert-orange',
  };

  return (
    <li className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`${baseClasses} ${senderClasses[msg.sender]}`}>
        <div className={`font-bold text-xs mb-1 ${senderLabelClasses[msg.sender]}`}>
          {`[${msg.sender.toUpperCase()}]`}
        </div>
        <p className="text-text-primary whitespace-pre-wrap">{msg.text}</p>
      </div>
    </li>
  );
}

// Component for the right sidebar
function ChatSidebar({ onPromptClick, isLoading }: { onPromptClick: (prompt: string) => void; isLoading: boolean; }) {
  return (
    <div className="space-y-6">
      <Panel>
        <div className="panel-header"><h3 className="panel-title">AI PROFILE</h3></div>
        <div className="p-4 space-y-3 text-center">
          <div className="text-4xl mb-2">🤖</div>
          <div className="text-electric-blue font-bold">UNCLE ROY</div>
          <div className="text-xs text-text-muted">Strategic AI Assistant v3.2.1</div>
        </div>
      </Panel>
      <Panel>
        <div className="panel-header"><h3 className="panel-title">QUICK QUERIES</h3></div>
        <div className="p-4 space-y-2">
          {quickPrompts.map((prompt) => (
            <button
              key={prompt}
              onClick={() => onPromptClick(prompt)}
              disabled={isLoading}
              className="w-full text-left p-2 text-sm bg-dark-matter border border-panel-border rounded hover:border-electric-blue transition-colors disabled:opacity-50"
            >
              {prompt}
            </button>
          ))}
        </div>
      </Panel>
      <Panel>
        <div className="panel-header"><h3 className="panel-title">USAGE GUIDELINES</h3></div>
        <div className="p-4 space-y-2 text-xs">
          <p className="text-text-secondary">Ask specific questions about counter-racism strategies, chess tactics, community organizing, or request educational resources.</p>
        </div>
      </Panel>
    </div>
  );
}
export default function UncleRoyChat() {
  const { startTransition } = useTransition();
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: 'uncle_roy',
      text: 'Greetings, strategist! I am Uncle Roy, your AI guide in the fight against systemic racism. How can I assist your mission today?',
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [threadId, setThreadId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: ChatMessage = { sender: 'user', text: inputMessage };
    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputMessage;
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: currentInput, threadId }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to get a response from the server.');
      }

      const data = await response.json();
      const assistantMessage: ChatMessage = { sender: 'uncle_roy', text: data.response };
      
      setMessages(prev => [...prev, assistantMessage]);
      setThreadId(data.threadId);

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
      const systemMessage: ChatMessage = { sender: 'system_error', text: `[SYSTEM_ERROR]: ${errorMessage}` };
      setMessages(prev => [...prev, systemMessage]);
    } finally {
      setIsLoading(false);
    }
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

  return (
    <div className="min-h-screen p-6">
      <Button 
        variant="console" 
        size="sm" 
        onClick={handleBackToTools}
        className="mb-4"
      >
        ← BACK TO COMMAND TOOLS
      </Button>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6 h-[calc(100vh-100px)]">
        <Panel className="lg:col-span-3 flex flex-col">
          <div className="panel-header">
            <div className="flex items-center justify-between">
              <h2 className="panel-title">UNCLE ROY AI TERMINAL</h2>
              <div className="flex items-center space-x-2">
                <StatusIndicator status="online" label="AI ACTIVE" size="sm" />
                <span className="text-console text-xs">ENCRYPTION: AES-256</span>
              </div>
            </div>
          </div>
          <div className="flex-1 p-4 overflow-y-auto bg-dark-matter">
            <ul className="space-y-4">
              {messages.map((msg, index) => (
                <ChatMessageItem key={index} msg={msg} />
              ))}
              {isLoading && (
                <li aria-live="polite">
                  <div className="flex justify-start">
                    <div className="bg-neon-green/20 border border-neon-green/30 p-3 rounded-lg">
                      <div className="text-neon-green font-bold text-xs mb-1">[UNCLE_ROY]</div>
                      <div className="text-text-primary animate-pulse">Analyzing your query...</div>
                    </div>
                  </div>
                </li>
              )}
              <div ref={messagesEndRef} />
            </ul>
          </div>
          <div className="p-4 border-t border-panel-border bg-panel-bg">
            <form onSubmit={handleSendMessage} className="flex space-x-2">
              <textarea
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Type your message to Uncle Roy..."
                className="input-console flex-1 resize-none h-12"
                rows={2}
                disabled={isLoading}
                aria-label="Chat input for Uncle Roy"
              />
              <Button 
                variant="primary" 
                disabled={!inputMessage.trim() || isLoading}
                className="px-6"
              >
                {isLoading ? '...' : 'SEND'}
              </Button>
            </form>
          </div>
        </Panel>

        <ChatSidebar onPromptClick={setInputMessage} isLoading={isLoading} />
      </div>
    </div>
  );
}
