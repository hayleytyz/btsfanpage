import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import FanGallery from '../components/FanGallery';

const Gallery = () => {
  return (
    <div className="min-h-screen bg-bts-dark-900">
      {/* Hero Section */}
      <div className="relative h-64 md:h-96 bg-gradient-to-r from-bts-purple to-bts-pink flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <div className="relative z-20 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">BTS Gallery</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Explore stunning photos and moments from BTS's journey
          </p>
        </div>
      </div>

      {/* Main Gallery */}
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Fan Gallery</h2>
          <FanGallery />
        </div>

        {/* Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Concerts', count: 245, image: 'https://i.imgur.com/category1.jpg' },
              { name: 'Award Shows', count: 189, image: 'https://i.imgur.com/category2.jpg' },
              { name: 'Music Videos', count: 76, image: 'https://i.imgur.com/category3.jpg' },
              { name: 'Behind The Scenes', count: 312, image: 'https://i.imgur.com/category4.jpg' },
            ].map((category, index) => (
              <motion.div
                key={category.name}
                className="relative rounded-xl overflow-hidden h-48 cursor-pointer group"
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 z-20 p-4">
                  <h3 className="text-white font-bold text-lg">{category.name}</h3>
                  <p className="text-gray-300 text-sm">{category.count} photos</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
