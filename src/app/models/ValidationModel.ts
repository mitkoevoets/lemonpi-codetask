import { trans } from 'app/utils/trans';
import { Dictionary } from 'app/utils/dictionary';
import { setValidationErrors } from 'app/actions/validation';

export interface ValidationModel {
  loading: boolean;
  formErrors: FormValidationError[];
  validationNotifications: ValidationNotification[];
}

export interface FormValidationError {
  property: string;
  value: any;
  transKey?: string;
}

export interface ValidationNotification {
  key: string;
}

export function getError(key: string, validationState: ValidationModel): FormValidationError | undefined {
  if (!validationState) {
    return undefined;
  }

  return validationState.formErrors.filter((formError: FormValidationError) => formError.property === key)[0];
}

export function getErrorString(
  key: string,
  validationState: ValidationModel,
  defaultString: string = '',
): string | undefined {
  const error: FormValidationError | undefined = getError(key, validationState);

  if (!validationState || !error) {
    return undefined;
  }

  return trans('validation.' + (error.transKey || defaultString));
}

export interface ApiMessage {
  property: string;
  value: any;
}

export function validationPayload(apiError: any): ValidationModel {
  let validationModel: ValidationModel = { formErrors: [], validationNotifications: [], loading: false };

  if (!apiError.message || !(apiError.message instanceof Array)) {
    return validationModel;
  } else {
    const messages: ApiMessage[] = apiError.message;

    messages.forEach((message: ApiMessage) => {
      const validationError: FormValidationError = {
        property: message.property,
        value: message.value,
      };

      validationModel.formErrors.push(validationError);
    });

    return validationModel;
  }
}

export function addFormErrors<T>(
  state: ValidationModel,
  formErrors: Dictionary<FormValidationError>,
  resetErrors = true,
) {
  return (dispatch: any) => {
    let validation = state;

    if (resetErrors) {
      validation.formErrors = [];
    }

    for (let property in formErrors) {
      const error: FormValidationError = formErrors[property];

      validation.formErrors.push(error);
    }

    dispatch(setValidationErrors(validation));
  };
}
export function getValidationNotification(
  key: string,
  validationState: ValidationModel,
): ValidationNotification | undefined {
  if (!validationState) {
    return undefined;
  }

  return validationState.validationNotifications.filter(
    (validationNotification: ValidationNotification) => validationNotification.key === key,
  )[0];
}
