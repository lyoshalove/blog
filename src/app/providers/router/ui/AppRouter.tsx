import { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig';
import { PageLoader } from 'widgets/PageLoader';

export const AppRouter: FC = () => (
  <Suspense fallback={<PageLoader />}>
    <div className="page">
      <Routes>
        {Object.values(routeConfig).map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </div>
  </Suspense>
);
