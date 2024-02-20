import axios from 'axios';
import { postReIssueAccessToken } from '~/api/login';
import { CONSTANTS } from '~/constants';
import { ErrorCode } from '~/types/apiResponse';
import { getCookie, setCookie } from '~/utils/cookie';
import { ENVIRONMENTS } from '~/utils/getEnv';
import { paths } from './paths';

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
      config.headers['Authorization'] = accessToken;
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
        if (errorCode === 'INVALID_ACCESS_TOKEN') {
          const refreshToken = getCookie(CONSTANTS.REFRESH_TOKEN_KEY);
          if (!refreshToken) {
            alert('로그인이 필요합니다.');
            window.location.href = paths.logIn();
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
            return NinininiAxios(originalReqConfig);
          } catch (e) {
            throw Error(e);
          }
        }
    }

    return Promise.reject(error);
  },
);
