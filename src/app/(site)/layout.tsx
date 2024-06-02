import { CopyrightLayout } from '@/app/(site)/_components/CopyrightLayout';

import type { PropsWithChildren } from 'react';

const Layout = ({ children }: Readonly<PropsWithChildren>) => {
  return (
    <CopyrightLayout>
      <div className="h-full flex flex-col">
        <header>HEADER</header>
        <div className="w-screen flex-grow basis-0 flex">
          <section>SIDEBAR</section>
          <section className="flex-grow basis-0">
            {children}
          </section>
        </div>
      </div>
    </CopyrightLayout>
  );
};

export default Layout;
