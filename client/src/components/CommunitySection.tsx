import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChatBubbleLeftRightIcon, CalendarIcon, UserGroupIcon, HeartIcon, BookmarkIcon, ShareIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid, BookmarkIcon as BookmarkIconSolid } from '@heroicons/react/24/solid';

type Post = {
  id: number;
  user: {
    name: string;
    avatar: string;
    role: string;
  };
  content: string;
  image?: string;
  likes: number;
  comments: number;
  timeAgo: string;
  isLiked: boolean;
  isBookmarked: boolean;
};

const initialPosts: Post[] = [
  {
    id: 1,
    user: {
      name: 'ARMY_forever',
      avatar: 'https://i.imgur.com/avatar1.jpg',
      role: 'Premium Member',
    },
    content: 'Just got my tickets for the BTS concert! Can\'t wait to see them live! 🎤💜 #BTS #ARMY',
    image: 'https://i.imgur.com/concert1.jpg',
    likes: 245,
    comments: 32,
    timeAgo: '2h ago',
    isLiked: false,
    isBookmarked: false,
  },
  {
    id: 2,
    user: {
      name: 'BTSxMusicLover',
      avatar: 'https://i.imgur.com/avatar2.jpg',
      role: 'New Member',
    },
    content: 'What\'s your favorite BTS song? Mine keeps changing but right now I can\'t stop listening to Spring Day! 🌸',
    likes: 189,
    comments: 45,
    timeAgo: '5h ago',
    isLiked: true,
    isBookmarked: true,
  },
];

const events = [
  {
    id: 1,
    title: 'BTS Online Concert: Yet to Come',
    date: '2023-10-15',
    time: '7:00 PM KST',
    type: 'Online',
    image: 'https://i.imgur.com/event1.jpg',
  },
  {
    id: 2,
    title: 'BTS 10th Anniversary Fan Meeting',
    date: '2023-11-20',
    time: '6:00 PM KST',
    type: 'Offline',
    location: 'Seoul, South Korea',
    image: 'https://i.imgur.com/event2.jpg',
  },
];

