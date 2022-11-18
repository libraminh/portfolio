import { ReactNode } from 'react';

export const Heading3 = ({ children }: { children: ReactNode }) => {
  return (
    <h3 className="font-semibold italic text-2xl md:text-4xl tracking-tight mb-8 text-black dark:text-white">
      {children}
    </h3>
  );
};
