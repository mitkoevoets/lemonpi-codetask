export interface UserModel {
  email: string;
  emailVerified: boolean;
  hasPaid: boolean;
  firstName: string;
  lastName: string | undefined;
  phoneNumber: string | undefined;
  isAdmin: boolean;
  reportUUID: string;
}

export interface AuthModel {
  errorCode?: number;
  user?: UserModel;
}
