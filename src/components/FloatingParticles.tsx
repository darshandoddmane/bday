'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';

export default function FloatingParticles() {
  const particles = useMemo(() => {
    return Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      x: (i * 3.7) % 100,
      y: (i * 5.3) % 100,
      size: 1 + (i % 3),
      duration: 8 + (i % 12),
      delay: (i * 0.4) % 8,
      isHeart: i % 4 === 0,
    }));
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -200, -400],
            x: [0, (p.id % 2 === 0 ? 30 : -30), (p.id % 3 === 0 ? 20 : -20)],
            opacity: [0, 0.6, 0],
            scale: [0.5, 1.2, 0.3],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
        >
          {p.isHeart ? (
            <span className="text-red-500/20 text-xs">♥</span>
          ) : (
            <div className="rounded-full bg-red-500/15" style={{ width: p.size, height: p.size }} />
          )}
        </motion.div>
      ))}
    </div>
  );
}
