// Site Configuration - Customize your Netflix-style relationship website
// Simply edit this file to personalize everything

export const siteConfig = {
  // Couple Information
  couple: {
    person1: {
      name: 'Nidhi',
      role: 'The Dreamer',
      avatar: '/images/1.jpg',
      bio: 'Hopeless romantic who believes in fairy tales and writes love letters at midnight.',
    },
    person2: {
      name: 'Darshan',
      role: 'The Adventurer',
      avatar: '/images/2.jpg',
      bio: 'Thrill seeker with a gentle soul, always planning the next great escape.',
    },
    birthday: '2026-06-10',
    hashtag: '#NidhiAndDarshan',
  },

  // Hero Section
  hero: {
    title: 'When Two Souls Met',
    subtitle: 'Birthday Special: A Journey of Love, Laughter, and Unforgettable Memories',
    description: 'Two souls destined to find each other in a world of billions. This is the story of how a chance encounter turned into a lifetime of adventures, laughter, and unwavering love.',
    rating: 'TV-MA',
    year: '2026',
    seasons: '4 Seasons',
    match: '100% Match',
    tags: ['Romance', 'Adventure', 'Comedy', 'Drama', 'Heartwarming'],
    videoUrl: '/videos/hero-bg.mp4',
    fallbackImage: '/images/hero-fallback.jpg',
  },

  // Memory Categories (Netflix-style rows)
  categories: [
    {
      id: 'popular',
      title: 'Popular on Our Story',
      memories: [
        {
          id: 1,
          title: 'First Date Magic',
          description: 'The evening that started it all. Nervous laughter, shared desserts, and a walk under the stars that lasted until dawn.',
          image: '/images/memories/1.jpg',
          date: '2025-12-11',
          type: 'photo' as const,
          duration: '3h 45m',
          rating: '⭐ 10/10',
        },
        {
          id: 2,
          title: 'Sunrise Adventures',
          description: 'Chasing sunrise across the peaks, collecting moments that glow warmer than the golden hour.',
          image: '/images/memories/2.jpg',
          date: '2026-03-13',
          type: 'photo' as const,
          duration: '2h 30m',
          rating: '⭐ 10/10',
        },
        {
          id: 3,
          title: 'Mountain Escape',
          description: 'Reaching new heights together — literally and figuratively. The view from the top was nothing compared to the journey.',
          image: '/images/memories/3.jpg',
          date: '2026-02-10',
          type: 'photo' as const,
          duration: '6h 15m',
          rating: '⭐ 9.8/10',
        },
        {
          id: 4,
          title: 'Coffee & Cozy Nights',
          description: 'Some of the best memories happen when the world outside is grey. Hot coffee and deep conversations.',
          image: '/images/memories/4.jpg',
          date: '2026-01-22',
          type: 'photo' as const,
          duration: '8h',
          rating: '⭐ 10/10',
        },
        {
          id: 5,
          title: 'Screen Smiles',
          description: 'One screen,two smiles,countless emotions and a moment worth remembering forever.',
          image: '/images/memories/5.jpg',
          date: '2026-02-24',
          type: 'photo' as const,
          duration: '4h 20m',
          rating: '⭐ 9.7/10',
        },
         
        {
          id: 6,
          title: 'Beyond the road',
          description: 'With the wind in our hair and the open road ahead, every mile felt like a love letter to adventure.',
          image: '/images/memories/6.jpg',
          date: '2026-04-04',
          type: 'photo' as const,
          duration: '4h',
          rating: '⭐ 9.8/10',
        },
        
      ],
    },
    

    {
      id: 'trending',
      title: 'Trending Memories',
      memories: [
        {
          id: 7,
          title: 'Splash of Colors',
          description: 'Celebrating Holi with vibrant colors, joyful laughter, and unforgettable memories shared with friends.',
          image: '/images/memories/7.jpg',
          date: '2026-03-01',
          type: 'photo' as const,
          duration: '1m',
          rating: '⭐ 10/10',
        },
        {
          id: 8,
          title: 'Spotlight & Us',
          description: 'The runway shimmered with lights, but what truly stood out was us—walking side by side, carrying nervous smiles, proud hearts, and a connection that turned participation into a beautiful shared memory.',
          image: '/images/memories/8.jpg',
          date: '2026-05-13',
          type: 'photo' as const,
          duration: '7 days',
          rating: '⭐ 10/10',
        },
       
        {
          id: 9,
          title: 'Twinning Hearts',
          description: 'From our smiles to our style, everything felt perfectly aligned—as if we were written into the same story.',
          image: '/images/memories/9.jpg',
          date: '2026-03-27',
          type: 'photo' as const,
          duration: '5h',
          rating: '⭐ 9.9/10',
        },
        {
          id: 10,
          title: 'The day I saw you in a saree',
          description: 'The first time i saw you in a saree, time paused, hearts whispered and beauty suddenly had your.',
          image: '/images/memories/10.jpg',
          date: '2026-01-25',
          type: 'photo' as const,
          duration: '3h',
          rating: '⭐ 9.7/10',
        },
        {
          id: 11,
          title: 'The Day You Walked In',
          description: 'The day you stepped into my house, ordinary moments quietly transformed into memories I knew Id cherish.',
          image: '/images/memories/11.jpg',
          date: '2026-03-03',
          type: 'photo' as const,
          duration: 'Forever',
          rating: '⭐ 10/10',
        },
         {
          id: 12,
          title: 'Reflections on the water',
          description: 'The lake was calm and endless, yet I found my favorite view beside me.',
          image: '/images/memories/12.jpg',
          date: '2026-03-29',
          type: 'photo' as const,
          duration: '7 days',
          rating: '⭐ 10/10',
        },
        
        
      ],
    },
    {
      id: 'special',
      title: 'Special Moments ❤️',
      memories: [
        {
          id: 13,
          title: 'The Moment I Knew',
          description: 'I never believed a single person could change the way the world looked, until ypu. The first time i fell in love, it was not sudden, it was every little moment with you finding a permanent place in my heart',
          image: '/images/memories/13.jpg',
          date: '2026-02-08',
          type: 'photo' as const,
          duration: 'forever',
          rating: '⭐ ∞/10',
        },
         {
          id: 14,
          title: 'The Confession',
          description: 'With a heart full of fears, doubts, and silent hesitation, I still gathered the courage to speak. Beneath the sacred blessings of Shivratri, amidst prayers and faith, two hearts chose each other. What began as uncertainty transformed into a beautiful promise, as love and devotion intertwined under the watchful grace of the divine. 🕉️❤️✨',
          image: '/images/memories/14.jpg',
          date: '2026-02-14',
          type: 'photo' as const,
          duration: '∞',
          rating: '⭐ 100/10',
        },
         
      
        {
          id: 15,
          title: 'A Shade of Love',
          description: 'The red saree turned heads, but it was your effortless grace that made time stand still.',
          image: '/images/memories/15.jpg',
          date: '2026-05-14',
          type: 'photo' as const,
          duration: '∞',
          rating: '⭐ 10/10',
        },
        {
          id: 16,
          title: 'A Night to Remember',
          description: 'In the event of the college night, we found warmth in conversations, comfort in company, and beauty in simply being together.',
          image: '/images/memories/16.jpg',
          date: '2026-03-13',
          type: 'photo' as const,
          duration: '10',
          rating: '⭐ 9.9/10',
        },
        
        
      ],
    },
  ],

  // Timeline Milestones
  timeline: [
    {
      date: '2025-12-04',
      title: 'The Beginning',
      description: 'What began as a chance encounter slowly became a story neither of us saw coming.',
      icon: '💫',
      season: 'Season 1',
    },
    {
      date: '2025-12-25',
      title: 'Becoming Best Friends',
      description: 'Somewhere between endless conversations and shared laughter, strangers became inseparable best friends.',
      icon: '🫂',
      season: 'Season 1',
    },
    {
      date: '2026-01-24',
      title: 'Standing Together',
      description: 'Through every challenge and every celebration, we learned the strength of standing side by side.',
      icon: '🤝',
      season: 'Season 1',
    },
    {
      date: '2026-02-08',
      title: 'Temple Trip',
      description: 'What began as a simple temple trip became the turning point of my life. Amid sacred prayers and peaceful moments, my heart quietly discovered a love so beautiful that it would never be the same again.',
      icon: '🚗',
      season: 'Season 2',
    },
    {
      date: '2026-02-14',
      title: 'The Confession',
      description: 'One heartfelt conversation changed everything, turning friendship into the beginning of something beautiful.',
      icon: '👩🏼‍❤️‍👨🏼',
      season: 'Season 2',
    },
    {
      date: '2026-02-15',
      title: 'Shivarathri ',
      description: 'Under Shiva s divine blessings on Shivratri, two hearts became one, turning love into a lifelong promise.',
      icon: '🕉️',
      season: 'Season 2',
    },
    {
      date: '2026-02-17',
      title: 'Our Little Escapes',
      description: 'Every short ride became a little escape, every conversation a cherished memory, and every moment together felt like time slowing down just for us.',
      icon: '🏍️',
      season: 'Season 3',
    },
    {
      date: '2026-06-10',
      title: 'Endless Fun',
      description: 'From spontaneous adventures to countless laughs, every moment together became a memory worth keeping forever.',
      icon: '😘',
      season: 'Season 4',
    },
  ],

  // Statistics
  stats: [
    { label: 'Days Together', value: 186, icon: '❤️', suffix: '+' },
    { label: 'Memories Created', value: 9999, icon: '📸', suffix: '+' },
    { label: 'Trips Completed', value: 24, icon: '✈️', suffix: '' },
    { label: 'Movies Watched', value: 20, icon: '🎬', suffix: '+' },
    { label: 'Dinners ', value: 323, icon: '🍽️', suffix: '+' },
    { label: 'Hugs', value: 123, icon: '🫂', suffix: '' },
  ],

  // Gallery Images
  gallery: [
    { src: '/images/gallery/1.jpg',  span: 'tall' as const },
    { src: '/images/gallery/2.jpg',  span: 'normal' as const },
    { src: '/images/gallery/3.jpg',  span: 'wide' as const },
    { src: '/images/gallery/4.jpg',  span: 'normal' as const },
    { src: '/images/gallery/5.jpg',  span: 'tall' as const },
    { src: '/images/gallery/6.jpg',  span: 'normal' as const },
    { src: '/images/gallery/7.jpg',  span: 'wide' as const },
    { src: '/images/gallery/8.jpg',  span: 'normal' as const },
    { src: '/images/gallery/9.jpg',  span: 'normal' as const },
    { src: '/images/gallery/10.jpg',  span: 'tall' as const },
    { src: '/images/gallery/11.jpg', span: 'normal' as const },
    { src: '/images/gallery/12.jpg',  span: 'wide' as const },
  ],

  // Cast & Credits
  cast: [
    { name: 'Nidhi', role: 'Lead Character', image: '/images/cast/1.jpg', description: 'The hopeless romantic with a heart of gold' },
    { name: 'Darshan', role: 'Lead Character', image: '/images/cast/2.jpg', description: 'The idiot who loves unconditionally' },
    
  ],

  credits: [
    { role: 'Directed By', name: 'The Universe' },
    { role: 'Written By', name: 'Destiny' },
    { role: 'Produced By', name: 'Love & Serendipity' },
    { role: 'Original Score', name: 'Our Heartbeats' },
    { role: 'Cinematography', name: 'iPhone & Instinct' },
    { role: 'Special Thanks', name: 'Coffee, Wi-Fi, and Each Other' },
  ],

  // Footer
  footer: {
    message: 'Made with ❤️ by two people who found their forever person.',
    socialLinks: [
      { platform: 'Instagram', url: '#', icon: 'instagram' },
      { platform: 'TikTok', url: '#', icon: 'tiktok' },
      { platform: 'YouTube', url: '#', icon: 'youtube' },
    ],
  },
};

export type Memory = (typeof siteConfig.categories)[number]['memories'][number];
export type TimelineEvent = (typeof siteConfig.timeline)[number];
export type GalleryImage = (typeof siteConfig.gallery)[number];
export type CastMember = (typeof siteConfig.cast)[number];
export type Credit = (typeof siteConfig.credits)[number];
export type Stat = (typeof siteConfig.stats)[number];
