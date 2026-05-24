import { motion } from 'framer-motion';

interface EducationCardProps {
  degree: string;
  institution: string;
  location: string;
  duration: string;
  grade: string;
  description: string;
  highlights: string[];
  logo: string;
  logoAlt: string;
}

export default function EducationCard({
  degree,
  institution,
  location,
  duration,
  grade,
  description,
  highlights,
  logo,
  logoAlt,
}: EducationCardProps) {
  return (
    <motion.div 
      className="bg-card border border-subtle rounded-xl p-6 transition-all duration-300 group relative overflow-hidden"
      whileHover={{ 
        y: -5,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 rounded-xl shadow-[0_0_15px_rgba(0,255,255,0.3)]"></div>
      </div>
      
      <div className="flex items-start gap-4 mb-4 relative z-10">
        <motion.div 
          className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-brand-cyan/10 transition-colors duration-300 overflow-hidden"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          {logo.startsWith('/') ? (
            <img 
              src={logo} 
              alt={logoAlt} 
              className="w-full h-full object-contain p-2"
            />
          ) : (
            <span className="text-2xl font-bold text-brand-cyan">{logo}</span>
          )}
        </motion.div>
        <div className="flex-1">
          <motion.h3 
            className="text-xl font-semibold text-text-primary mb-1 group-hover:text-brand-cyan transition-colors duration-250"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.3 }}
          >
            {degree}
          </motion.h3>
          <p className="text-text-secondary font-medium mb-1">{institution}</p>
          <p className="text-sm text-text-muted">{location}</p>
        </div>
      </div>
      
      <div className="flex items-center gap-4 mb-4 text-sm relative z-10">
        <span className="text-text-secondary">{duration}</span>
        <motion.span 
          className="text-brand-green font-semibold"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          {grade}
        </motion.span>
      </div>
      
      <motion.p 
        className="text-text-secondary mb-4 leading-relaxed relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {description}
      </motion.p>
      
      <div className="space-y-2 relative z-10">
        {highlights.map((highlight, index) => (
          <motion.div 
            key={index} 
            className="flex items-start gap-2"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <span className="text-brand-cyan mt-1">▹</span>
            <span className="text-sm text-text-secondary">{highlight}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}