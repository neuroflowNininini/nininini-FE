import { isAxiosError } from 'axios';
import { NinininiAxios } from '~/config/axios';
import { paths } from '~/config/paths';
import { CONSTANTS } from '~/constants';
import { NinininiErrorResponse } from '~/types/apiResponse';
import { Login } from '~/types/apis/login';
import { deleteCookie, getCookie, setCookie } from '~/utils/cookie';

export const postLogin = async (body: Login) => {
  try {
    const { data } = await NinininiAxios.post(`/api/members/login`, body);
    setCookie(CONSTANTS.ACCESS_TOKEN_KEY, data.accessToken);
    setCookie(CONSTANTS.REFRESH_TOKEN_KEY, data.refreshToken);
    window.location.href = paths.home();
    return;
  } catch (e) {
    if (isAxiosError<NinininiErrorResponse> && e.response) {
      const status = e.response.status;
      switch (status) {
        case 401:
          if (
            e.response.data.exception.errorCode === 'WRONG_ID' ||
            e.response.data.exception.errorCode === 'WRONG_PW'
          ) {
            alert('아이디 혹은 비밀번호를 다시 확인해주세요.');
          }
          break;
      }
    }
  }
};

export const postLogout = async () => {
  try {
    const { data } = await NinininiAxios.post(
      `/api/members/logout`,
      {},
      {
        headers: {
          'refresh-token': getCookie(CONSTANTS.REFRESH_TOKEN_KEY),
        },
      },
    );
    deleteCookie(CONSTANTS.ACCESS_TOKEN_KEY);
    deleteCookie(CONSTANTS.REFRESH_TOKEN_KEY);
    window.location.href = paths.home();
    return data;
  } catch (e) {
    throw Error(e);
  }
};

export const postReIssueAccessToken = async () => {
  try {
    const { data } = await NinininiAxios.post(
      `/api/members/reissue`,
      {},
      {
        headers: {
          'refresh-token': getCookie(CONSTANTS.REFRESH_TOKEN_KEY),
        },
      },
    );
    return data;
  } catch (e) {
    if (isAxiosError<NinininiErrorResponse> && e.response) {
      if (e.response.status === 401) {
        deleteCookie(CONSTANTS.ACCESS_TOKEN_KEY);
        deleteCookie(CONSTANTS.REFRESH_TOKEN_KEY);
      }
    }
  }
};
