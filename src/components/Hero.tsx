import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ParticleField } from "@/components/animations/ParticleField";
import { WaveElement } from "@/components/animations/WaveElement";

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section 
      ref={heroRef}
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Cinematic Dark Background with Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(220_25%_12%),_hsl(220_30%_4%))]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,_hsl(220_30%_4%),_hsl(220_25%_8%),_hsl(220_30%_4%))]" />
      
      {/* Volumetric Lighting Effect */}
      <motion.div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_hsl(217_91%_60%_/_0.08),_transparent_70%)]"
        style={{ opacity }}
      />

      {/* Particle Field */}
      <ParticleField />

      {/* 3D Centerpiece - Abstract Wave Element */}
      <motion.div 
        className="absolute inset-0"
        style={{ 
          opacity,
          scale,
          transformStyle: 'preserve-3d',
          perspective: '1000px'
        }}
      >
        <WaveElement />
      </motion.div>

      {/* Floating Depth Layers */}
      {[...Array(3)].map((_, index) => (
        <motion.div
          key={`layer-${index}`}
          className="absolute inset-0 pointer-events-none"
          style={{
            y: useTransform(scrollYProgress, [0, 1], [0, (index + 1) * 50]),
          }}
        >
          <div 
            className="absolute w-96 h-96 rounded-full blur-3xl opacity-10"
            style={{
              background: index % 2 === 0 
                ? 'radial-gradient(circle, hsl(217 91% 60% / 0.3), transparent)'
                : 'radial-gradient(circle, hsl(267 65% 55% / 0.2), transparent)',
              top: `${20 + index * 25}%`,
              left: `${10 + index * 30}%`,
            }}
          />
        </motion.div>
      ))}

      {/* Main Content */}
      <motion.div 
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center"
        style={{ y }}
      >
        <motion.div 
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {/* Top Accent Line */}
          <motion.div
            className="h-px w-32 bg-gradient-to-r from-transparent via-blue-400/60 to-transparent mx-auto mb-12"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 128, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          />

          {/* Main Headline */}
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 leading-tight tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-blue-300 drop-shadow-2xl">
              Own the Legacy
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl sm:text-2xl lg:text-3xl text-blue-100/80 font-light mb-6 max-w-3xl mx-auto leading-relaxed tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            Reviving Classic IPs into Modern Digital Experiences
          </motion.p>

          {/* Description */}
          <motion.div
            className="max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <p className="text-base sm:text-lg text-blue-200/60 font-light leading-relaxed tracking-wide">
              At FLARE, we transform nostalgia into streaming experiences. 
              From classic drama to cultural gems, our content bridges generations 
              and platforms with precision and passion.
            </p>
          </motion.div>

          {/* Feature Tags */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            {['Timeless IPs', 'Digital Revival', 'Multi-Platform'].map((tag, index) => (
              <motion.div
                key={tag}
                className="relative group"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.7 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative px-6 py-2.5 bg-blue-950/30 backdrop-blur-xl border border-blue-400/20 rounded-full">
                  <span className="text-sm font-medium text-blue-200/90 tracking-wide">
                    {tag}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            className="absolute top-1/4 left-[10%] w-2 h-2 bg-blue-400/60 rounded-full blur-sm"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute top-1/3 right-[15%] w-1.5 h-1.5 bg-purple-400/50 rounded-full blur-sm"
            animate={{
              scale: [1.5, 1, 1.5],
              opacity: [0.8, 0.3, 0.8],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
          />
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ 
          opacity: 1, 
          y: 0,
        }}
        transition={{ 
          opacity: { delay: 2, duration: 0.8 },
          y: { delay: 2, duration: 0.8 }
        }}
      >
        <motion.div
          className="flex flex-col items-center gap-2 cursor-pointer group"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <div className="w-6 h-10 border-2 border-blue-400/40 rounded-full flex justify-center backdrop-blur-sm bg-blue-950/20 group-hover:border-blue-400/60 transition-colors">
            <motion.div 
              className="w-1.5 h-3 bg-blue-400/80 rounded-full mt-2"
              animate={{ 
                y: [0, 12, 0],
                opacity: [1, 0.3, 1],
              }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            />
          </div>
          <span className="text-xs text-blue-300/50 font-light tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
            Scroll
          </span>
        </motion.div>
      </motion.div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
