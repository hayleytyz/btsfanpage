import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const members = [
  { id: 1, name: 'RM', position: 'Leader, Rapper', image: 'https://i.imgur.com/rm.jpg', funFact: 'Speaks fluent English and leads BTS.' },
  { id: 2, name: 'Jin', position: 'Vocalist, Visual', image: 'https://i.imgur.com/jin.jpg', funFact: 'Known as "Worldwide Handsome".' },
  { id: 3, name: 'SUGA', position: 'Rapper, Producer', image: 'https://i.imgur.com/suga.jpg', funFact: 'Produces as Agust D.' },
  { id: 4, name: 'j-hope', position: 'Rapper, Dancer', image: 'https://i.imgur.com/jhope.jpg', funFact: 'Main dancer with bright energy.' },
  { id: 5, name: 'Jimin', position: 'Vocalist, Dancer', image: 'https://i.imgur.com/jimin.jpg', funFact: 'Graduated from Busan High School of Arts.' },
  { id: 6, name: 'V', position: 'Vocalist', image: 'https://i.imgur.com/v.jpg', funFact: 'Also acts in dramas.' },
  { id: 7, name: 'Jung Kook', position: 'Vocalist, Dancer', image: 'https://i.imgur.com/jk.jpg', funFact: 'The "Golden Maknae".' },
];

const MemberCard = ({ member, onClick }: { member: any, onClick: () => void }) => (
  <motion.div
    className="relative rounded-xl overflow-hidden cursor-pointer group"
    onClick={onClick}
    whileHover={{ y: -5 }}
    transition={{ type: 'spring', stiffness: 300 }}
  >
    <div className="aspect-square overflow-hidden">
      <motion.img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
      <h3 className="text-xl font-bold text-white">{member.name}</h3>
      <p className="text-bts-pink text-sm">{member.position}</p>
    </div>
  </motion.div>
);

const MemberDetail = ({ member, onClose }: { member: any, onClose: () => void }) => (
  <motion.div
    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={onClose}
  >
    <motion.div
      className="relative bg-bts-dark-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-3xl font-bold text-white">{member.name}</h2>
            <p className="text-bts-pink">{member.position}</p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            ✕
          </button>
        </div>
        <div className="space-y-4 text-gray-300">
          <p className="text-lg">{member.funFact}</p>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

const MeetMembers = () => {
  const [selectedMember, setSelectedMember] = useState<any>(null);

  return (
    <section className="py-16 bg-bts-dark-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Meet the Members</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Get to know each member of BTS and their unique talents and personalities.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {members.map((member) => (
            <MemberCard
              key={member.id}
              member={member}
              onClick={() => setSelectedMember(member)}
            />
          ))}
        </div>

        <AnimatePresence>
          {selectedMember && (
            <MemberDetail
              member={selectedMember}
              onClose={() => setSelectedMember(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default MeetMembers;
