'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '@/src/config/siteConfig';
import { useCountUp } from '@/src/hooks/useCountUp';

function StatCard({ stat, index }: { stat: (typeof siteConfig.stats)[number]; index: number }) {
  const { count, ref } = useCountUp(stat.value, 2500);

  return (
    <motion.div
      ref={ref}
      className="group relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/60 p-6 text-center backdrop-blur-md transition-all hover:border-red-900/50"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8, scale: 1.03 }}
    >
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-red-600/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

      <motion.span
        className="mb-3 block text-4xl"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 + index * 0.1, type: 'spring', stiffness: 200 }}
      >
        {stat.icon}
      </motion.span>
      <div className="text-3xl font-extrabold text-white md:text-4xl">
        {count.toLocaleString()}
        <span className="text-red-500">{stat.suffix}</span>
      </div>
      <p className="mt-2 text-sm font-medium text-neutral-400">{stat.label}</p>
    </motion.div>
  );
}

export default function StatsSection() {
  const { stats } = siteConfig;

  return (
    <section id="stats" className="relative py-20 md:py-32">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 md:px-8">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
            By The Numbers
          </h2>
          <h3 className="mt-3 text-3xl font-bold text-white md:text-5xl">
            Our Love in Stats
          </h3>
          <div className="mx-auto mt-4 h-[2px] w-20 bg-gradient-to-r from-transparent via-red-600 to-transparent" />
        </motion.div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-6">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
