import { createFileRoute } from '@tanstack/react-router';
import { ServiceList } from '#/components/ServiceList';
import {
  healthQueryOptions,
  servicesQueryOptions,
} from '#/components/services.query';

export const Route = createFileRoute('/')({
  component: Home,
  loader: async ({ context }) => {
    const services = await context.queryClient.query(servicesQueryOptions);

    const healthQueries = Promise.all(
      services.map((service) =>
        context.queryClient.query(healthQueryOptions(service.fullName)),
      ),
    );

    return { services, healthQueries };
  },
});

function Home() {
  const { services } = Route.useLoaderData();

  return (
    <div className="max-w-180">
      <ServiceList services={services} />
    </div>
  );
}
