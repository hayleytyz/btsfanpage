import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon, HomeIcon } from '@heroicons/react/24/outline';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-bts-dark-900 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="mx-auto w-32 h-32 bg-gradient-to-r from-bts-pink to-bts-purple rounded-full flex items-center justify-center text-5xl font-bold text-white">
          404
        </div>
        <h2 className="mt-6 text-3xl font-extrabold text-white">
          Page not found
        </h2>
        <p className="mt-2 text-lg text-gray-300">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="group relative w-full sm:w-auto flex justify-center py-3 px-6 border border-transparent text-sm font-medium rounded-md text-white bg-bts-dark-700 hover:bg-bts-dark-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bts-pink transition-colors duration-200"
          >
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Go back
          </button>
          <button
            onClick={() => navigate('/')}
            className="group relative w-full sm:w-auto flex justify-center py-3 px-6 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-bts-pink to-bts-purple hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bts-pink transition-all duration-200"
          >
            <HomeIcon className="h-5 w-5 mr-2" />
            Go to home
          </button>
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Still can't find what you're looking for?{' '}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="font-medium text-bts-pink hover:text-bts-purple transition-colors duration-200"
            >
              Contact support
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
