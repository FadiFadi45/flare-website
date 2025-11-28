import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollText3DProps {
  children: string;
  className?: string;
}

export const ScrollText3D = ({ children, className = "" }: ScrollText3DProps) => {
  const textRef = useRef<HTMLParagraphElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current || !containerRef.current) return;

    // Use requestAnimationFrame to batch DOM operations
    requestAnimationFrame(() => {
      if (!textRef.current || !containerRef.current) return;

      const words = children.split(' ');
      const wrappedText = words.map((word, index) => 
        `<span class="word-3d" style="display: inline-block; perspective: 1000px; opacity: 0; transform: rotateX(-90deg) translateY(50px); transform-origin: center center; will-change: transform, opacity;">
          <span style="display: inline-block; transform-style: preserve-3d;">${word}</span>
        </span>${index < words.length - 1 ? ' ' : ''}`
      ).join('');
      
      textRef.current.innerHTML = wrappedText;

      // Batch DOM reads after writes complete
      requestAnimationFrame(() => {
        if (!textRef.current || !containerRef.current) return;
        
        const wordElements = textRef.current.querySelectorAll('.word-3d');

        // Create scroll-triggered animation
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: 1,
            toggleActions: 'play none none reverse',
          }
        });

        tl.to(wordElements, {
          opacity: 1,
          rotateX: 0,
          y: 0,
          duration: 1,
          stagger: {
            each: 0.05,
            from: 'start',
          },
          ease: 'power3.out',
        });

        // Add hover effect for each word
        wordElements.forEach((word) => {
          const element = word as HTMLElement;
          element.addEventListener('mouseenter', () => {
            gsap.to(element, {
              rotateY: 10,
              z: 20,
              duration: 0.3,
              ease: 'power2.out',
            });
          });

          element.addEventListener('mouseleave', () => {
            gsap.to(element, {
              rotateY: 0,
              z: 0,
              duration: 0.3,
              ease: 'power2.out',
            });
          });
        });
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [children]);

  return (
    <div 
      ref={containerRef}
      style={{ perspective: '1000px' }}
      className="relative"
    >
      <p
        ref={textRef}
        className={className}
        style={{ transformStyle: 'preserve-3d' }}
      />
    </div>
  );
};
