import { handleActions } from 'redux-actions';
import { ValidationActions } from 'app/actions/validation';
import { FormValidationError, ValidationModel, ValidationNotification } from 'app/models';

const initialState: ValidationInitialState = {
  loading: false,
  formErrors: [],
  validationNotifications: [],
};

export interface ValidationInitialState {
  loading: boolean;
  formErrors: FormValidationError[];
  validationNotifications: ValidationNotification[];
}

export const validationReducer = handleActions<ValidationModel | ValidationInitialState>(
  {
    [ValidationActions.Type.SET_VALIDATION_ERROR]: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    [ValidationActions.Type.SET_LOADING]: (state, action) => {
      return {
        ...state,
        loading: true,
      };
    },
    [ValidationActions.Type.FINISH_LOADING]: (state, action) => {
      return {
        ...state,
        loading: false,
      };
    },
    [ValidationActions.Type.ADD_VALIDATION_NOTIFICATION]: (state: ValidationModel, action: any) => {
      if (!action || !action.payload) {
        return state;
      }

      let newState: ValidationModel = state;
      newState.validationNotifications.push({ key: action.payload });

      return newState;
    },
    [ValidationActions.Type.REMOVE_VALIDATION_NOTIFICATION]: (state: ValidationModel, action: any) => {
      // Here we could implement specific validation notification removal if necessary.
      // Skipping it for now to save time. So this reducer action just clears the notifications.
      return {
        ...state,
        validationNotifications: [],
      };
    },
  },
  initialState,
);
