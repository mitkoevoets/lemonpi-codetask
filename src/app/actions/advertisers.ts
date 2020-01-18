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

      axios.get('https://5b87a97d35589600143c1424.mockapi.io/api/v1/advertisers').then((response) => {
        console.log(response.data)
        // const advertisers = response.data.map(() {
        //   name: data.name
        // }
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
