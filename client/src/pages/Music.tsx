import { useState } from 'react';
import { PlayIcon, PauseIcon, MusicalNoteIcon } from '@heroicons/react/24/solid';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

// Mock data for albums
const albums = [
  {
    id: 1,
    title: 'Map of the Soul: 7',
    releaseDate: 'February 21, 2020',
    coverArt: 'https://i.imgur.com/album1.jpg',
    tracks: [
      { id: 1, title: 'Intro: Persona', duration: '2:54', isPlaying: false },
      { id: 2, title: 'Boy With Luv (feat. Halsey)', duration: '3:49', isPlaying: false },
      { id: 3, title: 'Make It Right', duration: '3:42', isPlaying: false },
      { id: 4, title: 'Jamais Vu', duration: '3:46', isPlaying: false },
      { id: 5, title: 'Dionysus', duration: '4:08', isPlaying: false },
    ],
  },
  {
    id: 2,
    title: 'BE',
    releaseDate: 'November 20, 2020',
    coverArt: 'https://i.imgur.com/album2.jpg',
    tracks: [
      { id: 1, title: 'Life Goes On', duration: '3:27', isPlaying: false },
      { id: 2, title: 'Fly To My Room', duration: '3:42', isPlaying: false },
      { id: 3, title: 'Blue & Grey', duration: '4:15', isPlaying: false },
      { id: 4, title: 'Stay', duration: '3:24', isPlaying: false },
      { id: 5, title: 'Dynamite', duration: '3:19', isPlaying: false },
    ],
  },
  {
    id: 3,
    title: 'Butter',
    releaseDate: 'May 21, 2021',
    coverArt: 'https://i.imgur.com/album3.jpg',
    tracks: [
      { id: 1, title: 'Butter', duration: '2:42', isPlaying: false },
      { id: 2, title: 'Butter (Hotter Remix)', duration: '2:46', isPlaying: false },
      { id: 3, title: 'Butter (Cooler Remix)', duration: '2:41', isPlaying: false },
    ],
  },
  {
    id: 4,
    title: 'Proof',
    releaseDate: 'June 10, 2022',
    coverArt: 'https://i.imgur.com/album4.jpg',
    tracks: [
      { id: 1, title: 'Yet To Come (The Most Beautiful Moment)', duration: '3:13', isPlaying: false },
      { id: 2, title: 'Run BTS', duration: '3:24', isPlaying: false },
      { id: 3, title: 'For Youth', duration: '4:24', isPlaying: false },
    ],
  },
];

const Music = () => {
  const [expandedAlbum, setExpandedAlbum] = useState<number | null>(null);
  const [currentlyPlaying, setCurrentlyPlaying] = useState<{albumId: number | null, trackId: number | null}>({ albumId: null, trackId: null });

  const toggleAlbum = (albumId: number) => {
    setExpandedAlbum(expandedAlbum === albumId ? null : albumId);
  };

  const togglePlay = (albumId: number, trackId: number) => {
    setCurrentlyPlaying(prev => ({
      albumId: prev.albumId === albumId && prev.trackId === trackId ? null : albumId,
      trackId: prev.albumId === albumId && prev.trackId === trackId ? null : trackId,
    }));
  };

  return (
    <div className="min-h-screen bg-bts-dark-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            BTS Music
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-300 sm:mt-4">
            Explore BTS's discography and listen to their latest releases
          </p>
        </div>

        <div className="space-y-6">
          {albums.map((album) => (
            <div 
              key={album.id}
              className="bg-bts-dark-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-bts"
            >
              <div 
                className="p-6 cursor-pointer flex items-center justify-between"
                onClick={() => toggleAlbum(album.id)}
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <img 
                      className="h-16 w-16 rounded-lg object-cover" 
                      src={album.coverArt} 
                      alt={album.title} 
                    />
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-bold text-white">{album.title}</h3>
                    <p className="text-sm text-gray-400">Released on {album.releaseDate}</p>
                    <p className="mt-1 text-sm text-gray-400">{album.tracks.length} tracks</p>
                  </div>
                </div>
                <div className="text-gray-400">
                  {expandedAlbum === album.id ? (
                    <ChevronUpIcon className="h-6 w-6" />
                  ) : (
                    <ChevronDownIcon className="h-6 w-6" />
                  )}
                </div>
              </div>

              {expandedAlbum === album.id && (
                <div className="border-t border-bts-dark-700">
                  <ul className="divide-y divide-bts-dark-700">
                    {album.tracks.map((track) => (
                      <li key={track.id} className="px-6 py-4 hover:bg-bts-dark-700 transition-colors duration-200">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                togglePlay(album.id, track.id);
                              }}
                              className="flex items-center justify-center h-10 w-10 rounded-full bg-bts-pink text-white hover:bg-bts-purple focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bts-pink transition-colors duration-200"
                            >
                              {currentlyPlaying.albumId === album.id && currentlyPlaying.trackId === track.id ? (
                                <PauseIcon className="h-5 w-5" />
                              ) : (
                                <PlayIcon className="h-5 w-5" />
                              )}
                            </button>
                            <div>
                              <h4 className={`text-sm font-medium ${
                                currentlyPlaying.albumId === album.id && currentlyPlaying.trackId === track.id 
                                  ? 'text-bts-pink' 
                                  : 'text-white'
                              }`}>
                                {track.title}
                              </h4>
                              <p className="text-xs text-gray-400">BTS</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-4">
                            <span className="text-sm text-gray-400">{track.duration}</span>
                            <button className="text-gray-400 hover:text-white focus:outline-none">
                              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-bts-dark-800 rounded-xl p-6 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-bts-pink/20">
            <MusicalNoteIcon className="h-6 w-6 text-bts-pink" />
          </div>
          <h3 className="mt-3 text-lg font-medium text-white">More music coming soon</h3>
          <p className="mt-2 text-sm text-gray-400">Stay tuned for BTS's latest releases and updates</p>
        </div>
      </div>
    </div>
  );
};

export default Music;
