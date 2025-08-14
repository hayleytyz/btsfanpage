interface LoadingSpinnerProps {
  size?: keyof typeof sizeClasses;
  color?: keyof typeof colorClasses;
}

const sizeClasses = {
  sm: 'h-4 w-4 border-2',
  md: 'h-8 w-8 border-2',
  lg: 'h-12 w-12 border-4',
} as const;

const colorClasses = {
  white: 'border-white border-t-transparent',
  pink: 'border-bts-pink border-t-transparent',
  purple: 'border-bts-purple border-t-transparent',
} as const;

function LoadingSpinner({
  size = 'md',
  color = 'pink',
}: LoadingSpinnerProps) {
  const sizeClass = size in sizeClasses ? sizeClasses[size as keyof typeof sizeClasses] : sizeClasses.md;
  const colorClass = color in colorClasses ? colorClasses[color as keyof typeof colorClasses] : colorClasses.pink;

  return (
    <div className="flex items-center justify-center">
      <div
        className={`animate-spin rounded-full ${sizeClass} ${colorClass}`}
        aria-label="Loading..."
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
