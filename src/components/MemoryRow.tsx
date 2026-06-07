'use client';

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import MemoryCard from './MemoryCard';
import type { Memory } from '@/src/config/siteConfig';

interface MemoryRowProps {
  title: string;
  memories: Memory[];
  onSelectMemory: (memory: Memory) => void;
}

export default function MemoryRow({ title, memories, onSelectMemory }: MemoryRowProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.8;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
    setTimeout(checkScroll, 400);
  };

  return (
    <motion.section
      className="relative py-6 md:py-8"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="mb-3 px-4 text-lg font-bold text-white md:px-8 md:text-xl lg:text-2xl">
        {title}
      </h2>

      <div className="group/row relative">
        {canScrollLeft && (
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-0 z-20 flex h-full w-12 items-center justify-center bg-gradient-to-r from-black/80 to-transparent opacity-0 transition-opacity group-hover/row:opacity-100"
            aria-label="Scroll left"
          >
            <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        <div
          ref={scrollRef}
          className="flex gap-2 overflow-x-auto px-4 pb-4 md:px-8"
          onScroll={checkScroll}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {memories.map((memory, index) => (
            <MemoryCard
              key={memory.id}
              memory={memory}
              index={index}
              onSelect={onSelectMemory}
            />
          ))}
        </div>

        {canScrollRight && (
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-0 z-20 flex h-full w-12 items-center justify-center bg-gradient-to-l from-black/80 to-transparent opacity-0 transition-opacity group-hover/row:opacity-100"
            aria-label="Scroll right"
          >
            <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>
    </motion.section>
  );
}