const CommunitySection = () => {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [activeTab, setActiveTab] = useState('feed');
  const [newPost, setNewPost] = useState('');

  const toggleLike = (postId: number) => {
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? { ...post, isLiked: !post.isLiked, likes: post.isLiked ? post.likes - 1 : post.likes + 1 }
          : post
      )
    );
  };

  const toggleBookmark = (postId: number) => {
    setPosts(
      posts.map((post) =>
        post.id === postId ? { ...post, isBookmarked: !post.isBookmarked } : post
      )
    );
  };

  const handlePostSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPost.trim()) return;

    const newPostObj: Post = {
      id: posts.length + 1,
      user: {
        name: 'You',
        avatar: 'https://i.imgur.com/default-avatar.jpg',
        role: 'Member',
      },
      content: newPost,
      likes: 0,
      comments: 0,
      timeAgo: 'Just now',
      isLiked: false,
      isBookmarked: false,
    };

    setPosts([newPostObj, ...posts]);
    setNewPost('');
  };

  return (
    <section className="py-16 bg-bts-dark-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Join the ARMY Community</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Connect with BTS fans worldwide, share your love, and stay updated with the latest news and events.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Create Post */}
          <div className="lg:col-span-2 space-y-6">
            {/* Create Post */}
            <motion.div 
              className="bg-bts-dark-800 rounded-2xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-start space-x-4">
                <img
                  src="https://i.imgur.com/default-avatar.jpg"
                  alt="Your profile"
                  className="h-12 w-12 rounded-full object-cover"
                />
                <form onSubmit={handlePostSubmit} className="flex-1">
                  <textarea
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                    placeholder="What's on your mind, ARMY?"
                    className="w-full bg-bts-dark-700 text-white placeholder-gray-400 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-bts-pink resize-none"
                    rows={3}
                  />
                  <div className="flex justify-between items-center mt-4">
                    <div className="flex space-x-2">
                      <button
                        type="button"
                        className="p-2 text-gray-400 hover:text-bts-pink transition-colors"
                        aria-label="Add image"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                          />
                        </svg>
                      </button>
                      <button
                        type="button"
                        className="p-2 text-gray-400 hover:text-bts-pink transition-colors"
                        aria-label="Add emoji"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                          />
                        </svg>
                      </button>
                    </div>
                    <button
                      type="submit"
                      disabled={!newPost.trim()}
                      className={`px-6 py-2 rounded-full font-medium ${
                        newPost.trim()
                          ? 'bg-gradient-to-r from-bts-pink to-bts-purple text-white hover:opacity-90'
                          : 'bg-bts-gray-700 text-gray-500 cursor-not-allowed'
                      } transition-opacity`}
                    >
                      Post
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>

            {/* Tabs */}
            <div className="bg-bts-dark-800 rounded-2xl overflow-hidden">
              <div className="flex border-b border-bts-gray-700">
                <button
                  onClick={() => setActiveTab('feed')}
                  className={`flex-1 py-4 font-medium text-center ${
                    activeTab === 'feed' ? 'text-bts-pink border-b-2 border-bts-pink' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Latest Posts
                </button>
                <button
                  onClick={() => setActiveTab('popular')}
                  className={`flex-1 py-4 font-medium text-center ${
                    activeTab === 'popular' ? 'text-bts-pink border-b-2 border-bts-pink' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Popular
                </button>
                <button
                  onClick={() => setActiveTab('following')}
                  className={`flex-1 py-4 font-medium text-center ${
                    activeTab === 'following' ? 'text-bts-pink border-b-2 border-bts-pink' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Following
                </button>
              </div>

              {/* Posts */}
              <div className="divide-y divide-bts-gray-700">
                {posts.map((post) => (
                  <motion.article
                    key={post.id}
                    className="p-6 hover:bg-bts-dark-700/50 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-start space-x-4">
                      <img
                        src={post.user.avatar}
                        alt={post.user.name}
                        className="h-12 w-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <h3 className="font-bold text-white">{post.user.name}</h3>
                          <span className="text-xs bg-bts-pink/20 text-bts-pink px-2 py-0.5 rounded-full">
                            {post.user.role}
                          </span>
                          <span className="text-gray-400 text-sm">• {post.timeAgo}</span>
                        </div>
                        <p className="mt-1 text-gray-100">{post.content}</p>
                        
                        {post.image && (
                          <div className="mt-4 rounded-xl overflow-hidden">
                            <img
                              src={post.image}
                              alt="Post content"
                              className="w-full h-auto rounded-lg"
                            />
                          </div>
                        )}
                        
                        <div className="mt-4 flex items-center justify-between text-gray-400">
                          <button
                            onClick={() => toggleLike(post.id)}
                            className="flex items-center space-x-1 hover:text-bts-pink transition-colors"
                          >
                            {post.isLiked ? (
                              <HeartIconSolid className="h-5 w-5 text-bts-pink" />
                            ) : (
                              <HeartIcon className="h-5 w-5" />
                            )}
                            <span>{post.likes}</span>
                          </button>
                          
                          <button className="flex items-center space-x-1 hover:text-bts-pink transition-colors">
                            <ChatBubbleLeftRightIcon className="h-5 w-5" />
                            <span>{post.comments}</span>
                          </button>
                          
                          <button
                            onClick={() => toggleBookmark(post.id)}
                            className="hover:text-bts-pink transition-colors"
                          >
                            {post.isBookmarked ? (
                              <BookmarkIconSolid className="h-5 w-5 text-bts-pink" />
                            ) : (
                              <BookmarkIcon className="h-5 w-5" />
                            )}
                          </button>
                          
                          <button className="hover:text-bts-pink transition-colors">
                            <ShareIcon className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Events and Community Info */}
          <div className="space-y-6">
            {/* Upcoming Events */}
            <motion.div 
              className="bg-bts-dark-800 rounded-2xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">Upcoming Events</h3>
                <button className="text-bts-pink text-sm font-medium">View All</button>
              </div>
              
              <div className="space-y-4">
                {events.map((event) => (
                  <div key={event.id} className="bg-bts-dark-700 rounded-xl overflow-hidden">
                    <div className="h-32 bg-cover bg-center" style={{ backgroundImage: `url(${event.image})` }}></div>
                    <div className="p-4">
                      <h4 className="font-bold text-white mb-1">{event.title}</h4>
                      <div className="flex items-center text-sm text-gray-300 mb-2">
                        <CalendarIcon className="h-4 w-4 mr-1" />
                        <span>{event.date} • {event.time}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs px-2 py-1 bg-bts-pink/20 text-bts-pink rounded-full">
                          {event.type}
                        </span>
                        <button className="text-sm font-medium text-bts-pink hover:underline">
                          Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Community Stats */}
            <motion.div 
              className="bg-gradient-to-br from-bts-purple/20 to-bts-pink/20 rounded-2xl p-6 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-center">
                <UserGroupIcon className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Join the ARMY</h3>
                <p className="text-gray-200 mb-6">Connect with millions of BTS fans worldwide</p>
                <button className="w-full py-3 bg-white text-bts-dark-900 font-medium rounded-full hover:bg-opacity-90 transition-opacity">
                  Sign Up Now
                </button>
              </div>
            </motion.div>

            {/* Trending Hashtags */}
            <motion.div 
              className="bg-bts-dark-800 rounded-2xl p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-lg font-bold text-white mb-4">Trending Now</h3>
              <div className="flex flex-wrap gap-2">
                {['#BTS', '#ARMY', '#BTS10thAnniversary', '#BTSProof', '#BTS_Butter'].map((tag) => (
                  <a
                    key={tag}
                    href={`#${tag}`}
                    className="inline-block px-3 py-1.5 bg-bts-dark-700 text-bts-pink hover:bg-bts-pink/10 rounded-full text-sm transition-colors"
                  >
                    {tag}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
