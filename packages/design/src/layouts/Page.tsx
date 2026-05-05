interface PageProps {
  children: React.ReactNode;
  className?: string;
}

export function Page(props: PageProps) {
  const { children, className } = props;

  return (
    <div className={`relative col-start-2 row-start-1 w-full min-h-full overflow-x-clip
      p-(--layout-padding)
      ${className}`}>
      {children}
    </div>
  )
}
