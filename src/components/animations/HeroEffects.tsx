import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

interface LightStreak {
  x: number;
  y: number;
  length: number;
  angle: number;
  opacity: number;
  speed: number;
}

export const HeroEffects = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const holographicOpacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 0]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize particles
    const particles: Particle[] = [];
    const particleCount = 80;
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: Math.random() * 0.2 + 0.1,
        opacity: Math.random() * 0.5 + 0.2
      });
    }

    // Initialize light streaks
    const lightStreaks: LightStreak[] = [];
    const streakCount = 5;
    for (let i = 0; i < streakCount; i++) {
      lightStreaks.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: Math.random() * 100 + 50,
        angle: Math.random() * Math.PI / 4 - Math.PI / 8,
        opacity: Math.random() * 0.3 + 0.1,
        speed: Math.random() * 0.5 + 0.2
      });
    }

    // Animation loop
    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw volumetric light rays
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, 
        canvas.height / 3, 
        0,
        canvas.width / 2, 
        canvas.height / 3, 
        canvas.width / 2
      );
      gradient.addColorStop(0, 'rgba(200, 100, 255, 0.08)');
      gradient.addColorStop(0.5, 'rgba(100, 150, 255, 0.04)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw and update particles
      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
        ctx.fill();

        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y > canvas.height) {
          particle.y = 0;
          particle.x = Math.random() * canvas.width;
        }
      });

      // Draw and update light streaks
      lightStreaks.forEach(streak => {
        ctx.save();
        ctx.translate(streak.x, streak.y);
        ctx.rotate(streak.angle);

        const streakGradient = ctx.createLinearGradient(0, 0, streak.length, 0);
        streakGradient.addColorStop(0, `rgba(150, 100, 255, 0)`);
        streakGradient.addColorStop(0.5, `rgba(200, 150, 255, ${streak.opacity})`);
        streakGradient.addColorStop(1, `rgba(150, 100, 255, 0)`);

        ctx.strokeStyle = streakGradient;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(streak.length, 0);
        ctx.stroke();

        ctx.restore();

        // Update position
        streak.x += Math.cos(streak.angle) * streak.speed;
        streak.y += Math.sin(streak.angle) * streak.speed;

        // Wrap around screen
        if (streak.x < -100) streak.x = canvas.width + 100;
        if (streak.x > canvas.width + 100) streak.x = -100;
        if (streak.y < -100) streak.y = canvas.height + 100;
        if (streak.y > canvas.height + 100) streak.y = -100;
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none">
      {/* Canvas for particles and light streaks */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-70"
        style={{ mixBlendMode: 'screen' }}
      />

      {/* Holographic overlay effects */}
      <motion.div
        className="absolute inset-0"
        style={{ opacity: holographicOpacity }}
      >
        {/* Holographic grid */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(150, 100, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(100, 150, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'gridSlide 20s linear infinite'
          }}
        />

        {/* Digital pixel transition effect */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                boxShadow: '0 0 10px rgba(150, 100, 255, 0.8)'
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 0.8, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Holographic shards */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`shard-${i}`}
            className="absolute"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 2) * 30}%`,
              width: '80px',
              height: '80px',
              background: 'linear-gradient(135deg, rgba(150, 100, 255, 0.1), rgba(100, 150, 255, 0.1))',
              border: '1px solid rgba(200, 150, 255, 0.2)',
              transform: `rotate(${i * 15}deg)`,
              backdropFilter: 'blur(2px)'
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3],
              rotate: [i * 15, i * 15 + 10, i * 15]
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        ))}
      </motion.div>

      {/* Lens flare effect */}
      <motion.div
        className="absolute"
        style={{
          top: '20%',
          left: '60%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(200, 150, 255, 0.15) 0%, transparent 70%)',
          filter: 'blur(40px)',
          pointerEvents: 'none'
        }}
        animate={{
          x: [-50, 50, -50],
          y: [-30, 30, -30],
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <style>{`
        @keyframes gridSlide {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>
    </div>
  );
};
