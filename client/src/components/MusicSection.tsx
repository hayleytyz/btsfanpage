import { motion } from 'framer-motion';
import { Play, Heart, Plus } from 'lucide-react';

const MusicSection = () => {
  const albums = [
    {
      id: 1,
      title: 'Proof',
      type: 'Album',
      year: '2022',
      image: '/images/albums/proof.jpg',
      tracks: 35,
      duration: '2h 18m',
    },
    {
      id: 2,
      title: 'Butter',
      type: 'Single',
      year: '2021',
      image: '/images/albums/butter.jpg',
      tracks: 1,
      duration: '2m 42s',
    },
    {
      id: 3,
      title: 'BE',
      type: 'Album',
      year: '2020',
      image: '/images/albums/be.jpg',
      tracks: 8,
      duration: '28m 30s',
    },
    {
      id: 4,
      title: 'Dynamite',
      type: 'Single',
      year: '2020',
      image: '/images/albums/dynamite.jpg',
      tracks: 1,
      duration: '3m 19s',
    },
  ];

  const popularTracks = [
    { id: 1, title: 'Dynamite', album: 'Dynamite', duration: '3:19', plays: '1.5B' },
    { id: 2, title: 'Butter', album: 'Butter', duration: '2:42', plays: '1.2B' },
    { id: 3, title: 'Boy With Luv (feat. Halsey)', album: 'MAP OF THE SOUL: PERSONA', duration: '3:49', plays: '1.1B' },
    { id: 4, title: 'DNA', album: 'Love Yourself: Her', duration: '3:43', plays: '1.0B' },
    { id: 5, title: 'Fake Love', album: 'Love Yourself: Tear', duration: '4:02', plays: '950M' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="music" className="py-20 bg-bts-light">
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
            Music
          </h2>
          <p className="text-lg text-bts-dark/70 max-w-2xl mx-auto">
            Explore BTS's discography, from their latest releases to all-time favorites.
          </p>
        </motion.div>

        {/* Latest Releases */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20"
        >
          <h3 className="text-2xl font-semibold text-bts-dark mb-6">Latest Releases</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {albums.map((album) => (
              <motion.div
                key={album.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={album.image}
                    alt={album.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <button className="absolute bottom-4 right-4 w-12 h-12 bg-bts-purple text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:bg-opacity-90">
                    <Play className="w-5 h-5" fill="currentColor" />
                  </button>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-lg text-bts-dark">{album.title}</h4>
                      <p className="text-sm text-bts-dark/60">{album.type} • {album.year}</p>
                    </div>
                    <button className="text-bts-dark/40 hover:text-bts-purple transition-colors">
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="mt-3 pt-3 border-t border-bts-light/30 flex justify-between text-xs text-bts-dark/50">
                    <span>{album.tracks} songs</span>
                    <span>{album.duration}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Popular Tracks */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-semibold text-bts-dark">Popular Tracks</h3>
            <button className="text-bts-purple hover:underline text-sm font-medium">
              See All
            </button>
          </div>
          
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            {popularTracks.map((track, index) => (
              <motion.div
                key={track.id}
                variants={itemVariants}
                className={`flex items-center p-4 hover:bg-bts-light/30 transition-colors ${index !== 0 ? 'border-t border-bts-light/20' : ''}`}
              >
                <div className="w-10 text-center text-bts-dark/50 font-medium">{index + 1}</div>
                <button className="w-10 h-10 rounded-full bg-bts-purple/10 text-bts-purple flex items-center justify-center ml-2 flex-shrink-0 hover:bg-bts-purple/20 transition-colors">
                  <Play className="w-4 h-4" fill="currentColor" />
                </button>
                <div className="ml-4 flex-1 min-w-0">
                  <h4 className="font-medium text-bts-dark truncate">{track.title}</h4>
                  <p className="text-sm text-bts-dark/60 truncate">{track.album}</p>
                </div>
                <div className="flex items-center space-x-4 ml-4">
                  <span className="text-sm text-bts-dark/50">{track.plays} plays</span>
                  <span className="text-sm text-bts-dark/50">{track.duration}</span>
                  <button className="text-bts-dark/40 hover:text-bts-purple transition-colors">
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MusicSection;
