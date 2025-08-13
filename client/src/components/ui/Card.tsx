import { forwardRef } from 'react';
import { cn } from '../../lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'outline' | 'filled';
  hoverEffect?: 'scale' | 'shadow' | 'none';
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full' | 'none';
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      variant = 'default',
      hoverEffect = 'shadow',
      rounded = 'xl',
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles = 'transition-all duration-200';
    
    const variants = {
      default: 'bg-white dark:bg-bts-dark-800 border border-gray-200 dark:border-bts-dark-700',
      elevated: 'bg-white dark:bg-bts-dark-800 shadow-md dark:shadow-bts-dark-900/50',
      outline: 'border border-bts-purple/20 bg-transparent',
      filled: 'bg-bts-lilac/10 dark:bg-bts-purple/10',
    };

    const hoverEffects = {
      none: '',
      scale: 'hover:scale-[1.02]',
      shadow: 'hover:shadow-lg dark:hover:shadow-bts-purple/20',
    };

    const borderRadius = {
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
      '2xl': 'rounded-2xl',
      full: 'rounded-full',
      none: 'rounded-none',
    };

    return (
      <div
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          hoverEffects[hoverEffect],
          borderRadius[rounded],
          'overflow-hidden',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

const CardHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('flex flex-col space-y-1.5 p-6', className)}
    {...props}
  />
);

const CardTitle = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h3
    className={cn(
      'text-2xl font-semibold leading-none tracking-tight text-bts-purple dark:text-white',
      className
    )}
    {...props}
  />
);

const CardDescription = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p
    className={cn('text-sm text-gray-500 dark:text-gray-400', className)}
    {...props}
  />
);

const CardContent = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('p-6 pt-0', className)} {...props} />
);

const CardFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('flex items-center p-6 pt-0', className)}
    {...props}
  />
);

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
