import { createAction } from 'redux-actions';
import axios from 'axios';

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
                return {
                  name: advertiserData.name,
                  createdAt: advertiserData.createdAt,
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
