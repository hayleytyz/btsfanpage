import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';

// Sample gallery images with different aspect ratios for masonry effect
const galleryImages = [
  { id: 1, src: 'https://i.imgur.com/gallery1.jpg', alt: 'BTS Performance', width: 4, height: 3 },
  { id: 2, src: 'https://i.imgur.com/gallery2.jpg', alt: 'BTS Group Photo', width: 3, height: 4 },
  { id: 3, src: 'https://i.imgur.com/gallery3.jpg', alt: 'BTS in Concert', width: 4, height: 3 },
  { id: 4, src: 'https://i.imgur.com/gallery4.jpg', alt: 'BTS Backstage', width: 3, height: 4 },
  { id: 5, src: 'https://i.imgur.com/gallery5.jpg', alt: 'BTS Awards Show', width: 4, height: 3 },
  { id: 6, src: 'https://i.imgur.com/gallery6.jpg', alt: 'BTS Fan Art', width: 3, height: 4 },
  { id: 7, src: 'https://i.imgur.com/gallery7.jpg', alt: 'BTS Music Video', width: 4, height: 3 },
  { id: 8, src: 'https://i.imgur.com/gallery8.jpg', alt: 'BTS Interview', width: 3, height: 4 },
];

const FanGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setSelectedImage(galleryImages[index].id);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigate = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
    } else {
      setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
    }
  };

  // Create a masonry grid
  const getImageClass = (width: number, height: number) => {
    if (width > height) return 'row-span-1 col-span-2';
    if (height > width) return 'row-span-2 col-span-1';
    return 'row-span-1 col-span-1';
  };

  return (
    <section className="py-16 bg-bts-dark-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Fan Gallery</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A collection of amazing moments shared by the ARMY community.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              className={`relative rounded-xl overflow-hidden cursor-pointer ${getImageClass(image.width, image.height)}`}
              onClick={() => openLightbox(index)}
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover hover:opacity-90 transition-opacity"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-4">
                <p className="text-white text-sm font-medium">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Upload Button */}
        <div className="mt-8 text-center">
          <button className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-bts-pink to-bts-purple text-white font-medium hover:opacity-90 transition-opacity">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            Share Your Moment
          </button>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-bts-pink transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
              aria-label="Close lightbox"
            >
              <XMarkIcon className="h-8 w-8" />
            </button>

            <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
              <motion.img
                key={currentIndex}
                src={galleryImages[currentIndex].src}
                alt={galleryImages[currentIndex].alt}
                className="max-h-[80vh] w-auto mx-auto rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              />

              <div className="mt-4 text-center text-white">
                <p className="text-lg font-medium">{galleryImages[currentIndex].alt}</p>
                <p className="text-sm text-gray-300">
                  {currentIndex + 1} / {galleryImages.length}
                </p>
              </div>
            </div>

            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-bts-pink transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                navigate('prev');
              }}
              aria-label="Previous image"
            >
              <ArrowLeftIcon className="h-6 w-6" />
            </button>

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-bts-pink transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                navigate('next');
              }}
              aria-label="Next image"
            >
              <ArrowRightIcon className="h-6 w-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FanGallery;
