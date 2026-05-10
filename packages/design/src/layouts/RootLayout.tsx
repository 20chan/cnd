import { cn } from '#/utils';
import { Header, type HeaderProps } from './Header';
import { SideNav, type SideNavProps } from './SideNav';

interface RootLayoutProps {
  children: React.ReactNode;

  header: HeaderProps;
  nav?: SideNavProps;
}

export function RootLayout({ children, header, nav }: RootLayoutProps) {
  return (
    <div className='isolate w-full'>
      <Header {...header} />

      <div className={cn('w-full min-h-dvh pt-(--header-height)',
        nav && 'grid grid-rows-1 grid-cols-[var(--sidebar-width)_auto]')}>

        {nav && <SideNav {...nav} />}

        {children}
      </div>
    </div>
  )
}
