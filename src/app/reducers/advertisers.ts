import { handleActions } from 'redux-actions';
import { AdvertisersModel } from 'app/models/AdvertisersModel';
import { AdvertisersActions } from 'app/actions/advertisers';

const initialState: AdvertisersModel = {
  advertisers: [],
  loading: false,
};

export const advertisersReducer = handleActions<AdvertisersModel>(
  {
    [AdvertisersActions.Type.SET_LOADING]: (state, action) => {
      return {
        ...state,
        loading: true,
      };
    },
    [AdvertisersActions.Type.UPDATE]: (state, action) => {
      return {
        ...state,
        ...action.payload,
        loading: false,
      };
    },
  },
  initialState,
);
