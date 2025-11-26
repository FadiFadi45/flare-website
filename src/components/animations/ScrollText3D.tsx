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

    const text = children;
    const sentences = text.split('. ');
    const firstLine = sentences[0] + '.';
    const restOfText = sentences.slice(1).join('. ');
    
    const allWords = text.split(' ');
    const firstLineWords = firstLine.split(' ');
    const firstLineWordCount = firstLineWords.length;

    const wrappedText = allWords.map((word, index) => {
      const isFirstLine = index < firstLineWordCount;
      return `<span class="word-3d ${isFirstLine ? 'first-line' : 'rest-line'}" style="display: inline-block; perspective: 1000px;">
        <span style="display: inline-block; transform-style: preserve-3d;">${word}</span>
      </span>${index < allWords.length - 1 ? ' ' : ''}`;
    }).join('');
    
    textRef.current.innerHTML = wrappedText;

    const wordElements = textRef.current.querySelectorAll('.word-3d span');
    const firstLineElements = textRef.current.querySelectorAll('.first-line span');
    const restLineElements = textRef.current.querySelectorAll('.rest-line span');

    // Initial state - show first line, hide rest
    gsap.set(firstLineElements, {
      opacity: 1,
      rotateX: 0,
      y: 0,
      transformOrigin: 'center center',
    });

    gsap.set(restLineElements, {
      opacity: 0,
      rotateX: -90,
      y: 50,
      transformOrigin: 'center center',
    });

    // Create pinned scroll-triggered animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 30%',
        end: `+=${restLineElements.length * 50}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      }
    });

    tl.to(restLineElements, {
      opacity: 1,
      rotateX: 0,
      y: 0,
      duration: 1,
      stagger: {
        each: 0.03,
        from: 'start',
      },
      ease: 'power2.out',
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

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [children]);

  return (
    <div 
      ref={containerRef}
      style={{ perspective: '1000px' }}
      className="relative min-h-[300px]"
    >
      <p
        ref={textRef}
        className={className}
        style={{ transformStyle: 'preserve-3d' }}
      />
    </div>
  );
};
