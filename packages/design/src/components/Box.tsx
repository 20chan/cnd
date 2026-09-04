import type React from 'react';
import { cn } from '#/utils';

export function Box({ children }: Box.Props) {
  return <div className="p-2 border border-fg">{children}</div>;
}

export namespace Box {
  export interface Props {
    children: React.ReactNode;
  }

  export function Header({
    title,
    uppercase,
  }: {
    title: React.ReactNode;
    uppercase?: boolean;
  }) {
    return (
      <div
        className={cn(
          `font-bold border-b border-fg mb-0.5 ${uppercase ? 'uppercase' : ''}`,
        )}
      >
        {title}
      </div>
    );
  }
}
