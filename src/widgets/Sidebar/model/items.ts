import { SVGProps, FC } from 'react';
import { RoutePath } from 'shared/config/routeConfig';
import HomeIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import ArticlesIcon from 'shared/assets/icons/articles.svg';

export interface SidebarItemsType {
    path: string;
    text: string;
    Icon: FC<SVGProps<SVGSVGElement>>;
    authOnly?: boolean;
}

export const SidebarItemsList: SidebarItemsType[] = [
  {
    path: RoutePath.Main,
    text: 'Main',
    Icon: HomeIcon,
  },
  {
    path: RoutePath.About,
    text: 'About',
    Icon: AboutIcon,
  },
  {
    path: RoutePath.Profile,
    text: 'Profile',
    Icon: ProfileIcon,
    authOnly: true,
  },
  {
    path: RoutePath.Articles,
    text: 'Articles',
    Icon: ArticlesIcon,
    authOnly: true,
  },
];
