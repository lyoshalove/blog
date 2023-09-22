import { getUserAuthData } from 'entities/User';
import {
  FC, Suspense, memo, useMemo,
} from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig';
import { PageLoader } from 'widgets/PageLoader';

export const AppRouter: FC = memo(() => {
  const isAuth = useSelector(getUserAuthData);

  const routes = useMemo(() => {
    return Object.values(routeConfig).filter((route) => !(route.authOnly && !isAuth));
  }, [isAuth]);

  return (
    <Suspense fallback={<PageLoader />}>
      <div className="page">
        <Routes>
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </div>
    </Suspense>
  );
});
