import './globals.css';

import type { PropsWithChildren } from 'react';

const RootLayout = ({ children }: Readonly<PropsWithChildren>) => {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
