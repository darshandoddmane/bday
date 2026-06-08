'use client';

import { motion, AnimatePresence } from 'framer-motion';
import type { Memory } from '@/src/config/siteConfig';

interface MemoryModalProps {
  memory: Memory | null;
  onClose: () => void;
}

export default function MemoryModal({ memory, onClose }: MemoryModalProps) {
  return (
    <AnimatePresence>
      {memory && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
          <motion.div
            className="relative z-10 w-full max-w-2xl overflow-hidden rounded-xl bg-neutral-900 shadow-2xl shadow-black/60"
            initial={{ scale: 0.8, y: 50, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.8, y: 50, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {/* Close */}
            <motion.button
              className="absolute top-4 right-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-neutral-800/80 text-white transition-colors hover:bg-neutral-700"
              onClick={onClose}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Close"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>

            {/* Hero Image */}
            <div className="relative aspect-video w-full overflow-hidden bg-neutral-800">
              <img
                src={memory.image}
                alt={memory.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent" />

              {memory.type as string=== 'video' && (
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.div
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm"
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.3)' }}
                  >
                    <svg className="h-8 w-8 ml-1 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </motion.div>
                </motion.div>
              )}
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="mb-3 flex items-center gap-3">
                <span className="text-sm font-bold text-green-500">{memory.rating}</span>
                <span className="text-sm text-neutral-400">{memory.date}</span>
                <span className="text-sm text-neutral-400">{memory.duration}</span>
                <span className="rounded border border-neutral-600 px-1.5 py-0.5 text-[10px] text-neutral-400">
                  {memory.type as string === 'video' ? 'VIDEO' : 'PHOTO'}
                </span>
              </div>

              <h2 className="mb-3 text-2xl font-bold text-white">{memory.title}</h2>
              <p className="text-base leading-relaxed text-neutral-300">{memory.description}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                <motion.button
                  className="flex items-center gap-2 rounded-md bg-white px-6 py-2.5 text-sm font-bold text-black"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                  Relive This Memory
                </motion.button>
                <motion.button
                  className="flex items-center gap-2 rounded-md bg-neutral-700 px-6 py-2.5 text-sm font-bold text-white"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgb(82,82,82)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  Add to Favorites
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
