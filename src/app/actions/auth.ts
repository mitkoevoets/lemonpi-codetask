// import { createAction } from 'redux-actions';
// import { apiUrl, Http } from 'app/utils/http';
// import { PersonalFormValues } from 'app/containers/Account/forms/PersonalForm';
// import { setValidationErrors } from 'app/actions/validation';
// import { validationPayload } from 'app/models';
//
// interface LoginCredentials {
//   email: string;
//   password: string;
//   remember: boolean;
// }
//
// interface PasswordResetData {
//   email: string;
// }
//
// export namespace AuthActions {
//   export enum Type {
//     LOGIN_SUCCESS = 'LOGIN_SUCCESS',
//     LOGIN_FAIL = 'LOGIN_FAIL',
//     LOGOUT = 'LOGOUT',
//     USER_SUCCESS = 'USER_SUCCESS',
//     USER_FAIL = 'USER_FAIL',
//     USER_UPDATE_SUCCESS = 'USER_UPDATE_SUCCESS',
//     USER_UPDATE_FAIL = 'USER_UPDATE_FAIL',
//   }
//
//   export const loginSuccess = createAction(Type.LOGIN_SUCCESS);
//   export const loginFail = createAction(Type.LOGIN_FAIL);
//   export const logout = createAction(Type.LOGOUT);
//   export const userSuccess = createAction(Type.USER_SUCCESS);
//   export const userFail = createAction(Type.USER_FAIL);
//   export const userUpdateSuccess = createAction(Type.USER_UPDATE_SUCCESS);
//   export const userUpdateFail = createAction(Type.USER_UPDATE_FAIL);
//
//   export function login(data: LoginCredentials, callback: () => void) {
//     return async (dispatch: any) => {
//       try {
//         return await Http.post(apiUrl.authenticate, data).then((res) => {
//           localStorage.setItem('token', res.token);
//           dispatch(loginSuccess());
//         });
//       } catch (error) {
//         dispatch(setValidationErrors(validationPayload(error)));
//         dispatch(loginFail());
//       } finally {
//         callback();
//       }
//     };
//   }
//
//   export function requestPasswordReset(data: PasswordResetData, callback: () => void) {
//     return async (dispatch: any) => {
//       const response = await Http.post(apiUrl.resetPasswordRequest, data);
//
//       return response;
//     };
//   }
//
//   export function updateUser(data: PersonalFormValues) {
//     return (dispatch: any) => {
//       return Http.post(apiUrl.user, data)
//         .then((res) => {
//           dispatch(getUser());
//         })
//         .catch((err) => {
//           dispatch(userUpdateFail());
//         });
//     };
//   }
//
//   export function getUser() {
//     return (dispatch: any) => {
//       return Http.get(apiUrl.user)
//         .then((res) => {
//           localStorage.setItem('username', res.firstName);
//
//           dispatch(
//             userSuccess({
//               user: res,
//             }),
//           );
//         })
//         .catch((err) => {
//           dispatch(userFail());
//         });
//     };
//   }
// }
//
// export type AuthActions = Omit<typeof AuthActions, 'Type'>;
