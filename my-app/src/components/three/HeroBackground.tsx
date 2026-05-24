'use client';

import { useEffect, useState, useRef } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  z: number;
  size: number;
  speed: number;
  opacity: number;
  connections: number[];
}

interface TechLogo {
  id: number;
  x: number;
  y: number;
  vx: number; // velocity x
  vy: number; // velocity y
  logo: string;
  size: number;
  opacity: number;
}

const HeroBackground = ({ mousePosition }: { mousePosition?: { x: number; y: number } }) => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [techLogos, setTechLogos] = useState<TechLogo[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Tech stack logos - placeholder for your 20 logos
  const techLogosList = [
    "/assets/images/tech1.png",
    "/assets/images/tech2.png",
    "/assets/images/tech3.png",
    "/assets/images/tech4.png",
    "/assets/images/tech5.png",
    "/assets/images/tech6.png",
    "/assets/images/tech7.png",
    "/assets/images/tech8.png",
    "/assets/images/tech9.png",
    "/assets/images/tech10.png",
    "/assets/images/tech11.png",
    "/assets/images/tech12.png",
    "/assets/images/tech13.png",
    "/assets/images/tech14.png",
    "/assets/images/tech15.png",
    "/assets/images/tech16.png",
    "/assets/images/tech17.png",
    "/assets/images/tech18.png",
    "/assets/images/tech19.png",
    "/assets/images/tech20.png"
  ];
  
  useEffect(() => {
    // Generate fewer particles for a cleaner look
    const newParticles: Particle[] = [];
    for (let i = 0; i < 50; i++) { // Reduced from 150 to 50
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        z: Math.random() * 100,
        size: Math.random() * 3 + 1,
        speed: Math.random() * 0.5 + 0.1,
        opacity: Math.random() * 0.5 + 0.3,
        connections: []
      });
    }
    
    // Create fewer connections for a cleaner network
    for (let i = 0; i < newParticles.length; i++) {
      for (let j = i + 1; j < newParticles.length; j++) {
        const dx = newParticles[i].x - newParticles[j].x;
        const dy = newParticles[i].y - newParticles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Only connect closer particles (reduced from 15 to 10)
        if (distance < 10) {
          newParticles[i].connections.push(j);
          newParticles[j].connections.push(i);
        }
      }
    }
    
    setParticles(newParticles);
    
    // Start animation loop for particles
    let animationFrameId: number;
    const animate = () => {
      setParticles(prev => {
        return prev.map(particle => {
          // Gentle floating motion
          const newX = (particle.x + particle.speed * 0.2) % 100;
          const newY = (particle.y + Math.sin(Date.now() * 0.001 + particle.id) * 0.1) % 100;
          
          return {
            ...particle,
            x: newX,
            y: newY
          };
        });
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Initialize tech logos in floating positions
    const initialLogos: TechLogo[] = [];
    for (let i = 0; i < 8; i++) { // Start with 8 logos
      const randomLogo = techLogosList[Math.floor(Math.random() * techLogosList.length)];
      initialLogos.push({
        id: i,
        x: Math.random() * 80 + 10, // 10% to 90% horizontal position
        y: Math.random() * 80 + 10, // 10% to 90% vertical position
        vx: (Math.random() - 0.5) * 0.5, // Random horizontal velocity
        vy: (Math.random() - 0.5) * 0.5, // Random vertical velocity
        logo: randomLogo,
        size: Math.random() * 20 + 25, // 25px to 45px
        opacity: 0.8
      });
    }
    setTechLogos(initialLogos);
    
    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  // Animate tech logos to float around
  useEffect(() => {
    let animationFrameId: number;
    const animateLogos = () => {
      setTechLogos(prev => {
        return prev.map(logo => {
          // Update position based on velocity
          let newX = logo.x + logo.vx;
          let newY = logo.y + logo.vy;
          
          // Bounce off edges
          let newVx = logo.vx;
          let newVy = logo.vy;
          
          if (newX <= 5 || newX >= 95) {
            newVx = -newVx;
            newX = Math.max(5, Math.min(95, newX));
          }
          
          if (newY <= 5 || newY >= 95) {
            newVy = -newVy;
            newY = Math.max(5, Math.min(95, newY));
          }
          
          return {
            ...logo,
            x: newX,
            y: newY,
            vx: newVx,
            vy: newVy
          };
        });
      });
      
      animationFrameId = requestAnimationFrame(animateLogos);
    };
    
    animateLogos();
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden z-0">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background opacity-50"></div>
      
      {/* Connection lines between particles */}
      <svg className="absolute inset-0 w-full h-full">
        {particles.map(particle => {
          return particle.connections.map(connectionId => {
            const connectedParticle = particles.find(p => p.id === connectionId);
            if (!connectedParticle) return null;
            
            return (
              <line
                key={`${particle.id}-${connectionId}`}
                x1={`${particle.x}%`}
                y1={`${particle.y}%`}
                x2={`${connectedParticle.x}%`}
                y2={`${connectedParticle.y}%`}
                stroke="url(#gradient)"
                strokeWidth="0.3"
                opacity="0.2"
              />
            );
          });
        })}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00ffff" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#ff00ff" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#00ffff" stopOpacity="0.6" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Cleaner particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-brand-cyan"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            boxShadow: "0 0 6px 1px rgba(0, 255, 255, 0.5)",
            transform: "translate(-50%, -50%)"
          }}
        />
      ))}
      
      {/* Floating tech logos */}
      {techLogos.map((logo) => (
        <div
          key={logo.id}
          className="absolute"
          style={{
            left: `${logo.x}%`,
            top: `${logo.y}%`,
            transform: "translate(-50%, -50%)",
            opacity: logo.opacity,
            transition: "opacity 0.3s ease"
          }}
        >
          <img 
            src={logo.logo} 
            alt="Tech Stack" 
            className="rounded-lg border border-brand-cyan/20 shadow-lg"
            style={{
              width: `${logo.size}px`,
              height: `${logo.size}px`,
              filter: "drop-shadow(0 0 6px rgba(0, 255, 255, 0.6))",
              animation: "float 4s ease-in-out infinite"
            }}
          />
        </div>
      ))}
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-brand-cyan/8 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-brand-purple/8 rounded-full blur-3xl animate-float-slow"></div>
      <div className="absolute top-1/2 left-1/4 w-56 h-56 bg-brand-pink/8 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      {/* Custom animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
          50% { transform: translate(-50%, -50%) translateY(-8px); }
        }
      `}</style>
    </div>
  );
};

export default HeroBackground;