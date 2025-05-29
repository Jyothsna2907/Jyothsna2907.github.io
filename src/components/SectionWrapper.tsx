import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionWrapperProps {
  id: string;
  title?: string;
  children: ReactNode;
  className?: string;
  titleClassName?: string;
  contentClassName?: string;
}

export function SectionWrapper({ id, title, children, className, titleClassName, contentClassName }: SectionWrapperProps) {
  return (
    <section id={id} className={cn('container mx-auto px-4 md:px-6', className)}>
      {title && (
        <h2 className={cn('text-3xl md:text-4xl font-bold mb-10 md:mb-12 text-center text-primary', titleClassName)}>
          {title}
        </h2>
      )}
      <div className={cn(contentClassName)}>
        {children}
      </div>
    </section>
  );
}
