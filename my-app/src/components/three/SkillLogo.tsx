'use client';

import { useState, useEffect } from 'react';

interface SkillLogoProps {
  logoPath: string;
  size?: number;
  rotationSpeed?: number;
}

const SkillLogo = ({ 
  logoPath, 
  size = 24,
  rotationSpeed = 1
}: SkillLogoProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="relative cursor-pointer transition-transform duration-300"
      style={{ 
        width: size, 
        height: size,
        transform: isHovered ? 'scale(1.1) rotate(5deg)' : 'scale(1) rotate(0deg)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src={logoPath} 
        alt="Skill Logo" 
        className="w-full h-full object-contain rounded-md border border-brand-cyan/20"
        style={{
          filter: isHovered ? 'drop-shadow(0 0 8px rgba(0, 255, 255, 0.7))' : 'none',
          transition: 'filter 0.3s ease'
        }}
      />
      
      {/* Glow effect on hover */}
      {isHovered && (
        <div 
          className="absolute inset-0 rounded-md"
          style={{
            background: 'radial-gradient(circle, rgba(0, 255, 255, 0.3) 0%, transparent 70%)',
            transform: 'scale(1.2)',
            zIndex: -1
          }}
        />
      )}
    </div>
  );
};

export default SkillLogo;