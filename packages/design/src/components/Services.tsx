import { Link } from '@tanstack/react-router';
import { Github, Link as Link1, Lock } from 'lucide-react';

interface Item {
  name: string;
  shortName?: string;
  url?: string;
  repo?: string;
  innerUrl?: string;
  stack?: string;
  isPrivate?: boolean;
  isDeprecated?: boolean;
  path?: string;
  subItems?: Item[];
}

export default function Services() {
  const infras: Item[] = [
    {
      name: 'nginx',
      innerUrl: ':80/443',
      path: '/etc/nginx',
      isPrivate: true,
    },
    {
      name: 'tailscale',
      isPrivate: true,
    },
    {
      name: 'Grafana',
      url: 'https://grafana.0ch.me',
      innerUrl: ':3000',
      path: '~/services/grafana',
      stack: 'docker',
      subItems: [
        {
          name: 'influxdb',
          innerUrl: ':8086',
          stack: 'docker',
        },
        {
          name: 'prometheus',
          innerUrl: ':9090',
          stack: 'docker',
        },
        {
          name: 'node-exporter',
          innerUrl: ':9100',
          stack: 'docker',
        },
        {
          name: 'process-exporter',
          innerUrl: ':9256',
          stack: 'docker',
        },
        {
          name: 'nginx-exporter',
          innerUrl: ':4040',
          stack: 'docker',
        },
      ],
    },
    {
      name: 'signoz',
      url: 'https://signoz.0ch.me',
      innerUrl: ':3301',
      path: '~/services/signoz/deploy/docker',
      stack: 'docker',
      subItems: [
        {
          name: 'OTEL collector',
          innerUrl: ':4317',
        },
        {
          name: 'clickhouse',
          stack: 'docker',
        },
      ],
    },
    {
      name: 'umami',
      url: 'https://umami.0ch.me',
      innerUrl: ':3050',
      path: '~/services/umami',
      stack: 'docker',
      subItems: [
        {
          name: 'postgres',
          stack: 'docker',
        },
      ],
    },
    {
      name: 'Pocket ID',
      url: 'https://auth.cnd.sh',
      innerUrl: ':1411',
      path: '~/services/pocketid',
      stack: 'docker',
    },
  ];

  const services: Item[] = [
    {
      name: '0chan.dev',
      url: 'https://0chan.dev',
      innerUrl: ':4173',
      path: '~/repo/0chan.dev',
      stack: 'svelte',
    },
    {
      name: 'blog.0chan.dev',
      shortName: 'blog',
      url: 'https://blog.0chan.dev',
      innerUrl: ':9000',
      path: '~/repo/blog',
      stack: 'gatsby',
    },
    {
      name: 'cnd.sh',
      url: 'https://cnd.sh',
      innerUrl: ':3020',
      path: '~/repo/cnd.sh',
      stack: 'tanstack',
    },
    {
      name: 'undusted-sales',
      url: 'https://5ml.0ch.me/undusted-sales',
      innerUrl: ':3010',
      path: '~/repo/undusted-sales',
      stack: 'nextjs',
    },
    {
      name: 'legeno.gg',
      url: 'https://legeno.gg',
      repo: 'https://github.com/20chan/legeno.gg',
      innerUrl: ':4010',
      path: '~/repo/legeno.gg',
      stack: 'nextjs',
    },
    {
      name: 'legeno-backend',
      url: 'https://patch.legeno.gg/api/health',
      repo: 'https://github.com/20chan/legeno-backend',
      innerUrl: ':4100',
      path: '~/repo/legeno-backend',
      stack: '.net',
    },
    {
      name: 'legeno-frontend',
      url: 'https://patch.legeno.gg',
      repo: 'https://github.com/20chan/legeno-frontend',
      innerUrl: ':4110',
      path: '~/repo/legeno-frontend',
      stack: 'tanstack',
    },
    {
      name: 'radiotape',
      url: 'https://rp.legeno.gg',
      repo: 'https://github.com/20chan/radiotape',
      innerUrl: ':4020',
      path: '~/repo/radiotape',
      stack: 'nextjs',
    },
    {
      name: 'retsuko',
      isPrivate: true,
      subItems: [
        {
          name: 'retsuko-frontend',
          shortName: 'frontend',
          innerUrl: ':3001',
          path: '~/repo/yuno',
          repo: 'https://github.com/retsuko-trader/retsuko-frontend',
          stack: 'nextjs',
        },
        {
          name: 'retsuko-backend',
          shortName: 'backend',
          innerUrl: ':3401',
          path: '~/repo/retsuko-backend',
          repo: 'https://github.com/retsuko-trader/retsuko-backend',
          stack: '.net',
        },
        {
          name: 'retsuko-strategy-prod',
          shortName: 'strategy-prod',
          innerUrl: ':3402',
          path: '~/repo/retsuko-strategy',
          repo: 'https://github.com/retsuko-trader/retsuko-strategies',
          stack: '.net',
        },
        {
          name: 'retsuko-strategy-dev',
          shortName: 'strategy-dev',
          innerUrl: ':3403',
          path: '~/repo/retsuko-strategy',
          repo: 'https://github.com/retsuko-trader/retsuko-strategies',
          stack: '.net',
        },
        {
          name: 'retsuko-worker',
          shortName: 'worker',
          innerUrl: ':3405',
          path: '~/repo/retsuko-worker',
          repo: 'https://github.com/retsuko-trader/retsuko-worker',
          stack: '.net',
        },
        {
          name: 'redis',
          innerUrl: ':6380',
          stack: 'docker',
        },
      ]
    },
    {
      name: 'discord-bot-alice',
      isPrivate: true,
      path: '~/repo/discord-alice',
      repo: 'https://github.com/20chan/minecraft-stats-discord-bot',
      stack: 'nodejs',
    },
    {
      name: 'discord-bot-freddie',
      isPrivate: true,
      path: '~/repo/freddie',
      repo: 'https://github.com/20chan/freddie',
      stack: 'nodejs',
    },
    {
      name: 'smashlegends.gg',
      isPrivate: true,
      isDeprecated: true,
      path: '~/repo/archive/smashlegends.gg',
      repo: 'https://github.com/20chan/smashlegends.gg',
      stack: 'nextjs',
      subItems: [
        {
          name: 'clickhouse',
          isDeprecated: true,
        },
        {
          name: 'redis',
          stack: 'docker',
          isDeprecated: true,
        },
      ],
    },
  ];

  const games: Item[] = [
    {
      name: 'factorio',
      isPrivate: true,
      subItems: [
        {
          name: 'vanilla',
          innerUrl: ':34197',
          path: '~/services/factorio',
        },
        {
          name: 'spaceage',
          innerUrl: ':34198',
          path: '~/services/factorio-spaceage',
        },
      ],
    },
    {
      name: 'minecraft',
      isPrivate: true,
      innerUrl: ':25565',
      path: '~/services/minecraft',
    },
    {
      name: 'valheim',
      isPrivate: true,
      innerUrl: ':2456',
    },
  ];

  return (
    <div className=''>
      <div className='flex flex-col gap-2'>
        <ServiceList name="Infrastructure" items={infras} />
        <ServiceList name="Services" items={services} />
        <ServiceList name="Games" items={games} />
      </div>
    </div>
  )
}

