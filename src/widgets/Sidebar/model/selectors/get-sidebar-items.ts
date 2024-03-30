import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { RoutePath } from 'shared/config/routeConfig';
import HomeIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import ArticlesIcon from 'shared/assets/icons/articles.svg';
import { SidebarItemsType } from '../types';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
  const sidebarItemsList: SidebarItemsType[] = [
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
  ];

  if (userData) {
    sidebarItemsList.push(
      {
        path: RoutePath.Profile + userData.id,
        text: 'Profile',
        Icon: ProfileIcon,
        authOnly: true,
      },
    );
    sidebarItemsList.push({
      path: RoutePath.Articles,
      text: 'Articles',
      Icon: ArticlesIcon,
      authOnly: true,
    });
  }

  return sidebarItemsList;
});
