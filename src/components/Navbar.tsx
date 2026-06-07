'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useScrollPosition } from '@/src/hooks/useScrollPosition';
import { siteConfig } from '@/src/config/siteConfig';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Memories', href: '#memories' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Our Stats', href: '#stats' },
  { label: 'Cast & Credits', href: '#credits' },
];

export default function Navbar() {
  const { isScrolled } = useScrollPosition();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-black/95 shadow-lg shadow-black/50 backdrop-blur-md'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-[68px] md:px-8">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('#hero')}
          >
            <svg width="32" height="32" viewBox="0 0 120 120" className="text-red-600">
              <path
                d="M60 100 C60 100, 10 65, 10 35 C10 15, 30 5, 45 15 C52 20, 57 28, 60 35 C63 28, 68 20, 75 15 C90 5, 110 15, 110 35 C110 65, 60 100, 60 100Z"
                fill="currentColor"
              />
            </svg>
            <span className="text-lg font-bold tracking-wider text-white">
              {siteConfig.couple.person1.name} & {siteConfig.couple.person2.name}
            </span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <motion.button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-medium text-neutral-300 transition-colors hover:text-white"
                whileHover={{ y: -2 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {link.label}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="flex flex-col gap-1.5 md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              className="block h-[2px] w-6 bg-white"
              animate={mobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            />
            <motion.span
              className="block h-[2px] w-6 bg-white"
              animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            />
            <motion.span
              className="block h-[2px] w-6 bg-white"
              animate={mobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        className="fixed inset-0 z-40 bg-black/98 backdrop-blur-xl md:hidden"
        initial={false}
        animate={
          mobileMenuOpen
            ? { opacity: 1, pointerEvents: 'auto' as const }
            : { opacity: 0, pointerEvents: 'none' as const }
        }
        transition={{ duration: 0.3 }}
      >
        <div className="flex h-full flex-col items-center justify-center gap-8">
          {navLinks.map((link, i) => (
            <motion.button
              key={link.label}
              onClick={() => scrollToSection(link.href)}
              className="text-2xl font-semibold text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={
                mobileMenuOpen
                  ? { opacity: 1, y: 0, transition: { delay: i * 0.1 } }
                  : { opacity: 0, y: 20 }
              }
            >
              {link.label}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </>
  );
}
