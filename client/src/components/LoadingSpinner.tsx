import type { FC, CSSProperties } from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  style?: CSSProperties;
  variant?: 'primary' | 'secondary';
}

const sizeMap = {
  sm: '16px',
  md: '24px',
  lg: '32px',
};

const variantMap = {
  primary: '#9333ea', // purple-600
  secondary: '#c084fc', // purple-400
};

const LoadingSpinner: FC<LoadingSpinnerProps> = ({
  size = 'md',
  style = {},
  variant = 'primary',
  ...props
}) => {
  const spinnerSize = sizeMap[size] || sizeMap.md;
  const spinnerColor = variantMap[variant] || variantMap.primary;

  return (
    <div 
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...style
      }} 
      {...props}
    >
      <Loader2
        style={{
          animation: 'spin 1s linear infinite',
          width: spinnerSize,
          height: spinnerSize,
          color: spinnerColor
        }}
        aria-hidden="true"
      />
      <span style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', border: 0 }}>
        Loading...
      </span>
    </div>
  );
};

export default LoadingSpinner;
