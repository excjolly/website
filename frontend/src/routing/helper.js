import { DEFAULT_PATHS } from 'config.js';

const userHasRole = (routeRoles, userRole) => {
  if (!userRole) return false;
  return routeRoles.includes(userRole);
};

const clearRoute = (route) => {
  const item = {};
  ['path', 'to', 'exact', 'component', 'redirect'].forEach((key) => {
    if (route[key]) item[key] = route[key];
  });
  return item;
};

const clearMenuItem = (menuItem) => {
  const item = {};
  ['path', 'label', 'icon', 'isExternal', 'subs', 'mega', 'megaParent'].forEach((key) => {
    if (menuItem[key]) item[key] = menuItem[key];
  });
  return item;
};

const clearFlattedMenuItem = (menuItem) => {
  const item = {};
  ['path', 'label', 'isExternal'].forEach((key) => {
    if (menuItem[key]) item[key] = menuItem[key];
  });
  return item;
};

export const convertToRoutes = ({
  data = [],
  isLogin = false,
  userRole = null,
  unauthorizedPath = DEFAULT_PATHS.UNAUTHORIZED,
  loginPath = DEFAULT_PATHS.LOGIN,
  invalidAccessPath = DEFAULT_PATHS.INVALID_ACCESS,
  noLayout = false,
}) => {
  let items = [];
  if (Array.isArray(data)) {
    items = data;
  } else {
    items = [...data.sidebarItems, ...data.mainMenuItems];
  }

  const routes = [];
  return () => {
    const itemMapper = (item) => {
      const tempItem = { ...item };
      if (item.hideInRoute) return itemMapper({});

      if (item.subs) tempItem.exact = true;

      if (Object.keys(tempItem).length > 0 && !item.isExternal) {
        if (item.noLayout && noLayout) {
          routes.push(clearRoute({ ...tempItem, exact: true }));
        }
        if (!noLayout && item.noLayout !== true) {
          routes.push(clearRoute(tempItem));
        }
      }

      if (item.subs) {
        return item.subs.map((sub) => {
          const controlledSub = { ...sub, path: tempItem.path + sub.path };
          return itemMapper(controlledSub);
        });
      }
      return tempItem;
    };
    items.map(itemMapper);
    return routes;
  };
};

export const convertToMenuItems = ({ data = [], isLogin = false, userRole = null }) => {
  let items = [];
  if (Array.isArray(data)) {
    items = data;
  } else {
    items = [...data.sidebarItems, ...data.mainMenuItems];
  }

  const itemMapper = (item) => {
    const tempItem = { ...item };

    if (tempItem.subs) {
      tempItem.subs = item.subs
        .map((sub) => {
          const controlledSub = { ...sub, path: tempItem.path + sub.path };
          if (tempItem.mega || tempItem.megaParent) controlledSub.megaParent = true;
          return itemMapper(controlledSub);
        })
        .filter((x) => Object.keys(x).length > 0);

      if (tempItem.subs.length === 0) delete tempItem.subs;
    }
    if (tempItem.label && !item.hideInMenu) return clearMenuItem(tempItem);
    return {};
  };
  return items.map(itemMapper).filter((x) => Object.keys(x).length > 0);
};

export const convertToSearchItems = ({ data = [], isLogin = false, userRole = null }) => {
  let items = [];
  if (Array.isArray(data)) {
    items = data;
  } else {
    items = [...data.sidebarItems, ...data.mainMenuItems];
  }

  const menuItems = [];

  return () => {
    const itemMapper = (item) => {
      let tempItem = { ...item };
      if (tempItem.hideInMenu || tempItem.isExternal || tempItem.hideInRoute) {
        return {};
      }

      if (Object.keys(tempItem).length > 0 && tempItem.label) menuItems.push(clearFlattedMenuItem(tempItem));

      if (item.subs) {
        return item.subs.map((sub) => {
          const controlledSub = { ...sub, path: tempItem.path + sub.path };
          return itemMapper(controlledSub);
        });
      }
      return tempItem;
    };
    items.map(itemMapper);
    return menuItems;
  };
};

export const getRoutes = ({ data, isLogin, userRole }) =>
  convertToRoutes({
    data,
    isLogin,
    userRole,
    unauthorizedPath: DEFAULT_PATHS.UNAUTHORIZED,
    loginPath: DEFAULT_PATHS.LOGIN,
    invalidAccessPath: DEFAULT_PATHS.INVALID_ACCESS,
    noLayout: false,
  })();

export const getLayoutlessRoutes = ({ data }) => convertToRoutes({ data, noLayout: true })();
export const getMenuItems = ({ data, isLogin, userRole }) => convertToMenuItems({ data, isLogin, userRole });

export const getSearchItems = ({ data, isLogin, userRole }) => convertToSearchItems({ data, isLogin, userRole });
