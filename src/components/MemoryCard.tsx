'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import type { Memory } from '@/src/config/siteConfig';

interface MemoryCardProps {
  memory: Memory;
  index: number;
  onSelect: (memory: Memory) => void;
}

export default function MemoryCard({ memory, index, onSelect }: MemoryCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative flex-shrink-0 cursor-pointer"
      style={{ width: 'clamp(200px, 22vw, 300px)' }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onSelect(memory)}
    >
      <motion.div
        className="relative overflow-hidden rounded-md"
        animate={isHovered ? { scale: 1.15, zIndex: 30 } : { scale: 1, zIndex: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      >
        {/* Image */}
        <div className="relative aspect-video w-full overflow-hidden bg-neutral-800">
          <img
            src={memory.image}
            alt={memory.title}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              target.parentElement!.style.background = `linear-gradient(${135 + index * 20}deg, hsl(${(index * 40) % 360}, 60%, 20%), hsl(${(index * 40 + 60) % 360}, 40%, 10%))`;
            }}
          />
          {(memory.type as any) === 'video' && (
            <div className="absolute top-2 right-2 rounded bg-red-600 px-1.5 py-0.5 text-[10px] font-bold text-white">
              VIDEO
            </div>
          )}
        </div>

        {/* Progress bar */}
        {'progress' in memory && typeof memory.progress === 'number' && (
          <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-neutral-700">
            <div className="h-full bg-red-600" style={{ width: `${memory.progress}%` }} />
          </div>
        )}

        {/* Hover info */}
        <motion.div
          className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/90 to-transparent p-3"
          initial={{ opacity: 0 }}
          animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <h3 className="text-sm font-bold text-white">{memory.title}</h3>
          <div className="mt-1 flex items-center gap-2 text-[11px] text-neutral-400">
            <span className="text-green-500 font-semibold">{memory.rating}</span>
            <span>{memory.duration}</span>
          </div>
          <p className="mt-1 line-clamp-2 text-[11px] text-neutral-400">{memory.description}</p>

          <div className="mt-2 flex items-center gap-2">
            <motion.button
              className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-black"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Play"
            >
              <svg className="h-3.5 w-3.5 ml-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
            </motion.button>
            <motion.button
              className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-neutral-500 text-white"
              whileHover={{ scale: 1.15, borderColor: '#fff' }}
              whileTap={{ scale: 0.9 }}
              aria-label="Add to list"
            >
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </motion.button>
            <motion.button
              className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-neutral-500 text-white"
              whileHover={{ scale: 1.15, borderColor: '#fff' }}
              whileTap={{ scale: 0.9 }}
              aria-label="Like"
            >
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
              </svg>
            </motion.button>
            <motion.button
              className="ml-auto flex h-7 w-7 items-center justify-center rounded-full border-2 border-neutral-500 text-white"
              whileHover={{ scale: 1.15, borderColor: '#fff' }}
              whileTap={{ scale: 0.9 }}
              aria-label="More info"
            >
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
