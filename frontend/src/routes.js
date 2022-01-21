/* eslint-disable */
import { lazy } from 'react';
import { DEFAULT_PATHS } from 'config.js';

const dashboards = {
  default: lazy(() => import('views/dashboards/DashboardsDefault')),
};
const apps = {
  index: lazy(() => import('views/apps/Apps')),
  calendar: lazy(() => import('views/apps/calendar/Calendar')),
};
const pages = {
  index: lazy(() => import('views/pages/Pages')),
  home: lazy(() => import('views/pages/Home')),
  programHome: lazy(() => import('views/pages/ProgramHome')),
  program: lazy(() => import('views/pages/Program')),
  blogHome: lazy(() => import('views/pages/BlogHome')),
  blog: lazy(() => import('views/pages/BlogHome')),
  scholarship: lazy(() => import('views/pages/Scholarship')),
  videos: lazy(() => import('views/pages/Videos')),
  contact: lazy(() => import('views/pages/Contact')),  
};
const blocks = {
  index: lazy(() => import('views/blocks/Blocks')),
  cta: lazy(() => import('views/blocks/cta/Cta')),
  details: lazy(() => import('views/blocks/details/Details')),
};

const appRoot = DEFAULT_PATHS.APP.endsWith('/') ? DEFAULT_PATHS.APP.slice(1, DEFAULT_PATHS.APP.length) : DEFAULT_PATHS.APP;

const routesAndMenuItems = {
  mainMenuItems: [
    {
      path: DEFAULT_PATHS.APP,
      exact: true,
      redirect: true,
      to: `${appRoot}/home`,
    },
    {
      path: `${appRoot}/home`,
      component: pages.home,
      label: 'Home',
      icon: 'home',
    },
    {
      path: `${appRoot}/programs`,
      label: 'Programs',
      icon: 'screen',
      subs: [
        { path: '/all', label: 'All Programs', component: pages.programHome },
        { path: '/program_name', label: 'Program Name', component: pages.program },
        { path: '/program_name', label: 'Program Name', component: pages.program },
        { path: '/program_name', label: 'Program Name', component: pages.program },
        { path: '/program_name', label: 'Program Name', component: pages.program },
      ],
    },
    {
      path: `${appRoot}/scholarship`,
      label: 'Scholarship',
      icon: 'quiz',
      component: pages.scholarship,
    },
    {
      path: `${appRoot}/videos`,
      label: 'Videos',
      icon: 'play',
      component: pages.videos,
    },
    {
      path: `${appRoot}/blogs`,
      label: 'Blogs',
      icon: 'file-text',
      component: pages.blogHome,
    },
    {
      path: `${appRoot}/contact`,
      label: 'Contact',
      icon: 'phone',
      component: pages.contact,
    },
  ],
  sidebarItems: [
  ],
};
export default routesAndMenuItems;
