import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlayCircleIcon, PauseCircleIcon, MusicalNoteIcon } from '@heroicons/react/24/solid';

const albums = [
  {
    id: 1,
    title: 'Proof',
    year: '2022',
    type: 'Album',
    cover: 'https://i.imgur.com/proof.jpg',
    tracks: [
      { id: 1, title: 'Yet To Come (The Most Beautiful Moment)', duration: '3:15' },
      { id: 2, title: 'Run BTS', duration: '3:25' },
      { title: 'For Youth', duration: '4:25' },
    ],
  },
  {
    id: 2,
    title: 'Butter',
    year: '2021',
    type: 'Single',
    cover: 'https://i.imgur.com/butter.jpg',
    tracks: [
      { id: 1, title: 'Butter', duration: '2:42' },
      { title: 'Permission to Dance', duration: '3:07' },
    ],
  },
  {
    id: 3,
    title: 'BE',
    year: '2020',
    type: 'Album',
    cover: 'https://i.imgur.com/be.jpg',
    tracks: [
      { id: 1, title: 'Life Goes On', duration: '3:27' },
      { title: 'Blue & Grey', duration: '4:15' },
      { title: 'Dynamite', duration: '3:19' },
    ],
  },
];

const MusicHighlights = () => {
  const [currentAlbum, setCurrentAlbum] = useState(albums[0]);
  const [currentTrack, setCurrentTrack] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playTrack = (trackId: number) => {
    if (currentTrack === trackId) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentTrack(trackId);
      setIsPlaying(true);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-bts-dark-900 to-bts-dark-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Music Highlights</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore BTS's latest releases and timeless hits.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Album Cover */}
          <div className="relative group">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={currentAlbum.cover}
                alt={currentAlbum.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button className="p-4 bg-bts-pink/80 rounded-full hover:scale-110 transition-transform">
                  {isPlaying ? (
                    <PauseCircleIcon className="h-12 w-12 text-white" />
                  ) : (
                    <PlayCircleIcon className="h-12 w-12 text-white" />
                  )}
                </button>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-2xl font-bold text-white">{currentAlbum.title}</h3>
              <p className="text-bts-pink">{currentAlbum.year} • {currentAlbum.type}</p>
            </div>
          </div>

          {/* Track List */}
          <div className="md:col-span-2 bg-bts-dark-700/50 rounded-2xl p-6 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-white mb-6">Tracks</h3>
            <div className="space-y-3">
              {currentAlbum.tracks.map((track) => (
                <div
                  key={track.id}
                  className={`flex items-center justify-between p-4 rounded-lg transition-colors ${
                    currentTrack === track.id ? 'bg-bts-pink/20' : 'hover:bg-bts-dark-600/50'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => playTrack(track.id)}
                      className="text-bts-pink hover:text-white transition-colors"
                    >
                      {currentTrack === track.id && isPlaying ? (
                        <PauseCircleIcon className="h-6 w-6" />
                      ) : (
                        <PlayCircleIcon className="h-6 w-6" />
                      )}
                    </button>
                    <div>
                      <h4 className="font-medium text-white">{track.title}</h4>
                      <p className="text-sm text-gray-400">BTS</p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-400">{track.duration}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Album Carousel */}
        <div className="mt-12 relative">
          <h3 className="text-xl font-bold text-white mb-6">More Releases</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {albums.map((album) => (
              <motion.div
                key={album.id}
                className={`cursor-pointer group ${
                  currentAlbum.id === album.id ? 'ring-2 ring-bts-pink' : ''
                } rounded-xl overflow-hidden`}
                onClick={() => setCurrentAlbum(album)}
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="aspect-square relative">
                  <img
                    src={album.cover}
                    alt={album.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <PlayCircleIcon className="h-12 w-12 text-white/80" />
                  </div>
                </div>
                <div className="p-3">
                  <h4 className="font-medium text-white truncate">{album.title}</h4>
                  <p className="text-sm text-gray-400">{album.year} • {album.type}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicHighlights;
