import { useState } from 'react';
import { motion } from 'framer-motion';

// Mock data for timeline events
const timelineEvents = [
  {
    id: 1,
    year: '2013',
    month: 'June',
    title: 'Debut',
    description: 'BTS debuts with the single album "2 Cool 4 Skool" under Big Hit Entertainment.',
    type: 'debut',
  },
  {
    id: 2,
    year: '2015',
    month: 'April',
    title: 'First Music Show Win',
    description: 'Won first place on a music show with "I Need U" from "The Most Beautiful Moment in Life, Part 1".',
    type: 'achievement',
  },
  {
    id: 3,
    year: '2017',
    month: 'May',
    title: 'Billboard Music Awards',
    description: 'Won Top Social Artist at the Billboard Music Awards, becoming the first K-pop group to win a BBMA.',
    type: 'award',
  },
  {
    id: 4,
    year: '2018',
    month: 'September',
    title: 'UN Speech',
    description: 'RM delivers a speech at the United Nations as part of UNICEF\'s Generation Unlimited launch.',
    type: 'milestone',
  },
  {
    id: 5,
    year: '2020',
    month: 'August',
    title: 'Dynamite Release',
    description: 'Released "Dynamite", their first all-English single, which debuted at number one on the Billboard Hot 100.',
    type: 'release',
  },
  {
    id: 6,
    year: '2021',
    month: 'November',
    title: 'Permission to Dance in LA',
    description: 'Held their first in-person concerts since the pandemic began at SoFi Stadium in Los Angeles.',
    type: 'concert',
  },
  {
    id: 7,
    year: '2022',
    month: 'June',
    title: 'Proof Album',
    description: 'Released anthology album "Proof" to celebrate their 9th anniversary, featuring the lead single "Yet to Come".',
    type: 'release',
  },
];

const eventTypeColors = {
  debut: 'bg-purple-500',
  achievement: 'bg-pink-500',
  award: 'bg-blue-500',
  milestone: 'bg-yellow-500',
  release: 'bg-green-500',
  concert: 'bg-red-500',
};

const eventTypeLabels = {
  debut: 'Debut',
  achievement: 'Achievement',
  award: 'Award',
  milestone: 'Milestone',
  release: 'Release',
  concert: 'Concert',
};

const Timeline = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filteredEvents = activeFilter === 'all' 
    ? timelineEvents 
    : timelineEvents.filter(event => event.type === activeFilter);

  return (
    <div className="min-h-screen bg-bts-dark-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            BTS Timeline
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-300 sm:mt-4">
            A journey through BTS's most significant moments and achievements
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeFilter === 'all'
                ? 'bg-bts-pink text-white'
                : 'bg-bts-dark-700 text-gray-300 hover:bg-bts-dark-600'
            }`}
          >
            All Events
          </button>
          {Object.entries(eventTypeLabels).map(([type, label]) => (
            <button
              key={type}
              onClick={() => setActiveFilter(type)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === type
                  ? `${eventTypeColors[type as keyof typeof eventTypeColors]} text-white`
                  : 'bg-bts-dark-700 text-gray-300 hover:bg-bts-dark-600'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div 
            className="absolute left-1/2 w-1 h-full bg-gradient-to-b from-bts-pink to-bts-purple transform -translate-x-1/2"
            aria-hidden="true"
          />

          <div className="space-y-12">
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
                onMouseEnter={() => setHoveredId(event.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Timeline dot */}
                <div className="flex-shrink-0 relative z-10">
                  <div 
                    className={`h-6 w-6 rounded-full ${
                      eventTypeColors[event.type as keyof typeof eventTypeColors]
                    } ring-8 ring-bts-dark-900`}
                  />
                  {hoveredId === event.id && (
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-bts-dark-800 px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap"
                    >
                      {eventTypeLabels[event.type as keyof typeof eventTypeLabels]}
                    </motion.div>
                  )}
                </div>

                {/* Card */}
                <div className="flex-1 px-8 py-6">
                  <div 
                    className={`bg-bts-dark-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ${
                      hoveredId === event.id ? 'transform -translate-y-1 shadow-bts' : ''
                    }`}
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-bts-pink">
                          {event.month} {event.year}
                        </span>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          eventTypeColors[event.type as keyof typeof eventTypeColors]
                        } text-white`}>
                          {eventTypeLabels[event.type as keyof typeof eventTypeLabels]}
                        </span>
                      </div>
                      <h3 className="mt-2 text-xl font-bold text-white">{event.title}</h3>
                      <p className="mt-2 text-gray-300">{event.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
