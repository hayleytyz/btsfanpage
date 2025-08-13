import { useState } from 'react';
import { motion } from 'framer-motion';

const News = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const newsItems = [
    {
      id: 1,
      title: 'BTS Announces New Album',
      excerpt: 'The K-pop supergroup has announced their upcoming album, set to release next month.',
      category: 'music',
      date: '2023-08-10',
      image: 'https://via.placeholder.com/600x400/6B46C1/FFFFFF?text=BTS+News'
    },
    {
      id: 2,
      title: 'BTS Breaks YouTube Record',
      excerpt: 'Their latest music video breaks the record for most views in 24 hours.',
      category: 'achievements',
      date: '2023-08-05',
      image: 'https://via.placeholder.com/600x400/805AD5/FFFFFF?text=YouTube+Record'
    },
    {
      id: 3,
      title: 'BTS World Tour 2024',
      excerpt: 'Global tour dates announced with stops in 20 cities worldwide.',
      category: 'tours',
      date: '2023-07-28',
      image: 'https://via.placeholder.com/600x400/553C9A/FFFFFF?text=World+Tour'
    },
    {
      id: 4,
      title: 'BTS Wins Top Social Artist',
      excerpt: 'For the 5th consecutive year, BTS takes home the Top Social Artist award.',
      category: 'awards',
      date: '2023-07-20',
      image: 'https://via.placeholder.com/600x400/9F7AEA/FFFFFF?text=Award+Show'
    },
  ];

  const filteredNews = activeCategory === 'all' 
    ? newsItems 
    : newsItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-bts-dark-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Latest News</h1>
        
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {['all', 'music', 'tours', 'awards', 'achievements'].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-bts-pink text-white'
                  : 'bg-bts-dark-700 text-gray-300 hover:bg-bts-dark-600'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((item, index) => (
            <motion.div
              key={item.id}
              className="bg-bts-dark-800 rounded-xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="text-bts-pink text-sm font-medium mb-1">
                  {item.category.toUpperCase()}
                </div>
                <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                <p className="text-gray-300 mb-4">{item.excerpt}</p>
                <div className="text-sm text-gray-400">{item.date}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
