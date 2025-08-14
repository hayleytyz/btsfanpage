import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Youtube, Music, Heart, User, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bts-dark text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo and Description */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <span className="text-3xl font-bold">BTS</span>
              <span className="text-sm font-medium text-bts-purple bg-bts-purple/10 px-3 py-1 rounded-full">
                ARMY
              </span>
            </div>
            <p className="text-bts-light/60 text-sm leading-relaxed">
              The ultimate destination for BTS fans worldwide. Stay connected with the latest music, news, and updates from BTS and the ARMY community.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              {[
                { icon: <Facebook className="w-5 h-5" />, url: '#' },
                { icon: <Twitter className="w-5 h-5" />, url: '#' },
                { icon: <Instagram className="w-5 h-5" />, url: '#' },
                { icon: <Youtube className="w-5 h-5" />, url: '#' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  whileHover={{ y: -2 }}
                  className="w-10 h-10 rounded-full bg-bts-dark-light flex items-center justify-center text-bts-light/60 hover:text-white hover:bg-bts-purple/20 transition-all"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
              <Music className="w-5 h-5 mr-2 text-bts-purple" />
              Explore
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'Discography', url: '#' },
                { label: 'Music Videos', url: '#' },
                { label: 'Tours', url: '#' },
                { label: 'Merchandise', url: '#' },
                { label: 'Lyrics', url: '#' },
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <a 
                    href={item.url}
                    className="text-bts-light/60 hover:text-white transition-colors text-sm flex items-center group"
                  >
                    <span className="w-1 h-1 rounded-full bg-bts-purple mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
              <Heart className="w-5 h-5 mr-2 text-bts-pink" />
              Community
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'ARMY Membership', url: '#' },
                { label: 'Fan Projects', url: '#' },
                { label: 'Forums', url: '#' },
                { label: 'Fan Art', url: '#' },
                { label: 'Events', url: '#' },
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <a 
                    href={item.url}
                    className="text-bts-light/60 hover:text-white transition-colors text-sm flex items-center group"
                  >
                    <span className="w-1 h-1 rounded-full bg-bts-pink mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
              <User className="w-5 h-5 mr-2 text-bts-blue" />
              Newsletter
            </h3>
            <p className="text-bts-light/60 text-sm mb-6">
              Subscribe to receive the latest BTS news, updates, and exclusive content directly to your inbox.
            </p>
            <form className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-5 py-3 pr-12 rounded-full bg-bts-dark-light border border-bts-light/10 text-sm text-white placeholder-bts-light/40 focus:outline-none focus:ring-2 focus:ring-bts-purple/50 focus:border-transparent transition-all"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-bts-purple hover:bg-bts-purple/90 text-white p-2 rounded-full transition-colors"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <p className="text-xs text-bts-light/40">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from us.
              </p>
            </form>
          </div>
        </div>

        {/* Copyright and Legal */}
        <div className="border-t border-bts-light/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-bts-light/40 text-xs mb-4 md:mb-0">
              &copy; {currentYear} BTS Fanpage. Not affiliated with Big Hit Music or HYBE.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { label: 'Privacy Policy', url: '#' },
                { label: 'Terms of Service', url: '#' },
                { label: 'Cookie Policy', url: '#' },
                { label: 'DMCA', url: '#' },
              ].map((item, index) => (
                <a 
                  key={index}
                  href={item.url}
                  className="text-bts-light/40 hover:text-white text-xs transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          
          {/* Disclaimer */}
          <div className="mt-6 text-center md:text-left">
            <p className="text-bts-light/30 text-xs leading-relaxed">
              This is an unofficial fan-made website created for educational purposes only. All content, including images and media, are property of their respective owners.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
