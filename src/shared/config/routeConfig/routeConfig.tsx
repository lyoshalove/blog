import { AboutPage } from 'pages/About';
import { MainPage } from 'pages/Main';
import { NotFoundPage } from 'pages/NotFound';
import { ArticleDetailsPage } from 'pages/article-details-page';
import { ArticlesPage } from 'pages/articles-page';
import { ProfilePage } from 'pages/profile-page';
import { RouteProps } from 'react-router-dom';

export type AppRouteProps = RouteProps & {
  authOnly?: boolean;
}

export enum AppRoute {
  MAIN = 'Main',
  ABOUT = 'About',
  PROFILE = 'Profile',
  ARTICLES = 'Articles',
  ARTICLE_DETAILS = 'ArticleDetails',
  NOT_FOUND = 'NotFound'
}

export const RoutePath: Record<AppRoute, string> = {
  [AppRoute.MAIN]: '/',
  [AppRoute.ABOUT]: '/about',
  [AppRoute.PROFILE]: '/profile/',
  [AppRoute.ARTICLES]: '/articles',
  [AppRoute.ARTICLE_DETAILS]: '/articles/',

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
    path: `${RoutePath.Profile}:id`,
    element: <ProfilePage />,
    authOnly: true,
  },
  [AppRoute.ARTICLES]: {
    path: RoutePath.Articles,
    element: <ArticlesPage />,
    authOnly: true,
  },
  [AppRoute.ARTICLE_DETAILS]: {
    path: `${RoutePath.ArticleDetails}:id`,
    element: <ArticleDetailsPage />,
    authOnly: true,
  },

  // last
  [AppRoute.NOT_FOUND]: {
    path: RoutePath.NotFound,
    element: <NotFoundPage />,
  },
};
