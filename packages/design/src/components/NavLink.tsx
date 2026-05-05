import { cn } from '#/utils';
import { Link, type LinkComponentProps } from '@tanstack/react-router';

export type NavLinkKind = 'none' | 'underline' | 'bold' | 'background';

export interface NavLinkProps extends LinkComponentProps {
  navigated?: boolean;
  kind?: NavLinkKind;
}

export type NavLinkTo = NavLinkProps['to'];

export function NavLink(props: NavLinkProps) {
  const { navigated, className, kind: kind0, ...rest } = props;
  const kind: NavLinkKind = kind0 ?? 'underline';

  const cls = cn(
    kind === 'underline' && cn({
      'hover:underline': !navigated,
      'underline': navigated,
    }),
    kind === 'bold' && cn({
      'font-bold': navigated,
    }),
    kind === 'background' && cn({
      'bg-fg/10': navigated,
    }),
    className,
  );

  return (
    <Link
      {...rest}
      className={cls}
    />
  )
}
