import { MatSnackBarConfig } from '@angular/material/snack-bar';

export const fullNameToRouteParam = (full_name: string) => {
  return full_name.replace('/', '---');
};

export const routeParamToFullName = (routeParam: string) => {
  return routeParam.replace('---', '/');
};

export const errorConfig: MatSnackBarConfig = {
  duration: 5000,
  horizontalPosition: 'right',
  verticalPosition: 'top',
  panelClass: 'g-error-panel',
};
