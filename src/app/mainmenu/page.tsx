import { titleAppend } from '@/app/site/_lib/siteUtils';
import { CopyrightLayout } from '@/app/site/_components/CopyrightLayout';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: titleAppend('Main Menu'),
};

const Page = () => {
  return (
    <CopyrightLayout>
      <main>
        <h1>Main Menu</h1>
      </main>
    </CopyrightLayout>
  );
};

export default Page;
