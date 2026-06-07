'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <motion.div className="relative flex flex-col items-center">
            <motion.svg
              width="120"
              height="120"
              viewBox="0 0 120 120"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <motion.path
                d="M60 100 C60 100, 10 65, 10 35 C10 15, 30 5, 45 15 C52 20, 57 28, 60 35 C63 28, 68 20, 75 15 C90 5, 110 15, 110 35 C110 65, 60 100, 60 100Z"
                fill="none"
                stroke="#E50914"
                strokeWidth="3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.3 }}
              />
              <motion.path
                d="M60 100 C60 100, 10 65, 10 35 C10 15, 30 5, 45 15 C52 20, 57 28, 60 35 C63 28, 68 20, 75 15 C90 5, 110 15, 110 35 C110 65, 60 100, 60 100Z"
                fill="#E50914"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.8 }}
              />
            </motion.svg>

            <motion.div
              className="mt-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <h1 className="text-2xl font-bold tracking-[0.3em] text-white">
                OUR STORY
              </h1>
              <motion.div
                className="mt-2 h-[2px] bg-gradient-to-r from-transparent via-red-600 to-transparent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.6, duration: 0.8 }}
              />
            </motion.div>

            <motion.div className="absolute -bottom-12 h-[3px] w-32 overflow-hidden rounded-full bg-neutral-800">
              <motion.div
                className="h-full rounded-full bg-red-600"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 2.5, ease: 'easeInOut' }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