function ServiceList({ name, items }: { name: string, items: Item[] }) {
  return (
    <div className="">
      <h2 className="font-bold border-b border-fg mb-0.5 uppercase">
        {name}
      </h2>

      {items.map(ServiceCard)}
    </div>
  );
}

function ServiceCard({ name, shortName, url, innerUrl, repo, stack, isPrivate, isDeprecated, subItems }: Item) {
  const icon = ((isPrivate || url === undefined)
    ? <Lock size={12} className='inline-block mr-1' />
    : <Link1 size={12} className='inline-block mr-1' />
  );

  const nameInner = (
    <>
      <div className='hidden lg:block'>
        {icon}{name}
      </div>
      <div className='lg:hidden'>
        {icon}{shortName ?? name}
      </div>
    </>
  )

  const nameElement = (url != undefined
    ? <Link to={url} className="hover:underline">{nameInner}</Link>
    : <span>{nameInner}</span>
  );

  const repoElement = (repo !== undefined
    ? <Link to={repo} className="text-sm text-muted hover:underline ml-2">
        <Github size={14} className="inline-block" />
      </Link>
    : null
  );

  const inner = (
    <div className='flex flex-row hover:bg-fg/10'>
      <div className={`flex-1 text-sm lg:text-base ${isDeprecated ? 'line-through text-muted' : ''}`}>
        {nameElement}
      </div>

      <div className='basis-4 lg:basis-16'>
        {repoElement}
      </div>

      <div className='basis-16 lg:basis-20'>
        {innerUrl && (<span className='text-sm text-muted ml-2'>{innerUrl}</span>)}
      </div>

      <div className='basis-16 lg:basis-24 text-xs leading-6 lg:text-sm text-muted'>
        {stack}
      </div>
    </div>
  );

  const subItemElements = subItems?.length ? (
    <div className="ml-4 text-muted">
      {subItems.map(ServiceCard)}
    </div>
  ) : null;

  return (
    <div key={name} className={`${isDeprecated ? '' : ''}`}>
      {inner}
      {subItemElements}
    </div>
  )
}
