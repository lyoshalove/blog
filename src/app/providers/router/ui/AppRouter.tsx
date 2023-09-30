import {
  FC, Suspense, memo, useCallback,
} from 'react';

import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig';
import { AppRouteProps } from 'shared/config/routeConfig/routeConfig';

import { PageLoader } from 'widgets/PageLoader';
import { RequiredAuth } from './required-auth';

export const AppRouter: FC = memo(() => {
  const renderWithWrapper = useCallback((route: AppRouteProps) => {
    const element = route.authOnly ? (
      <RequiredAuth>
        {route.element}
      </RequiredAuth>
    ) : route.element;

    return (
      <Route
        key={route.path}
        path={route.path}
        element={element}
      />
    );
  }, []);
  return (
    <Suspense fallback={<PageLoader />}>
      <div className="page">
        <Routes>
          {Object.values(routeConfig).map(renderWithWrapper)}
        </Routes>
      </div>
    </Suspense>
  );
});
