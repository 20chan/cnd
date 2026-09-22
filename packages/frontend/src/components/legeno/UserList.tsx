import { formateDateFullTime, formateDateShortTime } from '#/lib/dates';
import type { LegenoUser } from '#/lib/legeno';

export interface UserListProps {
  users: LegenoUser[];
}

export function UserList(props: UserListProps) {
  const { users } = props;

  return (
    <div className="flex flex-col overflow-y-auto h-full max-h-full">
      {users.map((user) => (
        <UserRow key={user.uid} user={user} />
      ))}
    </div>
  );
}

function UserRow({ user }: { user: LegenoUser }) {
  return (
    <div className="flex flex-row">
      <div className="basis-22 lg:basis-24 text-sm lg:text-base font-bold">
        {user.uid}
      </div>

      <div className="flex-1 text-sm lg:text-base">{user.name}</div>

      <div className="basis-38 lg:basis-50 text-sm lg:text-base">
        <span className="hidden lg:block">
          {formateDateFullTime(user.createdAt)}
        </span>
        <span className="block lg:hidden">
          {formateDateShortTime(user.createdAt)}
        </span>
      </div>

      <div className="basis-38 lg:basis-50 text-sm lg:text-base">
        <span className="hidden lg:block">
          {formateDateFullTime(user.updatedAt)}
        </span>
        <span className="block lg:hidden">
          {formateDateShortTime(user.updatedAt)}
        </span>
      </div>
    </div>
  );
}
