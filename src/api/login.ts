import { isAxiosError } from 'axios';
import { NinininiAxios } from '~/config/axios';
import { paths } from '~/config/paths';
import { CONSTANTS } from '~/constants';
import { NinininiErrorResponse } from '~/types/apiResponse';
import { Login, LoginRes } from '~/types/apis/login';
import { deleteCookie, getCookie } from '~/utils/cookie';
import { ENVIRONMENTS } from '~/utils/getEnv';

/*FIXME - status code에 따른 분기처리, 에러 핸들링 */
export const postLogin = async (body: Login) => {
  return await NinininiAxios.post(`/api/members/login`, body);
};

export const postLogout = async () => {
  try {
    const res = await fetch(ENVIRONMENTS.baseUrl() + `/api/members/logout`, {
      method: 'POST',
      body: JSON.stringify({
        refresh: getCookie(CONSTANTS.REFRESH_TOKEN_KEY),
      }),
    });

    return res.json();
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
    if (isAxiosError<NinininiErrorResponse>(e) && e.response) {
      const status = e.response.status;
      switch (status) {
        case 403:
          if (e.response.data.exception.errorCode === 'INVALID_AUTHENTICATION') {
            alert('로그인이 필요합니다.');
            window.location.href = paths.logIn();
            deleteCookie(CONSTANTS.ACCESS_TOKEN_KEY);
            deleteCookie(CONSTANTS.REFRESH_TOKEN_KEY);
          }
          break;
      }
    }
  }
};
