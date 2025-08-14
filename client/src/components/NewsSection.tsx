import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Heart, MessageCircle } from 'lucide-react';

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
  likes: string;
  comments: number;
}

const NewsSection = () => {
  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: 'BTS Announces New World Tour "Permission to Dance On Stage - Seoul"',
      excerpt: 'BTS will hold their first in-person concert in Seoul in over two years this March, with a live audience.',
      date: '2023-02-15',
      readTime: '3 min read',
      image: '/images/news/tour-announcement.jpg',
      category: 'Tour',
      likes: '245K',
      comments: 12,
    },
    {
      id: 2,
      title: 'BTS Wins Artist of the Year at the 2022 American Music Awards',
      excerpt: 'BTS took home three awards at the AMAs, including the coveted Artist of the Year for the first time.',
      date: '2022-11-21',
      readTime: '4 min read',
      image: '/images/news/amas-2022.jpg',
      category: 'Awards',
      likes: '312K',
      comments: 28,
    },
    {
      id: 3,
      title: 'BTS Members Renew Contracts with Big Hit Music',
      excerpt: 'All seven members have renewed their contracts with Big Hit Music, ensuring their future activities together.',
      date: '2022-10-17',
      readTime: '2 min read',
      image: '/images/news/contract-renewal.jpg',
      category: 'News',
      likes: '1.2M',
      comments: 42,
    },
  ];

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

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
    <section id="news" className="py-20 bg-bts-light/10">
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
            Latest News
          </h2>
          <p className="text-lg text-bts-dark/70 max-w-2xl mx-auto">
            Stay updated with the latest news and announcements from BTS and Big Hit Music.
          </p>
        </motion.div>

        {/* News Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {newsItems.map((item) => (
            <motion.article
              key={item.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-bts-purple text-white text-xs font-medium">
                    {item.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center text-sm text-bts-dark/50 mb-4">
                  <div className="flex items-center mr-4">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{formatDate(item.date)}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{item.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-bts-dark mb-3 line-clamp-2">
                  {item.title}
                </h3>
                
                <p className="text-bts-dark/70 mb-6 line-clamp-3">
                  {item.excerpt}
                </p>
                
                <div className="mt-auto pt-4 border-t border-bts-light/30 flex items-center justify-between">
                  <div className="flex space-x-4 text-sm">
                    <span className="flex items-center text-bts-dark/60">
                      <Heart className="w-4 h-4 mr-1" />
                      {item.likes}
                    </span>
                    <span className="flex items-center text-bts-dark/60">
                      <MessageCircle className="w-4 h-4 mr-1" />
                      {item.comments}
                    </span>
                  </div>
                  
                  <button className="text-bts-purple hover:text-bts-purple/80 transition-colors flex items-center text-sm font-medium">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <button className="inline-flex items-center justify-center px-8 py-3 bg-bts-purple text-white rounded-full font-medium hover:bg-opacity-90 transition-all hover:shadow-lg hover:shadow-bts-purple/30">
            <span>View All News</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsSection;
