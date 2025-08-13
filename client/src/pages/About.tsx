import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen bg-bts-dark-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">About BTS</h1>
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="bg-bts-dark-800 rounded-xl p-8 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-bts-pink mb-4">Who is BTS?</h2>
            <p className="text-gray-300 mb-4">
              BTS, also known as the Bangtan Boys, is a South Korean boy band formed in 2010 and debuting in 2013 under Big Hit Entertainment. 
              The septet—consisting of members Jin, Suga, J-Hope, RM, Jimin, V, and Jungkook—co-writes and co-produces much of their output.
            </p>
            <p className="text-gray-300">
              Their lyrics, often focused on personal and social commentary, touch on themes of mental health, troubles of school-age youth, 
              loss, the journey towards loving oneself, and individualism. Their work features references to literature and psychological 
              concepts and includes an alternative universe storyline.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
