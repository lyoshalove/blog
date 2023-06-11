import { FC, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig";

export const AppRouter: FC = () => {
  return (
    <Suspense fallback={<h1>Загрузка...</h1>}>
      <Routes>
        {Object.values(routeConfig).map(({ path, element }) => (
          <Route path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  );
};
