import { AboutPage } from 'pages/About';
import { MainPage } from 'pages/Main';
import { NotFoundPage } from 'pages/NotFound';
import { RouteProps } from 'react-router-dom';

export enum AppRoute {
  MAIN = 'Main',
  ABOUT = 'About',
  NOT_FOUND = 'NotFound'
}

export const RoutePath: Record<AppRoute, string> = {
  [AppRoute.MAIN]: '/',
  [AppRoute.ABOUT]: '/about',
  [AppRoute.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoute, RouteProps> = {
  [AppRoute.MAIN]: {
    path: RoutePath.Main,
    element: <MainPage />,
  },
  [AppRoute.ABOUT]: {
    path: RoutePath.About,
    element: <AboutPage />,
  },
  [AppRoute.NOT_FOUND]: {
    path: RoutePath.NotFound,
    element: <NotFoundPage />,
  },
};
