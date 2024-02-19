import axios, { AxiosResponse } from 'axios';
import { NinininiAxios } from '~/config/axios';
import { CONSTANTS } from '~/constants';
import { NinininiResponse, ErrorCode } from '~/types/apiResponse';
import { deleteCookie, getCookie, setCookie } from '~/utils/cookie';
import { postReIssueAccessToken } from './login';

NinininiAxios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const { errorCode }: { errorCode: ErrorCode } = error.response.data;

    switch (error.response.status) {
      case 403:
        if (errorCode === 'INVALID_ACCESS_TOKEN') {
          deleteCookie(CONSTANTS.ACCESS_TOKEN_KEY);
          const refreshToken = getCookie(CONSTANTS.REFRESH_TOKEN_KEY);
          if (!refreshToken) {
            /*TODO - 재로그인 시키기 */
            return;
          }
          const originalReqConfig = error.config;
          originalReqConfig._retry = true;
          try {
            const res = await postReIssueAccessToken();
            if (res?.newAccessToken) {
              setCookie(CONSTANTS.ACCESS_TOKEN_KEY, res.newAccessToken);
              originalReqConfig.headers.Authorization = `Bearer ${res.newAccessToken}`;
            }
            return axios(originalReqConfig);
          } catch (e) {
            throw Error(e);
          }
        }
    }

    return Promise.reject(error);
  },
);
