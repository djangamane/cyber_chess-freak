"use client";

import React, { ReactNode } from 'react';

// ===== BUTTON COMPONENTS =====

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'danger' | 'console';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  disabled = false,
  className = '' 
}: ButtonProps) {
  const baseClasses = 'btn touch-target';
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary', 
    danger: 'btn-danger',
    console: 'btn-console'
  };
  
  const sizeClasses = {
    sm: 'text-xs px-2 py-2 md:px-3 md:py-2 min-h-[36px] md:min-h-[40px]',
    md: 'text-xs px-4 py-3 md:text-sm md:px-6 md:py-3 min-h-[44px] md:min-h-[48px]',
    lg: 'text-sm px-6 py-4 md:text-base md:px-8 md:py-4 min-h-[52px] md:min-h-[56px]'
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        active:scale-95 transition-transform duration-150
        ${className}
      `}
    >
      {children}
    </button>
  );
}

// ===== PANEL COMPONENTS =====

interface PanelProps {
  children: ReactNode;
  title?: string;
  className?: string;
  showStatusLight?: boolean;
  statusColor?: 'green' | 'blue' | 'orange' | 'red';
}

export function Panel({ 
  children, 
  title, 
  className = '', 
  showStatusLight = true,
  statusColor = 'green'
}: PanelProps) {
  return (
    <div className={`panel ${className}`}>
      {title && (
        <div className="panel-header">
          <h3 className="panel-title text-sm md:text-base">{title}</h3>
        </div>
      )}
      <div className="p-3 md:p-6">
        {children}
      </div>
    </div>
  );
}

// ===== CONSOLE SCREEN COMPONENT =====

interface ConsoleScreenProps {
  children: ReactNode;
  title?: string;
  className?: string;
}

export function ConsoleScreen({ children, title, className = '' }: ConsoleScreenProps) {
  return (
    <div className={`
      bg-dark-matter border border-console-green rounded-lg p-2 md:p-4
      font-console text-console text-xs md:text-sm relative overflow-hidden
      ${className}
    `}>
      {/* Scanlines effect - Hidden on mobile for performance */}
      <div className="absolute inset-0 pointer-events-none opacity-20 md-hidden">
        <div 
          className="h-full w-full"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,65,0.3) 2px, rgba(0,255,65,0.3) 4px)',
          }}
        />
      </div>
      
      {title && (
        <div className="border-b border-console-green pb-2 mb-2 md:mb-4">
          <div className="flex items-center justify-between">
            <span className="text-electric-blue font-bold text-xs md:text-sm">{title}</span>
            <span className="text-xs">
              {new Date().toLocaleTimeString()}
            </span>
          </div>
        </div>
      )}
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

// ===== STATUS INDICATOR COMPONENT =====

interface StatusIndicatorProps {
  status: 'online' | 'offline' | 'warning' | 'error';
  label?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function StatusIndicator({ status, label, size = 'md' }: StatusIndicatorProps) {
  const statusConfig = {
    online: { color: 'bg-neon-green', shadowColor: 'shadow-[0_0_10px_#00ff00]' },
    offline: { color: 'bg-gray-500', shadowColor: '' },
    warning: { color: 'bg-alert-orange', shadowColor: 'shadow-[0_0_10px_#ff6600]' },
    error: { color: 'bg-warning-red', shadowColor: 'shadow-[0_0_10px_#ff0040]' }
  };

  const sizeClasses = {
    sm: 'w-1.5 h-1.5 md:w-2 md:h-2',
    md: 'w-2 h-2 md:w-3 md:h-3', 
    lg: 'w-3 h-3 md:w-4 md:h-4'
  };

  const config = statusConfig[status];

  return (
    <div className="flex items-center space-x-1 md:space-x-2">
      <div 
        className={`
          ${config.color} ${sizeClasses[size]} rounded-full
          ${config.shadowColor} animate-pulse
        `}
      />
      {label && (
        <span className="text-console text-xs uppercase tracking-wide whitespace-nowrap">
          {label}
        </span>
      )}
    </div>
  );
}

// ===== PROGRESS BAR COMPONENT =====

interface ProgressBarProps {
  progress: number; // 0-100
  label?: string;
  color?: 'blue' | 'green' | 'orange';
  animated?: boolean;
}

export function ProgressBar({ 
  progress, 
  label, 
  color = 'blue', 
  animated = false 
}: ProgressBarProps) {
  const colorConfig = {
    blue: 'bg-electric-blue',
    green: 'bg-neon-green',
    orange: 'bg-alert-orange'
  };

  return (
    <div className="space-y-2">
      {label && (
        <div className="flex justify-between text-console text-xs">
          <span>{label}</span>
          <span>{progress}%</span>
        </div>
      )}
      <div className="h-2 bg-dark-matter border border-panel-border rounded-full overflow-hidden">
        <div 
          className={`
            h-full ${colorConfig[color]} transition-all duration-500
            ${animated ? 'animate-pulse' : ''}
          `}
          style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
        />
      </div>
    </div>
  );
}

// ===== ACCORDION COMPONENT =====

interface AccordionItem {
  id: string;
  title: string;
  content: ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  className?: string;
}

export function Accordion({ items, allowMultiple = false, className = '' }: AccordionProps) {
  const [expandedItems, setExpandedItems] = React.useState<string[]>([]);

  const toggleItem = (itemId: string) => {
    setExpandedItems(prev => {
      if (allowMultiple) {
        return prev.includes(itemId) 
          ? prev.filter(id => id !== itemId)
          : [...prev, itemId];
      } else {
        return prev.includes(itemId) ? [] : [itemId];
      }
    });
  };

  return (
    <div className={`space-y-2 ${className}`}>
      {items.map((item) => {
        const isExpanded = expandedItems.includes(item.id);
        
        return (
          <div key={item.id} className="panel">
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full panel-header hover:bg-panel-header transition-colors duration-200"
            >
              <div className="flex items-center justify-between">
                <h3 className="panel-title text-left">{item.title}</h3>
                <span className={`
                  text-electric-blue transition-transform duration-200
                  ${isExpanded ? 'rotate-90' : ''}
                `}>
                  ▶
                </span>
              </div>
            </button>
            
            {isExpanded && (
              <div className="p-6 animate-fade-in">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// ===== HOLOGRAPHIC DISPLAY COMPONENT =====

interface HolographicDisplayProps {
  children: ReactNode;
  className?: string;
}

export function HolographicDisplay({ children, className = '' }: HolographicDisplayProps) {
  return (
    <div className={`
      relative bg-gradient-to-br from-electric-blue/10 to-cyber-purple/10
      border border-electric-blue/30 rounded-lg p-3 md:p-6 backdrop-blur-sm
      overflow-hidden ${className}
    `}>
      {/* Holographic grid lines - Simplified for mobile */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none md-hidden"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(0,255,255,0.3) 1px, transparent 1px),
            linear-gradient(0deg, rgba(0,255,255,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}
      />
      
      {/* Scanning line effect - Desktop only */}
      <div className="absolute inset-0 pointer-events-none md-hidden">
        <div 
          className="h-px bg-electric-blue opacity-50 animate-pulse"
          style={{
            animation: 'scan 3s linear infinite',
            backgroundImage: 'linear-gradient(90deg, transparent, #00ffff, transparent)'
          }}
        />
      </div>
      
      <div className="relative z-10">
        {children}
      </div>
      
      <style jsx>{`
        @keyframes scan {
          0% { transform: translateY(0); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </div>
  );
}

// ===== LOADING SPINNER COMPONENT =====

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'blue' | 'green' | 'orange';
}

