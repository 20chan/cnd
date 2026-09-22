import { createFileRoute } from '@tanstack/react-router';
import { AuditLogList, UserList } from '#/components/legeno';
import {
  legenoAuditLogQueryOptions,
  legenoUsersQueryOptions,
} from '#/components/legeno.query';

export const Route = createFileRoute('/legeno')({
  component: RouteComponent,
  loader: async ({ context }) => {
    const users = await context.queryClient.query(legenoUsersQueryOptions);
    const auditLogs = await context.queryClient.query(
      legenoAuditLogQueryOptions,
    );
    return { users, auditLogs };
  },
});

function RouteComponent() {
  const { users, auditLogs } = Route.useLoaderData();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div>
        <UserList users={users} />
      </div>

      <div>
        <AuditLogList auditLogs={auditLogs} />
      </div>
    </div>
  );
}
