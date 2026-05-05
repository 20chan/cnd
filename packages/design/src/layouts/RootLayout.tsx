import { Header, type HeaderProps } from './Header';
import { SideNav } from './SideNav';

interface RootLayoutProps {
  children: React.ReactNode;

  header: HeaderProps;
}

export function RootLayout({ children, header }: RootLayoutProps) {
  return (
    <div className='isolate w-full'>
      <Header {...header} />

      <div className='w-full min-h-dvh pt-(--header-height)
        grid grid-rows-1 grid-cols-[var(--sidebar-width)_auto]'>
        <SideNav />

        {children}
      </div>
    </div>
  )
}
