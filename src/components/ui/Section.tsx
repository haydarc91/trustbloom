
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  hasPattern?: boolean;
}

const Section = ({ children, className, id, hasPattern = false }: SectionProps) => {
  return (
    <section
      id={id}
      className={cn(
        'py-16 md:py-24',
        hasPattern && 'bg-section-pattern',
        className
      )}
    >
      <div className="container-wide">{children}</div>
    </section>
  );
};

export default Section;
