import { FC, Suspense } from 'react';
import './styles/index.scss';
import { classNames } from 'shared/lib/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { AppRouter } from './providers/router';
import { useTheme } from './providers/ThemeProvider';

export const App: FC = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
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
