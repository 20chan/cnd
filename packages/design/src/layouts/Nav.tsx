export interface NavProps {
}

const navItems = [
  {
    name: 'Home',
    to: '/',
    items: []
  },
  {
    name: 'Getting Started',
    to: '/start',
    items: [
      {
        name: 'Installation',
        to: '/start/installation',
      },
      {
        name: 'Usage',
        to: '/start/usage',
      }
    ]
  },
]

export function Nav(props: NavProps) {
  return (
    <nav className='relative col-start-1 row-span-full row-start-1 min-h-full border-r border-fg'>
      <div className='absolute inset-0'>
        <div className='sticky top-(--header-height) left-0 bottom-0 h-[calc(100dvh-var(--header-height))]
          overflow-y-auto pl-(--layout-padding) py-(--layout-padding)'>
          {navItems.map(item => {
            return (
              <div key={item.to}>
                {item.name}
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  )
}
