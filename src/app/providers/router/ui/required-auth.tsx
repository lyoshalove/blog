import { getUserAuthData } from 'entities/User';
import { PropsWithChildren } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig';

export const RequiredAuth = ({ children }: PropsWithChildren) => {
  const user = useSelector(getUserAuthData);
  const location = useLocation();

  if (!user) {
    return <Navigate to={RoutePath.Main} state={{ from: location }} replace />;
  }

  return children;
};
