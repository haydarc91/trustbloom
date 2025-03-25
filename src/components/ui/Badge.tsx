
import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'secondary' | 'accent';
  className?: string;
}

const Badge = ({ children, variant = 'default', className }: BadgeProps) => {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-sm font-medium transition-colors',
        {
          'bg-brand-100 text-brand-800': variant === 'default',
          'border border-brand-200 text-brand-700': variant === 'outline',
          'bg-gray-100 text-gray-800': variant === 'secondary',
          'bg-brand-500 text-white': variant === 'accent',
        },
        className
      )}
    >
      {children}
    </span>
  );
};

export default Badge;