export function LoadingSpinner({ size = 'md', color = 'blue' }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const colorClasses = {
    blue: 'border-electric-blue',
    green: 'border-neon-green', 
    orange: 'border-alert-orange'
  };

  return (
    <div className={`
      ${sizeClasses[size]} ${colorClasses[color]}
      border-2 border-t-transparent rounded-full animate-spin
    `} />
  );
}

// ===== ALERT COMPONENT =====

interface AlertProps {
  type: 'info' | 'success' | 'warning' | 'error';
  title?: string;
  children: ReactNode;
  onClose?: () => void;
}

export function Alert({ type, title, children, onClose }: AlertProps) {
  const typeConfig = {
    info: { 
      bgColor: 'bg-electric-blue/10', 
      borderColor: 'border-electric-blue', 
      textColor: 'text-electric-blue',
      icon: 'ℹ'
    },
    success: { 
      bgColor: 'bg-neon-green/10', 
      borderColor: 'border-neon-green', 
      textColor: 'text-neon-green',
      icon: '✓'
    },
    warning: { 
      bgColor: 'bg-alert-orange/10', 
      borderColor: 'border-alert-orange', 
      textColor: 'text-alert-orange',
      icon: '⚠'
    },
    error: { 
      bgColor: 'bg-warning-red/10', 
      borderColor: 'border-warning-red', 
      textColor: 'text-warning-red',
      icon: '✕'
    }
  };

  const config = typeConfig[type];

  return (
    <div className={`
      ${config.bgColor} ${config.borderColor} border rounded-lg p-4
      flex items-start space-x-3
    `}>
      <div className={`${config.textColor} font-bold text-lg flex-shrink-0`}>
        {config.icon}
      </div>
      <div className="flex-1">
        {title && (
          <h4 className={`${config.textColor} font-sci-fi text-sm mb-1`}>
            {title}
          </h4>
        )}
        <div className="text-text-primary text-sm">
          {children}
        </div>
      </div>
      {onClose && (
        <button 
          onClick={onClose}
          className={`${config.textColor} hover:opacity-70 transition-opacity`}
        >
          ✕
        </button>
      )}
    </div>
  );
}