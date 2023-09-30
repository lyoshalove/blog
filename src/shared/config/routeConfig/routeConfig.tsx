import { AboutPage } from 'pages/About';
import { MainPage } from 'pages/Main';
import { NotFoundPage } from 'pages/NotFound';
import { ProfilePage } from 'pages/profile-page';
import { RouteProps } from 'react-router-dom';

export type AppRouteProps = RouteProps & {
  authOnly?: boolean;
}

export enum AppRoute {
  MAIN = 'Main',
  ABOUT = 'About',
  PROFILE = 'Profile',
  NOT_FOUND = 'NotFound'
}

export const RoutePath: Record<AppRoute, string> = {
  [AppRoute.MAIN]: '/',
  [AppRoute.ABOUT]: '/about',
  [AppRoute.PROFILE]: '/profile',

  // last
  [AppRoute.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoute, AppRouteProps> = {
  [AppRoute.MAIN]: {
    path: RoutePath.Main,
    element: <MainPage />,
  },
  [AppRoute.ABOUT]: {
    path: RoutePath.About,
    element: <AboutPage />,
  },
  [AppRoute.PROFILE]: {
    path: RoutePath.Profile,
    element: <ProfilePage />,
    authOnly: true,
  },

  // last
  [AppRoute.NOT_FOUND]: {
    path: RoutePath.NotFound,
    element: <NotFoundPage />,
  },
};
