'use client';

import { useState } from 'react';

export default function Globe() {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="w-full h-full rounded-xl overflow-hidden relative"
      style={{
        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        transition: 'transform 0.3s ease-out'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* CSS-based globe */}
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-900/20 to-purple-900/20">
        <div className="relative">
          {/* Globe sphere */}
          <div className="w-48 h-48 rounded-full bg-gradient-to-br from-indigo-600 to-purple-700 shadow-[0_0_30px_rgba(99,102,241,0.5)] relative overflow-hidden">
            {/* Globe texture lines */}
            <div className="absolute inset-0 rounded-full">
              {/* Horizontal lines */}
              <div className="absolute top-1/4 left-0 right-0 h-0.5 bg-indigo-300/30"></div>
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-indigo-300/30"></div>
              <div className="absolute top-3/4 left-0 right-0 h-0.5 bg-indigo-300/30"></div>
              
              {/* Vertical lines */}
              <div className="absolute top-0 bottom-0 left-1/4 w-0.5 bg-indigo-300/30"></div>
              <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-indigo-300/30"></div>
              <div className="absolute top-0 bottom-0 left-3/4 w-0.5 bg-indigo-300/30"></div>
              
              {/* Diagonal lines */}
              <div className="absolute top-0 bottom-0 w-0.5 bg-indigo-300/20" style={{ transform: 'rotate(45deg)', left: '25%' }}></div>
              <div className="absolute top-0 bottom-0 w-0.5 bg-indigo-300/20" style={{ transform: 'rotate(-45deg)', left: '75%' }}></div>
            </div>
            
            {/* Glowing connection points */}
            <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_#00FFFF]"></div>
            <div className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_#00FFFF]"></div>
            <div className="absolute bottom-1/4 left-1/3 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_#00FFFF]"></div>
            <div className="absolute bottom-1/3 right-1/4 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_#00FFFF]"></div>
            <div className="absolute top-1/2 left-1/2 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_#00FFFF]"></div>
            
            {/* Connection lines */}
            <div className="absolute top-1/4 left-1/4 right-1/3 h-0.5 bg-cyan-400/70" style={{ transform: 'rotate(15deg)', transformOrigin: 'left' }}></div>
            <div className="absolute top-1/3 right-1/3 bottom-1/4 w-0.5 bg-cyan-400/70" style={{ transform: 'rotate(-20deg)', transformOrigin: 'top' }}></div>
            <div className="absolute bottom-1/4 left-1/3 top-1/2 w-0.5 bg-cyan-400/70" style={{ transform: 'rotate(30deg)', transformOrigin: 'bottom' }}></div>
          </div>
          
          {/* Floating animation */}
          <div className="absolute inset-0 rounded-full animate-pulse opacity-20 bg-gradient-to-r from-cyan-400 to-purple-500"></div>
        </div>
      </div>
    </div>
  );
}
