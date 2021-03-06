import { createAction } from 'redux-actions';
import axios from 'axios';
import { delay } from 'app/utils/delay';

export interface AdvertiserData {
  id: string;
  name: string;
  createdAt: string;
  campaignIds: any[];
}

export interface AdvertiserStatisticsData {
  advertiserId: string;
  impressions: number;
  clicks: number;
}

export interface Advertiser {
  name: string;
  createdAt: string;
  createdAtUNIX: number;
  campaigns: number;
  impressions: number;
  clicks: number;
}

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

      // Make 1,5 second delay to show loader for lemon pi code task
      await delay(1500);

      function getAdvertisers() {
        return axios.get('https://5b87a97d35589600143c1424.mockapi.io/api/v1/advertisers');
      }

      function getAdvertiserStatistics() {
        return axios.get('https://5b87a97d35589600143c1424.mockapi.io/api/v1/advertiser-statistics');
      }

      axios.all([getAdvertisers(), getAdvertiserStatistics()])
        .then(axios.spread(
          (advertisersResponse, advertiserStatisticsResponse) => {
            return dispatch(update({
              advertisers: advertisersResponse.data.map((advertiserData: AdvertiserData): Advertiser => {
                const advertiserStatisticsData: AdvertiserStatisticsData = advertiserStatisticsResponse.data.find(
                  (i: AdvertiserStatisticsData) => i.advertiserId === advertiserData.id);

                const createdAt: Date = new Date(advertiserData.createdAt);

                return {
                  name: advertiserData.name,
                  createdAt: createdAt.toLocaleString(),
                  createdAtUNIX: createdAt.getTime(),
                  campaigns: advertiserData.campaignIds.length,
                  clicks: advertiserStatisticsData ? advertiserStatisticsData.clicks : 0,
                  impressions: advertiserStatisticsData ? advertiserStatisticsData.impressions : 0,
                };
              }),
            }));
          }));
    };
  }
}

export type AdvertisersActions = Omit<typeof AdvertisersActions, 'Type'>;
