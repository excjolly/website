import { lazy } from 'react';
import { DEFAULT_PATHS } from 'config.js';

const NotFound = lazy(() => import('views/pages/NotFound'));
const App = lazy(() => import('App.js'));
const Home = lazy(() => import('views/pages/Home'));

/*
{ path: "/path", exact: true, component: ViewHome },
// or
{ path: "/path", component: ViewHome},
// or
{ path: "/path", exact: true, redirect: true, to: "/redirectPath" },
*/
const defaultRoutes = [
  { path: DEFAULT_PATHS.NOTFOUND, exact: true, component: NotFound },
  { path: DEFAULT_PATHS.APP, component: App },
  { path: '/', exact: true, component: Home },
];

export default defaultRoutes;
