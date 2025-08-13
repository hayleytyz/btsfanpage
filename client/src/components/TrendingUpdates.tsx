import { useState } from 'react';
import { motion } from 'framer-motion';
import { ClockIcon, FireIcon } from '@heroicons/react/24/outline';

const newsItems = [
  {
    id: 1,
    title: 'BTS Announces New Album "Proof"',
    excerpt: 'The 3-disc anthology album features new songs and greatest hits.',
    image: 'https://i.imgur.com/album1.jpg',
    date: '2023-05-10',
    category: 'Music',
  },
  {
    id: 2,
    title: 'BTS to Perform at Grammy Awards',
    excerpt: 'The group will make their highly anticipated return to the Grammy stage.',
    image: 'https://i.imgur.com/grammy.jpg',
    date: '2023-04-28',
    category: 'Awards',
  },
  {
    id: 3,
    title: 'Jin Completes Military Service',
    excerpt: 'The oldest member of BTS has successfully completed his mandatory service.',
    image: 'https://i.imgur.com/jin.jpg',
    date: '2023-06-15',
    category: 'News',
  },
  {
    id: 4,
    title: 'BTS Breaks YouTube Record',
    excerpt: 'New music video surpasses 100 million views in record time.',
    image: 'https://i.imgur.com/youtube.jpg',
    date: '2023-05-22',
    category: 'Achievement',
  },
  {
    id: 5,
    title: 'BTS World Tour 2024 Announced',
    excerpt: 'Global tour dates revealed with stops in 20 cities worldwide.',
    image: 'https://i.imgur.com/tour.jpg',
    date: '2023-06-01',
    category: 'Tour',
  },
];

const TrendingUpdates = () => {
  const [activeTab, setActiveTab] = useState('trending');

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <section className="py-16 bg-bts-dark">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-white mb-4 md:mb-0">
            Trending & Updates
          </h2>
          <div className="flex space-x-2 bg-bts-gray-900 rounded-full p-1">
            <button
              onClick={() => setActiveTab('trending')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === 'trending'
                  ? 'bg-bts-pink text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <FireIcon className="h-3 w-3 inline-block mr-1 -mt-0.5" />
              Trending
            </button>
            <button
              onClick={() => setActiveTab('latest')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === 'latest'
                  ? 'bg-bts-pink text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <ClockIcon className="h-3 w-3 inline-block mr-1 -mt-0.5" />
              Latest
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-x-auto pb-6 -mx-4 px-4">
            <div className="flex space-x-6">
              {newsItems.map((item) => (
                <motion.div
                  key={item.id}
                  className="flex-shrink-0 w-72 bg-bts-gray-900 rounded-xl overflow-hidden shadow-lg group cursor-pointer"
                  whileHover={{ y: -5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="h-40 bg-bts-gray-800 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center text-xs text-bts-pink mb-2">
                      <span className="inline-block px-2 py-1 rounded-full bg-bts-pink/10">
                        {item.category}
                      </span>
                      <span className="mx-2 text-gray-400">•</span>
                      <span className="text-gray-400">{formatDate(item.date)}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-300 mb-4 line-clamp-2">
                      {item.excerpt}
                    </p>
                    <button className="text-sm font-medium text-bts-pink hover:text-bts-purple transition-colors">
                      Read More →
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Fade effect on the right side */}
          <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-bts-dark to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default TrendingUpdates;
