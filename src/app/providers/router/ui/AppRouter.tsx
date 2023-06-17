import { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig';

export const AppRouter: FC = () => (
  <Suspense fallback={<h1>Загрузка...</h1>}>
    <div className="page">
      <Routes>
        {Object.values(routeConfig).map(({ path, element }) => (
          <Route path={path} element={element} />
        ))}
      </Routes>
    </div>
  </Suspense>
);
