import { AuthModel } from './../models/AuthModel';
import { handleActions } from 'redux-actions';
// import { AuthActions } from 'app/actions';

const initialState: AuthModel = {};

export const authReducer = handleActions<AuthModel>(
  {
    // [AuthActions.Type.LOGIN_FAIL]: (state, action) => {
    //   return {
    //     ...state,
    //     errorCode: 101,
    //   };
    // },
    // [AuthActions.Type.LOGIN_SUCCESS]: (state, action) => {
    //   return {};
    // },
    // [AuthActions.Type.LOGOUT]: (state, action) => {
    //   return {};
    // },
    // [AuthActions.Type.USER_SUCCESS]: (state, action) => {
    //   return { user: action.payload!.user };
    // },
    // [AuthActions.Type.USER_FAIL]: (state, action) => {
    //   return { ...state, errorCode: 100 };
    // },
    // [AuthActions.Type.USER_UPDATE_FAIL]: (state, action) => {
    //   return { ...state, errorCode: 102 };
    // },
  },
  initialState,
);
