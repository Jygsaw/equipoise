import { titleAppend } from '@/app/(site)/_lib/siteUtils';
import { Game } from '@/app/game/_components/Game';

import type { Metadata } from 'next';
import type { GameRoute } from '@/app/game/_types/game';

export const metadata: Metadata = {
  title: titleAppend('Play'),
};

const Page = ({ params: { view = 'splash' } }: GameRoute) => {
  return (
    <main className="min-h-screen grid place-items-center">
      <Game view={view} />
    </main>
  );
};

export default Page;
