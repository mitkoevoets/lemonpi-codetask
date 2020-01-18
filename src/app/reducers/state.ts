import { AuthModel, ValidationModel, AdvertisersModel } from 'app/models';

export interface RootState {
  auth: AuthModel;
  validation: ValidationModel;
  advertisers: AdvertisersModel;
  router?: any;
}
