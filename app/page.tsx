'use client';

import { useState } from 'react';
import LoadingScreen from '@/src/components/LoadingScreen';
import Navbar from '@/src/components/Navbar';
import HeroSection from '@/src/components/HeroSection';
import MemoryRow from '@/src/components/MemoryRow';
import MemoryModal from '@/src/components/MemoryModal';
import Timeline from '@/src/components/Timeline';
import Gallery from '@/src/components/Gallery';
import StatsSection from '@/src/components/StatsSection';
import CastCredits from '@/src/components/CastCredits';
import Footer from '@/src/components/Footer';
import FloatingParticles from '@/src/components/FloatingParticles';
import { siteConfig, type Memory } from '@/src/config/siteConfig';

export default function Home() {
  const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null);

  return (
    <>
      <LoadingScreen />
      <FloatingParticles />
      <Navbar />

      <main className="relative z-10">
        {/* Hero */}
        <HeroSection />

        {/* Memory Rows */}
        <div id="memories" className="-mt-16 relative z-20">
          {siteConfig.categories.map((category) => (
            <MemoryRow
              key={category.id}
              title={category.title}
              memories={category.memories}
              onSelectMemory={setSelectedMemory}
            />
          ))}
        </div>

        {/* Divider */}
        <div className="mx-auto my-8 h-[1px] max-w-6xl bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />

        {/* Timeline */}
        <Timeline />

        {/* Divider */}
        <div className="mx-auto my-8 h-[1px] max-w-6xl bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />

        {/* Stats */}
        <StatsSection />

        {/* Gallery */}
        <Gallery />

        {/* Divider */}
        <div className="mx-auto my-8 h-[1px] max-w-6xl bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />

        {/* Cast & Credits */}
        <CastCredits />
      </main>

      <Footer />

      {/* Memory Modal */}
      <MemoryModal memory={selectedMemory} onClose={() => setSelectedMemory(null)} />
    </>
  );
}
