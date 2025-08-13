import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Youtube, Facebook, Weverse, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Explore',
      links: [
        { name: 'Home', to: '/' },
        { name: 'About BTS', to: '/about' },
        { name: 'Discography', to: '/music' },
        { name: 'Gallery', to: '/gallery' },
        { name: 'Videos', to: '/videos' },
        { name: 'Tour', to: '/tour' },
      ],
    },
    {
      title: 'Community',
      links: [
        { name: 'ARMY Zone', to: '/army-zone' },
        { name: 'Fan Projects', to: '/projects' },
        { name: 'Fan Art', to: '/fanart' },
        { name: 'Forums', to: '/forums' },
        { name: 'Merchandise', to: '/shop' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'News & Updates', to: '/news' },
        { name: 'BTS Official', to: 'https://ibighit.com/bts/eng/', external: true },
        { name: 'Weverse', to: 'https://weverse.io/', external: true },
        { name: 'BTS Universe', to: 'https://www.ibighit.com/bts/eng/discography/', external: true },
      ],
    },
  ];

  const socialLinks = [
    { 
      name: 'Instagram', 
      icon: <Instagram className="h-5 w-5" />, 
      href: 'https://www.instagram.com/bts.bighitofficial/' 
    },
    { 
      name: 'Twitter', 
      icon: <Twitter className="h-5 w-5" />, 
      href: 'https://twitter.com/BTS_twt' 
    },
    { 
      name: 'YouTube', 
      icon: <Youtube className="h-5 w-5" />, 
      href: 'https://www.youtube.com/user/BANGTANTV' 
    },
    { 
      name: 'Facebook', 
      icon: <Facebook className="h-5 w-5" />, 
      href: 'https://www.facebook.com/bangtan.official' 
    },
    { 
      name: 'Weverse', 
      icon: <Weverse className="h-5 w-5" />, 
      href: 'https://weverse.io/bts/feed' 
    },
  ];

  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.footer 
      className="bg-bts-dark-900 text-gray-300 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={footerVariants}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-bts-purple/5 rounded-full filter blur-3xl"></div>
        <div className="absolute -left-20 bottom-0 w-80 h-80 bg-bts-pink/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative">
        {/* Main Footer Content */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Logo and Description */}
          <motion.div 
            className="lg:col-span-1"
            variants={itemVariants}
          >
            <Link 
              to="/" 
              className="inline-block mb-6"
            >
              <motion.span 
                className="text-3xl font-black bg-gradient-to-r from-bts-pink via-bts-purple to-bts-gold bg-clip-text text-transparent"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                BTS ARMY
              </motion.span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your ultimate destination for all things BTS. Join millions of ARMY members worldwide in celebrating the music and message of BTS.
            </p>
            
            {/* Social Media Links */}
            <div className="mt-8">
              <h4 className="text-white font-medium mb-4 text-lg">Connect With Us</h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-bts-dark-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-bts-dark-700 transition-all duration-300 group"
                    aria-label={item.name}
                    whileHover={{ y: -3, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="group-hover:scale-110 transition-transform">
                      {item.icon}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <motion.div 
              key={section.title}
              variants={itemVariants}
              custom={index}
            >
              <h4 className="text-white font-semibold text-lg mb-6 relative inline-block">
                {section.title}
                <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-bts-pink to-bts-purple"></span>
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <motion.li 
                    key={link.name}
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    {link.external ? (
                      <a
                        href={link.to}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors flex items-center group"
                      >
                        {link.name}
                        <ArrowRight className="ml-1 w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:ml-2 transition-all" />
                      </a>
                    ) : (
                      <Link
                        to={link.to}
                        className="text-gray-400 hover:text-white transition-colors flex items-center group"
                      >
                        {link.name}
                        <ArrowRight className="ml-1 w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:ml-2 transition-all" />
                      </Link>
                    )}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Newsletter */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-semibold text-lg mb-6 relative inline-block">
              Stay Updated
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-bts-pink to-bts-purple"></span>
            </h4>
            <p className="text-gray-400 mb-6">
              Subscribe to our newsletter for the latest BTS news, releases, and exclusive content.
            </p>
            <form className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-5 py-3 bg-bts-dark-800 border border-bts-dark-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-bts-pink/50 focus:border-transparent text-white placeholder-gray-500 pr-12 transition-all duration-300"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-white bg-gradient-to-r from-bts-pink to-bts-purple rounded-lg hover:opacity-90 transition-opacity"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
            <p className="text-xs text-gray-500 mt-3">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-bts-dark-700 pt-8"
          variants={itemVariants}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 text-center md:text-left">
              © {currentYear} BTS ARMY. Not affiliated with BTS or HYBE Corporation.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-4 md:mt-0">
              <Link 
                to="/privacy" 
                className="text-sm text-gray-500 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms" 
                className="text-sm text-gray-500 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <Link 
                to="/cookies" 
                className="text-sm text-gray-500 hover:text-white transition-colors"
              >
                Cookies
              </Link>
              <Link 
                to="/disclaimer" 
                className="text-sm text-gray-500 hover:text-white transition-colors"
              >
                Disclaimer
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
