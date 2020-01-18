import { createAction } from 'redux-actions';
import axios from 'axios';

export namespace AdvertisersActions {
  export enum Type {
    UPDATE = 'UPDATE',
    SET_LOADING = 'SET_LOADING',
  }

  export const update = createAction(Type.UPDATE);
  export const setLoading = createAction(Type.SET_LOADING);

  export function init() {
    return async (dispatch: any) => {
      dispatch(setLoading());

      axios.get(process.env.BACKEND_API_BASEURL + '/grow-cycle/init-index').then((response) => {
        if (response) {
            dispatch(update(
              { },
            ));
        }
      });
    };
  }
}

export type AdvertisersActions = Omit<typeof AdvertisersActions, 'Type'>;
