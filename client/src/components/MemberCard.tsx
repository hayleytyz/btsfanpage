import { Link } from 'react-router-dom';

export interface MemberCardProps {
  member: {
    id: number;
    name: string;
    realName: string;
    role: string;
    birthDate: string;
    image: string;
  };
}

const MemberCard = ({ member }: MemberCardProps) => {
  return (
    <div className="group relative bg-bts-dark-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-bts hover:translate-y-[-5px]">
      <div className="aspect-w-3 aspect-h-4 w-full overflow-hidden rounded-t-xl bg-bts-dark-700">
        <img
          src={member.image}
          alt={member.name}
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-white">{member.name}</h3>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r from-bts-pink to-bts-purple text-white">
            {member.role.split(', ')[0]}
          </span>
        </div>
        <p className="mt-1 text-sm text-gray-300">{member.realName}</p>
        <div className="mt-3 flex items-center text-sm text-gray-400">
          <svg
            className="h-4 w-4 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          {member.birthDate}
        </div>
        <div className="mt-4">
          <Link
            to={`/member/${member.id}`}
            className="text-sm font-medium text-bts-pink hover:text-bts-purple transition-colors duration-200 inline-flex items-center"
          >
            View profile
            <svg
              className="ml-1 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
