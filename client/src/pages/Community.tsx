import { useState } from 'react';
import { motion } from 'framer-motion';

const Community = () => {
  const [activeTab, setActiveTab] = useState('latest');
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: 'ARMYforever',
      avatar: 'https://via.placeholder.com/50/6B46C1/FFFFFF?text=AF',
      content: 'Just got my tickets for the BTS concert! Can\'t wait to see them live! 🎤💜',
      likes: 245,
      comments: 32,
      timeAgo: '2h ago',
      isLiked: false
    },
    {
      id: 2,
      user: 'BTStheBest',
      avatar: 'https://via.placeholder.com/50/805AD5/FFFFFF?text=BB',
      content: 'What\'s your favorite BTS song? Mine keeps changing but right now I can\'t stop listening to Spring Day! 🌸',
      likes: 189,
      comments: 45,
      timeAgo: '5h ago',
      isLiked: true
    },
    {
      id: 3,
      user: 'KpopLover',
      avatar: 'https://via.placeholder.com/50/553C9A/FFFFFF?text=KL',
      content: 'BTS just announced their comeback! The teaser looks amazing! 💜 #BTS_COMEBACK',
      likes: 321,
      comments: 28,
      timeAgo: '1d ago',
      isLiked: false
    },
  ]);

  const toggleLike = (postId: number) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, isLiked: !post.isLiked, likes: post.likes + (post.isLiked ? -1 : 1) }
        : post
    ));
  };

  return (
    <div className="min-h-screen bg-bts-dark-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">ARMY Community</h1>
        
        <div className="max-w-4xl mx-auto">
          {/* Create Post */}
          <motion.div 
            className="bg-bts-dark-800 rounded-xl p-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-start space-x-4">
              <img 
                src="https://via.placeholder.com/50/9F7AEA/FFFFFF?text=ME" 
                alt="Your profile" 
                className="w-12 h-12 rounded-full"
              />
              <div className="flex-1">
                <textarea
                  className="w-full bg-bts-dark-700 rounded-lg p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-bts-pink"
                  rows={3}
                  placeholder="Share your thoughts with the ARMY..."
                />
                <div className="flex justify-between items-center mt-3">
                  <div className="flex space-x-2">
                    <button className="p-2 text-gray-400 hover:text-bts-pink">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </button>
                    <button className="p-2 text-gray-400 hover:text-bts-pink">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </button>
                  </div>
                  <button className="bg-gradient-to-r from-bts-pink to-bts-purple text-white px-6 py-2 rounded-full font-medium hover:opacity-90">
                    Post
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tabs */}
          <div className="flex space-x-4 mb-6 border-b border-bts-dark-700">
            {['latest', 'trending', 'following'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 font-medium ${
                  activeTab === tab
                    ? 'text-bts-pink border-b-2 border-bts-pink'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Posts */}
          <div className="space-y-6">
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                className="bg-bts-dark-800 rounded-xl p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-start space-x-4">
                  <img 
                    src={post.avatar} 
                    alt={post.user} 
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="font-bold">{post.user}</span>
                      <span className="text-gray-400 text-sm">• {post.timeAgo}</span>
                    </div>
                    <p className="text-gray-200 mb-4">{post.content}</p>
                    <div className="flex space-x-4 text-gray-400">
                      <button 
                        className={`flex items-center space-x-1 ${post.isLiked ? 'text-bts-pink' : ''}`}
                        onClick={() => toggleLike(post.id)}
                      >
                        <svg 
                          className="w-5 h-5" 
                          fill={post.isLiked ? 'currentColor' : 'none'} 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
                          />
                        </svg>
                        <span>{post.likes}</span>
                      </button>
                      <button className="flex items-center space-x-1 hover:text-white">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        <span>{post.comments}</span>
                      </button>
                      <button className="flex items-center space-x-1 hover:text-white">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                        </svg>
                        <span>Share</span>
                      </button>
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

export default Community;
