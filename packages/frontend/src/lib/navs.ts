import type { NavItem } from '@cnd.sh/design';

export const navs: NavItem[] = [
  {
    name: 'index',
    to: '/',
  },
  {
    name: 'legeno',
    to: '/legeno',
    items: [
      {
        name: 'users',
        to: '/legeno/users',
      },
    ],
  },
  {
    name: 'wallet',
    to: '/wallet',
  },
];
