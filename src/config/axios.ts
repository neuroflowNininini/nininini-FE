import axios from 'axios';
import { postReIssueAccessToken } from '~/api/login';
import { CONSTANTS } from '~/constants';
import { ErrorCode } from '~/types/apiResponse';
import { deleteCookie, getCookie, setCookie } from '~/utils/cookie';
import { ENVIRONMENTS } from '~/utils/getEnv';

export const NinininiAxios = axios.create({
  baseURL: ENVIRONMENTS.baseUrl(),
  headers: {
    'Content-Type': 'application/json',
  },
});

NinininiAxios.interceptors.request.use(
  (config) => {
    const accessToken = getCookie(CONSTANTS.ACCESS_TOKEN_KEY);
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

NinininiAxios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const { errorCode }: { errorCode: ErrorCode } = error.response.data.exception;

    switch (error.response.status) {
      case 401:
        console.log(error.response.data);
        if (errorCode === 'INVALID_ACCESS_TOKEN') {
          // deleteCookie(CONSTANTS.ACCESS_TOKEN_KEY);
          const refreshToken = getCookie(CONSTANTS.REFRESH_TOKEN_KEY);
          if (!refreshToken) {
            /*TODO - 재로그인 시키기 */
            return;
          }
          const originalReqConfig = error.config;
          originalReqConfig._retry = true;
          try {
            const { accessToken: newAccessToken } = await postReIssueAccessToken();
            if (newAccessToken) {
              setCookie(CONSTANTS.ACCESS_TOKEN_KEY, newAccessToken);
              originalReqConfig.headers.Authorization = `Bearer ${newAccessToken}`;
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
