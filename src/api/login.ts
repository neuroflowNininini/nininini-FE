import { CONSTANTS } from '~/constants';
import { Login } from '~/types/apis/login';
import { getCookie } from '~/utils/cookie';
import { ENVIRONMENTS } from '~/utils/getEnv';

/*FIXME - status code에 따른 분기처리, 에러 핸들링 */
export const postLogin = async <T>(body: Login): Promise<T> => {
  try {
    const res = await fetch(process.env.REACT_APP_API_BASE_URL + `/api/members/login`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return res.json();
  } catch (e) {
    throw Error(e);
  }
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
