import { handleActions } from 'redux-actions';
import { AdvertisersModel } from 'app/models/AdvertisersModel';
import { AdvertisersActions } from 'app/actions/advertisers';

const initialState: AdvertisersModel = {
  advertisers: [],
};

export const advertisersReducer = handleActions<AdvertisersModel>(
  {
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
