import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-bts-dark">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-bts-dark via-bts-dark/90 to-bts-dark/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-bts-dark via-bts-dark/60 to-transparent" />
        <div 
          className="w-full h-full bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center md:text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-bts-purple/10 text-bts-purple text-sm font-medium mb-6"
          >
            <span className="relative flex h-3 w-3 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bts-purple opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-bts-purple"></span>
            </span>
            New Album: Proof - Out Now
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
          >
            BTS
            <span className="block text-bts-purple mt-2">Beyond The Scene</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-bts-light/80 mb-10 max-w-2xl mx-auto md:mx-0"
          >
            Experience the magic of BTS through their music, message, and journey with ARMY.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <a
              href="#music"
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-bts-purple text-white rounded-full font-medium overflow-hidden transition-all duration-300 hover:bg-opacity-90 hover:shadow-lg hover:shadow-bts-purple/30"
            >
              <span className="relative z-10 flex items-center">
                Explore Music
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-bts-purple to-bts-pink opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </a>
            
            <a
              href="#latest-video"
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-transparent text-white border-2 border-white/20 rounded-full font-medium overflow-hidden transition-all duration-300 hover:bg-white/10 hover:border-white/30"
            >
              <span className="relative z-10 flex items-center">
                <Play className="w-5 h-5 mr-2" fill="currentColor" />
                Watch Latest MV
              </span>
            </a>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center"
        >
          {[
            { value: '100M+', label: 'Monthly Listeners' },
            { value: '50B+', label: 'Streams' },
            { value: '200+', label: 'Awards' },
            { value: '#1', label: 'Billboard Hot 100' },
          ].map((stat, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm">
              <div className="text-3xl font-bold text-bts-purple mb-1">{stat.value}</div>
              <div className="text-sm text-bts-light/70">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <div className="flex flex-col items-center">
            <span className="text-sm text-bts-light/50 mb-2">Scroll to explore</span>
            <div className="w-px h-12 bg-gradient-to-b from-bts-purple to-transparent"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
