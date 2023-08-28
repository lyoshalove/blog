import { FC, Suspense, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { AppRouter } from './providers/router';

export const App: FC = () => {
  useEffect(() => {
    if (Math.random() < 0.5) {
      throw new Error('SNUS');
    }
  }, []);

  return (
    <div className={classNames('app')}>
      <Suspense fallback="Loading...">
        <Navbar />
        <div className="content">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
