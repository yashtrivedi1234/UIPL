'use client';

import React from 'react';
import Lenis from '@studio-freight/lenis';

import { cn } from '@/lib/utils';
import { ZoomParallax } from '@/components/ui/zoom-parallax';
import projectImage1 from '@/assets/project/unnamed.png';
import projectImage2 from '@/assets/project/unnamed (1).png';
import projectImage3 from '@/assets/project/unnamed (2).png';
import projectImage4 from '@/assets/project/unnamed (3).png';
import projectImage5 from '@/assets/project/unnamed (4).png';
import projectImage6 from '@/assets/project/unnamed (5).png';
import projectImage7 from '@/assets/project/unnamed (6).png';

export default function ProjectShowcase() {
  React.useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const images = [
    {
      src: projectImage1,
      alt: 'Modern architecture building',
    },
    {
      src: projectImage2,
      alt: 'Urban cityscape at sunset',
    },
    {
      src: projectImage3,
      alt: 'Abstract geometric pattern',
    },
    {
      src: projectImage4,
      alt: 'Mountain landscape',
    },
    {
      src: projectImage5,
      alt: 'Minimalist design elements',
    },
    {
      src: projectImage6,
      alt: 'Ocean waves and beach',
    },
    {
      src: projectImage7,
      alt: 'Forest trees and sunlight',
    },
  ];

  return (
    <main className="min-h-screen w-full">
      <div className="relative flex h-[14vh] items-center justify-center">
        <div
          aria-hidden="true"
          className={cn(
            'pointer-events-none absolute -top-1/2 left-1/2 h-[120vmin] w-[120vmin] -translate-x-1/2 rounded-full',
            'bg-[radial-gradient(ellipse_at_center,--theme(--color-foreground/.1),transparent_50%)]',
            'blur-[30px]'
          )}
        />
        <h2 className="text-center text-4xl font-bold">Pioneering Lucknow's Skyline</h2>
      </div>
      <ZoomParallax images={images} />
      <div className="h-[20vh]" />
    </main>
  );
}
