import { NavLink } from '#/components';
import type { LucideIcon } from 'lucide-react'
import type React from 'react';

export interface HeaderProps {
  Icon?: LucideIcon;
  title: React.ReactNode;
};

export function Header(props: HeaderProps) {
  const {
    Icon,
    title,
  } = props;

  return (
    <header className="px-(--layout-padding) w-full fixed top-0 z-100 h-(--header-height) bg-bg">
      <div className="h-full flex items-center border-b border-fg">
        <NavLink to="/" className="text-2xl font-bold">
          {Icon && <Icon size={28} className="inline-block mr-2" />}
          {title}
        </NavLink>
      </div>
    </header>
  )
}
