import { motion } from 'framer-motion';

export const WaveElement = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="relative w-[600px] h-[600px] max-w-[90vw] max-h-[90vh]">
        {/* Outer rings */}
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className="absolute inset-0 rounded-full"
            style={{
              border: '1px solid rgba(59, 130, 246, 0.15)',
              transform: 'translateZ(0)',
            }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              scale: [0.8 + index * 0.15, 1 + index * 0.15],
              opacity: [0.3, 0.05],
              rotate: [0, 360],
            }}
            transition={{
              duration: 15 + index * 5,
              repeat: Infinity,
              ease: 'linear',
              delay: index * 2,
            }}
          />
        ))}

        {/* Central glowing core */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl" />
        </motion.div>

        {/* Flowing data streams */}
        {[...Array(6)].map((_, index) => (
          <motion.div
            key={`stream-${index}`}
            className="absolute top-1/2 left-1/2 w-2 h-40 origin-bottom"
            style={{
              rotate: `${index * 60}deg`,
              translateX: '-50%',
            }}
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{
              scaleY: [0, 1, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: index * 0.5,
            }}
          >
            <div className="w-full h-full bg-gradient-to-t from-blue-500/40 via-cyan-400/60 to-transparent rounded-full" />
          </motion.div>
        ))}

        {/* Orbiting particles */}
        {[...Array(8)].map((_, index) => (
          <motion.div
            key={`orbit-${index}`}
            className="absolute top-1/2 left-1/2 w-3 h-3"
            style={{
              transformOrigin: `${100 + index * 30}px 0px`,
            }}
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 10 + index * 2,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            <div className="w-full h-full bg-blue-400/60 rounded-full blur-sm" />
          </motion.div>
        ))}

        {/* 3D signal waves */}
        <div className="absolute inset-0" style={{ perspective: '1000px' }}>
          {[...Array(3)].map((_, index) => (
            <motion.div
              key={`wave-${index}`}
              className="absolute inset-0 rounded-full border border-blue-400/20"
              style={{
                transformStyle: 'preserve-3d',
              }}
              animate={{
                rotateX: [0, 360],
                rotateY: [0, 180],
                scale: [0.9, 1, 0.9],
              }}
              transition={{
                duration: 20 - index * 3,
                repeat: Infinity,
                ease: 'linear',
                delay: index * 1.5,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
