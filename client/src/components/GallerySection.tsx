import { motion } from 'framer-motion';
import { Heart, Share2, Download } from 'lucide-react';

const GallerySection = () => {
  const galleryItems = [
    { id: 1, src: '/images/gallery/1.jpg', alt: 'BTS Group Photo', likes: '245K', category: 'Performance' },
    { id: 2, src: '/images/gallery/2.jpg', alt: 'BTS on Stage', likes: '189K', category: 'Performance' },
    { id: 3, src: '/images/gallery/3.jpg', alt: 'BTS Backstage', likes: '312K', category: 'Behind the Scenes' },
    { id: 4, src: '/images/gallery/4.jpg', alt: 'BTS at Award Show', likes: '278K', category: 'Events' },
    { id: 5, src: '/images/gallery/5.jpg', alt: 'BTS Music Video Still', likes: '421K', category: 'Music Videos' },
    { id: 6, src: '/images/gallery/6.jpg', alt: 'BTS Group Photo 2', likes: '198K', category: 'Photoshoot' },
    { id: 7, src: '/images/gallery/7.jpg', alt: 'BTS in Concert', likes: '356K', category: 'Performance' },
    { id: 8, src: '/images/gallery/8.jpg', alt: 'BTS Candid Moment', likes: '267K', category: 'Candids' },
  ];

  const categories = ['All', 'Performance', 'Music Videos', 'Photoshoot', 'Behind the Scenes', 'Events', 'Candids'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-bts-dark mb-4">
            Gallery
          </h2>
          <p className="text-lg text-bts-dark/70 max-w-2xl mx-auto">
            Explore stunning visuals and memorable moments from BTS's journey.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                index === 0
                  ? 'bg-bts-purple text-white'
                  : 'bg-bts-light/10 text-bts-dark/70 hover:bg-bts-light/20'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="aspect-[3/4] bg-bts-light/20 relative">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center justify-between mb-2">
                      <span className="inline-block px-3 py-1 rounded-full bg-bts-purple text-white text-xs font-medium">
                        {item.category}
                      </span>
                      <div className="flex space-x-2">
                        <button className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                          <Heart className="w-4 h-4" />
                        </button>
                        <button className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                          <Share2 className="w-4 h-4" />
                        </button>
                        <button className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                          <Download className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center text-white/80 text-sm">
                      <Heart className="w-4 h-4 mr-1" fill="currentColor" />
                      {item.likes}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 text-center"
        >
          <button className="inline-flex items-center px-8 py-3 border-2 border-bts-purple text-bts-purple rounded-full font-medium hover:bg-bts-purple hover:text-white transition-colors">
            <span>Load More</span>
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
