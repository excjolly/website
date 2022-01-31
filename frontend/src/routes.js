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
  home: lazy(() => import('views/pages/Home')),
  programHome: lazy(() => import('views/pages/ProgramHome')),
  program: lazy(() => import('views/pages/Program')),
  blogHome: lazy(() => import('views/pages/BlogHome')),
  blog: lazy(() => import('views/pages/Blog')),
  scholarship: lazy(() => import('views/pages/Scholarship')),
  videos: lazy(() => import('views/pages/Videos')),
  contact: lazy(() => import('views/pages/Contact')),  
  aboutUs: lazy(() => import('views/pages/AboutUs')),
  test: lazy(() => import('views/pages/Test')),
  terms: lazy(() => import('views/pages/Terms')),
  disclaimer: lazy(() => import('views/pages/Disclaimer')),
  privacy: lazy(() => import('views/pages/Privacy')),
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
        { path: '/all', label: 'All Programs', icon: 'list', component: pages.programHome },
        { path: '/program_name', label: 'Program Name', icon: 'code', component: pages.program },
        { path: '/program_name', label: 'Program Name', icon: 'code', component: pages.program },
        { path: '/program_name', label: 'Program Name', icon: 'code', component: pages.program },
        { path: '/program_name', label: 'Program Name', icon: 'code', component: pages.program },
      ],
    },
    {
      path: `${appRoot}/about-us`,
      label: 'About Us',
      icon: 'question-hexagon',
      component: pages.aboutUs,
    },
    {
      path: `${appRoot}/scholarship`,
      label: 'Scholarship',
      icon: 'diploma',
      component: pages.scholarship,
    },
    {
      path: `${appRoot}/knowledge-centre`,
      label: 'Knowledge Centre',
      icon: 'graduation',
      subs: [
        { path: '/sample-tests', label: 'Sample Tests', icon: 'quiz', component: pages.test },
        {
          path: `/blogs`,
          label: 'Blogs',
          icon: 'file-text',
          component: pages.blogHome,
          subs: [
            { path: '/blog-name', component: pages.blog }
          ],
        },
        { path: `/videos`, label: 'Videos', icon: 'play', component: pages.videos }
      ]
    },
    {
      path: `${appRoot}/contact`,
      label: 'Contact',
      icon: 'phone',
      component: pages.contact,
    },
    {
      path: `${appRoot}/terms-and-conditions`,
      component: pages.terms,
    },
    {
      path: `${appRoot}/disclaimer`,
      component: pages.disclaimer,
    },
    {
      path: `${appRoot}/privacy-policy`,
      component: pages.privacy,
    }
  ],
  sidebarItems: [
  ],
};
export default routesAndMenuItems;
