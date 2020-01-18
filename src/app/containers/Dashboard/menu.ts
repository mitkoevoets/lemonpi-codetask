import routes from 'app/lib/routes';

export function createMenu(container: any) {
  return [
    { label: 'Dashboard', icon: 'dashboard', to: routes.dashboard },
  ];
}
