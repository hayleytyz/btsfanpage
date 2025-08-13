import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { Tab } from '@headlessui/react';
import MemberCard from '@/components/MemberCard';

// Mock data for BTS members
const members = [
  {
    id: 1,
    name: 'RM',
    realName: 'Kim Nam-joon',
    role: 'Leader, Rapper',
    birthDate: 'September 12, 1994',
    image: 'https://i.imgur.com/1ZQ2Z9C.jpg',
  },
  {
    id: 2,
    name: 'Jin',
    realName: 'Kim Seok-jin',
    role: 'Vocalist, Visual',
    birthDate: 'December 4, 1992',
    image: 'https://i.imgur.com/2ZQ2Z9D.jpg',
  },
  {
    id: 3,
    name: 'SUGA',
    realName: 'Min Yoon-gi',
    role: 'Rapper, Producer',
    birthDate: 'March 9, 1993',
    image: 'https://i.imgur.com/3ZQ2Z9E.jpg',
  },
  {
    id: 4,
    name: 'j-hope',
    realName: 'Jung Ho-seok',
    role: 'Rapper, Dancer',
    birthDate: 'February 18, 1994',
    image: 'https://i.imgur.com/4ZQ2Z9F.jpg',
  },
  {
    id: 5,
    name: 'Jimin',
    realName: 'Park Ji-min',
    role: 'Vocalist, Dancer',
    birthDate: 'October 13, 1995',
    image: 'https://i.imgur.com/5ZQ2Z9G.jpg',
  },
  {
    id: 6,
    name: 'V',
    realName: 'Kim Tae-hyung',
    role: 'Vocalist, Dancer',
    birthDate: 'December 30, 1995',
    image: 'https://i.imgur.com/6ZQ2Z9H.jpg',
  },
  {
    id: 7,
    name: 'Jungkook',
    realName: 'Jeon Jung-kook',
    role: 'Vocalist, Dancer, Maknae',
    birthDate: 'September 1, 1997',
    image: 'https://i.imgur.com/7ZQ2Z9I.jpg',
  },
];

// Mock news data
const news = [
  {
    id: 1,
    title: 'BTS to release new album in 2024',
    date: '2024-01-15',
    excerpt: 'BTS announces their highly anticipated comeback album set to release in early 2024.',
  },
  {
    id: 2,
    title: 'BTS achieves record-breaking streaming numbers',
    date: '2023-12-20',
    excerpt: 'BTS breaks their own record with over 10 billion streams on major platforms.',
  },
  {
    id: 3,
    title: 'BTS members to begin military service',
    date: '2023-11-30',
    excerpt: 'BTS members will fulfill their mandatory military service starting this year.',
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const Home = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative bg-bts-dark-800 rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-bts-purple/30 to-bts-pink/30" />
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            Welcome to the BTS Fan Page
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-200">
            Your ultimate destination for all things BTS. Explore their music, timeline, and connect with fellow ARMY members.
          </p>
          <div className="mt-10 flex justify-center space-x-4">
            <Link
              to="/music"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-bts-pink hover:bg-bts-purple focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bts-pink transition-colors duration-200"
            >
              Explore Music
            </Link>
            <Link
              to="/forum"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-bts-dark-700 hover:bg-bts-dark-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bts-pink transition-colors duration-200"
            >
              Join the Community
            </Link>
          </div>
        </div>
      </section>

      {/* Members Section */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Meet the Members
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-300 sm:mt-4">
              Get to know each member of BTS and their unique talents.
            </p>
          </div>

          <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {members.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="bg-bts-dark-800 py-16 rounded-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Latest News
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-300 sm:mt-4">
              Stay updated with the latest BTS news and announcements.
            </p>
          </div>

          <Tab.Group selectedIndex={selectedTab} onChange={setSelectedTab}>
            <Tab.List className="flex space-x-1 rounded-xl bg-bts-dark-700 p-1 max-w-md mx-auto mb-8">
              {['Latest', 'Popular', 'Announcements'].map((category) => (
                <Tab
                  key={category}
                  className={({ selected }) =>
                    classNames(
                      'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                      'focus:outline-none',
                      selected
                        ? 'bg-bts-pink text-white shadow'
                        : 'text-gray-300 hover:bg-bts-dark-600 hover:text-white'
                    )
                  }
                >
                  {category}
                </Tab>
              ))}
            </Tab.List>

            <Tab.Panels className="mt-2">
              <Tab.Panel className="space-y-6">
                {news.map((item) => (
                  <div key={item.id} className="bg-bts-dark-700 overflow-hidden rounded-lg p-6 hover:bg-bts-dark-600 transition-colors duration-200">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium text-white">{item.title}</h3>
                      <span className="text-sm text-gray-400">{item.date}</span>
                    </div>
                    <p className="mt-2 text-gray-300">{item.excerpt}</p>
                  </div>
                ))}
              </Tab.Panel>
              
              {/* Placeholder for other tabs */}
              <Tab.Panel>Coming soon...</Tab.Panel>
              <Tab.Panel>Coming soon...</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>

          <div className="mt-10 text-center">
            <Link
              to="/forum"
              className="inline-flex items-center text-bts-pink hover:text-bts-purple font-medium"
            >
              View all news and discussions
              <ArrowRightIcon className="ml-2 h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
