import Link from 'next/link';
import { titleAppend } from '@/app/(site)/_lib/siteUtils';
import { CopyrightLayout } from '@/app/(site)/_components/CopyrightLayout';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: titleAppend('Main Menu'),
};

const Page = () => {
  return (
    <CopyrightLayout>
      <main>
        <h1>Main Menu</h1>

        <nav>
          <ul>
            <li><Link href="/wiki">Read</Link></li>
            <li><Link href="/game">Play</Link></li>
            <li><Link href="/stats">Analyze</Link></li>
          </ul>
        </nav>

      </main>
    </CopyrightLayout>
  );
};

export default Page;
