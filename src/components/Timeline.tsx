'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '@/src/config/siteConfig';

export default function Timeline() {
  const { timeline } = siteConfig;

  return (
    <section id="timeline" className="relative py-20 md:py-32">
      {/* Section Title */}
      <motion.div
        className="mb-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
          The Journey So Far
        </h2>
        <h3 className="mt-3 text-3xl font-bold text-white md:text-5xl">
          Our Timeline
        </h3>
        <div className="mx-auto mt-4 h-[2px] w-20 bg-gradient-to-r from-transparent via-red-600 to-transparent" />
      </motion.div>

      <div className="mx-auto max-w-4xl px-4 md:px-8">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-red-600/50 via-red-600/30 to-transparent md:left-1/2 md:-translate-x-[1px]" />

          {timeline.map((event, index) => (
            <motion.div
              key={index}
              className={`relative mb-12 flex flex-col md:mb-16 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Dot */}
              <div className="absolute left-4 top-0 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-2 border-red-600 bg-neutral-900 text-sm md:left-1/2">
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, type: 'spring' }}
                >
                  {event.icon}
                </motion.span>
              </div>

              {/* Card */}
              <div
                className={`ml-12 w-full md:ml-0 md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'
                }`}
              >
                <motion.div
                  className="rounded-xl border border-neutral-800 bg-neutral-900/80 p-5 backdrop-blur-sm transition-all hover:border-red-900/50 hover:bg-neutral-800/80"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <span className="inline-block rounded-full bg-red-600/20 px-3 py-1 text-xs font-semibold text-red-400">
                    {event.season}
                  </span>
                  <p className="mt-2 text-xs text-neutral-500">
                    {new Date(event.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </p>
                  <h4 className="mt-2 text-lg font-bold text-white">{event.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-400">{event.description}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
