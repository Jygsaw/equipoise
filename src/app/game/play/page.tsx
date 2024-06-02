import React from 'react';
import { titleAppend } from '@/app/(site)/_lib/siteUtils';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: titleAppend('Play Game'),
};

const Page = () => {
  return (
    <main>
      <h1>Play</h1>
    </main>
  );
};

export default Page;
