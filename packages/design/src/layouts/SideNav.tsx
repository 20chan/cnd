import { NavLink, type NavLinkTo } from '#/components';
import { cn } from '#/utils';
import { useLocation } from '@tanstack/react-router';

type NavItem = {} | {
  name: string;
  to?: NavLinkTo;
  items?: NavItem[];
}

export interface SideNavProps {
  items: NavItem[];
}

export function SideNav({ items }: SideNavProps) {
  const { pathname } = useLocation();

  return (
    <nav className='relative col-start-1 row-span-full row-start-1 min-h-full'>
      <div className='absolute inset-0'>
        <div className='sticky top-(--header-height) bottom-0 left-0 w-full
          h-full max-h-[calc(100dvh-var(--header-height))] overflow-y-auto p-(--layout-padding)'>
          {items.map((item, index) => <NavItemElement key={index} item={item} pathname={pathname} />)}
        </div>
      </div>
    </nav>
  )
}

function NavItemElement({ item, pathname, depth = 0 }: { item: NavItem, pathname: string, depth?: number }) {
  if (!('name' in item)) {
    return (
      <div className='block my-(--layout-padding)'>
      </div>
    )
  }

  const items = item.items ?? [];
  const itemsElement = items.length > 0 && (
    <div className='pl-(--layout-gap)'>
      {items.map((item, index) => (
        <NavItemElement key={index} item={item} pathname={pathname} depth={depth + 1} />
      ))}
    </div>
  );

  const isHeader = items.length > 0 && item.to === undefined && depth == 0;
  if (item.to === undefined) {
    return (
      <>
        <div className={cn('block text-muted', isHeader && 'text-fg font-bold mt-(--layout-gap)')}>
          {item.name}
        </div>
        {itemsElement}
      </>
    )
  }

  const navigated = pathname === item.to;

  return (
    <>
      <NavLink
        to={item.to}
        navigated={navigated}
        className={cn('block text-muted', navigated && 'text-fg', isHeader && 'text-fg font-bold mt-(--layout-gap)')}
      >
        {item.name}
      </NavLink>
      {itemsElement}
    </>
  );
}
