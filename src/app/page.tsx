import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Equipoise',
};

const Page = () => {
  return (
    <main>
      <h1>Equipoise</h1>

      <p>
        Equipoise is a simple game where spawned entities and the environment
        can react to each other until equilibrium is achieved.  The project uses
        NextJS, TailwindCSS, GraphQL, PostgreSQL, and Render.com hosting.
      </p>
    </main>
  );
};

export default Page;
