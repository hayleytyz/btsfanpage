import { useState } from 'react';
import { Tab } from '@headlessui/react';
import { ChatBubbleLeftRightIcon, FireIcon, ClockIcon, UserGroupIcon, HeartIcon, ChatBubbleLeftIcon, ShareIcon, BookmarkIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid, BookmarkIcon as BookmarkIconSolid } from '@heroicons/react/24/solid';

// Mock data for forum posts
const mockPosts = [
  {
    id: 1,
    user: {
      name: 'ARMY4Life',
      avatar: 'https://i.imgur.com/avatar1.jpg',
      role: 'Active Member',
    },
    content: 'What\'s everyone\'s favorite BTS music video and why? Mine is "Blood Sweat & Tears" because of the stunning visuals and deep symbolism!',
    timestamp: '2 hours ago',
    likes: 42,
    comments: 15,
    shares: 5,
    isLiked: false,
    isBookmarked: false,
    tags: ['discussion', 'music-video'],
  },
  {
    id: 2,
    user: {
      name: 'BT21Lover',
      avatar: 'https://i.imgur.com/avatar2.jpg',
      role: 'New Member',
    },
    content: 'Just got my BT21 plushies in the mail today! The quality is amazing. Which BT21 character is your favorite? I\'m torn between Koya and Cooky! 🐨🐰',
    image: 'https://i.imgur.com/bt21-plushies.jpg',
    timestamp: '5 hours ago',
    likes: 28,
    comments: 8,
    shares: 3,
    isLiked: true,
    isBookmarked: true,
    tags: ['merchandise', 'bt21'],
  },
  {
    id: 3,
    user: {
      name: 'TaehyungStan',
      avatar: 'https://i.imgur.com/avatar3.jpg',
      role: 'Moderator',
    },
    content: 'Happy Birthday to our beloved V! 🎉 Share your favorite V moments below!',
    timestamp: '1 day ago',
    likes: 156,
    comments: 42,
    shares: 12,
    isLiked: false,
    isBookmarked: false,
    tags: ['birthday', 'taehyung'],
  },
];

