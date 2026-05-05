import { NavLink, type NavLinkTo } from '#/components';
import { cn } from '#/utils';
import { useLocation } from '@tanstack/react-router';

type NavItem = {} | {
  name: string;
  to?: NavLinkTo;
  items?: NavItem[];
}

export interface SideNavProps {
}

const navItems: NavItem[] = [
  {
    name: '/',
    to: '/',
  },
  {
    name: 'about',
    to: '/about',
  },
  {
    name: 'contact',
    to: '/contact',
  },
  {
    name: 'service0',
    items: [
      {
        name: 'status',
        to: '/service0/status',
      },
      {
        name: 'docs',
        items: [
          {
            name: 'simple',
            to: '/service0/docs/simple',
          },
          {
            name: 'original',
            to: '/service0/docs',
          },
        ],
      },
      {
        name: 'troubleshooting',
        to: '/service0/troubleshooting',
      },
      {
        name: 'faq',
        to: '/service0/faq',
      },
    ],
  },
  {
    name: 'service1',
    items: [
      {
        name: '/',
        to: '/service1',
      },
      {
        name: 'users',
        to: '/service1/users',
      },
      {
        name: 'files',
        to: '/service1/files',
      },
      {
        name: 'audit_logs',
        to: '/service1/audit-logs',
      },
    ],
  },
];

export function SideNav(props: SideNavProps) {
  const { pathname } = useLocation();

  return (
    <nav className='relative col-start-1 row-span-full row-start-1 min-h-full'>
      <div className='absolute inset-0'>
        <div className='sticky top-(--header-height) left-0 bottom-0 h-[calc(100dvh-var(--header-height))]
          overflow-y-auto p-(--layout-padding)'>
          {navItems.map((item, index) => <NavItemElement key={index} item={item} pathname={pathname} />)}
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
