import { createAction } from 'redux-actions';

export namespace ValidationActions {
  export enum Type {
    SET_VALIDATION_ERROR = 'SET_VALIDATION_ERROR',
    ADD_FORM_VALIDATION_ERROR = 'ADD_FORM_VALIDATION_ERROR',
    ADD_VALIDATION_NOTIFICATION = 'ADD_VALIDATION_NOTIFICATION',
    REMOVE_VALIDATION_NOTIFICATION = 'REMOVE_VALIDATION_NOTIFICATION',
    SET_LOADING = 'SET_LOADING',
    FINISH_LOADING = 'FINISH_LOADING',
  }
}

export const setValidationErrors = createAction(ValidationActions.Type.SET_VALIDATION_ERROR);
export const addFormValidationError = createAction(ValidationActions.Type.ADD_FORM_VALIDATION_ERROR);
export const addValidationNotification = createAction(ValidationActions.Type.ADD_VALIDATION_NOTIFICATION);
export const removeValidationNotification = createAction(ValidationActions.Type.REMOVE_VALIDATION_NOTIFICATION);
export const setLoading = createAction(ValidationActions.Type.SET_LOADING);
export const finishLoading = createAction(ValidationActions.Type.FINISH_LOADING);

export type ValidationActions = Omit<typeof ValidationActions, 'Type'>;
