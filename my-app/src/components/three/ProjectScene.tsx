'use client';

import { useState, useEffect } from 'react';

interface ProjectSceneProps {
  screenshotUrl: string;
  isHovered: boolean;
}

export default function ProjectScene({ screenshotUrl, isHovered }: ProjectSceneProps) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ y: 0 });

  // Animate the laptop based on hover state
  useEffect(() => {
    let animationFrameId: number;
    
    const animate = () => {
      // Subtle floating animation
      const floatOffset = Math.sin(Date.now() * 0.001) * 0.1;
      setPosition({ y: floatOffset });
      
      // Tilt animation when hovered
      if (isHovered) {
        setRotation({
          x: -0.1,
          y: 0.05
        });
      } else {
        setRotation({
          x: 0,
          y: 0
        });
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isHovered]);

  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-black rounded-t-lg overflow-hidden">
      {/* Laptop base */}
      <div 
        className="relative w-64 h-40"
        style={{
          transform: `translateY(${position.y}px) rotateX(${rotation.x}rad) rotateY(${rotation.y}rad)`,
          transition: 'transform 0.3s ease-out'
        }}
      >
        {/* Laptop screen */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-56 h-32 bg-gray-800 rounded-t-md overflow-hidden border-2 border-gray-700">
          {/* Screen content */}
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${screenshotUrl})` }}
          />
          {/* Screen reflection */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/10 to-transparent pointer-events-none"></div>
        </div>
        
        {/* Laptop base */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-60 h-4 bg-gray-900 rounded-b-md border-2 border-gray-700">
          {/* Keyboard */}
          <div className="absolute top-1 left-2 right-2 h-2 flex flex-wrap gap-0.5">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="w-1 h-1 bg-gray-700 rounded-sm"></div>
            ))}
          </div>
        </div>
        
        {/* Hinge */}
        <div className="absolute top-32 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gray-700 rounded-full"></div>
      </div>
    </div>
  );
}