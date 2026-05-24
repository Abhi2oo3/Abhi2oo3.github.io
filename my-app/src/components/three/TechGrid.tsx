'use client';

const TechGrid = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Animated tech grid background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-brand-cyan animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              opacity: Math.random() * 0.5 + 0.2,
              animationDuration: `${Math.random() * 3 + 2}s`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      {/* Custom grid pattern */}
      <style jsx>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 30px 30px;
          animation: slide 10s linear infinite;
        }
        
        @keyframes slide {
          0% { background-position: 0 0; }
          100% { background-position: 30px 30px; }
        }
      `}</style>
    </div>
  );
};

export default TechGrid;