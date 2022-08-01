import type { ReactNode } from 'react';

export default function ViewContainer({
  ariaDescribedBy,
  children,
}: {
  ariaDescribedBy?: string;
  children: ReactNode;
}): JSX.Element {
  return (
    <div
      aria-describedby={ariaDescribedBy}
      className="xl:container mx-auto px-2 mb-16"
    >
      {children}
    </div>
  );
}
