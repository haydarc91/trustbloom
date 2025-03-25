
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  hasPattern?: boolean;
  color?: 'default' | 'primary' | 'secondary' | 'accent' | 'gradient';
}

const Section = ({ 
  children, 
  className, 
  id, 
  hasPattern = false, 
  color = 'default' 
}: SectionProps) => {
  return (
    <section
      id={id}
      className={cn(
        'py-16 md:py-24',
        hasPattern && 'bg-section-pattern',
        color === 'primary' && 'bg-brand-50',
        color === 'secondary' && 'bg-blue-50',
        color === 'accent' && 'bg-gradient-to-r from-brand-50 to-blue-50',
        color === 'gradient' && 'bg-gradient-to-br from-brand-100/50 via-white to-blue-50/50',
        className
      )}
    >
      <div className="container-wide">{children}</div>
    </section>
  );
};

export default Section;
