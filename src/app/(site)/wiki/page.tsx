import { titleAppend } from '@/app/(site)/_lib/siteUtils';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: titleAppend('Wiki'),
};

const Page = () => {
  return (
    <main>
      <p>WIKI</p>
    </main>
  );
};

export default Page;
