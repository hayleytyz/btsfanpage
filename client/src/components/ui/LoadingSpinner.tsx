import { FC } from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'white' | 'pink' | 'purple';
}

const sizeClasses = {
  sm: 'h-4 w-4 border-2',
  md: 'h-8 w-8 border-2',
  lg: 'h-12 w-12 border-4',
};

const colorClasses = {
  white: 'border-b-white',
  pink: 'border-b-bts-pink',
  purple: 'border-b-bts-purple',
};

const LoadingSpinner: FC<LoadingSpinnerProps> = ({
  size = 'md',
  color = 'pink',
}) => {
  return (
    <div className="flex items-center justify-center">
      <div
        className={`
          ${sizeClasses[size]}
          ${colorClasses[color]}
          border-b-transparent
          rounded-full
          animate-spin
        `}
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
