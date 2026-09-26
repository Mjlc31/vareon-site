import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoaderProps {
  text?: string;
  size?: number;
  className?: string;
}

export const Loader: React.FC<LoaderProps> = ({
  text = 'PROCESSANDO',
  size = 40,
  className = '',
}) => {
  return (
    <div className={`flex flex-col items-center justify-center gap-4 ${className}`}>
      <Loader2 
        className="text-white animate-spin" 
        size={size} 
        strokeWidth={1.5}
      />
      {text && (
        <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
          {text}
        </span>
      )}
    </div>
  );
};
