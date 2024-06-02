import { CopyrightFooter } from '@/app/(site)/_components/CopyrightFooter';

import type { PropsWithChildren } from 'react';

export const CopyrightLayout = ({ children }: Readonly<PropsWithChildren>) => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow basis-0">
        {children}
      </div>
      <CopyrightFooter />
    </div>
  );
};
