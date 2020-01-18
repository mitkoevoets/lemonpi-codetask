export const routes = {
  // home: '/',
  scheduler: '/scheduler',
  dashboard: '/',
  login: '/login',
  logout: '/logout',
  lightingPrediction: '/lighting-prediction',
  spectralAnalysis: '/spectral-analysis',
  dataLabeling: '/data-labeling',
  dataBrowser: '/data-browser',
  cameraControl: '/camera-control',
  exportControl: '/export-control',
  growData: '/grow-data',
  imageData: '/image-data',
};

type RouteKey = keyof typeof routes;

export type routesConfig = { [key in RouteKey]: string };

export default routes;
