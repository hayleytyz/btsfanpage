import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Menu, X } from 'lucide-react';

interface NavItem {
  name: string;
  path: string;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const navItems: NavItem[] = [
    { name: 'Home', path: '/' },
    { name: 'Music', path: '/music' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'News', path: '/news' },
    { name: 'About', path: '/about' },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        type: 'spring',
        stiffness: 100,
      },
    }),
  };

  return (
    <motion.header
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={containerVariants}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            custom={0}
            variants={itemVariants}
            className="flex-shrink-0"
          >
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-bts-dark">BTS</span>
              <span className="text-sm font-medium text-bts-purple">ARMY</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, i) => (
              <motion.div key={item.name} custom={i + 1} variants={itemVariants}>
                <Link
                  to={item.path}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                    location.pathname === item.path
                      ? 'text-bts-purple bg-bts-purple/10'
                      : 'text-bts-dark/80 hover:text-bts-purple hover:bg-bts-purple/5'
                  }`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              custom={navItems.length + 1}
              variants={itemVariants}
              className="ml-2"
            >
              <Link
                to="/join"
                className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-full bg-bts-purple text-white hover:bg-opacity-90 transition-colors"
              >
                Join ARMY
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <motion.div
            custom={navItems.length + 1}
            variants={itemVariants}
            className="md:hidden"
          >
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full hover:bg-bts-purple/10 text-bts-dark/80 hover:text-bts-purple transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="md:hidden overflow-hidden"
            >
              <div className="pt-4 pb-2 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`block px-4 py-3 rounded-lg text-base font-medium ${
                      location.pathname === item.path
                        ? 'bg-bts-purple/10 text-bts-purple'
                        : 'text-bts-dark/80 hover:bg-bts-purple/5'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="/join"
                  className="block w-full mt-4 px-4 py-3 text-center rounded-lg bg-bts-purple text-white hover:bg-opacity-90 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Join ARMY
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Navbar;
