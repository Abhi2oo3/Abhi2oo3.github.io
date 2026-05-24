'use client';

import { motion } from 'framer-motion';

interface Timeline3DProps {
  events: number;
}

const Timeline3D = ({ events }: Timeline3DProps) => {
  return (
    <div className="absolute left-1/2 top-0 bottom-0 w-1 transform -translate-x-1/2 z-0">
      {/* Glowing timeline line */}
      <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-brand-cyan via-brand-purple to-brand-orange opacity-30"></div>
      
      {/* Glowing spheres for each event */}
      <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-full">
        {Array.from({ length: events }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 rounded-full bg-brand-cyan border-2 border-brand-cyan shadow-[0_0_10px_#00ffff]"
            style={{
              top: `${(i / (events - 1)) * 100}%`,
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: 0.5, 
              delay: i * 0.1,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 2
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline3D;