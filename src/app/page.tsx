import Link from 'next/link';
import { titleAppend } from '@/app/site/_lib/siteUtils';
import { CopyrightLayout } from '@/app/site/_components/CopyrightLayout';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: titleAppend(),
};

const Page = () => {
  return (
    <CopyrightLayout>
      <main>
        <h1>Equipoise</h1>

        <Link href="/mainmenu">Click here to enter</Link>

        <h2>Overview</h2>
        <p>
        Equipoise is a simple game where spawned entities and the environment
        can react to each other until equilibrium is achieved.
        </p>

        <h2>Tech Stack</h2>
        <p>
        The project uses NextJS, TailwindCSS, GraphQL, PostgreSQL, and Render.com
        hosting.
        </p>
      </main>
    </CopyrightLayout>
  );
};

export default Page;
