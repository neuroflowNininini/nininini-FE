import { NinininiAxios } from '~/config/axios';
import { CONSTANTS } from '~/constants';
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

export const postReIssueAccessToken = async (): Promise<LoginRes> => {
  const { data, status } = await NinininiAxios.post(`/api/members/reissue`, {
    refresh: getCookie(CONSTANTS.REFRESH_TOKEN_KEY),
  });
  if (status === 403) {
    /*TODO - 재로그인 */
    deleteCookie(CONSTANTS.ACCESS_TOKEN_KEY);
    deleteCookie(CONSTANTS.REFRESH_TOKEN_KEY);
  }
  return data;
};