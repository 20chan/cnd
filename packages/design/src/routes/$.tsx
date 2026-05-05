import { createFileRoute, useLocation } from '@tanstack/react-router'

export const Route = createFileRoute('/$')({
  component: RouteComponent,
})

function RouteComponent() {
  const { pathname } = useLocation();

  return (
    <div>
      {pathname}
      <div>
        page for {pathname}
      </div>
      <div>
        content
      </div>
    </div>
  );
}
