'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { siteConfig } from '@/src/config/siteConfig';

export default function Gallery() {
  const { gallery } = siteConfig;
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="relative py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
            Behind The Scenes
          </h2>
          <h3 className="mt-3 text-3xl font-bold text-white md:text-5xl">
            Photo Gallery
          </h3>
          <div className="mx-auto mt-4 h-[2px] w-20 bg-gradient-to-r from-transparent via-red-600 to-transparent" />
        </motion.div>

        {/* Masonry grid */}
        <div className="columns-2 gap-3 space-y-3 md:columns-3 lg:columns-4">
          {gallery.map((image, index) => (
            <motion.div
              key={index}
              className="group relative cursor-pointer overflow-hidden rounded-lg break-inside-avoid"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              onClick={() => setSelectedImage(index)}
              whileHover={{ scale: 1.02 }}
            >
              <div
                className="w-full overflow-hidden"
                style={{
                  aspectRatio:
                    image.span === 'tall' ? '3/4' : image.span === 'wide' ? '16/9' : '4/3',
                }}
              >
                <img
                  src={image.src}
                  alt={image.alt ??" "}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/30" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                <div className="rounded-full bg-white/20 p-3 backdrop-blur-sm">
                  <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-3 opacity-0 transition-opacity group-hover:opacity-100">
                <p className="text-xs font-medium text-white">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800/80 text-white"
              onClick={() => setSelectedImage(null)}
              whileHover={{ scale: 1.1 }}
              aria-label="Close"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>

            <button
              className="absolute left-4 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-neutral-800/60 text-white transition-colors hover:bg-neutral-700"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(selectedImage > 0 ? selectedImage - 1 : gallery.length - 1);
              }}
              aria-label="Previous"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              className="absolute right-4 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-neutral-800/60 text-white transition-colors hover:bg-neutral-700"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(selectedImage < gallery.length - 1 ? selectedImage + 1 : 0);
              }}
              aria-label="Next"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <motion.div
              key={selectedImage}
              className="relative max-h-[80vh] max-w-4xl overflow-hidden rounded-xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={gallery[selectedImage].src}
                alt={gallery[selectedImage].alt}
                className="h-[60vh] w-[80vw] max-w-4xl object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-lg font-medium text-white">{gallery[selectedImage].alt}</p>
                <p className="mt-1 text-sm text-neutral-400">
                  {selectedImage + 1} / {gallery.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
