import { createFileRoute } from '@tanstack/react-router';
import * as R from 'remeda';
import { walletQueryOptions } from '#/components/wallet.query';

export const Route = createFileRoute('/wallet')({
  component: RouteComponent,
  loader: async ({ context }) => {
    const wallet = await context.queryClient.query(walletQueryOptions);

    return { wallet };
  },
});

function RouteComponent() {
  const { wallet } = Route.useLoaderData();

  const groups = R.groupBy(wallet, (x) => x.target);

  return (
    <div>
      {Object.entries(groups).map(([target, items]) => (
        <div key={target}>
          <div className="font-bold">{target}</div>
          {items.map((x) => (
            <div key={x.ts}>
              <span className="inline-block w-20">{x.balance - x.amount}</span>
              <span className="inline-block w-20">{x.amount}</span>
              <span className="inline-block w-20">{x.balance}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
