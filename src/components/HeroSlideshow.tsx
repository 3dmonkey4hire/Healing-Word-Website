'use client';

import { useEffect, useState } from 'react';

const images = [
  '/images/hero-background.jpg',
  '/images/hero-2.jpg',
  '/images/hero-3.jpg',
];

const INTERVAL_MS = 7000;   // how long each image shows
const FADE_DURATION = 1500; // CSS transition duration in ms

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {images.map((src, i) => (
        <div
          key={src}
          aria-hidden="true"
          className="absolute inset-0 bg-no-repeat"
          style={{
            backgroundImage: `url('${src}')`,
            backgroundSize: '100% auto',
            backgroundPosition: 'center top',
            opacity: i === current ? 1 : 0,
            transition: `opacity ${FADE_DURATION}ms ease-in-out`,
          }}
        />
      ))}
      {/* Dark gradient overlay — always on top of the images */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, rgba(27,67,50,0.62) 0%, rgba(45,106,79,0.50) 100%)',
        }}
      />
    </>
  );
}
