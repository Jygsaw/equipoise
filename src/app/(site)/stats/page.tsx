import { titleAppend } from '@/app/(site)/_lib/siteUtils';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: titleAppend('Stats'),
};

const Page = () => {
  return (
    <main>
      <p>STATS</p>
    </main>
  );
};

export default Page;
