'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '@/src/config/siteConfig';

export default function CastCredits() {
  const { credits } = siteConfig;

  return (
    <section id="credits" className="relative py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
            brought to you by
          </h2>
          <h3 className="mt-3 text-3xl font-bold text-white md:text-5xl">
             Credits
          </h3>
          <div className="mx-auto mt-4 h-[2px] w-20 bg-gradient-to-r from-transparent via-red-600 to-transparent" />
        </motion.div>

       

        {/* Credits */}
        <motion.div
          className="mx-auto max-w-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="mb-10 text-center text-2xl font-bold text-white">Credits</h3>
          <div className="space-y-6">
            {credits.map((credit, index) => (
              <motion.div
                key={credit.role}
                className="flex items-center justify-between border-b border-neutral-800 pb-4"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <span className="text-sm font-medium text-neutral-500">{credit.role}</span>
                <span className="text-sm font-semibold text-white">{credit.name}</span>
              </motion.div>
            ))}
          </div>

          {/* End card */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border-2 border-red-600/50 bg-red-600/10">
              <svg width="40" height="40" viewBox="0 0 120 120" className="text-red-600">
                <path
                  d="M60 100 C60 100, 10 65, 10 35 C10 15, 30 5, 45 15 C52 20, 57 28, 60 35 C63 28, 68 20, 75 15 C90 5, 110 15, 110 35 C110 65, 60 100, 60 100Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <p className="text-xl font-bold text-white">And the story continues...</p>
            <p className="mt-2 text-sm text-neutral-400">New episodes dropping every single day</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
