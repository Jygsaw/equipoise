import React from 'react';
import { titleAppend } from '@/app/(site)/_lib/siteUtils';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: titleAppend('End Game'),
};

const Page = () => {
  return (
    <main>
      <h1>End</h1>
    </main>
  );
};

export default Page;
