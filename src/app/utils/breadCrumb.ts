import { MenuItem } from 'primereact/api';

export const generateBreadCrumb = (path: string): MenuItem[] => {
  const breadCrumbs: MenuItem[] = [];
  let url: string = '';
  let rootFound: boolean = false;

  const splittedPath: string[] = path.split('/');

  splittedPath.forEach((urlDir: string) => {
    let label: string = urlDir;

    if (label === "" && !rootFound) {
      url = '/';
      label = 'dashboard';
      rootFound = true;
    } else {
      url += urlDir + '/';
    }
    /**
     * TODO: Clean up to remove trailing slash
     */

    const breadCrumb: MenuItem = {label, url};

    breadCrumbs.push(breadCrumb);
  });

  return breadCrumbs;
};