const Forum = () => {
  const [posts, setPosts] = useState(mockPosts);
  const [newPost, setNewPost] = useState('');
  const [selectedTab, setSelectedTab] = useState(0);

  const handleLike = (postId: number) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, isLiked: !post.isLiked, likes: post.isLiked ? post.likes - 1 : post.likes + 1 }
        : post
    ));
  };

  const handleBookmark = (postId: number) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, isBookmarked: !post.isBookmarked }
        : post
    ));
  };

  const handleSubmitPost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPost.trim()) return;
    
    const newPostObj = {
      id: posts.length + 1,
      user: {
        name: 'CurrentUser',
        avatar: 'https://i.imgur.com/avatar4.jpg',
        role: 'Member',
      },
      content: newPost,
      timestamp: 'Just now',
      likes: 0,
      comments: 0,
      shares: 0,
      isLiked: false,
      isBookmarked: false,
      tags: ['discussion'],
    };
    
    setPosts([newPostObj, ...posts]);
    setNewPost('');
  };

  const tabs = [
    { name: 'Latest', icon: ClockIcon },
    { name: 'Popular', icon: FireIcon },
    { name: 'Following', icon: UserGroupIcon },
  ];

  return (
    <div className="min-h-screen bg-bts-dark-900 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
            ARMY Forum
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-300">
            Connect with fellow ARMYs and discuss all things BTS
          </p>
        </div>

        {/* Create Post */}
        <div className="bg-bts-dark-800 rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-start space-x-4">
            <img
              className="h-10 w-10 rounded-full object-cover"
              src="https://i.imgur.com/avatar4.jpg"
              alt="User avatar"
            />
            <form onSubmit={handleSubmitPost} className="flex-1">
              <div className="border-b border-bts-dark-700 focus-within:border-bts-pink">
                <label htmlFor="post" className="sr-only">
                  What's on your mind?
                </label>
                <textarea
                  rows={3}
                  name="post"
                  id="post"
                  className="block w-full bg-transparent border-0 border-b border-transparent focus:ring-0 text-white placeholder-gray-400 resize-none"
                  placeholder="What's on your mind?"
                  value={newPost}
                  onChange={(e) => setNewPost(e.target.value)}
                />
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="flex space-x-4">
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-bts-dark-700 hover:bg-bts-dark-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bts-pink"
                  >
                    <svg
                      className="-ml-1 mr-2 h-5 w-5 text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Photo/Video
                  </button>
                </div>
                <button
                  type="submit"
                  disabled={!newPost.trim()}
                  className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white ${
                    newPost.trim()
                      ? 'bg-bts-pink hover:bg-bts-purple'
                      : 'bg-gray-500 cursor-not-allowed'
                  } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bts-pink`}
                >
                  Post
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-6">
          <Tab.Group selectedIndex={selectedTab} onChange={setSelectedTab}>
            <Tab.List className="flex space-x-1 rounded-xl bg-bts-dark-800 p-1">
              {tabs.map((tab, index) => (
                <Tab
                  key={tab.name}
                  className={({ selected }) =>
                    `w-full py-2.5 text-sm leading-5 font-medium rounded-lg
                    focus:outline-none focus:ring-2 ring-offset-2 ring-offset-bts-dark-800 ring-white ring-opacity-60
                    ${
                      selected
                        ? 'bg-bts-pink text-white shadow'
                        : 'text-gray-300 hover:bg-bts-dark-700 hover:text-white'
                    }`
                  }
                >
                  <div className="flex items-center justify-center">
                    <tab.icon className="h-5 w-5 mr-2" />
                    {tab.name}
                  </div>
                </Tab>
              ))}
            </Tab.List>
          </Tab.Group>
        </div>

        {/* Posts */}
        <div className="space-y-6">
          {posts.map((post) => (
            <div key={post.id} className="bg-bts-dark-800 rounded-xl shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <img
                      className="h-12 w-12 rounded-full object-cover"
                      src={post.user.avatar}
                      alt={post.user.name}
                    />
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="text-lg font-medium text-white">{post.user.name}</h3>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-bts-dark-700 text-gray-300">
                          {post.user.role}
                        </span>
                      </div>
                      <p className="text-sm text-gray-400">{post.timestamp}</p>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-white focus:outline-none">
                    <EllipsisHorizontalIcon className="h-6 w-6" />
                  </button>
                </div>

                <div className="mt-4">
                  <p className="text-gray-200 whitespace-pre-line">{post.content}</p>
                  {post.image && (
                    <div className="mt-4 rounded-lg overflow-hidden">
                      <img
                        className="w-full h-auto rounded-lg"
                        src={post.image}
                        alt="Post content"
                      />
                    </div>
                  )}
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-bts-dark-700 text-gray-300"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex items-center justify-between text-gray-400 text-sm">
                  <div className="flex items-center space-x-4">
                    <button 
                      className="flex items-center space-x-1 hover:text-bts-pink"
                      onClick={() => handleLike(post.id)}
                    >
                      {post.isLiked ? (
                        <HeartIconSolid className="h-5 w-5 text-bts-pink" />
                      ) : (
                        <HeartIcon className="h-5 w-5" />
                      )}
                      <span>{post.likes}</span>
                    </button>
                    <button className="flex items-center space-x-1 hover:text-bts-pink">
                      <ChatBubbleLeftIcon className="h-5 w-5" />
                      <span>{post.comments}</span>
                    </button>
                    <button className="flex items-center space-x-1 hover:text-bts-pink">
                      <ShareIcon className="h-5 w-5" />
                      <span>{post.shares}</span>
                    </button>
                  </div>
                  <button 
                    className="hover:text-bts-pink"
                    onClick={() => handleBookmark(post.id)}
                  >
                    {post.isBookmarked ? (
                      <BookmarkIconSolid className="h-5 w-5 text-bts-pink" />
                    ) : (
                      <BookmarkIcon className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Forum;
