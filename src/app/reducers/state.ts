import { AuthModel, ValidationModel } from 'app/models';

export interface RootState {
  auth: AuthModel;
  validation: ValidationModel;
  router?: any;
}
