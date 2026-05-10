import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import { Page, RootLayout } from '#/layouts'

import appCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: '@cnd.sh/design',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="">
      <head>
        <HeadContent />
      </head>
      <body>
        <RootLayout
          header={{
            title: '@cnd.sh/design',
          }}
          nav={{
            items: navItems,
          }}
        >
          <Page>
            {children}
          </Page>
        </RootLayout>

        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}

const navItems = [
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
