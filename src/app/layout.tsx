import './globals.css';

import type { PropsWithChildren } from 'react';

const RootLayout = ({ children }: Readonly<PropsWithChildren>) => {
  return (
    <html lang="en">
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
