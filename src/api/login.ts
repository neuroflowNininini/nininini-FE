import { Login } from '~/types/apis/login';

/*FIXME - status code에 따른 분기처리, 에러 핸들링 */
export const postLogin = async <T>(body: Login): Promise<T> => {
  try {
    const res = await fetch(process.env.REACT_APP_API_BASE_URL + `/api/members/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    return res.json();
  } catch (e) {
    throw Error(e);
  }
};
