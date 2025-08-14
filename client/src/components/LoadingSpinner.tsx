import type { CSSProperties } from 'react';
import { Loader2 } from 'lucide-react';

const sizeMap = {
  sm: '16px',
  md: '24px',
  lg: '32px',
} as const;

type SizeKey = keyof typeof sizeMap;

const variantMap = {
  primary: '#9333ea', // purple-600
  secondary: '#c084fc', // purple-400
} as const;

type VariantKey = keyof typeof variantMap;

interface LoadingSpinnerProps {
  size?: SizeKey;
  style?: CSSProperties;
  variant?: VariantKey;
}

export default function LoadingSpinner({
  size = 'md',
  variant = 'primary',
  style,
}: LoadingSpinnerProps) {
  const sizeValue = sizeMap[size] || sizeMap.md;
  const color = variantMap[variant] || variantMap.primary;

  return (
    <div className="flex items-center justify-center" style={style}>
      <Loader2
        className="animate-spin"
        style={{
          width: sizeValue,
          height: sizeValue,
          color,
        }}
        aria-hidden="true"
      />
      <span className="sr-only">Loading...</span>
    </div>
  );
}
