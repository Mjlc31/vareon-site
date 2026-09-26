import React from 'react';

interface VareonLogoProps {
  className?: string;
  size?: number;
  showWordmark?: boolean;
  wordmarkClassName?: string;
}

export const VareonLogo: React.FC<VareonLogoProps> = ({
  className = "w-10 h-10",
  size = 40,
  showWordmark = false,
  wordmarkClassName = "text-xl font-bold tracking-tight text-white",
}) => {
  return (
    <div className="flex items-center gap-3 select-none">
      {/* Precision Apple-style Squircle Monogram Symbol */}
      <div 
        className={`relative flex items-center justify-center overflow-hidden rounded-xl md:rounded-2xl border border-[#6B21D8]/40 bg-[#0A0314] shadow-[0_4px_20px_rgba(107,33,216,0.3)] transition-transform duration-300 hover:scale-105 ${className}`}
        style={{ width: size, height: size }}
      >
        {/* Subtle geometric background facet glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#8B3FE8]/40 via-[#2A0A4A]/80 to-[#050208]" />
        
        {/* Diamond / Facet subtle backdrop lines */}
        <svg 
          viewBox="0 0 100 100" 
          className="absolute inset-0 w-full h-full opacity-30 pointer-events-none"
          aria-hidden="true"
        >
          <polygon points="50,5 95,50 50,95 5,50" fill="none" stroke="#8B3FE8" strokeWidth="1" />
          <polygon points="50,20 80,50 50,80 20,50" fill="none" stroke="#C9A8F0" strokeWidth="0.5" />
        </svg>

        {/* The 'VA' Interlocking Monogram in Sharp Vector Geometry */}
        <svg 
          viewBox="0 0 120 120" 
          className="relative z-10 w-[78%] h-[78%]" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="vaGradWhiteLilac" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="45%" stopColor="#F5F3FA" />
              <stop offset="85%" stopColor="#D6BCF5" />
              <stop offset="100%" stopColor="#B584E8" />
            </linearGradient>

            <linearGradient id="vaGradFacet" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E4D4FA" />
              <stop offset="100%" stopColor="#8B3FE8" />
            </linearGradient>

            <linearGradient id="vaGradShadow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6B21D8" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#3D1163" stopOpacity="0.4" />
            </linearGradient>
          </defs>

          {/* Left Stem of V */}
          <polygon 
            points="14,24 32,24 54,96 38,96" 
            fill="url(#vaGradWhiteLilac)" 
          />

          {/* The Shared Apex Center Diagonal (V right & A left interlock) */}
          <polygon 
            points="38,96 54,96 82,24 64,24" 
            fill="url(#vaGradWhiteLilac)" 
          />

          {/* Right Stem of A */}
          <polygon 
            points="64,24 82,24 106,96 88,96" 
            fill="url(#vaGradFacet)" 
          />

          {/* Horizontal Crossbar of A with clean architectural cut */}
          <polygon 
            points="48,70 94,70 91,81 44,81" 
            fill="url(#vaGradWhiteLilac)" 
            opacity="0.95"
          />
        </svg>

        {/* Ambient border corner light */}
        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#D6BCF5] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#6B21D8] pointer-events-none" />
      </div>

      {/* Wordmark */}
      {showWordmark && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className={`font-display font-black tracking-tight ${wordmarkClassName}`}>
              VAREON
            </span>
            <span className="inline-block w-1.5 h-1.5 bg-[#8B3FE8]" />
          </div>
          <span className="text-[9px] font-semibold tracking-[0.2em] text-[#9CA3AF] uppercase">
            GROWTH & POSITIONING
          </span>
        </div>
      )}
    </div>
  );
};
