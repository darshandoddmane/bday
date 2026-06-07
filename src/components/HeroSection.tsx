'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { siteConfig } from '@/src/config/siteConfig';

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const { hero } = siteConfig;

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted={isMuted}
          playsInline
          poster={hero.fallbackImage}
        >
          <source src={hero.videoUrl} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-red-950/40 via-black/60 to-purple-950/30" />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-red-500/30"
            style={{
              left: `${(i * 5.3) % 100}%`,
              top: `${(i * 7.1) % 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 0.8, 0],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 4 + (i % 5),
              repeat: Infinity,
              delay: i * 0.3,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-end pb-[15vh] md:items-center md:pb-0">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
          <div className="max-w-2xl">
            {/* Netflix badge */}
            <motion.div
              className="mb-4 flex items-center gap-3"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <span className="flex items-center gap-1.5 text-sm font-semibold tracking-wider text-neutral-400">
                <svg width="20" height="20" viewBox="0 0 120 120" className="text-red-600">
                  <path
                    d="M60 100 C60 100, 10 65, 10 35 C10 15, 30 5, 45 15 C52 20, 57 28, 60 35 C63 28, 68 20, 75 15 C90 5, 110 15, 110 35 C110 65, 60 100, 60 100Z"
                    fill="currentColor"
                  />
                </svg>
                {hero.subtitle}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              className="mb-4 text-5xl font-extrabold leading-tight text-white md:text-7xl lg:text-8xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8, ease: 'easeOut' }}
              style={{ textShadow: '0 4px 30px rgba(0,0,0,0.5)' }}
            >
              {hero.title}
            </motion.h1>

            {/* Meta info */}
            <motion.div
              className="mb-4 flex flex-wrap items-center gap-2 text-sm text-neutral-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0 }}
            >
              <span className="font-bold text-green-500">{hero.match}</span>
              <span className="text-neutral-600">|</span>
              <span>{hero.year}</span>
              <span className="text-neutral-600">|</span>
              <span>{hero.seasons}</span>
              <span className="text-neutral-600">|</span>
              <span className="rounded border border-neutral-500 px-1.5 py-0.5 text-xs">
                {hero.rating}
              </span>
              <span className="text-neutral-600">|</span>
              <span className="flex items-center gap-1">
                <svg className="h-4 w-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                HD
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              className="mb-6 max-w-lg text-base leading-relaxed text-neutral-300 md:text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              {hero.description}
            </motion.p>

            {/* Tags */}
            <motion.div
              className="mb-6 flex flex-wrap gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
            >
              {hero.tags.map((tag, i) => (
                <span
                  key={tag}
                  className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-neutral-300 backdrop-blur-sm"
                >
                  {i > 0 && <span className="mr-2 text-red-500">•</span>}
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.5 }}
            >
              <motion.button
                className="flex items-center gap-2 rounded-md bg-white px-6 py-2.5 text-base font-bold text-black transition-colors hover:bg-white/80 md:px-8 md:py-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const el = document.querySelector('#memories');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
                Play Our Story
              </motion.button>

              <motion.button
                className="flex items-center gap-2 rounded-md bg-neutral-700/80 px-6 py-2.5 text-base font-bold text-white transition-colors hover:bg-neutral-600/80 md:px-8 md:py-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const el = document.querySelector('#timeline');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                More Info
              </motion.button>

              {/* Mute/Unmute */}
              <motion.button
                className="ml-auto flex h-10 w-10 items-center justify-center rounded-full border border-neutral-500 text-white transition-colors hover:bg-white/10 md:h-12 md:w-12"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMuted(!isMuted)}
                aria-label={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? (
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                  </svg>
                ) : (
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  </svg>
                )}
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#141414] to-transparent" />

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <svg className="h-6 w-6 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
}
