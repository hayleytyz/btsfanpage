import { cn } from '../../lib/utils';
import type { ElementType, ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  as?: ElementType;
}

const maxWidthClasses = {
  sm: 'max-w-3xl',
  md: 'max-w-5xl',
  lg: 'max-w-7xl',
  xl: 'max-w-[1440px]',
  full: 'max-w-full',
};

const paddingClasses = {
  none: 'px-0',
  sm: 'px-4',
  md: 'px-6',
  lg: 'px-8',
  xl: 'px-12',
};

const Container = ({
  children,
  className,
  size = 'lg',
  padding = 'md',
  as: Component = 'div',
  ...props
}: ContainerProps) => {
  return (
    <Component
      className={cn(
        'w-full mx-auto',
        maxWidthClasses[size],
        paddingClasses[padding],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Container;
