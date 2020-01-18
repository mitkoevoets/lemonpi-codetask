export const routes = {
  dashboard: '/',
  advertisers: '/advertisers',
};

type RouteKey = keyof typeof routes;

export type routesConfig = { [key in RouteKey]: string };

export default routes;
