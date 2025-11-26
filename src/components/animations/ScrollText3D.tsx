import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollText3DProps {
  children: string;
  className?: string;
}

export const ScrollText3D = ({ children, className = "" }: ScrollText3DProps) => {
  const textRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current || !containerRef.current) return;

    // Split text into sentences/lines for progressive reveal
    const sentences = children.split(/\.(?=\s|$)/).filter(s => s.trim());
    
    const wrappedText = sentences.map((sentence, sentenceIndex) => {
      const words = sentence.trim().split(' ');
      const wrappedWords = words.map((word, wordIndex) => 
        `<span class="word-3d" style="display: inline-block; perspective: 1000px;">
          <span style="display: inline-block; transform-style: preserve-3d;">${word}</span>
        </span>${wordIndex < words.length - 1 ? ' ' : ''}`
      ).join('');
      return `<div class="sentence-line" data-line="${sentenceIndex}">${wrappedWords}${sentenceIndex < sentences.length - 1 ? '.' : ''}</div>`;
    }).join('');
    
    textRef.current.innerHTML = wrappedText;

    const sentenceElements = textRef.current.querySelectorAll('.sentence-line');
    const allWordElements = textRef.current.querySelectorAll('.word-3d span');

    // Initial state - hide all lines except the first
    sentenceElements.forEach((line, index) => {
      if (index > 0) {
        gsap.set(line, { opacity: 0, height: 0, overflow: 'hidden', marginTop: 0 });
      }
    });

    // Set initial 3D state for all words
    gsap.set(allWordElements, {
      rotateX: 0,
      y: 0,
      transformOrigin: 'center center',
    });

    // Create pinned scroll-triggered animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: `+=${window.innerHeight * sentences.length}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      }
    });

    // Animate each sentence line progressively
    sentenceElements.forEach((line, index) => {
      if (index > 0) {
        const words = line.querySelectorAll('.word-3d span');
        
        tl.to(line, {
          opacity: 1,
          height: 'auto',
          marginTop: '0.5rem',
          duration: 0.3,
          ease: 'power2.out',
        }, index * 0.8);

        gsap.set(words, {
          rotateX: 90,
          y: 30,
          opacity: 0,
        });
        
        tl.to(words, {
          rotateX: 0,
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: {
            each: 0.03,
            from: 'start',
          },
          ease: 'power3.out',
        }, index * 0.8 + 0.1);
      }
    });

    // Add hover effect for each word
    allWordElements.forEach((word) => {
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

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [children]);

  return (
    <div 
      ref={containerRef}
      style={{ perspective: '1000px' }}
      className="relative min-h-screen flex items-center justify-center"
    >
      <div
        ref={textRef}
        className={className}
        style={{ transformStyle: 'preserve-3d' }}
      />
    </div>
  );
};
