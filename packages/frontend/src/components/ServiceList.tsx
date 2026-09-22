import { Box, cn } from '@cnd.sh/design';
import { SiGithub } from '@icons-pack/react-simple-icons';
import { useSuspenseQuery } from '@tanstack/react-query';
import { Link } from '@tanstack/react-router';
import {
  Ellipsis,
  Heart,
  HeartCrack,
  HeartOff,
  Link as Link1,
  Lock,
} from 'lucide-react';
import * as R from 'remeda';
import type { Service } from '#/lib';
import { healthQueryOptions } from './services.query';

export interface ServiceListProps {
  services: Service[];
}

export function ServiceList({ services }: ServiceListProps) {
  const servicesByKind = R.groupBy(services, (service) => service.kind);

  return (
    <div className="flex flex-col gap-2">
      {Object.entries(servicesByKind).map(([kind, services0]) => (
        <div key={kind}>
          <div className="font-bold uppercase">{kind}</div>
          {services0.map((service) => (
            <Row key={service.name} service={service} />
          ))}
        </div>
      ))}
    </div>
  );
}

function Row({ service }: { service: Service }) {
  const subItems = service.items?.map((item) => (
    <div key={item.name}>
      <Row service={item} />
    </div>
  ));
  const icon = !service.public ? (
    <Lock size={12} className="inline-block ml-1" />
  ) : service.url !== undefined ? (
    <Link1 size={12} className="inline-block ml-1" />
  ) : null;

  const healthQuery = useSuspenseQuery(healthQueryOptions(service.fullName));

  const healthElementFn = () => {
    if (healthQuery.isPending) {
      return <Ellipsis size={14} className="inline-block mr-1 text-muted" />;
    }

    const status = healthQuery.data.result;
    if (status === null) {
      return <HeartOff size={14} className="inline-block mr-1 text-muted" />;
    }

    if (status === false) {
      return <HeartCrack size={14} className="inline-block mr-1 text-red" />;
    }

    return <Heart size={14} className="inline-block mr-1 text-green" />;
  };

  const nameElement = (
    <>
      {service.url === undefined ? (
        <>
          {service.name}
          {icon}
        </>
      ) : (
        <Link to={service.url} className="hover:underline">
          {service.name}
          {icon}
        </Link>
      )}
    </>
  );

  const ports = service.ports ?? [];
  const portsDisplay = ports.length === 0 ? '' : `:${ports.join('/')}`;

  return (
    <div>
      <div className="flex flex-row hover:bg-fg/10">
        <div
          className={cn(
            'flex-1 text-sm lg:text-base',
            service.deprecated ? 'line-through text-muted' : '',
          )}
        >
          {healthElementFn()}
          {nameElement}
        </div>

        <div className="w-8">
          {service.repo !== undefined ? (
            <Link
              to={service.repo}
              className="text-sm text-muted hover:underline ml-2"
            >
              <SiGithub
                size={12}
                className="inline-block"
                title={service.repo}
              />
            </Link>
          ) : null}
        </div>

        <div className="w-16 lg:w-20 text-muted">{portsDisplay}</div>

        <div className="w-16 lg:w-24 text-xs leading-6 lg:text-sm text-muted overflow-clip whitespace-nowrap">
          {service.stack === 'docker-compose' ? 'docker' : service.stack}
        </div>
      </div>

      <div className="ml-4 text-muted">{subItems}</div>
    </div>
  );
}
