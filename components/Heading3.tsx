import { ReactNode } from 'react';

export const Heading3 = ({ children }: { children: ReactNode }) => {
  return (
    <h3 className="font-semibold text-2xl md:text-4xl tracking-tight mb-10 text-black dark:text-white underline underline-offset-4 decoration-dashed">
      {children}
    </h3>
  );
};
