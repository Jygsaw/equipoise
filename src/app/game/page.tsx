import { titleAppend } from '@/app/site/_lib/siteUtils';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: titleAppend('Splash'),
};

const Page = () => {
  return (
    <main>
      <p>SPLASH</p>
    </main>
  );
};

export default Page;
