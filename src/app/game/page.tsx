import Link from 'next/link';
import { titleAppend } from '@/app/(site)/_lib/siteUtils';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: titleAppend('Splash'),
};

const Page = () => {
  return (
    <main>
      <p>SPLASH</p>

      <nav>
        <ul>
          <li><Link href="/game/setup">Start</Link></li>
        </ul>
      </nav>
    </main>
  );
};

export default Page;
