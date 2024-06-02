import React from 'react';
import { titleAppend } from '@/app/(site)/_lib/siteUtils';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: titleAppend('Setup Game'),
};

const Page = () => {
  return (
    <main>
      <h1>Setup</h1>
    </main>
  );
};

export default Page;
