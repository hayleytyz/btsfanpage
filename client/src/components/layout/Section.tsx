import { cn } from '../../lib/utils';
import Container from './Container';
import type { ElementType, ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  id?: string;
  as?: ElementType;
  withContainer?: boolean;
  bgPattern?: 'none' | 'dots' | 'grid' | 'waves';
  bgColor?: 'none' | 'light' | 'dark' | 'lilac' | 'purple' | 'gradient';
}

const paddingClasses = {
  none: 'py-0',
  sm: 'py-12',
  md: 'py-16',
  lg: 'py-20',
  xl: 'py-24',
  '2xl': 'py-32',
};

const bgColorClasses = {
  none: '',
  light: 'bg-white dark:bg-bts-dark-900',
  dark: 'bg-bts-dark-900 text-white',
  lilac: 'bg-bts-lilac/10 dark:bg-bts-lilac/20',
  purple: 'bg-bts-purple/5 dark:bg-bts-purple/10',
  gradient:
    'bg-gradient-to-br from-bts-purple/5 via-white to-bts-pink/5 dark:from-bts-purple/10 dark:via-bts-dark-900 dark:to-bts-pink/10',
};

const bgPatternClasses = {
  none: '',
  dots: 'bg-[radial-gradient(#A349A455_1px,transparent_1px)] [background-size:16px_16px]',
  grid: 'bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] [background-size:24px_24px]',
  waves: 'bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-bts-purple/5 via-transparent to-transparent',
};

const Section = ({
  children,
  className,
  containerClassName,
  padding = 'lg',
  containerSize = 'lg',
  id,
  as: Component = 'section',
  withContainer = true,
  bgPattern = 'none',
  bgColor = 'none',
  ...props
}: SectionProps) => {
  const content = withContainer ? (
    <Container size={containerSize} className={containerClassName}>
      {children}
    </Container>
  ) : (
    children
  );

  return (
    <Component
      id={id}
      className={cn(
        'relative',
        paddingClasses[padding],
        bgColorClasses[bgColor],
        bgPattern !== 'none' && bgPatternClasses[bgPattern],
        className
      )}
      {...props}
    >
      {content}
    </Component>
  );
};

export default Section;
